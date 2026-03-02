import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 * Sets the `watcher_token` HttpOnly cookie so that EventSource connections
 * to /api/watcher/events are authenticated without needing custom headers.
 */
export async function GET() {
  const token = process.env.WATCHER_API_TOKEN ?? "dev-token";
  const res = NextResponse.json({ ok: true });
  res.cookies.set("watcher_token", token, {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24, // 24h
  });
  return res;
}
