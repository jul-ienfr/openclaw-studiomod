"use client";

import { useEffect, useState } from "react";
import { MessageSquare, Bot, CalendarClock, AlertTriangle } from "lucide-react";

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
        <Icon className="h-3.5 w-3.5 text-muted-foreground" strokeWidth={1.75} />
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
      <p className={`text-2xl font-bold tabular-nums ${colorClass}`}>
        {value}
      </p>
      {description && (
        <p className="text-[10px] text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

type MetricsData = {
  messages24h: number;
  activeAgents: number;
  cronRuns: number;
  errors: number;
};

function useMetricsData(): MetricsData {
  const [data, setData] = useState<MetricsData>({
    messages24h: 0,
    activeAgents: 0,
    cronRuns: 0,
    errors: 0,
  });

  useEffect(() => {
    let mounted = true;

    async function fetchMetrics() {
      try {
        // Fetch error log count
        const errRes = await fetch("/api/logs?level=error&limit=1");
        const errData = errRes.ok
          ? ((await errRes.json()) as { total?: number })
          : {};
        const errors = typeof errData.total === "number" ? errData.total : 0;

        // Fetch cron run count (last 24h approximation)
        const cronRes = await fetch("/api/cron/jobs");
        const cronData = cronRes.ok
          ? ((await cronRes.json()) as {
              jobs?: Array<{ state?: { lastRunAt?: number; runCount?: number } }>;
            })
          : {};
        const jobs = cronData.jobs ?? [];
        const now = Date.now();
        const oneDayMs = 24 * 60 * 60 * 1000;
        const cronRuns = jobs.filter(
          (j) =>
            typeof j.state?.lastRunAt === "number" &&
            now - j.state.lastRunAt < oneDayMs,
        ).length;

        if (!mounted) return;
        setData((prev) => ({
          ...prev,
          errors,
          cronRuns,
        }));
      } catch {
        /* silent */
      }
    }

    fetchMetrics();
    const id = setInterval(fetchMetrics, 60_000);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  return data;
}

type MetricsRowProps = {
  activeAgentCount: number;
};

export function MetricsRow({ activeAgentCount }: MetricsRowProps) {
  const metrics = useMetricsData();

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
