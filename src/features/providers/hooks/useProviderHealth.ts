"use client";

import { useEffect, useState, useCallback } from "react";

export type ProviderHealthStatus = "healthy" | "degraded" | "down" | "unknown";

export type ProviderHealth = {
  id: string;
  status: ProviderHealthStatus;
  latencyMs?: number;
  error?: string;
};

export function useProviderHealth(providerIds: string[]) {
  const [health, setHealth] = useState<ProviderHealth[]>([]);
  const [loading, setLoading] = useState(false);

  const check = useCallback(async () => {
    if (providerIds.length === 0) {
      setHealth([]);
      return;
    }

    setLoading(true);
    try {
      const body = providerIds.map((id) => ({ providerId: id }));
      const start = Date.now();
      const res = await fetch("/api/providers/validate-batch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ providers: body }),
      });
      const elapsed = Date.now() - start;

      if (!res.ok) {
        setHealth(
          providerIds.map((id) => ({ id, status: "unknown" as const })),
        );
        return;
      }

      const data = (await res.json()) as {
        results: Array<{
          providerId: string;
          valid: boolean;
          error?: string | null;
        }>;
      };

      setHealth(
        data.results.map((r) => ({
          id: r.providerId,
          status: r.valid ? ("healthy" as const) : ("down" as const),
          latencyMs: Math.round(elapsed / data.results.length),
          error: r.error ?? undefined,
        })),
      );
    } catch {
      setHealth(
        providerIds.map((id) => ({ id, status: "unknown" as const })),
      );
    } finally {
      setLoading(false);
    }
  }, [providerIds]);

  useEffect(() => {
    if (providerIds.length > 0) {
      void check();
    }
  }, [check, providerIds]);

  return { health, loading, refresh: check };
}
