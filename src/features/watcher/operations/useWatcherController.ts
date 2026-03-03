"use client";

import { useCallback } from "react";
import { useWatcherStore } from "@/features/watcher/state/store";

export function useWatcherController() {
  const { dispatch } = useWatcherStore();

  const loadSources = useCallback(async () => {
    try {
      const res = await fetch("/api/watcher/sources");
      const data = await res.json();
      if (data.sources)
        dispatch({ type: "HYDRATE_SOURCES", sources: data.sources });
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        error: err instanceof Error ? err.message : "Failed to load sources",
      });
    }
  }, [dispatch]);

  const loadItems = useCallback(
    async (params?: Record<string, string | undefined>) => {
      try {
        dispatch({ type: "SET_LOADING", loading: true });
        // Filter out undefined values
        const cleanParams = Object.fromEntries(
          Object.entries(params ?? {}).filter(
            (entry) => entry[1] !== undefined,
          ),
        ) as Record<string, string>;
        const qs = new URLSearchParams(cleanParams).toString();
        const res = await fetch(`/api/watcher/items?${qs}`);
        const data = await res.json();
        if (data.items)
          dispatch({
            type: "HYDRATE_ITEMS",
            items: data.items,
            total: data.total,
          });
      } catch (err) {
        dispatch({
          type: "SET_ERROR",
          error: err instanceof Error ? err.message : "Failed to load items",
        });
      } finally {
        dispatch({ type: "SET_LOADING", loading: false });
      }
    },
    [dispatch],
  );

  const loadScores = useCallback(
    async (params?: Record<string, string>) => {
      try {
        dispatch({ type: "SET_LOADING", loading: true });
        const qs = new URLSearchParams(params ?? {}).toString();
        const res = await fetch(`/api/watcher/scores?${qs}`);
        const data = await res.json();
        if (data.scores)
          dispatch({
            type: "HYDRATE_SCORES",
            scores: data.scores,
            total: data.total,
          });
      } catch (err) {
        dispatch({
          type: "SET_ERROR",
          error: err instanceof Error ? err.message : "Failed to load scores",
        });
      } finally {
        dispatch({ type: "SET_LOADING", loading: false });
      }
    },
    [dispatch],
  );

  const loadImplementations = useCallback(
    async (params?: Record<string, string>) => {
      try {
        const qs = new URLSearchParams(params ?? {}).toString();
        const res = await fetch(`/api/watcher/implementations?${qs}`);
        const data = await res.json();
        if (data.implementations)
          dispatch({
            type: "HYDRATE_IMPLEMENTATIONS",
            implementations: data.implementations,
            total: data.total,
          });
      } catch (err) {
        dispatch({
          type: "SET_ERROR",
          error:
            err instanceof Error
              ? err.message
              : "Failed to load implementations",
        });
      }
    },
    [dispatch],
  );

  const loadNewItemsCount = useCallback(async () => {
    try {
      const res = await fetch(
        "/api/watcher/items?status=scored&category=release,npm_version,npm_dist_tag,clawhub_skill&min_score=65&limit=1",
      );
      const data = await res.json();
      if (typeof data.total === "number")
        dispatch({ type: "SET_NEW_ITEMS_COUNT", count: data.total });
    } catch {
      /* silent */
    }
  }, [dispatch]);

  const triggerCheck = useCallback(async (source?: string) => {
    const res = await fetch("/api/watcher/actions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "check", source }),
    });
    return res.json();
  }, []);

  const rollback = useCallback(async (implId: string) => {
    const res = await fetch("/api/watcher/implementations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "rollback", implId }),
    });
    return res.json();
  }, []);

  const vacuum = useCallback(async () => {
    const res = await fetch("/api/watcher/actions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "vacuum" }),
    });
    return res.json();
  }, []);

  return {
    loadSources,
    loadItems,
    loadScores,
    loadImplementations,
    loadNewItemsCount,
    triggerCheck,
    rollback,
    vacuum,
  };
}
