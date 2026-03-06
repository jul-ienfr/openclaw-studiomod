import {
  cacheGatewayResponse,
  getCachedGatewayResponse,
  resolveTtl,
} from "@/lib/cache/gateway-cache";

export type CacheStatus = "hit" | "miss" | "stale" | "error";

interface CachedFetchOptions {
  ttlSeconds?: number;
  forceRefresh?: boolean;
  /** Gateway method name, used for TTL resolution */
  method?: string;
}

interface CachedFetchResult {
  response: Response | null;
  data: unknown;
  cacheStatus: CacheStatus;
}

/**
 * Wraps fetch with transparent caching.
 *
 * On success: caches the response and returns fresh data.
 * On failure (network error, non-OK status): returns cached data with stale flag.
 */
export async function cachedFetch(
  url: string,
  init?: RequestInit,
  cacheOptions?: CachedFetchOptions,
): Promise<CachedFetchResult> {
  const httpMethod = init?.method?.toUpperCase() ?? "GET";
  const method = cacheOptions?.method ?? httpMethod;
  const ttl = cacheOptions?.ttlSeconds ?? resolveTtl(method);

  // Only cache GET-like requests (reads)
  const isCacheable = httpMethod === "GET" || httpMethod === "POST";

  // Parse body for cache key (POST with JSON body)
  let params: unknown = null;
  if (init?.body && typeof init.body === "string") {
    try {
      params = JSON.parse(init.body);
    } catch {
      params = init.body;
    }
  }

  // Check cache first (unless force refresh)
  if (isCacheable && !cacheOptions?.forceRefresh) {
    const cached = getCachedGatewayResponse(method, url, params);
    if (cached && !cached.stale) {
      return {
        response: null,
        data: cached.data,
        cacheStatus: "hit",
      };
    }
  }

  // Attempt the actual fetch
  try {
    const response = await fetch(url, init);

    if (!response.ok) {
      // Non-OK response — try stale cache
      if (isCacheable) {
        const cached = getCachedGatewayResponse(method, url, params);
        if (cached) {
          return {
            response,
            data: cached.data,
            cacheStatus: "stale",
          };
        }
      }
      return {
        response,
        data: null,
        cacheStatus: "error",
      };
    }

    // Parse and cache successful response
    const data = await response.json();

    if (isCacheable) {
      try {
        cacheGatewayResponse(method, url, params, data, {
          ttlSeconds: ttl,
        });
      } catch {
        // Caching failure is non-fatal
      }
    }

    return {
      response,
      data,
      cacheStatus: "miss",
    };
  } catch {
    // Network error — serve stale if available
    if (isCacheable) {
      const cached = getCachedGatewayResponse(method, url, params);
      if (cached) {
        return {
          response: null,
          data: cached.data,
          cacheStatus: "stale",
        };
      }
    }

    return {
      response: null,
      data: null,
      cacheStatus: "error",
    };
  }
}
