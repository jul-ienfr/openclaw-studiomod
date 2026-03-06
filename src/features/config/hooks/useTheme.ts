"use client";

import { useState, useEffect, useCallback } from "react";
import type { ThemeConfig } from "@/lib/theme";

export function useTheme() {
  const [theme, setTheme] = useState<ThemeConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTheme = useCallback(async () => {
    try {
      const res = await fetch("/api/studio/theme");
      if (!res.ok) throw new Error("Failed to fetch theme");
      setTheme(await res.json());
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTheme();
  }, [fetchTheme]);

  const patchTheme = useCallback(async (patch: Partial<ThemeConfig>) => {
    setSaving(true);
    try {
      const res = await fetch("/api/studio/theme", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patch),
      });
      if (!res.ok) throw new Error("Failed to save theme");
      const updated: ThemeConfig = await res.json();
      setTheme(updated);
      return updated;
    } finally {
      setSaving(false);
    }
  }, []);

  const applyPreset = useCallback(async (preset: ThemeConfig) => {
    setSaving(true);
    try {
      const res = await fetch("/api/studio/theme", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(preset),
      });
      if (!res.ok) throw new Error("Failed to apply preset");
      const updated: ThemeConfig = await res.json();
      setTheme(updated);
      return updated;
    } finally {
      setSaving(false);
    }
  }, []);

  return {
    theme,
    loading,
    saving,
    error,
    patchTheme,
    applyPreset,
    refetch: fetchTheme,
  };
}
