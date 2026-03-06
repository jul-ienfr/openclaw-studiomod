import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { withErrorHandler } from "@/lib/api/error-handler";

export const dynamic = "force-dynamic";

const COOKIE_NAME = "oc-studio-token";

async function get_handler() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  // Return token for WebSocket connection (can't send cookies over WS)
  return NextResponse.json({ token });
}

export const GET = withErrorHandler(get_handler);