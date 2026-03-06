import { NextResponse } from "next/server";
import { withErrorHandler } from "@/lib/api/error-handler";

export const runtime = "nodejs";

const VOICEBOX_URL = "http://127.0.0.1:17493";

async function get_handler() {
  try {
    const res = await fetch(`${VOICEBOX_URL}/voices`, { signal: AbortSignal.timeout(3000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json() as unknown;
    const profiles = Array.isArray(data)
      ? (data as Array<Record<string, string>>).map((v) => ({
          id: v.id ?? v.name ?? String(v),
          name: v.name ?? v.id ?? String(v),
        }))
      : [];
    return NextResponse.json({ running: true, profiles });
  } catch {
    // Try alternative endpoint
    try {
      const res = await fetch(`${VOICEBOX_URL}/api/voices`, { signal: AbortSignal.timeout(3000) });
      if (res.ok) {
        const data = await res.json() as unknown;
        const profiles = Array.isArray(data)
          ? (data as Array<Record<string, string>>).map((v) => ({
              id: v.id ?? v.name ?? String(v),
              name: v.name ?? v.id ?? String(v),
            }))
          : [];
        return NextResponse.json({ running: true, profiles });
      }
    } catch { /**/ }
    // Fallback: try to ping the service
    try {
      await fetch(VOICEBOX_URL, { signal: AbortSignal.timeout(2000) });
      // Service is up but unknown endpoint — use known profiles from memory
      return NextResponse.json({
        running: true,
        profiles: [
          { id: "Julien_VoiceClone", name: "Julien (Clone)" },
          { id: "LaMentale_VoiceBoxFinal", name: "LaMentale Final" },
          { id: "LaMentale_Final", name: "LaMentale" },
          { id: "Jonathan", name: "Jonathan" },
        ],
      });
    } catch {
      return NextResponse.json({ running: false, profiles: [] });
    }
  }
}

export const GET = withErrorHandler(get_handler);