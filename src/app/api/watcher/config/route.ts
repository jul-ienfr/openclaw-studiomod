import { NextResponse } from "next/server";
import { loadWatcherConfigMasked, saveWatcherConfigLocked } from "@/lib/watcher/config";
import { requireAuth } from "@/features/watcher/operations/authMiddleware";
import { withErrorHandler } from "@/lib/api/error-handler";

export const runtime = "nodejs";

async function get_handler(request: Request) {
  const authError = requireAuth(request);
  if (authError) return authError;

  try {
    const config = loadWatcherConfigMasked();
    return NextResponse.json(config);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to load watcher config.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

async function put_handler(request: Request) {
  const authError = requireAuth(request);
  if (authError) return authError;

  try {
    const body = await request.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ error: "Invalid config payload." }, { status: 400 });
    }
    await saveWatcherConfigLocked(body as Record<string, unknown>);
    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof Error && err.message.includes("Could not acquire lock")) {
      return NextResponse.json({ error: "Config is being written by another process. Try again." }, { status: 409 });
    }
    const message = err instanceof Error ? err.message : "Failed to save watcher config.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export const GET = withErrorHandler(get_handler);
export const PUT = withErrorHandler(put_handler);