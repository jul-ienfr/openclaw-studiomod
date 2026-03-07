"use client";

import { useState, useCallback, useRef } from "react";
import { useInterval } from "@/hooks/useInterval";

type NavBadges = {
  "/watcher": number; // new items count from watcher
  "/operations": number; // error count from recent logs
};

const EMPTY_BADGES: NavBadges = { "/watcher": 0, "/operations": 0 };

export function useNavBadges() {
  const [badges, setBadges] = useState<NavBadges>(EMPTY_BADGES);
  const mountedRef = useRef(true);

  const refresh = useCallback(async () => {
    try {
      const [watcherRes, logsRes] = await Promise.allSettled([
        fetch("/api/watcher/items?status=new&limit=1"),
        fetch(
          "/api/logs?level=error&since=" + (Date.now() - 3600000) + "&limit=1",
        ),
      ]);

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
    }
  }, []);

  useInterval(refresh, 30_000);

  return badges;
}
