import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const VOICEBOX_URL = "http://127.0.0.1:17493";

// GET /api/voice/voicebox/profiles — list all profiles
export async function GET() {
  const res = await fetch(`${VOICEBOX_URL}/profiles`, {
    signal: AbortSignal.timeout(5000),
  });
  const data = await res.json() as unknown;
  return NextResponse.json(data, { status: res.status });
}

// POST /api/voice/voicebox/profiles — create new profile
export async function POST(req: NextRequest) {
  const body = await req.json() as unknown;
  const res = await fetch(`${VOICEBOX_URL}/profiles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(5000),
  });
  const data = await res.json() as unknown;
  return NextResponse.json(data, { status: res.status });
}
