import { NextRequest, NextResponse } from "next/server";
import { withErrorHandler } from "@/lib/api/error-handler";
import { requireAuth, isAuthError } from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function handler(req: NextRequest) {
  const auth = await requireAuth(req);
  if (isAuthError(auth)) return auth;

  return NextResponse.json({
    user: auth.user,
  });
}

export const GET = withErrorHandler(handler);
