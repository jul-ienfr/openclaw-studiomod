"use client";

import { useCallback, useRef } from "react";
import { useWatcherStore } from "@/features/watcher/state/store";
import type { WatcherConfig } from "@/features/watcher/types";

export function useWatcherConfigController() {
  const { state, dispatch } = useWatcherStore();
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const loadConfig = useCallback(async () => {
    try {
      const res = await fetch("/api/watcher/config");
      const data = await res.json();
      dispatch({ type: "SET_CONFIG", config: data as WatcherConfig });
    } catch (err) {
      dispatch({ type: "SET_CONFIG_ERROR", error: err instanceof Error ? err.message : "Failed to load config" });
    }
  }, [dispatch]);

  const saveConfig = useCallback(async (config?: WatcherConfig) => {
    const toSave = config ?? state.config;
    if (!toSave) return;
    dispatch({ type: "SET_CONFIG_SAVING", saving: true });
    try {
      const res = await fetch("/api/watcher/config", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(toSave),
      });
      const data = await res.json();
      if (data.error) {
        dispatch({ type: "SET_CONFIG_ERROR", error: data.error });
      } else {
        dispatch({ type: "SET_CONFIG_DIRTY", dirty: false });
        dispatch({ type: "SET_CONFIG_ERROR", error: null });
      }
    } catch (err) {
      dispatch({ type: "SET_CONFIG_ERROR", error: err instanceof Error ? err.message : "Failed to save config" });
    } finally {
      dispatch({ type: "SET_CONFIG_SAVING", saving: false });
    }
  }, [dispatch, state.config]);

  const updateField = useCallback((path: string, value: unknown) => {
    if (!state.config) return;
    const parts = path.split(".");
    const patch: Record<string, unknown> = {};
    let current = patch;
    for (let i = 0; i < parts.length - 1; i++) {
      current[parts[i]] = {};
      current = current[parts[i]] as Record<string, unknown>;
    }
    current[parts[parts.length - 1]] = value;
    dispatch({ type: "PATCH_CONFIG", patch: patch as Partial<WatcherConfig> });
  }, [dispatch, state.config]);

  const resetConfig = useCallback(async () => {
    await loadConfig();
  }, [loadConfig]);

  const debouncedSave = useCallback(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => { saveConfig(); }, 500);
  }, [saveConfig]);

  return {
    config: state.config,
    configDirty: state.configDirty,
    configSaving: state.configSaving,
    configError: state.configError,
    loadConfig,
    saveConfig,
    updateField,
    resetConfig,
    debouncedSave,
  };
}
