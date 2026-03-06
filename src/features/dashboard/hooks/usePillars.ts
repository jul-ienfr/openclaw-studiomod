"use client";

import { useState, useEffect, useCallback } from "react";
import type { PillarsConfig, Pillar } from "@/lib/pillars";

export function usePillars() {
  const [config, setConfig] = useState<PillarsConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPillars = useCallback(async () => {
    try {
      const res = await fetch("/api/studio/pillars");
      if (!res.ok) throw new Error("Failed to fetch pillars");
      const data: PillarsConfig = await res.json();
      setConfig(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPillars();
  }, [fetchPillars]);

  const updatePillar = useCallback(
    async (id: string, patch: Partial<Pillar>) => {
      const res = await fetch(`/api/studio/pillars/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patch),
      });
      if (!res.ok) throw new Error("Failed to update pillar");
      await fetchPillars();
    },
    [fetchPillars],
  );

  const deletePillar = useCallback(
    async (id: string) => {
      const res = await fetch(`/api/studio/pillars/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete pillar");
      await fetchPillars();
    },
    [fetchPillars],
  );

  const createPillar = useCallback(
    async (pillar: Partial<Pillar>) => {
      const res = await fetch("/api/studio/pillars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pillar),
      });
      if (!res.ok) throw new Error("Failed to create pillar");
      await fetchPillars();
    },
    [fetchPillars],
  );

  const pillars =
    config?.pillars
      .filter((p) => p.enabled)
      .sort((a, b) => a.order - b.order) ?? [];

  return {
    pillars,
    config,
    loading,
    error,
    updatePillar,
    deletePillar,
    createPillar,
    refetch: fetchPillars,
  };
}
