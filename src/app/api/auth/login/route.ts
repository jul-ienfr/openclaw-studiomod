import { NextRequest, NextResponse } from "next/server";
import { withErrorHandler, AppError } from "@/lib/api/error-handler";
import { rateLimit, getClientIp } from "@/lib/api/rate-limit";
import { LoginSchema } from "@/lib/api/schemas/auth";
import {
  verifyPassword,
  createAuthSession,
  setSessionCookie,
} from "@/lib/auth";
import { findUserByUsername } from "@/lib/db/repositories/auth-repo";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const loginRateLimit = rateLimit(5, 5); // 5 tokens, refill 5/min

async function handler(req: NextRequest) {
  const ip = getClientIp(req);

  if (!loginRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many login attempts. Please wait a moment." },
      { status: 429 },
    );
  }

  const body = await req.json().catch(() => null);
  const parsed = LoginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.issues },
      { status: 400 },
    );
  }

  const { username, password, rememberMe } = parsed.data;

  const user = findUserByUsername(username);
  if (!user) {
    // Constant-time response to prevent user enumeration
    await new Promise((r) => setTimeout(r, 200));
    throw new AppError("Invalid credentials", 401, "INVALID_CREDENTIALS");
  }

  const valid = await verifyPassword(password, user.password_hash);
  if (!valid) {
    throw new AppError("Invalid credentials", 401, "INVALID_CREDENTIALS");
  }

  const { token, expiresAt } = await createAuthSession(user.id, {
    userAgent: req.headers.get("user-agent") ?? undefined,
    ip,
    rememberMe,
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

export const POST = withErrorHandler(handler);
