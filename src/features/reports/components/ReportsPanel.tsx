"use client";

import { useState } from "react";
import { Loader2, RefreshCw, FileText, Filter } from "lucide-react";
import { useReports } from "../hooks/useReports";
import { ReportCard } from "./ReportCard";
import type { ReportStatus } from "../types";

const STATUS_FILTERS: Array<{
  label: string;
  value: ReportStatus | null;
  className: string;
}> = [
  { label: "All", value: null, className: "bg-primary/10 text-primary" },
  { label: "OK", value: "OK", className: "bg-emerald-500/15 text-emerald-500" },
  {
    label: "ALERTE",
    value: "ALERTE",
    className: "bg-yellow-500/15 text-yellow-500",
  },
  {
    label: "CRITIQUE",
    value: "CRITIQUE",
    className: "bg-red-500/15 text-red-500",
  },
];

export function ReportsPanel() {
  const [statusFilter, setStatusFilter] = useState<ReportStatus | undefined>(
    undefined,
  );
  const { reports, loading, error, refresh } = useReports({
    status: statusFilter,
  });

  return (
    <div className="flex h-full flex-col overflow-hidden">
      {/* Toolbar */}
      <div className="flex shrink-0 items-center gap-3 border-b border-border px-5 py-3">
        <Filter
          className="h-3.5 w-3.5 text-muted-foreground"
          strokeWidth={1.75}
        />
        <div className="flex items-center gap-1.5">
          {STATUS_FILTERS.map((filter) => {
            const isActive =
              (filter.value === null && statusFilter === undefined) ||
              filter.value === statusFilter;
            return (
              <button
                key={filter.label}
                type="button"
                onClick={() => setStatusFilter(filter.value ?? undefined)}
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

        <div className="ml-auto flex items-center gap-2">
          {!loading && reports.length > 0 && (
            <span className="text-[11px] text-muted-foreground">
              {reports.length} report{reports.length !== 1 ? "s" : ""}
            </span>
          )}
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
      </div>

      {/* Content */}
      <div className="min-h-0 flex-1 overflow-y-auto p-5">
        {loading && reports.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-3 py-20">
            <Loader2
              className="h-8 w-8 animate-spin text-muted-foreground"
              strokeWidth={1.5}
            />
          </div>
        )}

        {!loading && error && (
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
            <p className="text-sm text-red-400">{error}</p>
          </div>
        )}

        {!loading && !error && reports.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-3 py-20">
            <FileText
              className="h-10 w-10 text-muted-foreground/50"
              strokeWidth={1.25}
            />
            <p className="text-sm text-muted-foreground">
              {statusFilter
                ? `No reports with status "${statusFilter}".`
                : "Reports will appear here once synced."}
            </p>
          </div>
        )}

        {!loading && !error && reports.length > 0 && (
          <div className="mx-auto max-w-3xl space-y-3">
            {reports.map((report) => (
              <ReportCard key={report.id} report={report} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
