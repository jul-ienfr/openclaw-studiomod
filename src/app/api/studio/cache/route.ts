import { NextResponse } from "next/server";
import { getCacheStats, pruneGatewayCache } from "@/lib/cache/gateway-cache";
import { invalidateCacheByPrefix } from "@/lib/db/repositories/cache-repo";
import { withErrorHandler } from "@/lib/api/error-handler";
import { applyRateLimit, RATE_LIMITS } from "@/lib/rateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** GET /api/studio/cache — returns cache statistics */
async function get_handler() {
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
async function delete_handler(request: Request) {
  const limited = applyRateLimit(request, RATE_LIMITS.cacheDelete);
  if (limited) return limited;

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

export const GET = withErrorHandler(get_handler);
export const DELETE = withErrorHandler(delete_handler);
