import { NextRequest, NextResponse } from "next/server";
import { withErrorHandler } from "@/lib/api/error-handler";
import {
  getSessionToken,
  revokeSessionToken,
  clearSessionCookie,
} from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function handler(req: NextRequest) {
  const token = getSessionToken(req);
  if (token) {
    await revokeSessionToken(token);
  }

  const response = NextResponse.json({ ok: true });
  clearSessionCookie(response);
  return response;
}

export const POST = withErrorHandler(handler);
