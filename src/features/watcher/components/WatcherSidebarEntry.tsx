"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useDocumentVisibility } from "@/hooks/useDocumentVisibility";

const VISIBLE_POLL_INTERVAL_MS = 60_000;
const HIDDEN_POLL_INTERVAL_MS = 300_000;

export function WatcherSidebarEntry() {
  const isDocumentVisible = useDocumentVisibility();
  const [count, setCount] = useState(0);
  const pollRef = useRef<number | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const inFlightRef = useRef(false);
  const previousVisibilityRef = useRef(isDocumentVisible);

  useEffect(() => {
    let mounted = true;

    async function fetchCount() {
      if (!mounted || inFlightRef.current) return;
      inFlightRef.current = true;
      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const res = await fetch(
          "/api/watcher/items?status=scored&category=release,npm_version,npm_dist_tag,clawhub_skill&min_score=65&count_only=1",
          {
            cache: "no-store",
            signal: controller.signal,
          },
        );
        if (!res.ok) return;
        const data = await res.json();
        if (!mounted || controller.signal.aborted) return;
        if (typeof data.total === "number") setCount(data.total);
      } catch {
        /* silent */
      } finally {
        if (abortRef.current === controller) {
          abortRef.current = null;
        }
        inFlightRef.current = false;
      }
    }

    fetchCount();
    const intervalMs = isDocumentVisible
      ? VISIBLE_POLL_INTERVAL_MS
      : HIDDEN_POLL_INTERVAL_MS;
    pollRef.current = window.setInterval(() => {
      void fetchCount();
    }, intervalMs);

    return () => {
      mounted = false;
      if (pollRef.current !== null) {
        window.clearInterval(pollRef.current);
        pollRef.current = null;
      }
      abortRef.current?.abort();
      abortRef.current = null;
    };
  }, [isDocumentVisible]);

  useEffect(() => {
    const wasVisible = previousVisibilityRef.current;
    previousVisibilityRef.current = isDocumentVisible;
    if (!isDocumentVisible || wasVisible || inFlightRef.current) return;

    const controller = new AbortController();
    abortRef.current?.abort();
    abortRef.current = controller;
    inFlightRef.current = true;

    void fetch(
      "/api/watcher/items?status=scored&category=release,npm_version,npm_dist_tag,clawhub_skill&min_score=65&count_only=1",
      {
        cache: "no-store",
        signal: controller.signal,
      },
    )
      .then(async (res) => {
        if (!res.ok) return null;
        return res.json();
      })
      .then((data) => {
        if (controller.signal.aborted) return;
        if (typeof data?.total === "number") setCount(data.total);
      })
      .catch(() => {
        /* silent */
      })
      .finally(() => {
        if (abortRef.current === controller) {
          abortRef.current = null;
        }
        inFlightRef.current = false;
      });
  }, [isDocumentVisible]);

  return (
    <Link
      href="/watcher"
      className="group relative flex w-full items-center gap-3 rounded-lg border border-transparent px-3 py-2.5 text-left transition-colors hover:border-sidebar-border hover:bg-surface-2/45"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-sidebar-border bg-surface-2/60">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-muted-foreground group-hover:text-foreground"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
        >
          <circle cx="12" cy="12" r="2" />
          <path d="M12 2a10 10 0 0 1 0 20A10 10 0 0 1 12 2" opacity="0.15" />
          <path d="M12 6a6 6 0 0 1 0 12A6 6 0 0 1 12 6" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
        </svg>
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-medium text-foreground">
          Watcher
        </span>
        <span className="block text-xs text-muted-foreground">
          Surveillance & scoring
        </span>
      </span>
      {count > 0 && (
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-[10px] font-bold text-white">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </Link>
  );
}
