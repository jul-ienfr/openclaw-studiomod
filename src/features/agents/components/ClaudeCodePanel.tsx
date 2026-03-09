"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Terminal,
  X,
  RefreshCw,
  Power,
  Loader2,
  ChevronDown,
  ChevronRight,
  Square,
  Coins,
  Zap,
  Clock,
  CheckCircle,
} from "lucide-react";

// ── Types ──

type TokenUsage = {
  inputTokens: number;
  outputTokens: number;
  cacheCreationTokens: number;
  cacheReadTokens: number;
};

type ProcessInfo = {
  id: string;
  agent: string;
  status:
    | "running"
    | "completed"
    | "error"
    | "cancelled"
    | "timeout"
    | "queued";
  task: string;
  startedAt: number;
  endedAt?: number;
  elapsed: string;
  error?: string;
  model?: string;
  usage?: TokenUsage;
  costUsd?: number;
  turnCount?: number;
  filesModified?: string[];
  outputPreview?: string;
  queuedAt?: number;
};

type QueueInfo = {
  running: number;
  available: number;
  waiting: number;
  max: number;
};

type StreamEvent = {
  type: string;
  subtype?: string;
  timestamp: number;
  summary: string;
  processId?: string;
  costUsd?: number;
  turnCount?: number;
};

type BridgeConfig = {
  useProxy: boolean;
  model: string;
  maxConcurrent: number;
  proxyUrl: string;
  agents: string[];
};

type EventFilter = "ALL" | "SYS" | "TOOL" | "AI" | "ERROR";

// ── Helpers ──

const EVENT_ICON: Record<string, string> = {
  system: "SYS",
  assistant: "AI",
  tool_use: "TOOL",
  tool_result: "RES",
  result: "DONE",
};

const EVENT_CATEGORY: Record<string, EventFilter> = {
  system: "SYS",
  tool_use: "TOOL",
  tool_result: "TOOL",
  assistant: "AI",
  result: "AI",
};

const STATUS_COLORS: Record<string, string> = {
  running: "text-blue-400",
  completed: "text-emerald-400",
  error: "text-red-400",
  cancelled: "text-yellow-400",
  timeout: "text-orange-400",
  queued: "text-purple-400",
};

