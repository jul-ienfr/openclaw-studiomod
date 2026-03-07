import { NextRequest, NextResponse } from "next/server";
import { withErrorHandler, AppError } from "@/lib/api/error-handler";
import { SetupSchema } from "@/lib/api/schemas/auth";
import { applyRateLimit, RATE_LIMITS } from "@/lib/rateLimit";
import {
  createAdminUser,
  createAuthSession,
  setSessionCookie,
} from "@/lib/auth";
import { countUsers } from "@/lib/db/repositories/auth-repo";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function getHandler() {
  const count = countUsers();
  return NextResponse.json({ setup_required: count === 0 });
}

async function postHandler(req: NextRequest) {
  const limited = applyRateLimit(req, RATE_LIMITS.authSetup);
  if (limited) return limited;

  // Check that no users exist yet (first-run only)
  const count = countUsers();
  if (count > 0) {
    throw new AppError(
      "Studio is already set up. Use /api/auth/login to sign in.",
      409,
      "ALREADY_SETUP",
    );
  }

  const body = await req.json().catch(() => null);
  const parsed = SetupSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.issues },
      { status: 400 },
    );
  }

  const { username, password, displayName } = parsed.data;

  const user = await createAdminUser({ username, password, displayName });

  const { token, expiresAt } = await createAuthSession(user.id, {
    userAgent: req.headers.get("user-agent") ?? undefined,
    ip: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown",
  });

  const response = NextResponse.json({
    ok: true,
    user: {
      id: user.id,
      username: user.username,
      display_name: user.display_name,
      role: user.role,
    },
  });

  setSessionCookie(response, token, expiresAt);
  return response;
}

export const GET = withErrorHandler(getHandler);
export const POST = withErrorHandler(postHandler);
