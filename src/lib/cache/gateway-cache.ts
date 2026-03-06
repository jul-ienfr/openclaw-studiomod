import {
  getCache,
  setCache,
  pruneExpiredCache,
} from "@/lib/db/repositories/cache-repo";
import { getDb } from "@/lib/db/studio-db";

interface CacheOptions {
  ttlSeconds?: number; // default 60
  keyPrefix?: string; // default "gateway"
}

interface CachedResult {
  data: unknown;
  stale: boolean;
}

const DEFAULT_TTL = 60;
const DEFAULT_PREFIX = "gateway";

/** Route-specific TTL defaults (seconds) */
export const ROUTE_TTL: Record<string, number> = {
  "agents.list": 30,
  "config.get": 60,
  "settings.get": 60,
  "skills.list": 300,
  "skills.catalog": 300,
  "providers.health": 30,
  "health.check": 30,
};

/** Resolve TTL for a given gateway method */
export function resolveTtl(method: string, override?: number): number {
  if (override !== undefined) return override;
  return ROUTE_TTL[method] ?? DEFAULT_TTL;
}

/** Build a deterministic cache key from method + path + params */
function buildCacheKey(
  method: string,
  path: string,
  params: unknown,
  prefix: string = DEFAULT_PREFIX,
): string {
  const paramStr =
    params !== undefined && params !== null
      ? JSON.stringify(params, Object.keys(params as Record<string, unknown>).sort())
      : "";
  return `${prefix}:${method}:${path}:${paramStr}`;
}

/** Cache a gateway response */
export function cacheGatewayResponse(
  method: string,
  path: string,
  params: unknown,
  response: unknown,
  options?: CacheOptions,
): void {
  const prefix = options?.keyPrefix ?? DEFAULT_PREFIX;
  const ttl = options?.ttlSeconds ?? resolveTtl(method);
  const key = buildCacheKey(method, path, params, prefix);
  setCache(key, response, ttl);
}

/** Get a cached response. Returns stale=true when TTL expired but data exists. */
export function getCachedGatewayResponse(
  method: string,
  path: string,
  params: unknown,
  keyPrefix?: string,
): CachedResult | null {
  const prefix = keyPrefix ?? DEFAULT_PREFIX;
  const key = buildCacheKey(method, path, params, prefix);

  // Try fresh first
  const fresh = getCache(key);
  if (fresh) {
    return { data: fresh.value, stale: false };
  }

  // Try stale (expired but still in DB — not yet pruned)
  const stale = getStaleCache(key);
  if (stale) {
    return { data: stale, stale: true };
  }

  return null;
}

/** Get a cache entry even if expired (for serving stale data when gateway is down) */
function getStaleCache(key: string): unknown | null {
  const db = getDb();
  try {
    const row = db
      .prepare(
        "SELECT value FROM cache WHERE key = ?",
      )
      .get(key) as { value: string } | undefined;

    if (!row) return null;
    return JSON.parse(row.value);
  } finally {
    db.close();
  }
}

/** Prune expired cache entries. Returns the number of entries removed. */
export function pruneGatewayCache(): number {
  return pruneExpiredCache();
}

/** Get cache statistics */
export function getCacheStats(): {
  totalEntries: number;
  expiredEntries: number;
  sizeEstimate: number;
} {
  const db = getDb();
  try {
    const total = db
      .prepare("SELECT COUNT(*) AS c FROM cache WHERE key LIKE 'gateway:%'")
      .get() as { c: number };

    const expired = db
      .prepare(
        "SELECT COUNT(*) AS c FROM cache WHERE key LIKE 'gateway:%' AND datetime(cached_at, '+' || ttl_seconds || ' seconds') <= datetime('now')",
      )
      .get() as { c: number };

    const size = db
      .prepare(
        "SELECT COALESCE(SUM(LENGTH(value)), 0) AS s FROM cache WHERE key LIKE 'gateway:%'",
      )
      .get() as { s: number };

    return {
      totalEntries: total.c,
      expiredEntries: expired.c,
      sizeEstimate: size.s,
    };
  } finally {
    db.close();
  }
}
