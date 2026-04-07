import { getDbWrite, getDb } from "../studio-db";

export interface CacheEntry {
  key: string;
  value: unknown;
  etag: string | null;
  cached_at: string;
  ttl_seconds: number;
}

interface CacheRow {
  key: string;
  value: string;
  etag: string | null;
  cached_at: string;
  ttl_seconds: number;
}

/** Get a cached value if it hasn't expired */
export function getCache(key: string): CacheEntry | null {
  const db = getDb();
  const row = db
    .prepare(
      `SELECT key, value, etag, cached_at, ttl_seconds FROM cache
       WHERE key = ? AND datetime(cached_at, '+' || ttl_seconds || ' seconds') > datetime('now')`,
    )
    .get(key) as CacheRow | undefined;

  if (!row) return null;

  return {
    ...row,
    value: JSON.parse(row.value),
  };
}

/** Upsert a cache entry */
export function setCache(
  key: string,
  value: unknown,
  ttlSeconds: number = 300,
  etag?: string,
): void {
  const db = getDbWrite();
  db.prepare(
    `INSERT INTO cache (key, value, ttl_seconds, etag, cached_at)
     VALUES (?, ?, ?, ?, datetime('now'))
     ON CONFLICT(key) DO UPDATE SET
       value = excluded.value,
       ttl_seconds = excluded.ttl_seconds,
       etag = excluded.etag,
       cached_at = excluded.cached_at`,
  ).run(key, JSON.stringify(value), ttlSeconds, etag ?? null);
}

/** Delete a cache entry by key */
export function invalidateCache(key: string): void {
  const db = getDbWrite();
  db.prepare("DELETE FROM cache WHERE key = ?").run(key);
}

/** Delete cache entries whose key starts with the given prefix */
export function invalidateCacheByPrefix(prefix: string): void {
  const db = getDbWrite();
  db.prepare("DELETE FROM cache WHERE key LIKE ?").run(`${prefix}%`);
}

/** Delete all expired cache entries */
export function pruneExpiredCache(): number {
  const db = getDbWrite();
  const result = db
    .prepare(
      "DELETE FROM cache WHERE datetime(cached_at, '+' || ttl_seconds || ' seconds') <= datetime('now')",
    )
    .run();
  return result.changes;
}
