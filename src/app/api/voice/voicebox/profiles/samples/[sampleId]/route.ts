import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const VOICEBOX_URL = "http://127.0.0.1:17493";

type Params = { params: Promise<{ sampleId: string }> };

// DELETE /api/voice/voicebox/profiles/samples/[sampleId] — delete a sample
export async function DELETE(_req: NextRequest, { params }: Params) {
  const { sampleId } = await params;
  const res = await fetch(`${VOICEBOX_URL}/profiles/samples/${sampleId}`, {
    method: "DELETE",
    signal: AbortSignal.timeout(5000),
  });
  const data = await res.json() as unknown;
  return NextResponse.json(data, { status: res.status });
}

// PUT /api/voice/voicebox/profiles/samples/[sampleId] — update reference text
export async function PUT(req: NextRequest, { params }: Params) {
  const { sampleId } = await params;
  const body = await req.json() as unknown;
  const res = await fetch(`${VOICEBOX_URL}/profiles/samples/${sampleId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(5000),
  });
  const data = await res.json() as unknown;
  return NextResponse.json(data, { status: res.status });
}
