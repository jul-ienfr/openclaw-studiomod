import { NextResponse } from "next/server";
import { withErrorHandler } from "@/lib/api/error-handler";

export const runtime = "nodejs";

const VOICEBOX_URL = "http://127.0.0.1:17493";

async function get_handler() {
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

export const GET = withErrorHandler(get_handler);