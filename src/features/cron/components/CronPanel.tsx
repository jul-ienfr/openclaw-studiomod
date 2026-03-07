"use client";

import { Loader2, RefreshCw } from "lucide-react";
import { useCronJobs } from "../hooks/useCronJobs";
import { CronStatsBar } from "./CronStatsBar";
import { CronJobsTable } from "./CronJobsTable";

export function CronPanel() {
  const { jobs, stats, loading, error, refresh } = useCronJobs();

  if (loading && jobs.length === 0) {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error && jobs.length === 0) {
    return (
      <div className="p-6">
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="flex shrink-0 items-center justify-between border-b border-border px-5 py-3">
        <CronStatsBar stats={stats} />
        <button
          type="button"
          onClick={refresh}
          disabled={loading}
          className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground disabled:opacity-50"
        >
          <RefreshCw
            className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`}
            strokeWidth={1.75}
          />
          Refresh
        </button>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto">
        <CronJobsTable jobs={jobs} onRefresh={refresh} />
      </div>
    </div>
  );
}