function formatTokens(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`;
  return String(n);
}

function formatCost(usd: number): string {
  if (usd < 0.001) return "<$0.001";
  if (usd < 1) return `$${usd.toFixed(3)}`;
  return `$${usd.toFixed(2)}`;
}

function formatDuration(ms: number): string {
  if (ms < 1000) return `${ms}ms`;
  const s = Math.round(ms / 1000);
  return s < 60 ? `${s}s` : `${Math.floor(s / 60)}m${s % 60}s`;
}

function computeSessionStats(processes: ProcessInfo[]) {
  const finished = processes.filter(
    (p) => p.status !== "running" && p.status !== "queued",
  );
  const completed = finished.filter((p) => p.status === "completed");

  let totalInput = 0,
    totalOutput = 0,
    totalCost = 0,
    totalDuration = 0;
  for (const p of finished) {
    totalInput += p.usage?.inputTokens ?? 0;
    totalOutput += p.usage?.outputTokens ?? 0;
    totalCost += p.costUsd ?? 0;
    if (p.startedAt && p.endedAt) totalDuration += p.endedAt - p.startedAt;
  }

  return {
    totalTokens: totalInput + totalOutput,
    totalCost,
    avgDurationMs: finished.length > 0 ? totalDuration / finished.length : 0,
    completedCount: completed.length,
    totalCount: finished.length,
    successRate:
      finished.length > 0
        ? Math.round((completed.length / finished.length) * 100)
        : 0,
  };
}

// ── Live timer hook ──

function useLiveTimer(processes: ProcessInfo[]): number {
  const [tick, setTick] = useState(0);
  const hasRunning = processes.some((p) => p.status === "running");
  useEffect(() => {
    if (!hasRunning) return;
    const id = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, [hasRunning]);
  return tick;
}

function liveElapsed(startedAt: number): string {
  const ms = Date.now() - startedAt;
  if (ms < 1000) return "<1s";
  const s = Math.floor(ms / 1000);
  return s < 60 ? `${s}s` : `${Math.floor(s / 60)}m${s % 60}s`;
}

// ── Component ──

type ClaudeCodePanelProps = {
  onClose: () => void;
};

export const ClaudeCodePanel = ({ onClose }: ClaudeCodePanelProps) => {
  const [processes, setProcesses] = useState<ProcessInfo[]>([]);
  const [queueInfo, setQueueInfo] = useState<QueueInfo | null>(null);
  const [events, setEvents] = useState<StreamEvent[]>([]);
  const [config, setConfig] = useState<BridgeConfig | null>(null);
  const [proxyToggling, setProxyToggling] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedAgent, setSelectedAgent] = useState<string>("studio-dev");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showHistory, setShowHistory] = useState(false);
  const [eventFilter, setEventFilter] = useState<EventFilter>("ALL");
  const eventsEndRef = useRef<HTMLDivElement>(null);
  const eventSourceRef = useRef<EventSource | null>(null);

  useLiveTimer(processes);

  // Fetch config
  const fetchConfig = useCallback(async () => {
    try {
      const res = await fetch("/claude-code/api/config");
      if (!res.ok) throw new Error(`${res.status}`);
      const data = await res.json();
      setConfig(data);
      setError(null);
    } catch {
      setError("Cannot reach Claude Code Bridge plugin");
    }
  }, []);

  // Fetch processes
  const fetchProcesses = useCallback(async () => {
    try {
      const res = await fetch("/claude-code/api/status");
      if (!res.ok) return;
      const data = await res.json();
      // Backward compat: handle both array (old) and object (new)
      if (Array.isArray(data)) {
        setProcesses(data);
        setQueueInfo(null);
      } else {
        setProcesses(data.processes ?? []);
        setQueueInfo(data.queue ?? null);
      }
    } catch {}
  }, []);

  // Toggle proxy
  const toggleProxy = useCallback(async () => {
    if (!config) return;
    setProxyToggling(true);
    try {
      const res = await fetch("/claude-code/api/config", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ useProxy: !config.useProxy }),
      });
      if (res.ok) setConfig(await res.json());
    } catch {}
    setProxyToggling(false);
  }, [config]);

  // Change model
  const changeModel = useCallback(
    async (model: string) => {
      if (!config) return;
      try {
        const res = await fetch("/claude-code/api/config", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ model }),
        });
        if (res.ok) setConfig(await res.json());
      } catch {}
    },
    [config],
  );

  // Change max concurrent slots
  const changeMaxConcurrent = useCallback(
    async (maxConcurrent: number) => {
      if (!config) return;
      try {
        const res = await fetch("/claude-code/api/config", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ maxConcurrent }),
        });
        if (res.ok) setConfig(await res.json());
      } catch {}
    },
    [config],
  );

  // Cancel process
  const cancelProcess = useCallback(
    async (processId: string) => {
      try {
        await fetch("/claude-code/api/cancel", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ processId }),
        });
        fetchProcesses();
      } catch {}
    },
    [fetchProcesses],
  );

  // SSE connection
  useEffect(() => {
    if (!selectedAgent) return;
    const es = new EventSource(`/claude-code/api/events/${selectedAgent}`);
    eventSourceRef.current = es;
    es.onmessage = (e) => {
      try {
        const event: StreamEvent = JSON.parse(e.data);
        setEvents((prev) => {
          const next = [...prev, event];
          return next.length > 200 ? next.slice(-200) : next;
        });
      } catch {}
    };
    es.onerror = () => {};
    return () => {
      es.close();
      eventSourceRef.current = null;
    };
  }, [selectedAgent]);

  // Auto-scroll events
  useEffect(() => {
    eventsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [events]);

  // Initial load + polling
  useEffect(() => {
    fetchConfig();
    fetchProcesses();
    const interval = setInterval(fetchProcesses, 5000);
    return () => clearInterval(interval);
  }, [fetchConfig, fetchProcesses]);

  const active = processes.filter(
    (p) => p.status === "running" || p.status === "queued",
  );
  const completed = processes.filter(
    (p) => p.status !== "running" && p.status !== "queued",
  );
  const runningCount = active.filter((p) => p.status === "running").length;
  const stats = computeSessionStats(processes);

  const filteredEvents =
    eventFilter === "ALL"
      ? events
      : events.filter(
          (ev) => (EVENT_CATEGORY[ev.type] ?? "SYS") === eventFilter,
        );

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-primary" />
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground">
            Claude Code
          </span>
          {runningCount > 0 && (
            <span className="rounded-full bg-blue-500/20 px-2 py-0.5 font-mono text-[9px] font-semibold text-blue-400">
              {runningCount} running
            </span>
          )}
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="ui-btn-icon ui-btn-icon-xs"
            onClick={() => {
              fetchConfig();
              fetchProcesses();
            }}
            title="Refresh"
          >
            <RefreshCw className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            className="ui-btn-icon ui-btn-icon-xs"
            onClick={onClose}
            title="Close"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {error && (
        <div className="px-4 py-3">
          <div className="rounded-md bg-red-500/10 px-3 py-2 font-mono text-[11px] text-red-400">
            {error}
          </div>
        </div>
      )}

      {/* Config bar */}
      {config && (
        <div className="flex flex-wrap items-center gap-3 border-b border-border/60 px-4 py-2">
          <button
            type="button"
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.06em] transition ${
              config.useProxy
                ? "bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25"
                : "bg-surface-2 text-muted-foreground hover:bg-surface-3"
            }`}
            onClick={toggleProxy}
            disabled={proxyToggling}
            title={config.useProxy ? "Proxy ON" : "Proxy OFF"}
          >
            {proxyToggling ? (
              <Loader2 className="h-3 w-3 animate-spin" />
            ) : (
              <Power className="h-3 w-3" />
            )}
            Proxy {config.useProxy ? "ON" : "OFF"}
          </button>

          <select
            className="rounded-md border border-border/60 bg-surface-1 px-2 py-1 font-mono text-[10px] text-foreground"
            value={config.model}
            onChange={(e) => changeModel(e.target.value)}
          >
            <option value="sonnet">sonnet</option>
            <option value="opus">opus</option>
            <option value="haiku">haiku</option>
          </select>

          <span className="flex items-center gap-1 font-mono text-[10px] text-muted-foreground">
            Slots:{" "}
            <span className="text-foreground">
              {queueInfo?.running ?? runningCount}
            </span>
            /
            <select
              className="rounded border border-border/60 bg-surface-1 px-1 py-0.5 font-mono text-[10px] text-foreground"
              value={config.maxConcurrent}
              onChange={(e) => changeMaxConcurrent(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </span>

          <select
            className="ml-auto rounded-md border border-border/60 bg-surface-1 px-2 py-1 font-mono text-[10px] text-foreground"
            value={selectedAgent}
            onChange={(e) => {
              setEvents([]);
              setSelectedAgent(e.target.value);
            }}
          >
            {(config.agents ?? []).map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Session stats */}
      {stats.totalCount > 0 && (
        <div className="flex flex-wrap items-center gap-2 border-b border-border/60 px-4 py-1.5">
          <span className="flex items-center gap-1 font-mono text-[9px] text-muted-foreground">
            <Zap className="h-2.5 w-2.5" />
            {formatTokens(stats.totalTokens)} tok
          </span>
          <span className="flex items-center gap-1 font-mono text-[9px] text-muted-foreground">
            <Coins className="h-2.5 w-2.5" />
            {formatCost(stats.totalCost)}
          </span>
          <span className="flex items-center gap-1 font-mono text-[9px] text-muted-foreground">
            <Clock className="h-2.5 w-2.5" />
            avg {formatDuration(stats.avgDurationMs)}
          </span>
          <span className="flex items-center gap-1 font-mono text-[9px] text-muted-foreground">
            <CheckCircle className="h-2.5 w-2.5" />
            {stats.successRate}% ({stats.completedCount}/{stats.totalCount})
          </span>
        </div>
      )}

      {/* Queue visualization */}
      {queueInfo && queueInfo.waiting > 0 && (
        <div className="flex items-center gap-2 border-b border-border/60 bg-purple-500/5 px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500" />
          </span>
          <span className="font-mono text-[10px] text-purple-400">
            Queue: {queueInfo.waiting} waiting | {queueInfo.running}/
            {queueInfo.max} slots
          </span>
        </div>
      )}

      <div className="min-h-0 flex-1 overflow-y-auto">
        {/* Active processes */}
        {active.length > 0 && (
          <div className="border-b border-border/60 px-4 py-2">
            <div className="mb-1 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Active
            </div>
            <div className="space-y-1">
              {active.map((p) => (
                <div key={p.id}>
                  <div
                    className="flex items-center gap-2 rounded-md bg-surface-1/50 px-2.5 py-1.5 cursor-pointer hover:bg-surface-1"
                    onClick={() =>
                      setExpandedId(expandedId === p.id ? null : p.id)
                    }
                  >
                    <span
                      className={`shrink-0 font-mono text-[8px] font-bold uppercase ${STATUS_COLORS[p.status] ?? "text-muted-foreground"}`}
                    >
                      {p.status}
                    </span>
                    <span className="flex-1 truncate font-mono text-[10px] text-foreground">
                      {p.task}
                    </span>
                    {p.turnCount != null && p.turnCount > 0 && (
                      <span className="font-mono text-[8px] text-muted-foreground">
                        {p.turnCount}t
                      </span>
                    )}
                    <span className="font-mono text-[9px] text-muted-foreground">
                      {p.status === "running"
                        ? liveElapsed(p.startedAt)
                        : p.elapsed}
                    </span>
                    {p.costUsd != null && (
                      <span className="font-mono text-[8px] text-emerald-400/70">
                        {formatCost(p.costUsd)}
                      </span>
                    )}
                    {p.status === "running" && (
                      <button
                        type="button"
                        className="shrink-0 rounded p-0.5 text-red-400/60 hover:bg-red-500/10 hover:text-red-400"
                        onClick={(e) => {
                          e.stopPropagation();
                          cancelProcess(p.id);
                        }}
                        title="Cancel"
                      >
                        <Square className="h-3 w-3" />
                      </button>
                    )}
                  </div>
                  {expandedId === p.id && (
                    <div className="ml-2 mt-1 space-y-1 rounded bg-surface-1/30 px-2.5 py-2">
                      {p.model && (
                        <div className="font-mono text-[9px] text-muted-foreground">
                          Model:{" "}
                          <span className="text-foreground">{p.model}</span>
                        </div>
                      )}
                      {p.usage && (
                        <div className="font-mono text-[9px] text-muted-foreground">
                          Tokens:{" "}
                          <span className="text-foreground">
                            {formatTokens(p.usage.inputTokens)}
                          </span>{" "}
                          in /{" "}
                          <span className="text-foreground">
                            {formatTokens(p.usage.outputTokens)}
                          </span>{" "}
                          out
                          {p.usage.cacheReadTokens > 0 && (
                            <>
                              {" "}
                              | cache: {formatTokens(p.usage.cacheReadTokens)}
                            </>
                          )}
                        </div>
                      )}
                      {p.filesModified && p.filesModified.length > 0 && (
                        <div className="font-mono text-[9px] text-muted-foreground">
                          Files:{" "}
                          {p.filesModified.map((f, i) => (
                            <span key={i} className="text-foreground">
                              {i > 0 ? ", " : ""}
                              {f}
                            </span>
                          ))}
                        </div>
                      )}
                      {p.outputPreview && (
                        <pre className="mt-1 max-h-40 overflow-y-auto whitespace-pre-wrap rounded bg-surface-2/50 px-2 py-1.5 font-mono text-[9px] leading-relaxed text-foreground/70">
                          {p.outputPreview}
                        </pre>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* History (collapsible) */}
        {completed.length > 0 && (
          <div className="border-b border-border/60 px-4 py-2">
            <button
              type="button"
              className="mb-1 flex items-center gap-1 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground"
              onClick={() => setShowHistory(!showHistory)}
            >
              {showHistory ? (
                <ChevronDown className="h-3 w-3" />
              ) : (
                <ChevronRight className="h-3 w-3" />
              )}
              History ({completed.length})
            </button>
            {showHistory && (
              <div className="space-y-1">
                {completed.map((p) => (
                  <div key={p.id}>
                    <div
                      className="flex items-center gap-2 rounded-md bg-surface-1/30 px-2.5 py-1.5 cursor-pointer hover:bg-surface-1/50"
                      onClick={() =>
                        setExpandedId(expandedId === p.id ? null : p.id)
                      }
                    >
                      <span
                        className={`shrink-0 font-mono text-[8px] font-bold uppercase ${STATUS_COLORS[p.status] ?? "text-muted-foreground"}`}
                      >
                        {p.status === "completed"
                          ? "OK"
                          : p.status.slice(0, 3).toUpperCase()}
                      </span>
                      <span className="flex-1 truncate font-mono text-[10px] text-foreground/70">
                        {p.task}
                      </span>
                      {p.turnCount != null && p.turnCount > 0 && (
                        <span className="font-mono text-[8px] text-muted-foreground">
                          {p.turnCount}t
                        </span>
                      )}
                      <span className="font-mono text-[9px] text-muted-foreground">
                        {p.elapsed}
                      </span>
                      {p.costUsd != null && (
                        <span className="font-mono text-[8px] text-emerald-400/70">
                          {formatCost(p.costUsd)}
                        </span>
                      )}
                    </div>
                    {expandedId === p.id && (
                      <div className="ml-2 mt-1 space-y-1 rounded bg-surface-1/30 px-2.5 py-2">
                        {p.model && (
                          <div className="font-mono text-[9px] text-muted-foreground">
                            Model:{" "}
                            <span className="text-foreground">{p.model}</span>
                          </div>
                        )}
                        {p.usage && (
                          <div className="font-mono text-[9px] text-muted-foreground">
                            Tokens:{" "}
                            <span className="text-foreground">
                              {formatTokens(p.usage.inputTokens)}
                            </span>{" "}
                            in /{" "}
                            <span className="text-foreground">
                              {formatTokens(p.usage.outputTokens)}
                            </span>{" "}
                            out
                            {p.usage.cacheReadTokens > 0 && (
                              <>
                                {" "}
                                | cache: {formatTokens(p.usage.cacheReadTokens)}
                              </>
                            )}
                          </div>
                        )}
                        {p.error && (
                          <div className="font-mono text-[9px] text-red-400">
                            Error: {p.error}
                          </div>
                        )}
                        {p.filesModified && p.filesModified.length > 0 && (
                          <div className="font-mono text-[9px] text-muted-foreground">
                            Files:{" "}
                            {p.filesModified.map((f, i) => (
                              <span key={i} className="text-foreground">
                                {i > 0 ? ", " : ""}
                                {f}
                              </span>
                            ))}
                          </div>
                        )}
                        {p.outputPreview && (
                          <pre className="mt-1 max-h-40 overflow-y-auto whitespace-pre-wrap rounded bg-surface-2/50 px-2 py-1.5 font-mono text-[9px] leading-relaxed text-foreground/70">
                            {p.outputPreview}
                          </pre>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Live events */}
        <div className="px-4 py-2">
          <div className="mb-1 flex items-center justify-between">
            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Events — {selectedAgent}
            </span>
            <div className="flex gap-0.5">
              {(["ALL", "SYS", "TOOL", "AI", "ERROR"] as EventFilter[]).map(
                (f) => (
                  <button
                    key={f}
                    type="button"
                    className={`rounded px-1.5 py-0.5 font-mono text-[7px] font-bold tracking-wider transition ${
                      eventFilter === f
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground/50 hover:text-muted-foreground"
                    }`}
                    onClick={() => setEventFilter(f)}
                  >
                    {f}
                  </button>
                ),
              )}
            </div>
          </div>
          {filteredEvents.length === 0 ? (
            <div className="py-8 text-center font-mono text-[11px] text-muted-foreground">
              {events.length === 0
                ? "Waiting for Claude Code events..."
                : "No events match filter"}
            </div>
          ) : (
            <div className="space-y-0.5">
              {filteredEvents.map((ev, i) => (
                <div key={i} className="flex items-start gap-2 py-0.5">
                  <span className="shrink-0 rounded bg-surface-2 px-1.5 py-0.5 font-mono text-[8px] font-bold text-muted-foreground">
                    {EVENT_ICON[ev.type] ?? ev.type.slice(0, 4).toUpperCase()}
                  </span>
                  <span className="flex-1 font-mono text-[10px] leading-relaxed text-foreground/80">
                    {ev.summary}
                    {ev.costUsd != null && (
                      <span className="ml-1 text-emerald-400/60">
                        ({formatCost(ev.costUsd)})
                      </span>
                    )}
                  </span>
                  <span className="shrink-0 font-mono text-[8px] text-muted-foreground/60">
                    {new Date(ev.timestamp).toLocaleTimeString("fr-FR", {
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    })}
                  </span>
                </div>
              ))}
              <div ref={eventsEndRef} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
