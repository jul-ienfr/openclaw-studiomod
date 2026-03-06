// ─── Token Bucket Rate Limiter ────────────────────────────────────────────────

interface Bucket {
  tokens: number;
  lastRefill: number;
}

const buckets = new Map<string, Bucket>();

/**
 * Creates a token bucket rate limiter function.
 * @param maxTokens    Maximum burst capacity
 * @param refillPerMinute  Tokens replenished per minute
 * @returns A function that takes an IP string and returns true if allowed, false if rate-limited
 */
export function rateLimit(
  maxTokens: number,
  refillPerMinute: number,
): (ip: string) => boolean {
  return function checkLimit(ip: string): boolean {
    const now = Date.now();
    let bucket = buckets.get(ip) ?? { tokens: maxTokens, lastRefill: now };

    // Refill based on elapsed time
    const elapsedMinutes = (now - bucket.lastRefill) / 60_000;
    bucket.tokens = Math.min(
      maxTokens,
      bucket.tokens + elapsedMinutes * refillPerMinute,
    );
    bucket.lastRefill = now;

    if (bucket.tokens < 1) {
      buckets.set(ip, bucket);
      return false; // rate-limited
    }

    bucket.tokens -= 1;
    buckets.set(ip, bucket);
    return true; // allowed
  };
}

/**
 * Extract the real client IP from a request, considering proxy headers.
 */
export function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "unknown";
}

/**
 * Periodically clear stale buckets to prevent memory leaks.
 * Buckets that have been refilled to max and haven't been used for 10 minutes are removed.
 */
const CLEANUP_INTERVAL_MS = 10 * 60 * 1000; // 10 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, bucket] of buckets.entries()) {
    const ageMs = now - bucket.lastRefill;
    if (ageMs > CLEANUP_INTERVAL_MS && bucket.tokens >= 1) {
      buckets.delete(ip);
    }
  }
}, CLEANUP_INTERVAL_MS).unref();
