"use client";

import { MessageSquare, Bot, CalendarClock, AlertTriangle } from "lucide-react";
import type { DashboardMetrics } from "@/features/dashboard/types";

type MetricCardProps = {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  value: number | string;
  description?: string;
  colorClass?: string;
};

function MetricCard({
  icon: Icon,
  label,
  value,
  description,
  colorClass = "text-foreground",
}: MetricCardProps) {
  return (
    <div className="flex flex-1 flex-col gap-1 rounded-xl border border-border bg-card px-4 py-3">
      <div className="flex items-center gap-2">
        <Icon
          className="h-3.5 w-3.5 text-muted-foreground"
          strokeWidth={1.75}
        />
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
      <p className={`text-2xl font-bold tabular-nums ${colorClass}`}>{value}</p>
      {description && (
        <p className="text-[10px] text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

type MetricsRowProps = {
  activeAgentCount: number;
  metrics: DashboardMetrics;
};

export function MetricsRow({ activeAgentCount, metrics }: MetricsRowProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <MetricCard
        icon={MessageSquare}
        label="Messages 24h"
        value={metrics.messages24h}
        description="last 24 hours"
      />
      <MetricCard
        icon={Bot}
        label="Active Agents"
        value={activeAgentCount}
        description="running right now"
        colorClass={activeAgentCount > 0 ? "text-green-400" : "text-foreground"}
      />
      <MetricCard
        icon={CalendarClock}
        label="Cron Runs"
        value={metrics.cronRuns}
        description="last 24 hours"
      />
      <MetricCard
        icon={AlertTriangle}
        label="Errors"
        value={metrics.errors}
        description="total logged"
        colorClass={metrics.errors > 0 ? "text-red-400" : "text-green-400"}
      />
    </div>
  );
}
