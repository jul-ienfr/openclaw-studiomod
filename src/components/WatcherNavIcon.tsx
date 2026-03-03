"use client";

import { useEffect, useState } from "react";
import { Radar } from "lucide-react";

/**
 * Watcher nav icon with live badge showing new item count.
 * Polls /api/watcher/items?status=new every 60s.
 */
export function WatcherNavIcon() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let mounted = true;

    async function fetchCount() {
      try {
        const res = await fetch("/api/watcher/items?status=scored&category=release,npm_version,npm_dist_tag,clawhub_skill&min_score=65&limit=1");
        if (!res.ok || !mounted) return;
        const data = await res.json() as { total?: number };
        if (typeof data.total === "number") setCount(data.total);
      } catch { /* silent */ }
    }

    fetchCount();
    const id = setInterval(fetchCount, 60_000);
    return () => { mounted = false; clearInterval(id); };
  }, []);

  return (
    <>
      <Radar className="h-5 w-5" strokeWidth={1.75} />
      {count > 0 && (
        <span
          className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold leading-none text-white"
          aria-label={`${count} nouveaux items`}
        >
          {count > 99 ? "99+" : count}
        </span>
      )}
    </>
  );
}
