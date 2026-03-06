"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";

const POLL_INTERVAL_MS = 10_000;
const GATEWAY_WS_BASE =
  typeof window !== "undefined"
    ? `${window.location.protocol}//${window.location.host}`
    : "";

/**
 * DegradedModeBanner
 *
 * Polls the gateway health via a lightweight HTTP check.
 * When the gateway is unreachable, shows a warning banner indicating
 * that Studio is operating in degraded mode with cached data.
 *
 * Dismissible, but reappears on next poll failure if the gateway is still down.
 */
export function DegradedModeBanner() {
  const [offline, setOffline] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const wasOfflineRef = useRef(false);

  const checkGateway = useCallback(async () => {
    try {
      const res = await fetch(`${GATEWAY_WS_BASE}/api/studio`, {
        method: "GET",
        cache: "no-store",
        signal: AbortSignal.timeout(5_000),
      });
      if (res.ok) {
        setOffline(false);
        wasOfflineRef.current = false;
      } else {
        setOffline(true);
        if (!wasOfflineRef.current) {
          wasOfflineRef.current = true;
          setDismissed(false);
        }
      }
    } catch {
      setOffline(true);
      if (!wasOfflineRef.current) {
        wasOfflineRef.current = true;
        setDismissed(false);
      }
    }
  }, []);

  useEffect(() => {
    // Initial check after a short delay (let the page settle)
    const initialTimer = setTimeout(checkGateway, 2_000);

    pollRef.current = setInterval(checkGateway, POLL_INTERVAL_MS);

    return () => {
      clearTimeout(initialTimer);
      if (pollRef.current) {
        clearInterval(pollRef.current);
        pollRef.current = null;
      }
    };
  }, [checkGateway]);

  // Re-show banner on navigation (route change)
  useEffect(() => {
    if (offline) {
      setDismissed(false);
    }
  }, [offline]);

  if (!offline || dismissed) return null;

  return (
    <div
      className="shrink-0 flex items-center justify-between gap-3 bg-amber-500/15 border border-amber-500/30 text-amber-200 px-4 py-2 text-sm mx-4 mt-3 rounded-lg"
      role="alert"
    >
      <div className="flex items-center gap-2 min-w-0">
        <svg
          className="h-4 w-4 shrink-0 text-amber-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z"
          />
        </svg>
        <span>
          <strong>Gateway offline</strong> — showing cached data. Some features
          may be unavailable.
        </span>
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="shrink-0 text-amber-300 hover:text-amber-100 hover:bg-amber-500/20"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
      >
        Dismiss
      </Button>
    </div>
  );
}
