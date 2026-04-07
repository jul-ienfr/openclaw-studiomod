import { NextResponse } from "next/server";
import { withErrorHandler } from "@/lib/api/error-handler";
import { applyRateLimit, RATE_LIMITS } from "@/lib/rateLimit";

export const runtime = "nodejs";

const VOICEBOX_URL = "http://127.0.0.1:17493";

async function post_handler(request: Request) {
  const limited = applyRateLimit(request, RATE_LIMITS.voiceTts);
  if (limited) return limited;

  try {
    const body = (await request.json()) as { text: string; voice: string };
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

export const POST = withErrorHandler(post_handler);
