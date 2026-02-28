import { NextResponse } from "next/server";
import { loadWatcherConfig, saveWatcherConfig } from "@/lib/watcher/config";

export const runtime = "nodejs";

export async function GET() {
  try {
    const config = loadWatcherConfig();
    return NextResponse.json(config);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to load watcher config.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid config payload." }, { status: 400 });
    }
    saveWatcherConfig(body as Record<string, unknown>);
    return NextResponse.json({ ok: true, config: body });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to save watcher config.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
