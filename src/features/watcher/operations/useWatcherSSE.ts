"use client";

import { useEffect } from "react";
import type { WatcherAction } from "@/features/watcher/state/store";

type Dispatch = React.Dispatch<WatcherAction>;

/**
 * Opens a Server-Sent Events connection to /api/watcher/events and
 * dispatches updates into the Watcher store automatically.
 *
 * - sources-updated  → HYDRATE_SOURCES
 * - new-items        → SET_NEW_ITEMS_COUNT
 * - implementation-status → reloads implementations list
 *
 * Reconnects automatically with exponential backoff (1s → 30s max).
 * Call from inside WatcherProvider (client component) so dispatch is stable.
 */
export function useWatcherSSE(dispatch: Dispatch) {
  useEffect(() => {
    let es: EventSource | null = null;
    let reconnectTimer: ReturnType<typeof setTimeout> | null = null;
    let retryDelay = 1_000;
    let mounted = true;

    function open() {
      if (!mounted) return;

      // Ensure the session cookie is set before opening EventSource.
      // EventSource cannot set custom headers, so we rely on the cookie.
      fetch("/api/watcher/session")
        .catch(() => {
          /* best-effort — dev-token bypasses auth anyway */
        })
        .finally(() => {
          if (!mounted) return;

          es = new EventSource("/api/watcher/events");

          es.onopen = () => {
            retryDelay = 1_000; // reset backoff on successful connection
          };

          es.addEventListener("sources-updated", (e: MessageEvent) => {
            try {
              const { sources } = JSON.parse(e.data as string) as {
                sources: unknown[];
              };
              if (Array.isArray(sources)) {
                dispatch({
                  type: "HYDRATE_SOURCES",
                  sources: sources as never,
                });
              }
            } catch {
              /* malformed event — ignore */
            }
          });

          es.addEventListener("new-items", (e: MessageEvent) => {
            try {
              const { count } = JSON.parse(e.data as string) as {
                count: number;
              };
              if (typeof count === "number") {
                dispatch({ type: "SET_NEW_ITEMS_COUNT", count });
              }
            } catch {
              /* malformed event — ignore */
            }
          });

          es.addEventListener("implementation-status", () => {
            // Reload implementations so the timeline stays current
            fetch("/api/watcher/implementations?limit=20")
              .then((r) => r.json())
              .then((data: { implementations?: unknown[]; total?: number }) => {
                if (Array.isArray(data.implementations)) {
                  dispatch({
                    type: "HYDRATE_IMPLEMENTATIONS",
                    implementations: data.implementations as never,
                    total: data.total ?? data.implementations.length,
                  });
                }
              })
              .catch(() => {
                /* silent — non-critical */
              });
          });

          es.onerror = () => {
            es?.close();
            es = null;
            if (mounted) {
              if (reconnectTimer) clearTimeout(reconnectTimer);
              reconnectTimer = setTimeout(() => {
                retryDelay = Math.min(retryDelay * 2, 30_000);
                open();
              }, retryDelay);
            }
          };
        });
    }

    open();

    return () => {
      mounted = false;
      if (reconnectTimer) clearTimeout(reconnectTimer);
      es?.close();
    };
    // dispatch is guaranteed stable by React's useReducer
  }, [dispatch]);
}
