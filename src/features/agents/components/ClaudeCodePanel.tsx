"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
  Settings2,
  AlertTriangle,
  FileCode,
  Bot,
  Cpu,
  CircleDot,
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

const MAIN_FILTER_CATEGORIES = ["SYS", "TOOL", "AI", "ERROR"] as const;

// ── Helpers ──

const EVENT_ICON: Record<string, string> = {
  system: "SYS",
  assistant: "AI",
  tool_use: "TOOL",
  tool_result: "RES",
  result: "DONE",
};

const EVENT_BADGE_COLORS: Record<string, string> = {
  system: "bg-blue-500/15 text-blue-400",
  assistant: "bg-violet-500/15 text-violet-400",
  tool_use: "bg-amber-500/15 text-amber-400",
  tool_result: "bg-amber-500/10 text-amber-400/70",
  result: "bg-emerald-500/15 text-emerald-400",
  error: "bg-red-500/15 text-red-400",
};

const EVENT_CATEGORY: Record<string, string> = {
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

const STATUS_BG: Record<string, string> = {
  running: "bg-blue-500/8 border-blue-500/20",
  completed: "bg-emerald-500/5 border-emerald-500/15",
  error: "bg-red-500/5 border-red-500/15",
  cancelled: "bg-yellow-500/5 border-yellow-500/15",
  timeout: "bg-orange-500/5 border-orange-500/15",
  queued: "bg-purple-500/5 border-purple-500/15",
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

function timeAgo(ts: number): string {
  const diff = Math.floor((Date.now() - ts) / 1000);
  if (diff < 5) return "now";
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  return new Date(ts).toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });
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

// ── Subcomponents ──

function PulseDot({ color = "bg-blue-400" }: { color?: string }) {
  return (
    <span className="relative flex h-2 w-2 shrink-0">
      <span
        className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${color}`}
      />
      <span className={`relative inline-flex h-2 w-2 rounded-full ${color}`} />
    </span>
  );
}

function StatChip({
  icon: Icon,
  label,
  value,
  color = "text-muted-foreground",
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  color?: string;
}) {
  return (
    <div
      className={`flex items-center gap-1 rounded-md bg-surface-1/50 px-2 py-1 font-mono text-[11px] ${color}`}
      title={label}
    >
      <Icon className="h-3 w-3 shrink-0 opacity-60" />
      <span className="text-foreground/80">{value}</span>
    </div>
  );
}

function ProcessCard({
  process: p,
  expanded,
  onToggle,
  onCancel,
  onFetchOutput,
  fullOutput,
}: {
  process: ProcessInfo;
  expanded: boolean;
  onToggle: () => void;
  onCancel?: () => void;
  onFetchOutput?: () => void;
  fullOutput?: string | null;
}) {
  const isRunning = p.status === "running";
  const isQueued = p.status === "queued";

  return (
    <div
      className={`rounded-lg border transition-colors ${STATUS_BG[p.status] ?? "bg-surface-1/30 border-border/30"}`}
    >
      <div
        className="flex items-center gap-2 px-3 py-2 cursor-pointer"
        onClick={onToggle}
      >
        {/* Status indicator */}
        {isRunning ? (
          <PulseDot color="bg-blue-400" />
        ) : isQueued ? (
          <PulseDot color="bg-purple-400" />
        ) : (
          <CircleDot
            className={`h-3 w-3 shrink-0 ${STATUS_COLORS[p.status] ?? "text-muted-foreground"}`}
          />
        )}

        {/* Task */}
        <span className="flex-1 truncate font-mono text-[12px] text-foreground/90">
          {p.task}
        </span>

        {/* Metrics */}
        {p.turnCount != null && p.turnCount > 0 && (
          <span
            className="rounded bg-surface-2/50 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
            title="Turns"
          >
            {p.turnCount}t
          </span>
        )}
        <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
          {isRunning ? liveElapsed(p.startedAt) : p.elapsed}
        </span>
        {p.costUsd != null && p.costUsd > 0 && (
          <span className="font-mono text-[10px] text-emerald-400/70">
            {formatCost(p.costUsd)}
          </span>
        )}

        {/* Cancel button */}
        {isRunning && onCancel && (
          <button
            type="button"
            className="shrink-0 rounded p-1 text-red-400/50 transition-colors hover:bg-red-500/15 hover:text-red-400"
            onClick={(e) => {
              e.stopPropagation();
              onCancel();
            }}
            title="Cancel"
          >
            <Square className="h-3 w-3" />
          </button>
        )}

        {/* Expand chevron */}
        {expanded ? (
          <ChevronDown className="h-3 w-3 shrink-0 text-muted-foreground/50" />
        ) : (
          <ChevronRight className="h-3 w-3 shrink-0 text-muted-foreground/50" />
        )}
      </div>

      {/* Expanded detail */}
      {expanded && (
        <div className="space-y-1.5 border-t border-border/20 px-3 py-2">
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {p.model && (
              <span className="font-mono text-[11px] text-muted-foreground">
                <Cpu className="mr-1 inline h-3 w-3 opacity-50" />
                {p.model}
              </span>
            )}
            {p.usage && (
              <span className="font-mono text-[11px] text-muted-foreground">
                <Zap className="mr-1 inline h-3 w-3 opacity-50" />
                {formatTokens(p.usage.inputTokens)} in /{" "}
                {formatTokens(p.usage.outputTokens)} out
                {p.usage.cacheReadTokens > 0 && (
                  <span className="opacity-60">
                    {" "}
                    (cache: {formatTokens(p.usage.cacheReadTokens)})
                  </span>
                )}
              </span>
            )}
          </div>

          {p.error && (
            <div className="flex items-start gap-1.5 rounded bg-red-500/10 px-2 py-1.5 font-mono text-[11px] text-red-400">
              <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0" />
              {p.error}
            </div>
          )}

          {p.filesModified && p.filesModified.length > 0 && (
            <div className="space-y-0.5">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60">
                Files modified
              </span>
              <div className="flex flex-wrap gap-1">
                {p.filesModified.map((f, i) => (
                  <span
                    key={i}
                    className="rounded bg-surface-2/50 px-1.5 py-0.5 font-mono text-[11px] text-foreground/70"
                  >
                    <FileCode className="mr-1 inline h-3 w-3 opacity-40" />
                    {f.split("/").pop()}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Output preview or full output */}
          {(fullOutput || p.outputPreview) && (
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60">
                  Output
                </span>
                {!fullOutput && onFetchOutput && p.status !== "running" && (
                  <button
                    type="button"
                    className="font-mono text-[10px] text-primary/60 hover:text-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      onFetchOutput();
                    }}
                  >
                    Load full
                  </button>
                )}
              </div>
              <pre className="mt-0.5 max-h-48 overflow-y-auto whitespace-pre-wrap rounded-md bg-black/20 px-2.5 py-2 font-mono text-[11px] leading-relaxed text-foreground/60">
                {fullOutput || p.outputPreview}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Main Component ──

type ClaudeCodePanelProps = {
  onClose: () => void;
  focusedAgentId?: string;
};

export const ClaudeCodePanel = ({
  onClose,
  focusedAgentId,
}: ClaudeCodePanelProps) => {
  const [processes, setProcesses] = useState<ProcessInfo[]>([]);
  const [queueInfo, setQueueInfo] = useState<QueueInfo | null>(null);
  const [events, setEvents] = useState<StreamEvent[]>([]);
  const [config, setConfig] = useState<BridgeConfig | null>(null);
  const [proxyToggling, setProxyToggling] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedAgent, setSelectedAgent] = useState<string>(
    focusedAgentId || "studio-dev",
  );
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showHistory, setShowHistory] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [eventFilter, setEventFilter] = useState<Set<string>>(new Set());
  const [fullOutputs, setFullOutputs] = useState<Record<string, string>>({});
  const eventsEndRef = useRef<HTMLDivElement>(null);
  const eventSourceRef = useRef<EventSource | null>(null);

  // Derive unique tool subtypes from events (for dynamic filter chips)
  const toolSubtypes = useMemo(() => {
    const subtypes = new Set<string>();
    for (const ev of events) {
      if (
        ev.type === "tool_use" &&
        ev.subtype &&
        ev.subtype !== "claude_code"
      ) {
        subtypes.add(ev.subtype);
      }
    }
    return [...subtypes].sort();
  }, [events]);

  const toggleFilter = useCallback((value: string) => {
    setEventFilter((prev) => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  }, []);

  // Is the focused agent a CC agent?
  const isCCAgent = config?.agents?.includes(selectedAgent) ?? false;

  // Sync selectedAgent with focused agent from parent
  useEffect(() => {
    if (focusedAgentId) setSelectedAgent(focusedAgentId);
  }, [focusedAgentId]);

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
      if (Array.isArray(data)) {
        setProcesses(data);
        setQueueInfo(null);
      } else {
        setProcesses(data.processes ?? []);
        setQueueInfo(data.queue ?? null);
      }
    } catch {}
  }, []);

  // Fetch full output for a process
  const fetchFullOutput = useCallback(async (processId: string) => {
    try {
      const res = await fetch(
        `/claude-code/api/output?id=${encodeURIComponent(processId)}`,
      );
      if (!res.ok) return;
      const data = await res.json();
      if (data.output) {
        setFullOutputs((prev) => ({ ...prev, [processId]: data.output }));
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
    if (!selectedAgent || !isCCAgent) return;
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
  }, [selectedAgent, isCCAgent]);

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

  // Clear events when switching agents
  useEffect(() => {
    setEvents([]);
    setExpandedId(null);
    setFullOutputs({});
  }, [selectedAgent]);

  const agentProcesses = processes.filter((p) => p.agent === selectedAgent);
  const active = agentProcesses.filter(
    (p) => p.status === "running" || p.status === "queued",
  );
  const completed = agentProcesses.filter(
    (p) => p.status !== "running" && p.status !== "queued",
  );
  const runningCount = active.filter((p) => p.status === "running").length;
  const stats = computeSessionStats(agentProcesses);

  // Global running across ALL agents (for the always-visible banner)
  const allRunning = processes.filter((p) => p.status === "running");
  const allQueued = processes.filter((p) => p.status === "queued");

  const filteredEvents = useMemo(() => {
    if (eventFilter.size === 0) return events;
    return events.filter((ev) => {
      // Check main category filter (SYS, TOOL, AI, ERROR)
      const category = EVENT_CATEGORY[ev.type];
      if (category && eventFilter.has(category)) return true;
      // Check specific tool subtype filter (Read, Edit, Bash, etc.)
      if (ev.subtype && eventFilter.has(ev.subtype)) return true;
      return false;
    });
  }, [events, eventFilter]);

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/60 px-3 py-2.5">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-primary" />
          <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-foreground">
            Claude Code
          </span>
          {runningCount > 0 && (
            <span className="flex items-center gap-1 rounded-full bg-blue-500/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-blue-400">
              <PulseDot color="bg-blue-400" />
              {runningCount}
            </span>
          )}
        </div>
        <div className="flex items-center gap-0.5">
          <button
            type="button"
            className="rounded p-1 text-muted-foreground/50 transition-colors hover:bg-surface-1 hover:text-muted-foreground"
            onClick={() => setShowConfig(!showConfig)}
            title="Settings"
          >
            <Settings2 className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            className="rounded p-1 text-muted-foreground/50 transition-colors hover:bg-surface-1 hover:text-muted-foreground"
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
            className="rounded p-1 text-muted-foreground/50 transition-colors hover:bg-surface-1 hover:text-muted-foreground"
            onClick={onClose}
            title="Close"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {error && (
        <div className="px-3 py-2">
          <div className="flex items-center gap-2 rounded-md bg-red-500/10 px-3 py-2 font-mono text-[12px] text-red-400">
            <AlertTriangle className="h-3 w-3 shrink-0" />
            {error}
          </div>
        </div>
      )}

      {/* Quick status bar (always visible) */}
      {config && (
        <div className="flex items-center gap-2 border-b border-border/60 px-3 py-2">
          {/* State indicator */}
          {allRunning.length > 0 ? (
            <span className="flex items-center gap-1.5 rounded-md bg-blue-500/15 px-2.5 py-1 font-mono text-[12px] font-bold text-blue-400">
              <PulseDot color="bg-blue-400" />
              ACTIVE ({allRunning.length}/{config.maxConcurrent})
            </span>
          ) : (
            <span className="flex items-center gap-1.5 rounded-md bg-surface-2/50 px-2.5 py-1 font-mono text-[12px] font-bold text-muted-foreground/40">
              <span className="inline-flex h-2 w-2 rounded-full bg-muted-foreground/20" />
              IDLE
            </span>
          )}

          <span
            className={`inline-flex items-center gap-1 rounded px-1.5 py-0.5 font-mono text-[11px] font-medium ${
              config.useProxy
                ? "bg-emerald-500/10 text-emerald-400"
                : "bg-surface-2 text-muted-foreground/60"
            }`}
          >
            <Power className="h-3 w-3" />
            {config.useProxy ? "ON" : "OFF"}
          </span>
          <span className="font-mono text-[11px] text-muted-foreground">
            {config.model}
          </span>
          <span className="ml-auto rounded bg-surface-1 px-1.5 py-0.5 font-mono text-[11px] text-foreground/70">
            {selectedAgent}
          </span>
        </div>
      )}

      {/* Active sessions banner — always visible when something is running */}
      {allRunning.length > 0 && (
        <div className="border-b border-blue-500/20 bg-blue-500/8 px-3 py-2">
          {allRunning.map((p) => (
            <div key={p.id} className="flex items-center gap-2">
              <PulseDot color="bg-blue-400" />
              <span className="flex-1 truncate font-mono text-[12px] font-medium text-blue-300">
                {p.task}
              </span>
              <span className="rounded bg-blue-500/15 px-2 py-0.5 font-mono text-[12px] font-bold tabular-nums text-blue-400">
                {liveElapsed(p.startedAt)}
              </span>
              {p.agent !== selectedAgent && (
                <span className="rounded bg-surface-2/50 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                  {p.agent}
                </span>
              )}
              <button
                type="button"
                className="shrink-0 rounded p-1 text-red-400/50 transition-colors hover:bg-red-500/15 hover:text-red-400"
                onClick={() => cancelProcess(p.id)}
                title="Cancel"
              >
                <Square className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
          {allQueued.length > 0 && (
            <div className="mt-1 flex items-center gap-2 font-mono text-[11px] text-purple-400">
              <PulseDot color="bg-purple-400" />
              {allQueued.length} queued
            </div>
          )}
        </div>
      )}

      {/* Collapsible config section */}
      {showConfig && config && (
        <div className="space-y-2 border-b border-border/60 bg-surface-1/30 px-3 py-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-[12px] font-semibold transition ${
                config.useProxy
                  ? "bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25"
                  : "bg-surface-2 text-muted-foreground hover:bg-surface-3"
              }`}
              onClick={toggleProxy}
              disabled={proxyToggling}
            >
              {proxyToggling ? (
                <Loader2 className="h-3 w-3 animate-spin" />
              ) : (
                <Power className="h-3 w-3" />
              )}
              Proxy {config.useProxy ? "ON" : "OFF"}
            </button>

            <select
              className="rounded-md border border-border/40 bg-surface-1 px-2 py-1 font-mono text-[12px] text-foreground"
              value={config.model}
              onChange={(e) => changeModel(e.target.value)}
            >
              <option value="sonnet">sonnet</option>
              <option value="opus">opus</option>
              <option value="haiku">haiku</option>
            </select>

            <span className="flex items-center gap-1 font-mono text-[12px] text-muted-foreground">
              Slots:
              <select
                className="rounded border border-border/40 bg-surface-1 px-1 py-0.5 font-mono text-[12px] text-foreground"
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
          </div>

          <div className="flex flex-wrap gap-1">
            {(config.agents ?? []).map((a) => (
              <button
                key={a}
                type="button"
                className={`rounded-md px-2 py-0.5 font-mono text-[11px] transition ${
                  selectedAgent === a
                    ? "bg-primary/15 text-primary"
                    : "bg-surface-2/50 text-muted-foreground hover:bg-surface-2"
                }`}
                onClick={() => {
                  setSelectedAgent(a);
                }}
              >
                {a}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Not a CC agent message */}
      {config && !isCCAgent && (
        <div className="flex flex-1 flex-col items-center justify-center gap-3 px-4 py-8">
          <Bot className="h-10 w-10 text-muted-foreground/20" />
          <div className="text-center">
            <div className="font-mono text-[13px] text-muted-foreground/60">
              {selectedAgent} doesn&apos;t use Claude Code
            </div>
            <div className="mt-1 font-mono text-[11px] text-muted-foreground/40">
              Configured agents: {config.agents?.join(", ") || "none"}
            </div>
          </div>
        </div>
      )}

      {/* Main content (only for CC agents) */}
      {(!config || isCCAgent) && (
        <div className="min-h-0 flex-1 overflow-y-auto">
          {/* Session stats */}
          {stats.totalCount > 0 && (
            <div className="flex flex-wrap gap-1.5 border-b border-border/60 px-3 py-2">
              <StatChip
                icon={Zap}
                label="Total tokens"
                value={`${formatTokens(stats.totalTokens)}`}
              />
              <StatChip
                icon={Coins}
                label="Total cost"
                value={formatCost(stats.totalCost)}
                color="text-emerald-400/70"
              />
              <StatChip
                icon={Clock}
                label="Avg duration"
                value={formatDuration(stats.avgDurationMs)}
              />
              <StatChip
                icon={CheckCircle}
                label="Success rate"
                value={`${stats.successRate}%`}
                color={
                  stats.successRate === 100
                    ? "text-emerald-400/70"
                    : "text-muted-foreground"
                }
              />
            </div>
          )}

          {/* Queue visualization */}
          {queueInfo && queueInfo.waiting > 0 && (
            <div className="flex items-center gap-2 border-b border-border/60 bg-purple-500/5 px-3 py-1.5">
              <PulseDot color="bg-purple-400" />
              <span className="font-mono text-[12px] text-purple-400">
                {queueInfo.waiting} waiting &middot; {queueInfo.running}/
                {queueInfo.max} slots
              </span>
            </div>
          )}

          {/* Active processes */}
          {active.length > 0 && (
            <div className="border-b border-border/60 px-3 py-2">
              <div className="mb-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground/50">
                Active
              </div>
              <div className="space-y-1.5">
                {active.map((p) => (
                  <ProcessCard
                    key={p.id}
                    process={p}
                    expanded={expandedId === p.id}
                    onToggle={() =>
                      setExpandedId(expandedId === p.id ? null : p.id)
                    }
                    onCancel={
                      p.status === "running"
                        ? () => cancelProcess(p.id)
                        : undefined
                    }
                    fullOutput={fullOutputs[p.id] ?? null}
                    onFetchOutput={() => fetchFullOutput(p.id)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* History (collapsible) */}
          {completed.length > 0 && (
            <div className="border-b border-border/60 px-3 py-2">
              <button
                type="button"
                className="mb-1.5 flex items-center gap-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground/50 hover:text-muted-foreground"
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
                <div className="space-y-1.5">
                  {completed.map((p) => (
                    <ProcessCard
                      key={p.id}
                      process={p}
                      expanded={expandedId === p.id}
                      onToggle={() =>
                        setExpandedId(expandedId === p.id ? null : p.id)
                      }
                      fullOutput={fullOutputs[p.id] ?? null}
                      onFetchOutput={() => fetchFullOutput(p.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Live events */}
          <div className="px-3 py-2">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground/50">
                Events
              </span>
              <div className="flex flex-wrap gap-0.5">
                <button
                  type="button"
                  className={`rounded px-1.5 py-0.5 font-mono text-[9px] font-bold tracking-wider transition ${
                    eventFilter.size === 0
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground/40 hover:text-muted-foreground/70"
                  }`}
                  onClick={() => setEventFilter(new Set())}
                >
                  ALL
                </button>
                {MAIN_FILTER_CATEGORIES.map((f) => (
                  <button
                    key={f}
                    type="button"
                    className={`rounded px-1.5 py-0.5 font-mono text-[9px] font-bold tracking-wider transition ${
                      eventFilter.has(f)
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground/40 hover:text-muted-foreground/70"
                    }`}
                    onClick={() => toggleFilter(f)}
                  >
                    {f}
                  </button>
                ))}
                {toolSubtypes.length > 0 && (
                  <>
                    <span className="self-center font-mono text-[7px] text-muted-foreground/30">
                      |
                    </span>
                    {toolSubtypes.map((st) => (
                      <button
                        key={st}
                        type="button"
                        className={`rounded px-1.5 py-0.5 font-mono text-[9px] font-bold tracking-wider transition ${
                          eventFilter.has(st)
                            ? "bg-cyan-500/20 text-cyan-400"
                            : "text-muted-foreground/40 hover:text-muted-foreground/70"
                        }`}
                        onClick={() => toggleFilter(st)}
                      >
                        {st}
                      </button>
                    ))}
                  </>
                )}
                {eventFilter.size > 0 && (
                  <button
                    type="button"
                    className="ml-1 font-mono text-[8px] text-muted-foreground/30 hover:text-muted-foreground/60"
                    onClick={() => setEventFilter(new Set())}
                  >
                    clear
                  </button>
                )}
              </div>
            </div>
            {filteredEvents.length === 0 ? (
              <div className="flex flex-col items-center gap-2 py-8">
                <Terminal className="h-7 w-7 text-muted-foreground/15" />
                <span className="font-mono text-[12px] text-muted-foreground/40">
                  {events.length === 0
                    ? "Waiting for events..."
                    : "No events match filter"}
                </span>
              </div>
            ) : (
              <div className="space-y-0.5">
                {[...filteredEvents].reverse().map((ev, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 rounded px-1 py-0.5 transition-colors hover:bg-surface-1/30"
                  >
                    <span
                      className={`shrink-0 rounded px-1.5 py-0.5 font-mono text-[9px] font-bold ${EVENT_BADGE_COLORS[ev.type] ?? "bg-surface-2 text-muted-foreground"}`}
                    >
                      {EVENT_ICON[ev.type] ?? ev.type.slice(0, 4).toUpperCase()}
                    </span>
                    {ev.type === "tool_use" &&
                      ev.subtype &&
                      ev.subtype !== "claude_code" && (
                        <span className="shrink-0 rounded bg-cyan-500/10 px-1 py-0.5 font-mono text-[8px] font-semibold text-cyan-400/70">
                          {ev.subtype}
                        </span>
                      )}
                    <span className="flex-1 font-mono text-[11px] leading-relaxed text-foreground/70">
                      {ev.summary}
                      {ev.costUsd != null && (
                        <span className="ml-1 text-emerald-400/50">
                          {formatCost(ev.costUsd)}
                        </span>
                      )}
                    </span>
                    <span className="shrink-0 font-mono text-[10px] text-muted-foreground/40">
                      {timeAgo(ev.timestamp)}
                    </span>
                  </div>
                ))}
                <div ref={eventsEndRef} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
