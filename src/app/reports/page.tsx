"use client";

import { useState } from "react";
import {
  FileText,
  RefreshCw,
  Loader2,
  AlertCircle,
  Filter,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { useReports } from "@/features/reports/hooks/useReports";
import { ReportCard } from "@/features/reports/components/ReportCard";
import type { ReportStatus } from "@/features/reports/types";

const STATUS_FILTERS: Array<{
  label: string;
  value: ReportStatus | null;
  className: string;
}> = [
  { label: "Tous", value: null, className: "bg-primary/10 text-primary" },
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

export default function ReportsPage() {
  const [statusFilter, setStatusFilter] = useState<ReportStatus | undefined>(
    undefined,
  );

  const { reports, loading, error, refresh } = useReports({
    status: statusFilter,
  });

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      {/* Header */}
      <header className="flex shrink-0 items-center gap-3 border-b border-border px-6 py-4">
        <FileText
          className="h-5 w-5 text-muted-foreground"
          strokeWidth={1.75}
        />
        <div className="flex-1">
          <h1 className="font-display text-2xl tracking-wide leading-none">
            Rapports
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Synchronisation Nextcloud Notes
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

      {/* Filter bar */}
      <div className="flex shrink-0 items-center gap-3 border-b border-border px-6 py-3">
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

        {!loading && reports.length > 0 && (
          <span className="ml-auto text-[11px] text-muted-foreground">
            {reports.length} rapport{reports.length > 1 ? "s" : ""}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Loading state */}
        {loading && (
          <div className="flex flex-col items-center justify-center gap-3 py-20">
            <Loader2
              className="h-8 w-8 animate-spin text-muted-foreground"
              strokeWidth={1.5}
            />
            <p className="text-sm text-muted-foreground">
              Chargement des rapports...
            </p>
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div className="max-w-xl space-y-4">
            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-6 space-y-3">
              <div className="flex items-center gap-3">
                <AlertCircle
                  className="h-6 w-6 shrink-0 text-red-500"
                  strokeWidth={1.75}
                />
                <div>
                  <h2 className="font-semibold text-foreground">
                    Connexion Nextcloud impossible
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">{error}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Settings className="h-4 w-4" strokeWidth={1.75} />
              <span>Verifier la configuration dans </span>
              <Link href="/config" className="text-primary hover:underline">
                /config
              </Link>
              <span> ou le fichier </span>
              <code className="rounded bg-surface-2 px-1.5 py-0.5 text-xs">
                nextcloud-config.json
              </code>
            </div>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && reports.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-3 py-20">
            <FileText
              className="h-10 w-10 text-muted-foreground/50"
              strokeWidth={1.25}
            />
            <div className="text-center">
              <p className="text-sm font-medium text-foreground">
                Aucun rapport trouve
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {statusFilter
                  ? `Aucun rapport avec le statut "${statusFilter}". Essayez un autre filtre.`
                  : "Les rapports generes par les agents apparaitront ici une fois synchronises via Nextcloud Notes."}
              </p>
            </div>
          </div>
        )}

        {/* Reports grid */}
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
