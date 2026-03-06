import { NextRequest, NextResponse } from "next/server";
import { withErrorHandler } from "@/lib/api/error-handler";

export const runtime = "nodejs";

const VOICEBOX_URL = "http://127.0.0.1:17493";

type Params = { params: Promise<{ sampleId: string }> };

// GET /api/voice/voicebox/profiles/samples/[sampleId] — download sample audio
async function get_handler(_req: NextRequest, { params }: Params) {
  const { sampleId } = await params;
  const res = await fetch(`${VOICEBOX_URL}/samples/${sampleId}`, {
    signal: AbortSignal.timeout(10000),
  });
  if (!res.ok) {
    return NextResponse.json({ error: "Not found" }, { status: res.status });
  }
  const buffer = await res.arrayBuffer();
  return new NextResponse(buffer, {
    status: 200,
    headers: {
      "Content-Type": res.headers.get("Content-Type") ?? "audio/wav",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

// DELETE /api/voice/voicebox/profiles/samples/[sampleId] — delete a sample
async function delete_handler(_req: NextRequest, { params }: Params) {
  const { sampleId } = await params;
  const res = await fetch(`${VOICEBOX_URL}/profiles/samples/${sampleId}`, {
    method: "DELETE",
    signal: AbortSignal.timeout(5000),
  });
  const data = (await res.json()) as unknown;
  return NextResponse.json(data, { status: res.status });
}

// PUT /api/voice/voicebox/profiles/samples/[sampleId] — update reference text
async function put_handler(req: NextRequest, { params }: Params) {
  const { sampleId } = await params;
  const body = (await req.json()) as unknown;
  const res = await fetch(`${VOICEBOX_URL}/profiles/samples/${sampleId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(5000),
  });
  const data = (await res.json()) as unknown;
  return NextResponse.json(data, { status: res.status });
}

export const GET = withErrorHandler(get_handler);
export const PUT = withErrorHandler(put_handler);
export const DELETE = withErrorHandler(delete_handler);