"use client";

import { Search, Trash2, Download, FileJson, FileSpreadsheet, Database } from "lucide-react";
import { useTranslations } from "next-intl";
import type { LogLevel } from "../types";

type LogFilterBarProps = {
  level: LogLevel | "";
  agentId: string;
  search: string;
  agentIds: string[];
  onLevelChange: (level: LogLevel | "") => void;
  onAgentIdChange: (agentId: string) => void;
  onSearchChange: (search: string) => void;
  onClear: () => void;
  onExport: (format: "txt" | "json" | "csv") => void;
  logCount: number;
};

const LEVELS: { value: LogLevel | ""; labelKey: string }[] = [
  { value: "", labelKey: "levelAll" },
  { value: "debug", labelKey: "levelDebug" },
  { value: "info", labelKey: "levelInfo" },
  { value: "warn", labelKey: "levelWarn" },
  { value: "error", labelKey: "levelError" },
];

export const LogFilterBar = ({
  level,
  agentId,
  search,
  agentIds,
  onLevelChange,
  onAgentIdChange,
  onSearchChange,
  onClear,
  onExport,
  logCount,
}: LogFilterBarProps) => {
  const t = useTranslations("logs");

  return (
    <div className="flex flex-wrap items-center gap-2 border-b border-border px-5 py-2">
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute left-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t("searchPlaceholder")}
          className="ui-input w-full pl-7 text-xs"
        />
      </div>
      {/* Agent filter */}
      {agentIds.length > 0 && (
        <select
          value={agentId}
          onChange={(e) => onAgentIdChange(e.target.value)}
          className="rounded-md border border-border bg-surface-2 px-2 py-1 text-[10px] font-medium text-foreground"
        >
          <option value="">All agents</option>
          {agentIds.map((id) => (
            <option key={id} value={id}>{id}</option>
          ))}
        </select>
      )}
      <div className="flex gap-1">
        {LEVELS.map((l) => (
          <button
            key={l.value}
            type="button"
            onClick={() => onLevelChange(l.value)}
            className={`rounded-full px-2 py-0.5 text-[10px] font-semibold transition-colors ${
              level === l.value
                ? "bg-primary text-primary-foreground"
                : "bg-surface-2 text-muted-foreground hover:bg-surface-3"
            }`}
          >
            {t(l.labelKey)}
          </button>
        ))}
      </div>
      <span className="text-[10px] text-muted-foreground">
        {logCount} {t("entries")}
      </span>
      {/* Export dropdown */}
      <div className="flex gap-0.5">
        <button type="button" onClick={() => onExport("txt")} className="ui-btn-icon xs" aria-label={t("export")} title="Export TXT">
          <Download className="h-3 w-3" />
        </button>
        <button type="button" onClick={() => onExport("json")} className="ui-btn-icon xs" aria-label="Export JSON" title="Export JSON">
          <FileJson className="h-3 w-3" />
        </button>
        <button type="button" onClick={() => onExport("csv")} className="ui-btn-icon xs" aria-label="Export CSV" title="Export CSV">
          <FileSpreadsheet className="h-3 w-3" />
        </button>
        <button
          type="button"
          onClick={() => {
            const params = new URLSearchParams({ format: "csv", limit: "1000" });
            if (level) params.set("level", level);
            window.open(`/api/studio/logs?${params.toString()}`);
          }}
          className="ui-btn-icon xs"
          aria-label="Export CSV from DB"
          title="Export CSV (server DB)"
        >
          <Database className="h-3 w-3" />
        </button>
      </div>
      <button type="button" onClick={onClear} className="ui-btn-icon xs text-destructive" aria-label={t("clear")}>
        <Trash2 className="h-3 w-3" />
      </button>
    </div>
  );
};
