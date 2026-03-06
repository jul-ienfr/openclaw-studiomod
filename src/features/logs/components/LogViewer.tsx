"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useTranslations } from "next-intl";
import { ScrollText } from "lucide-react";
import type { LogLevel, LogEntry } from "../types";
import {
  initLogStore,
  getLogs,
  clearLogs,
  exportLogs,
  exportLogsJson,
  exportLogsCsv,
  getLogCount,
  getUniqueAgentIds,
} from "../logStore";
import { LogFilterBar } from "./LogFilterBar";

const LEVEL_COLORS: Record<LogLevel, string> = {
  debug: "text-muted-foreground",
  info: "text-blue-500",
  warn: "text-amber-500",
  error: "text-destructive",
};

const LogRow = ({ entry }: { entry: LogEntry }) => (
  <div className="flex gap-2 border-b border-border/50 px-5 py-1 font-mono text-[11px] hover:bg-surface-2">
    <span className="shrink-0 text-muted-foreground">
      {new Date(entry.timestamp).toLocaleTimeString()}
    </span>
    <span
      className={`w-10 shrink-0 font-semibold uppercase ${LEVEL_COLORS[entry.level]}`}
    >
      {entry.level}
    </span>
    <span className="shrink-0 text-primary">[{entry.agentId}]</span>
    <span className="min-w-0 flex-1 break-all text-foreground">
      {entry.message}
    </span>
  </div>
);

function downloadBlob(content: string, filename: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export const LogViewer = () => {
  const t = useTranslations("logs");
  const [level, setLevel] = useState<LogLevel | "">("");
  const [agentId, setAgentId] = useState("");
  const [search, setSearch] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    initLogStore();
  }, []);

  const entries = useMemo(
    () =>
      getLogs({
        level: level || undefined,
        agentId: agentId || undefined,
        search: search || undefined,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [level, agentId, search, refreshKey],
  );

  const agentIds = useMemo(
    () => getUniqueAgentIds(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [refreshKey],
  );

  const virtualizer = useVirtualizer({
    count: entries.length,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => 32,
    overscan: 10,
  });

  const logCount = getLogCount();

  useEffect(() => {
    if (autoScroll && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [entries, autoScroll]);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    setAutoScroll(scrollHeight - scrollTop - clientHeight < 50);
  };

  const handleClear = useCallback(() => {
    clearLogs();
    setRefreshKey((k) => k + 1);
  }, []);

  const handleExport = useCallback((format: "txt" | "json" | "csv") => {
    const filter = {
      level: level || undefined,
      agentId: agentId || undefined,
      search: search || undefined,
    };
    const dateSuffix = new Date().toISOString().slice(0, 10);
    switch (format) {
      case "json": {
        const json = exportLogsJson(filter);
        downloadBlob(json, `openclaw-logs-${dateSuffix}.json`, "application/json");
        break;
      }
      case "csv": {
        const csv = exportLogsCsv(filter);
        downloadBlob(csv, `openclaw-logs-${dateSuffix}.csv`, "text/csv");
        break;
      }
      default: {
        const text = exportLogs(filter);
        downloadBlob(text, `openclaw-logs-${dateSuffix}.txt`, "text/plain");
        break;
      }
    }
  }, [level, agentId, search]);

  return (
    <div className="flex min-h-0 flex-1 flex-col" data-testid="log-viewer">
      <div className="flex items-center gap-2 border-b border-border px-5 py-3">
        <ScrollText className="h-4 w-4 text-primary" aria-hidden="true" />
        <h2 className="text-sm font-semibold text-foreground">{t("title")}</h2>
        <span className="rounded-full bg-surface-2 px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
          {logCount}
        </span>
      </div>

      <LogFilterBar
        level={level}
        agentId={agentId}
        search={search}
        agentIds={agentIds}
        onLevelChange={setLevel}
        onAgentIdChange={setAgentId}
        onSearchChange={setSearch}
        onClear={handleClear}
        onExport={handleExport}
        logCount={entries.length}
      />

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto"
      >
        {entries.length === 0 ? (
          <p className="py-8 text-center text-xs text-muted-foreground">
            {t("noLogs")}
          </p>
        ) : (
          <div
            className="relative w-full"
            style={{ height: `${virtualizer.getTotalSize()}px` }}
          >
            {virtualizer.getVirtualItems().map((virtualRow) => (
              <div
                key={virtualRow.key}
                className="absolute left-0 top-0 w-full"
                style={{
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                <LogRow entry={entries[virtualRow.index]} />
              </div>
            ))}
          </div>
        )}
      </div>

      {!autoScroll && (
        <button
          type="button"
          onClick={() => {
            setAutoScroll(true);
            if (scrollRef.current)
              scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
          }}
          className="mx-5 mb-2 rounded-md bg-primary px-3 py-1 text-[10px] font-semibold text-primary-foreground"
        >
          {t("scrollToBottom")}
        </button>
      )}
    </div>
  );
};
