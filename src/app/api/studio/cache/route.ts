import { NextResponse } from "next/server";
import { getCacheStats, pruneGatewayCache } from "@/lib/cache/gateway-cache";
import { invalidateCacheByPrefix } from "@/lib/db/repositories/cache-repo";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** GET /api/studio/cache — returns cache statistics */
export async function GET() {
  try {
    const stats = getCacheStats();
    return NextResponse.json({
      ok: true,
      ...stats,
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to read cache stats.";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

/** DELETE /api/studio/cache — purge cache entries */
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const prefix = searchParams.get("prefix");

    if (prefix) {
      invalidateCacheByPrefix(`gateway:${prefix}`);
      return NextResponse.json({ ok: true, purged: prefix });
    }

    // No prefix: prune expired, then purge all gateway entries
    const pruned = pruneGatewayCache();
    invalidateCacheByPrefix("gateway:");
    return NextResponse.json({ ok: true, pruned, purgedAll: true });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to purge cache.";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
