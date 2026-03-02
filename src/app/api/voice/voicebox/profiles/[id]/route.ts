import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const VOICEBOX_URL = "http://127.0.0.1:17493";

type Params = { params: Promise<{ id: string }> };

// GET /api/voice/voicebox/profiles/[id] — get profile
export async function GET(_req: NextRequest, { params }: Params) {
  const { id } = await params;
  const res = await fetch(`${VOICEBOX_URL}/profiles/${id}`, {
    signal: AbortSignal.timeout(5000),
  });
  const data = await res.json() as unknown;
  return NextResponse.json(data, { status: res.status });
}

// PUT /api/voice/voicebox/profiles/[id] — update profile metadata
export async function PUT(req: NextRequest, { params }: Params) {
  const { id } = await params;
  const body = await req.json() as unknown;
  const res = await fetch(`${VOICEBOX_URL}/profiles/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(5000),
  });
  const data = await res.json() as unknown;
  return NextResponse.json(data, { status: res.status });
}

// DELETE /api/voice/voicebox/profiles/[id] — delete profile
export async function DELETE(_req: NextRequest, { params }: Params) {
  const { id } = await params;
  const res = await fetch(`${VOICEBOX_URL}/profiles/${id}`, {
    method: "DELETE",
    signal: AbortSignal.timeout(5000),
  });
  const data = await res.json() as unknown;
  return NextResponse.json(data, { status: res.status });
}
