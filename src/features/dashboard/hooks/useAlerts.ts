"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useDocumentVisibility } from "@/hooks/useDocumentVisibility";

export type Alert = {
  id: string;
  level: "info" | "warning" | "error";
  message: string;
  action?: { label: string; href: string };
};

const POLL_INTERVAL = 300_000; // 5 min
const HIDDEN_POLL_INTERVAL = 900_000; // 15 min

export function useAlerts() {
  const isDocumentVisible = useDocumentVisibility();
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(true);
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
      const res = await fetch("/api/alerts", {
        cache: "no-store",
        signal: controller.signal,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json: { alerts: Alert[] } = await res.json();
      if (controller.signal.aborted) return;
      setAlerts(json.alerts ?? []);
    } catch {
      // Silently keep previous alerts on error
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

  return { alerts, loading, refresh };
}
