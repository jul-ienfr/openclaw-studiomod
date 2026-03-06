"use client";

import { useState } from "react";
import { Clock, RefreshCw, Loader2, AlertCircle, Filter } from "lucide-react";
import { useCronJobs, resolveStatus } from "@/features/cron/hooks/useCronJobs";
import { CronStatsBar } from "@/features/cron/components/CronStatsBar";
import { CronJobsTable } from "@/features/cron/components/CronJobsTable";
import type { CronJob } from "@/features/cron/types";

type StatusFilter = "all" | "ok" | "error" | "never" | "disabled";

const STATUS_FILTERS: Array<{
  label: string;
  value: StatusFilter;
  className: string;
}> = [
  { label: "Tous", value: "all", className: "bg-primary/10 text-primary" },
  { label: "OK", value: "ok", className: "bg-emerald-500/15 text-emerald-500" },
  { label: "Erreur", value: "error", className: "bg-red-500/15 text-red-500" },
  {
    label: "Jamais",
    value: "never",
    className: "bg-yellow-500/15 text-yellow-500",
  },
  {
    label: "Desactive",
    value: "disabled",
    className: "bg-muted-foreground/10 text-muted-foreground",
  },
];

function filterJobs(jobs: CronJob[], filter: StatusFilter): CronJob[] {
  if (filter === "all") return jobs;
  if (filter === "disabled") return jobs.filter((j) => !j.enabled);
  return jobs.filter((j) => {
    if (!j.enabled) return false;
    return resolveStatus(j) === filter;
  });
}

export default function CronJobsPage() {
  const { jobs, stats, loading, error, refresh } = useCronJobs();
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  const filteredJobs = filterJobs(jobs, statusFilter);

  // Sort: errors first, then by next run time, then alphabetically
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    // Disabled jobs last
    if (a.enabled !== b.enabled) return a.enabled ? -1 : 1;
    // Errors first
    const sa = resolveStatus(a);
    const sb = resolveStatus(b);
    if (sa === "error" && sb !== "error") return -1;
    if (sb === "error" && sa !== "error") return 1;
    // Then by next run
    const na = a.state?.nextRunAtMs ?? Infinity;
    const nb = b.state?.nextRunAtMs ?? Infinity;
    if (na !== nb) return na - nb;
    // Alphabetical fallback
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      {/* Header */}
      <header className="flex shrink-0 items-center gap-3 border-b border-border px-6 py-4">
        <Clock className="h-5 w-5 text-muted-foreground" strokeWidth={1.75} />
        <div className="flex-1">
          <h1 className="font-display text-2xl tracking-wide leading-none">
            Cron Jobs
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Planification et statut des taches automatisees
          </p>
        </div>

        {/* Refresh button */}
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
          Actualiser
        </button>
      </header>

      {/* Stats bar */}
      {!loading && !error && jobs.length > 0 && (
        <div className="shrink-0 border-b border-border px-6 py-3">
          <CronStatsBar stats={stats} />
        </div>
      )}

      {/* Filter bar */}
      {!loading && !error && jobs.length > 0 && (
        <div className="flex shrink-0 items-center gap-3 border-b border-border px-6 py-3">
          <Filter
            className="h-3.5 w-3.5 text-muted-foreground"
            strokeWidth={1.75}
          />
          <div className="flex items-center gap-1.5">
            {STATUS_FILTERS.map((filter) => {
              const isActive = filter.value === statusFilter;
              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setStatusFilter(filter.value)}
                  className={`rounded-full px-3 py-1 text-[11px] font-semibold transition-colors ${
                    isActive
                      ? filter.className
                      : "bg-transparent text-muted-foreground hover:bg-surface-2"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <span className="ml-auto text-[11px] text-muted-foreground">
            {sortedJobs.length} job{sortedJobs.length > 1 ? "s" : ""}
            {statusFilter !== "all" ? ` (filtre: ${statusFilter})` : ""}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Loading state */}
        {loading && (
          <div className="flex flex-col items-center justify-center gap-3 py-20">
            <Loader2
              className="h-8 w-8 animate-spin text-muted-foreground"
              strokeWidth={1.5}
            />
            <p className="text-sm text-muted-foreground">
              Chargement des cron jobs...
            </p>
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div className="p-6">
            <div className="max-w-xl space-y-4">
              <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <AlertCircle
                    className="h-6 w-6 shrink-0 text-red-500"
                    strokeWidth={1.75}
                  />
                  <div>
                    <h2 className="font-semibold text-foreground">
                      Impossible de charger les cron jobs
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      {error}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && jobs.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-3 py-20">
            <Clock
              className="h-10 w-10 text-muted-foreground/50"
              strokeWidth={1.25}
            />
            <div className="text-center">
              <p className="text-sm font-medium text-foreground">
                Aucun cron job configure
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Les taches planifiees configurees dans cron/jobs.json
                apparaitront ici.
              </p>
            </div>
          </div>
        )}

        {/* Table */}
        {!loading && !error && sortedJobs.length > 0 && (
          <CronJobsTable jobs={sortedJobs} onRefresh={refresh} />
        )}

        {/* Empty filtered state */}
        {!loading && !error && jobs.length > 0 && sortedJobs.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-3 py-20">
            <Filter
              className="h-10 w-10 text-muted-foreground/50"
              strokeWidth={1.25}
            />
            <div className="text-center">
              <p className="text-sm font-medium text-foreground">
                Aucun job avec ce filtre
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Aucun cron job ne correspond au filtre &quot;{statusFilter}
                &quot;. Essayez un autre filtre.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
