"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useDocumentVisibility } from "@/hooks/useDocumentVisibility";

export type CeoStatus = {
  disk: { percent: number; total: string; used: string; available: string };
  gateway: "up" | "down";
  daemon: "up" | "down";
  crons: { total: number; active: number; errored: number };
  agentCount: number;
  timestamp: number;
};

const EMPTY: CeoStatus = {
  disk: { percent: 0, total: "?", used: "?", available: "?" },
  gateway: "down",
  daemon: "down",
  crons: { total: 0, active: 0, errored: 0 },
  agentCount: 0,
  timestamp: 0,
};

const POLL_INTERVAL = 60_000; // 60s
const HIDDEN_POLL_INTERVAL = 300_000; // 5 min

export function useCeoStatus() {
  const isDocumentVisible = useDocumentVisibility();
  const [data, setData] = useState<CeoStatus>(EMPTY);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const intervalRef = useRef<number | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const inFlightRef = useRef(false);
  const previousVisibilityRef = useRef(isDocumentVisible);

  const refresh = useCallback(async () => {
    if (inFlightRef.current) return;
    inFlightRef.current = true;
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch("/api/ceo/status", {
        cache: "no-store",
        signal: controller.signal,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json: CeoStatus = await res.json();
      if (controller.signal.aborted) return;
      setData(json);
      setError(null);
    } catch (err) {
      if (controller.signal.aborted) return;
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      if (abortRef.current === controller) {
        abortRef.current = null;
      }
      inFlightRef.current = false;
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    refresh();
    const intervalMs = isDocumentVisible ? POLL_INTERVAL : HIDDEN_POLL_INTERVAL;
    intervalRef.current = window.setInterval(() => {
      void refresh();
    }, intervalMs);
    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      abortRef.current?.abort();
      abortRef.current = null;
    };
  }, [isDocumentVisible, refresh]);

  useEffect(() => {
    const wasVisible = previousVisibilityRef.current;
    previousVisibilityRef.current = isDocumentVisible;
    if (!isDocumentVisible || wasVisible) return;
    void refresh();
  }, [isDocumentVisible, refresh]);

  return { data, loading, error, refresh };
}
