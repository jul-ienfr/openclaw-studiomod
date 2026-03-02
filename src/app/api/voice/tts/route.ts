import { NextResponse } from "next/server";

export const runtime = "nodejs";

const VOICEBOX_URL = "http://127.0.0.1:17493";

export async function POST(request: Request) {
  try {
    const body = await request.json() as { text: string; voice: string };
    const { text, voice } = body;

    const res = await fetch(`${VOICEBOX_URL}/tts`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ text, voice_id: voice, speaker: voice }),
      signal: AbortSignal.timeout(30_000),
    });

    if (!res.ok) throw new Error(`Voicebox error: ${res.status}`);

    const audioBuffer = await res.arrayBuffer();
    return new Response(audioBuffer, {
      headers: {
        "content-type": res.headers.get("content-type") ?? "audio/ogg",
        "cache-control": "no-store",
      },
    });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
