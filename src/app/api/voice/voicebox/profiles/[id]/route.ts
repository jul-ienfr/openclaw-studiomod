import { NextRequest, NextResponse } from "next/server";
import { withErrorHandler } from "@/lib/api/error-handler";

export const runtime = "nodejs";

const VOICEBOX_URL = "http://127.0.0.1:17493";

type Params = { params: Promise<{ id: string }> };

// GET /api/voice/voicebox/profiles/[id] — get profile
async function get_handler(_req: NextRequest, { params }: Params) {
  const { id } = await params;
  const res = await fetch(`${VOICEBOX_URL}/profiles/${id}`, {
    signal: AbortSignal.timeout(5000),
  });
  const data = await res.json() as unknown;
  return NextResponse.json(data, { status: res.status });
}

// PUT /api/voice/voicebox/profiles/[id] — update profile metadata
async function put_handler(req: NextRequest, { params }: Params) {
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
async function delete_handler(_req: NextRequest, { params }: Params) {
  const { id } = await params;
  const res = await fetch(`${VOICEBOX_URL}/profiles/${id}`, {
    method: "DELETE",
    signal: AbortSignal.timeout(5000),
  });
  const data = await res.json() as unknown;
  return NextResponse.json(data, { status: res.status });
}

export const GET = withErrorHandler(get_handler);
export const PUT = withErrorHandler(put_handler);
export const DELETE = withErrorHandler(delete_handler);