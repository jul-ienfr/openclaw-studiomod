"use client";

import { Info, AlertTriangle, CheckCircle, XCircle, Bug } from "lucide-react";
import type { DashboardSnapshot } from "@/features/dashboard/types";
import type { LogLevel } from "@/features/logs/types";

type ActivityTimelineProps = {
  entries: DashboardSnapshot["recentActivity"];
  loading?: boolean;
};

const LEVEL_ICON: Record<
  LogLevel,
  React.ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  debug: Bug,
  info: Info,
  warn: AlertTriangle,
  error: XCircle,
};

const LEVEL_COLOR: Record<LogLevel, string> = {
  debug: "text-muted-foreground",
  info: "text-blue-400",
  warn: "text-yellow-400",
  error: "text-red-400",
};

function formatRelativeTime(timestamp: number): string {
  const diffMs = Date.now() - timestamp;
  const diffSec = Math.floor(diffMs / 1000);
  if (diffSec < 60) return `${diffSec}s ago`;
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffH = Math.floor(diffMin / 60);
  if (diffH < 24) return `${diffH}h ago`;
  const diffD = Math.floor(diffH / 24);
  return `${diffD}d ago`;
}

export function ActivityTimeline({
  entries,
  loading = false,
}: ActivityTimelineProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Recent Activity
      </h3>

      {loading && (
        <div className="flex items-center justify-center py-4">
          <span className="text-xs text-muted-foreground">Loading…</span>
        </div>
      )}

      {!loading && entries.length === 0 && (
        <div className="flex items-center justify-center py-4">
          <CheckCircle
            className="mr-2 h-4 w-4 text-muted-foreground/40"
            strokeWidth={1.75}
          />
          <span className="text-xs text-muted-foreground">
            No recent activity
          </span>
        </div>
      )}

      {!loading && entries.length > 0 && (
        <ol className="flex flex-col gap-2" aria-label="Activity feed">
          {entries.map((entry) => {
            const Icon = LEVEL_ICON[entry.level];
            const colorClass = LEVEL_COLOR[entry.level];

            return (
              <li key={entry.id} className="flex items-start gap-2.5 text-xs">
                {/* Level icon */}
                <Icon
                  className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${colorClass}`}
                  strokeWidth={1.75}
                  aria-label={entry.level}
                />

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <span className="text-foreground">{entry.message}</span>
                  {entry.agentId && (
                    <span className="ml-1 text-muted-foreground/60">
                      [{entry.agentId}]
                    </span>
                  )}
                </div>

                {/* Timestamp */}
                <span
                  className="shrink-0 text-[10px] text-muted-foreground/50 tabular-nums"
                  title={new Date(entry.timestamp).toLocaleString()}
                >
                  {formatRelativeTime(entry.timestamp)}
                </span>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}
