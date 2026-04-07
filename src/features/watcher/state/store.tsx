"use client";

import { createContext, useContext, useReducer, type ReactNode } from "react";
import { useWatcherSSE } from "@/features/watcher/operations/useWatcherSSE";
import type {
  SourceState,
  WatchItem,
  ScoreRecord,
  Implementation,
  WatcherConfig,
  Filters,
} from "@/features/watcher/types";

// ─── State ───

export interface WatcherState {
  sources: SourceState[];
  items: (WatchItem & Partial<ScoreRecord>)[];
  itemsTotal: number;
  scores: ScoreRecord[];
  scoresTotal: number;
  implementations: Implementation[];
  implementationsTotal: number;
  config: WatcherConfig | null;
  configDirty: boolean;
  configSaving: boolean;
  configError: string | null;
  loading: boolean;
  error: string | null;
  filters: Filters;
  newItemsCount: number;
}

const initialState: WatcherState = {
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
};

// ─── Actions ───

type WatcherAction =
  | { type: "SET_LOADING"; loading: boolean }
  | { type: "SET_ERROR"; error: string | null }
  | { type: "HYDRATE_SOURCES"; sources: SourceState[] }
  | {
      type: "HYDRATE_ITEMS";
      items: (WatchItem & Partial<ScoreRecord>)[];
      total: number;
    }
  | { type: "HYDRATE_SCORES"; scores: ScoreRecord[]; total: number }
  | {
      type: "HYDRATE_IMPLEMENTATIONS";
      implementations: Implementation[];
      total: number;
    }
  | { type: "SET_CONFIG"; config: WatcherConfig }
  | { type: "PATCH_CONFIG"; patch: Partial<WatcherConfig> }
  | { type: "SET_CONFIG_DIRTY"; dirty: boolean }
  | { type: "SET_CONFIG_SAVING"; saving: boolean }
  | { type: "SET_CONFIG_ERROR"; error: string | null }
  | { type: "SET_FILTERS"; filters: Partial<Filters> }
  | { type: "SET_NEW_ITEMS_COUNT"; count: number };

function reducer(state: WatcherState, action: WatcherAction): WatcherState {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.loading };
    case "SET_ERROR":
      return { ...state, error: action.error };
    case "HYDRATE_SOURCES":
      return { ...state, sources: action.sources };
    case "HYDRATE_ITEMS":
      return { ...state, items: action.items, itemsTotal: action.total };
    case "HYDRATE_SCORES":
      return { ...state, scores: action.scores, scoresTotal: action.total };
    case "HYDRATE_IMPLEMENTATIONS":
      return {
        ...state,
        implementations: action.implementations,
        implementationsTotal: action.total,
      };
    case "SET_CONFIG":
      return {
        ...state,
        config: action.config,
        configDirty: false,
        configError: null,
      };
    case "PATCH_CONFIG":
      if (!state.config) return state;
      return {
        ...state,
        config: deepMerge(
          state.config as unknown as Record<string, unknown>,
          action.patch as unknown as Record<string, unknown>,
        ) as unknown as WatcherConfig,
        configDirty: true,
      };
    case "SET_CONFIG_DIRTY":
      return { ...state, configDirty: action.dirty };
    case "SET_CONFIG_SAVING":
      return { ...state, configSaving: action.saving };
    case "SET_CONFIG_ERROR":
      return { ...state, configError: action.error };
    case "SET_FILTERS":
      return { ...state, filters: { ...state.filters, ...action.filters } };
    case "SET_NEW_ITEMS_COUNT":
      return { ...state, newItemsCount: action.count };
    default:
      return state;
  }
}

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

// ─── Context ───

interface WatcherStateContextValue {
  state: WatcherState;
}

interface WatcherDispatchContextValue {
  dispatch: React.Dispatch<WatcherAction>;
}

const WatcherStateContext = createContext<WatcherStateContextValue | null>(
  null,
);
const WatcherDispatchContext =
  createContext<WatcherDispatchContextValue | null>(null);

export function WatcherProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Real-time updates via SSE — sources, new item count, implementations
  useWatcherSSE(dispatch);

  return (
    <WatcherStateContext.Provider value={{ state }}>
      <WatcherDispatchContext.Provider value={{ dispatch }}>
        {children}
      </WatcherDispatchContext.Provider>
    </WatcherStateContext.Provider>
  );
}

export function useWatcherStore() {
  const stateCtx = useContext(WatcherStateContext);
  const dispatchCtx = useContext(WatcherDispatchContext);
  if (!stateCtx || !dispatchCtx)
    throw new Error("useWatcherStore must be used within WatcherProvider");
  return { ...stateCtx, ...dispatchCtx };
}

export function useWatcherState() {
  const ctx = useContext(WatcherStateContext);
  if (!ctx)
    throw new Error("useWatcherState must be used within WatcherProvider");
  return ctx.state;
}

export function useWatcherDispatch() {
  const ctx = useContext(WatcherDispatchContext);
  if (!ctx)
    throw new Error("useWatcherDispatch must be used within WatcherProvider");
  return ctx.dispatch;
}

export type { WatcherAction };
