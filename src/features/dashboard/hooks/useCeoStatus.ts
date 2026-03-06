"use client";

import { useState, useEffect, useCallback, useRef } from "react";

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

export function useCeoStatus() {
  const [data, setData] = useState<CeoStatus>(EMPTY);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/ceo/status");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json: CeoStatus = await res.json();
      setData(json);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
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

  return { data, loading, error, refresh };
}
