"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export type Alert = {
  id: string;
  level: "info" | "warning" | "error";
  message: string;
  action?: { label: string; href: string };
};

const POLL_INTERVAL = 300_000; // 5 min

export function useAlerts() {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/alerts");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json: { alerts: Alert[] } = await res.json();
      setAlerts(json.alerts ?? []);
    } catch {
      // Silently keep previous alerts on error
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
    intervalRef.current = setInterval(refresh, POLL_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [refresh]);

  return { alerts, loading, refresh };
}
