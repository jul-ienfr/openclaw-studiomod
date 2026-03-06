import { NextRequest, NextResponse } from "next/server";
import { withErrorHandler } from "@/lib/api/error-handler";

export const runtime = "nodejs";

const VOICEBOX_URL = "http://127.0.0.1:17493";

type Params = { params: Promise<{ id: string }> };

// GET /api/voice/voicebox/profiles/[id]/samples — list samples
async function get_handler(_req: NextRequest, { params }: Params) {
  const { id } = await params;
  const res = await fetch(`${VOICEBOX_URL}/profiles/${id}/samples`, {
    signal: AbortSignal.timeout(5000),
  });
  const data = await res.json() as unknown;
  return NextResponse.json(data, { status: res.status });
}

// POST /api/voice/voicebox/profiles/[id]/samples — upload audio sample
// Forwards multipart/form-data directly to Voicebox
async function post_handler(req: NextRequest, { params }: Params) {
  const { id } = await params;
  const formData = await req.formData();
  const res = await fetch(`${VOICEBOX_URL}/profiles/${id}/samples`, {
    method: "POST",
    body: formData,
    signal: AbortSignal.timeout(30000),
  });
  const data = await res.json() as unknown;
  return NextResponse.json(data, { status: res.status });
}

export const GET = withErrorHandler(get_handler);
export const POST = withErrorHandler(post_handler);