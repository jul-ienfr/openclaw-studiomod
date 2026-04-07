"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useDocumentVisibility } from "@/hooks/useDocumentVisibility";

type NavBadges = {
  "/watcher": number; // new items count from watcher
  "/operations": number; // error count from recent logs
};

const EMPTY_BADGES: NavBadges = { "/watcher": 0, "/operations": 0 };
const VISIBLE_POLL_INTERVAL_MS = 30_000;
const HIDDEN_POLL_INTERVAL_MS = 120_000;

export function useNavBadges() {
  const isDocumentVisible = useDocumentVisibility();
  const [badges, setBadges] = useState<NavBadges>(EMPTY_BADGES);
  const mountedRef = useRef(true);
  const pollRef = useRef<number | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const inFlightRef = useRef(false);
  const previousVisibilityRef = useRef(isDocumentVisible);

  const refresh = useCallback(async () => {
    if (!mountedRef.current || inFlightRef.current) return;
    inFlightRef.current = true;
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const [watcherRes, logsRes] = await Promise.allSettled([
        fetch("/api/watcher/items?status=new&count_only=1", {
          cache: "no-store",
          signal: controller.signal,
        }),
        fetch(
          "/api/logs?level=error&count_only=1&since=" + (Date.now() - 3600000),
          {
            cache: "no-store",
            signal: controller.signal,
          },
        ),
      ]);

      if (controller.signal.aborted) return;

      const watcher =
        watcherRes.status === "fulfilled" && watcherRes.value.ok
          ? await watcherRes.value.json()
          : null;
      const logs =
        logsRes.status === "fulfilled" && logsRes.value.ok
          ? await logsRes.value.json()
          : null;

      if (mountedRef.current) {
        setBadges({
          "/watcher": watcher?.total ?? 0,
          "/operations": logs?.total ?? 0,
        });
      }
    } catch {
      // Silently fail — badges are non-critical
    } finally {
      if (abortRef.current === controller) {
        abortRef.current = null;
      }
      inFlightRef.current = false;
    }
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (pollRef.current !== null) {
        window.clearInterval(pollRef.current);
        pollRef.current = null;
      }
      abortRef.current?.abort();
      abortRef.current = null;
    };
  }, []);

  useEffect(() => {
    void refresh();
    const intervalMs = isDocumentVisible
      ? VISIBLE_POLL_INTERVAL_MS
      : HIDDEN_POLL_INTERVAL_MS;
    pollRef.current = window.setInterval(() => {
      void refresh();
    }, intervalMs);

    return () => {
      if (pollRef.current !== null) {
        window.clearInterval(pollRef.current);
        pollRef.current = null;
      }
    };
  }, [isDocumentVisible, refresh]);

  useEffect(() => {
    const wasVisible = previousVisibilityRef.current;
    previousVisibilityRef.current = isDocumentVisible;
    if (!isDocumentVisible || wasVisible) return;
    void refresh();
  }, [isDocumentVisible, refresh]);

  return badges;
}
