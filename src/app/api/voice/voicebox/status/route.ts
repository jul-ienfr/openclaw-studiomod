import { NextResponse } from "next/server";

export const runtime = "nodejs";

const VOICEBOX_URL = "http://127.0.0.1:17493";

export async function GET() {
  try {
    const res = await fetch(`${VOICEBOX_URL}/health`, {
      signal: AbortSignal.timeout(3000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json() as Record<string, unknown>;
    return NextResponse.json({ running: true, ...data });
  } catch {
    return NextResponse.json({ running: false });
  }
}
