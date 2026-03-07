import { NextRequest, NextResponse } from "next/server";
import { withErrorHandler } from "@/lib/api/error-handler";
import { applyRateLimit, RATE_LIMITS } from "@/lib/rateLimit";
import {
  getSessionToken,
  revokeSessionToken,
  clearSessionCookie,
} from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function handler(req: NextRequest) {
  const limited = applyRateLimit(req, RATE_LIMITS.authLogout);
  if (limited) return limited;

  const token = getSessionToken(req);
  if (token) {
    await revokeSessionToken(token);
  }

  const response = NextResponse.json({ ok: true });
  clearSessionCookie(response);
  return response;
}

export const POST = withErrorHandler(handler);
