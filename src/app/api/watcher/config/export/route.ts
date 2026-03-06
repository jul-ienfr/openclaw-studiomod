import { NextResponse } from "next/server";
import { loadWatcherConfig } from "@/lib/watcher/config";
import { requireAuth } from "@/features/watcher/operations/authMiddleware";
import { withErrorHandler } from "@/lib/api/error-handler";

export const runtime = "nodejs";

async function get_handler(request: Request) {
  const authError = requireAuth(request);
  if (authError) return authError;

  try {
    const config = loadWatcherConfig();
    // Strip encrypted keys from export — user must re-enter them after import
    const models = (config.models ?? []) as Array<Record<string, unknown>>;
    config.models = models.map((m) => ({ ...m, api_key: undefined }));

    const json = JSON.stringify(config, null, 2);
    const filename = `watcher-config-${new Date().toISOString().split("T")[0]}.json`;

    return new Response(json, {
      headers: {
        "Content-Type": "application/json",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Export failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export const GET = withErrorHandler(get_handler);