"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  EMPTY_DASHBOARD_SNAPSHOT,
  type DashboardSnapshot,
} from "@/features/dashboard/types";
import { useDocumentVisibility } from "@/hooks/useDocumentVisibility";

const DASHBOARD_POLL_INTERVAL_MS = 30_000;
const DASHBOARD_HIDDEN_POLL_INTERVAL_MS = 120_000;

export function useDashboardSnapshot(activityLimit: number): {
  snapshot: DashboardSnapshot;
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
} {
  const isDocumentVisible = useDocumentVisibility();
  const [snapshot, setSnapshot] = useState<DashboardSnapshot>(
    EMPTY_DASHBOARD_SNAPSHOT,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const previousVisibilityRef = useRef(isDocumentVisible);

  const refresh = useCallback(async () => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch(
        `/api/dashboard/snapshot?limit=${activityLimit}`,
        {
          cache: "no-store",
          signal: controller.signal,
        },
      );
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      const data = (await res.json()) as DashboardSnapshot;
      if (controller.signal.aborted) return;
      setSnapshot(data);
      setError(null);
    } catch (err) {
      if (controller.signal.aborted) return;
      setError(
        err instanceof Error
          ? err.message
          : "Failed to load dashboard snapshot",
      );
    } finally {
      if (abortRef.current === controller) {
        abortRef.current = null;
      }
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
  }, [activityLimit]);

  useEffect(() => {
    void refresh();
    return () => {
      abortRef.current?.abort();
      abortRef.current = null;
    };
  }, [refresh]);

  useEffect(() => {
    const intervalMs = isDocumentVisible
      ? DASHBOARD_POLL_INTERVAL_MS
      : DASHBOARD_HIDDEN_POLL_INTERVAL_MS;
    const timer = window.setInterval(() => {
      void refresh();
    }, intervalMs);
    return () => {
      window.clearInterval(timer);
    };
  }, [isDocumentVisible, refresh]);

  useEffect(() => {
    const wasVisible = previousVisibilityRef.current;
    previousVisibilityRef.current = isDocumentVisible;
    if (!isDocumentVisible || wasVisible) return;
    void refresh();
  }, [isDocumentVisible, refresh]);

  return {
    snapshot,
    loading,
    error,
    refresh,
  };
}
