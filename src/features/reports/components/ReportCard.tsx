"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import {
  ChevronDown,
  ChevronRight,
  Clock,
  User,
  AlertTriangle,
  CheckCircle,
  XCircle,
} from "lucide-react";
import type { Report, ReportStatus } from "../types";

const ReactMarkdown = dynamic(() => import("react-markdown"), { ssr: false });

type ReportCardProps = {
  report: Report;
};

const STATUS_CONFIG: Record<
  ReportStatus,
  { label: string; className: string; icon: typeof CheckCircle }
> = {
  OK: {
    label: "OK",
    className: "bg-emerald-500/15 text-emerald-500",
    icon: CheckCircle,
  },
  ALERTE: {
    label: "ALERTE",
    className: "bg-yellow-500/15 text-yellow-500",
    icon: AlertTriangle,
  },
  CRITIQUE: {
    label: "CRITIQUE",
    className: "bg-red-500/15 text-red-500",
    icon: XCircle,
  },
};

function formatRelativeDate(timestamp: number): string {
  const now = Date.now();
  // Nextcloud timestamps are in seconds, convert to milliseconds
  const ms = timestamp * 1000;
  const diff = now - ms;

  const minutes = Math.floor(diff / 60_000);
  if (minutes < 1) return "A l'instant";
  if (minutes < 60) return `Il y a ${minutes} min`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `Il y a ${hours}h`;

  const days = Math.floor(hours / 24);
  if (days === 1) return "Hier";
  if (days < 7) return `Il y a ${days} jours`;

  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `Il y a ${weeks} sem.`;

  return new Date(ms).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export const ReportCard = ({ report }: ReportCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const statusInfo = report.status ? STATUS_CONFIG[report.status] : null;
  const StatusIcon = statusInfo?.icon;
  const isCritique = report.status === "CRITIQUE";

  return (
    <div
      className={`rounded-xl border bg-card transition-colors ${
        isCritique
          ? "border-red-500/40 border-l-4 border-l-red-500"
          : "border-border"
      }`}
    >
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center gap-3 p-4 text-left"
      >
        <div className="shrink-0 text-muted-foreground">
          {expanded ? (
            <ChevronDown className="h-4 w-4" strokeWidth={1.75} />
          ) : (
            <ChevronRight className="h-4 w-4" strokeWidth={1.75} />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="truncate text-sm font-semibold text-foreground">
              {report.title}
            </span>

            {report.agent && (
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                <User className="h-2.5 w-2.5" strokeWidth={2} />
                {report.agent}
              </span>
            )}

            {statusInfo && StatusIcon && (
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${statusInfo.className}`}
              >
                <StatusIcon className="h-2.5 w-2.5" strokeWidth={2} />
                {statusInfo.label}
              </span>
            )}
          </div>

          <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <Clock className="h-3 w-3" strokeWidth={1.75} />
            <span>{formatRelativeDate(report.modified)}</span>
            {report.category && (
              <>
                <span className="mx-1">-</span>
                <span>{report.category}</span>
              </>
            )}
          </div>
        </div>
      </button>

      {expanded && (
        <div className="border-t border-border px-4 pb-4 pt-3">
          <div className="prose prose-sm prose-invert max-w-none text-sm text-muted-foreground [&_h1]:text-base [&_h1]:font-bold [&_h1]:text-foreground [&_h2]:text-sm [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:text-sm [&_h3]:font-medium [&_h3]:text-foreground [&_a]:text-primary [&_code]:rounded [&_code]:bg-surface-2 [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-xs [&_pre]:rounded-lg [&_pre]:bg-surface-2 [&_pre]:p-3 [&_ul]:list-disc [&_ol]:list-decimal [&_li]:ml-4 [&_table]:w-full [&_th]:border [&_th]:border-border [&_th]:px-2 [&_th]:py-1 [&_td]:border [&_td]:border-border [&_td]:px-2 [&_td]:py-1">
            <ReactMarkdown>{report.content}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};
