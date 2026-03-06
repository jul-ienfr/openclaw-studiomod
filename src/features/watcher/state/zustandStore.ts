"use client";

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { WatcherState } from "./store";
import type {
  SourceState,
  WatchItem,
  ScoreRecord,
  Implementation,
  WatcherConfig,
  Filters,
} from "@/features/watcher/types";

// Zustand store mirroring the existing Context+useReducer store.
// This provides selectors for granular re-render control
// while maintaining backward compatibility with useWatcherStore().
//
// IMPORTANT: This file is ADDITIVE. It does not replace or modify
// the existing store.tsx. Callers of useWatcherStore() are
// unaffected. New components can import from this file for
// optimized, selector-based subscriptions.

type WatcherActions = {
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  hydrateSources: (sources: SourceState[]) => void;
  hydrateItems: (items: (WatchItem & Partial<ScoreRecord>)[], total: number) => void;
  hydrateScores: (scores: ScoreRecord[], total: number) => void;
  hydrateImplementations: (implementations: Implementation[], total: number) => void;
  setConfig: (config: WatcherConfig) => void;
  patchConfig: (patch: Partial<WatcherConfig>) => void;
  setConfigDirty: (dirty: boolean) => void;
  setConfigSaving: (saving: boolean) => void;
  setConfigError: (error: string | null) => void;
  setFilters: (filters: Partial<Filters>) => void;
  setNewItemsCount: (count: number) => void;
};

type WatcherZustandStore = WatcherState & WatcherActions;

function deepMerge(
  target: Record<string, unknown>,
  source: Record<string, unknown>,
): Record<string, unknown> {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    const sv = source[key];
    const tv = target[key];
    if (
      sv &&
      typeof sv === "object" &&
      !Array.isArray(sv) &&
      tv &&
      typeof tv === "object" &&
      !Array.isArray(tv)
    ) {
      result[key] = deepMerge(
        tv as Record<string, unknown>,
        sv as Record<string, unknown>,
      );
    } else {
      result[key] = sv;
    }
  }
  return result;
}

export const useWatcherZustandStore = create<WatcherZustandStore>()(
  devtools(
    (set) => ({
      // Initial state — mirrors initialState in store.tsx
      sources: [],
      items: [],
      itemsTotal: 0,
      scores: [],
      scoresTotal: 0,
      implementations: [],
      implementationsTotal: 0,
      config: null,
      configDirty: false,
      configSaving: false,
      configError: null,
      loading: false,
      error: null,
      filters: { page: 1, limit: 20 },
      newItemsCount: 0,

      // Actions

      setLoading: (loading) => set({ loading }, false, "setLoading"),

      setError: (error) => set({ error, loading: false }, false, "setError"),

      hydrateSources: (sources) => set({ sources }, false, "hydrateSources"),

      hydrateItems: (items, total) =>
        set({ items, itemsTotal: total }, false, "hydrateItems"),

      hydrateScores: (scores, total) =>
        set({ scores, scoresTotal: total }, false, "hydrateScores"),

      hydrateImplementations: (implementations, total) =>
        set(
          { implementations, implementationsTotal: total },
          false,
          "hydrateImplementations",
        ),

      setConfig: (config) =>
        set(
          { config, configDirty: false, configError: null },
          false,
          "setConfig",
        ),

      patchConfig: (patch) =>
        set(
          (state) => {
            if (!state.config) return state;
            return {
              config: deepMerge(
                state.config as unknown as Record<string, unknown>,
                patch as unknown as Record<string, unknown>,
              ) as unknown as WatcherConfig,
              configDirty: true,
            };
          },
          false,
          "patchConfig",
        ),

      setConfigDirty: (dirty) =>
        set({ configDirty: dirty }, false, "setConfigDirty"),

      setConfigSaving: (saving) =>
        set({ configSaving: saving }, false, "setConfigSaving"),

      setConfigError: (error) =>
        set({ configError: error }, false, "setConfigError"),

      setFilters: (filters) =>
        set(
          (state) => ({ filters: { ...state.filters, ...filters } }),
          false,
          "setFilters",
        ),

      setNewItemsCount: (count) =>
        set({ newItemsCount: count }, false, "setNewItemsCount"),
    }),
    { name: "WatcherStore" },
  ),
);

// ---------------------------------------------------------------------------
// Granular selectors — use these in new components to avoid re-rendering on
// unrelated state changes. Each selector only subscribes to the slice it needs.
// ---------------------------------------------------------------------------

/** Returns the list of source states. */
export const useWatcherSources = () =>
  useWatcherZustandStore((s) => s.sources);

/** Returns the list of watch items and their total count. */
export const useWatcherItems = () =>
  useWatcherZustandStore((s) => ({ items: s.items, itemsTotal: s.itemsTotal }));

/** Returns the list of score records and their total count. */
export const useWatcherScores = () =>
  useWatcherZustandStore((s) => ({
    scores: s.scores,
    scoresTotal: s.scoresTotal,
  }));

/** Returns the list of implementations and their total count. */
export const useWatcherImplementations = () =>
  useWatcherZustandStore((s) => ({
    implementations: s.implementations,
    implementationsTotal: s.implementationsTotal,
  }));

/** Returns the current watcher config (or null). */
export const useWatcherConfig = () =>
  useWatcherZustandStore((s) => s.config);

/** Returns config dirty/saving/error flags. */
export const useWatcherConfigStatus = () =>
  useWatcherZustandStore((s) => ({
    configDirty: s.configDirty,
    configSaving: s.configSaving,
    configError: s.configError,
  }));

/** Returns current filters. */
export const useWatcherFilters = () =>
  useWatcherZustandStore((s) => s.filters);

/** Returns the global loading flag. */
export const useWatcherLoading = () =>
  useWatcherZustandStore((s) => s.loading);

/** Returns the global error string (or null). */
export const useWatcherError = () => useWatcherZustandStore((s) => s.error);

/** Returns the count of new (unseen) items. */
export const useWatcherNewItemsCount = () =>
  useWatcherZustandStore((s) => s.newItemsCount);
