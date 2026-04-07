"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Terminal,
  X,
  RefreshCw,
  Loader2,
  ChevronDown,
  ChevronRight,
  Coins,
  Zap,
  Clock,
  Settings2,
  AlertTriangle,
  Bot,
  Cpu,
  CircleDot,
  MessageSquare,
  Wrench,
  User,
} from "lucide-react";

// ── Types ──

type AcpSession = {
  sessionKey: string;
  sessionId: string;
  agentId: string;
  label?: string;
  sessionFile: string;
  state: "idle" | "running" | "pending" | "error";
  spawnedBy?: string;
  lastActivityAt?: number;
  acpxRecordId?: string;
  model?: string;
  messageCount: number;
  lastMessage?: string;
  totalUsage?: { input: number; output: number; cost: number };
};

type AcpEvent = {
  type: "message" | "system" | "session_update";
  sessionKey?: string;
  agentId?: string;
  timestamp: number;
  summary: string;
  role?: "user" | "assistant";
  model?: string;
  usage?: { input: number; output: number; cost: number };
  toolCalls?: Array<{ name: string; input: unknown }>;
};

type AcpConfig = {
  agents: string[];
};

// ── Helpers ──

const STATE_COLORS: Record<string, string> = {
  running: "text-blue-400",
  idle: "text-muted-foreground/60",
  pending: "text-purple-400",
  error: "text-red-400",
};

const STATE_BG: Record<string, string> = {
  running: "bg-blue-500/8 border-blue-500/20",
  idle: "bg-surface-1/30 border-border/30",
  pending: "bg-purple-500/5 border-purple-500/15",
  error: "bg-red-500/5 border-red-500/15",
};

const ROLE_COLORS: Record<string, string> = {
  user: "bg-violet-500/15 text-violet-400",
  assistant: "bg-surface-2/60 text-foreground/70",
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

function SessionCard({
  session,
  expanded,
  onToggle,
}: {
  session: AcpSession;
  expanded: boolean;
  onToggle: () => void;
}) {
  const isRunning = session.state === "running";

  return (
    <div
      className={`rounded-lg border transition-colors ${STATE_BG[session.state] ?? "bg-surface-1/30 border-border/30"}`}
    >
      <div
        className="flex items-center gap-2 px-3 py-2 cursor-pointer"
        onClick={onToggle}
      >
        {isRunning ? (
          <PulseDot color="bg-blue-400" />
        ) : (
          <CircleDot
            className={`h-3 w-3 shrink-0 ${STATE_COLORS[session.state] ?? "text-muted-foreground"}`}
          />
        )}

        <span className="flex-1 truncate font-mono text-[12px] text-foreground/90">
          {session.label ||
            session.sessionKey.split(":").pop()?.slice(0, 8) ||
            session.sessionId.slice(0, 8)}
        </span>

        <span
          className="rounded bg-surface-2/50 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
          title="Messages"
        >
          {session.messageCount}msg
        </span>

        {session.totalUsage && session.totalUsage.cost > 0 && (
          <span className="font-mono text-[10px] text-emerald-400/70">
            {formatCost(session.totalUsage.cost)}
          </span>
        )}

        {expanded ? (
          <ChevronDown className="h-3 w-3 shrink-0 text-muted-foreground/50" />
        ) : (
          <ChevronRight className="h-3 w-3 shrink-0 text-muted-foreground/50" />
        )}
      </div>

      {expanded && (
        <div className="space-y-1.5 border-t border-border/20 px-3 py-2">
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {session.model && (
              <span className="font-mono text-[11px] text-muted-foreground">
                <Cpu className="mr-1 inline h-3 w-3 opacity-50" />
                {session.model}
              </span>
            )}
            <span className="font-mono text-[11px] text-muted-foreground">
              <span className="opacity-50">Agent:</span> {session.agentId}
            </span>
            {session.totalUsage && (
              <span className="font-mono text-[11px] text-muted-foreground">
                <Zap className="mr-1 inline h-3 w-3 opacity-50" />
                {formatTokens(session.totalUsage.input)} in /{" "}
                {formatTokens(session.totalUsage.output)} out
              </span>
            )}
          </div>
          {session.lastMessage && (
            <pre className="max-h-24 overflow-y-auto whitespace-pre-wrap rounded-md bg-black/20 px-2.5 py-2 font-mono text-[11px] leading-relaxed text-foreground/60">
              {session.lastMessage}
            </pre>
          )}
        </div>
      )}
    </div>
  );
}

// ── Main Component ──

type AcpPanelProps = {
  onClose: () => void;
  focusedAgentId?: string;
};

export const AcpPanel = ({ onClose, focusedAgentId }: AcpPanelProps) => {
  const [sessions, setSessions] = useState<AcpSession[]>([]);
  const [events, setEvents] = useState<AcpEvent[]>([]);
  const [config, setConfig] = useState<AcpConfig | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedAgent, setSelectedAgent] = useState<string>(
    focusedAgentId || "opencode",
  );
  const [expandedKey, setExpandedKey] = useState<string | null>(null);
  const [showHistory, setShowHistory] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [roleFilter, setRoleFilter] = useState<"all" | "user" | "assistant">(
    "all",
  );
  const eventsEndRef = useRef<HTMLDivElement>(null);
  const eventSourceRef = useRef<EventSource | null>(null);

  // Sync selectedAgent with focused agent from parent
  useEffect(() => {
    if (focusedAgentId) setSelectedAgent(focusedAgentId);
  }, [focusedAgentId]);

  // Fetch config
  const fetchConfig = useCallback(async () => {
    try {
      const res = await fetch("/acp-bridge/api/config");
      if (!res.ok) throw new Error(`${res.status}`);
      const data = await res.json();
      setConfig(data);
      setError(null);
    } catch {
      setError("Cannot reach ACP Bridge plugin");
    }
  }, []);

  // Fetch sessions
  const fetchSessions = useCallback(async () => {
    try {
      const res = await fetch("/acp-bridge/api/status");
      if (!res.ok) return;
      const data = await res.json();
      setSessions(data.sessions ?? []);
    } catch {}
  }, []);

  // SSE connection
  useEffect(() => {
    if (!selectedAgent) return;
    const es = new EventSource(`/acp-bridge/api/events/${selectedAgent}`);
    eventSourceRef.current = es;
    es.onmessage = (e) => {
      try {
        const event: AcpEvent = JSON.parse(e.data);
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
    fetchSessions();
    const interval = setInterval(fetchSessions, 5000);
    return () => clearInterval(interval);
  }, [fetchConfig, fetchSessions]);

  // Clear events when switching agents
  useEffect(() => {
    setEvents([]);
    setExpandedKey(null);
  }, [selectedAgent]);

  const agentSessions = sessions.filter((s) => s.agentId === selectedAgent);
  const runningSessions = agentSessions.filter((s) => s.state === "running");
  const idleSessions = agentSessions.filter((s) => s.state !== "running");

  // Aggregate stats
  const stats = useMemo(() => {
    let totalInput = 0,
      totalOutput = 0,
      totalCost = 0,
      totalMessages = 0;
    for (const s of agentSessions) {
      totalMessages += s.messageCount;
      if (s.totalUsage) {
        totalInput += s.totalUsage.input;
        totalOutput += s.totalUsage.output;
        totalCost += s.totalUsage.cost;
      }
    }
    return {
      totalTokens: totalInput + totalOutput,
      totalCost,
      totalMessages,
      sessionCount: agentSessions.length,
    };
  }, [agentSessions]);

  // All running across ALL agents
  const allRunning = sessions.filter((s) => s.state === "running");

  const filteredEvents = useMemo(() => {
    if (roleFilter === "all") return events;
    return events.filter((ev) => ev.role === roleFilter);
  }, [events, roleFilter]);

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/60 px-3 py-2.5">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4 text-cyan-400" />
          <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-foreground">
            ACP Sessions
          </span>
          {runningSessions.length > 0 && (
            <span className="flex items-center gap-1 rounded-full bg-blue-500/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-blue-400">
              <PulseDot color="bg-blue-400" />
              {runningSessions.length}
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
              fetchSessions();
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

      {/* Quick status bar */}
      {config && (
        <div className="flex items-center gap-2 border-b border-border/60 px-3 py-2">
          {allRunning.length > 0 ? (
            <span className="flex items-center gap-1.5 rounded-md bg-blue-500/15 px-2.5 py-1 font-mono text-[12px] font-bold text-blue-400">
              <PulseDot color="bg-blue-400" />
              ACTIVE ({allRunning.length})
            </span>
          ) : (
            <span className="flex items-center gap-1.5 rounded-md bg-surface-2/50 px-2.5 py-1 font-mono text-[12px] font-bold text-muted-foreground/40">
              <span className="inline-flex h-2 w-2 rounded-full bg-muted-foreground/20" />
              IDLE
            </span>
          )}
          <span className="ml-auto rounded bg-surface-1 px-1.5 py-0.5 font-mono text-[11px] text-foreground/70">
            {selectedAgent}
          </span>
        </div>
      )}

      {/* Running sessions banner */}
      {runningSessions.length > 0 && (
        <div className="border-b border-blue-500/20 bg-blue-500/8 px-3 py-2">
          {runningSessions.map((s) => (
            <div key={s.sessionKey} className="flex items-center gap-2">
              <PulseDot color="bg-blue-400" />
              <span className="flex-1 truncate font-mono text-[12px] font-medium text-blue-300">
                {s.label || s.sessionKey.split(":").pop()?.slice(0, 8)}
              </span>
              <span className="rounded bg-blue-500/15 px-2 py-0.5 font-mono text-[11px] text-blue-400">
                {s.messageCount} msg
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Collapsible config / agent selector */}
      {showConfig && config && (
        <div className="space-y-2 border-b border-border/60 bg-surface-1/30 px-3 py-2.5">
          <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground/50">
            Monitored Agents
          </div>
          <div className="flex flex-wrap gap-1">
            {(config.agents ?? []).map((a) => (
              <button
                key={a}
                type="button"
                className={`rounded-md px-2 py-0.5 font-mono text-[11px] transition ${
                  selectedAgent === a
                    ? "bg-cyan-500/15 text-cyan-400"
                    : "bg-surface-2/50 text-muted-foreground hover:bg-surface-2"
                }`}
                onClick={() => setSelectedAgent(a)}
              >
                {a}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="min-h-0 flex-1 overflow-y-auto">
        {/* Session stats */}
        {stats.sessionCount > 0 && (
          <div className="flex flex-wrap gap-1.5 border-b border-border/60 px-3 py-2">
            <StatChip
              icon={MessageSquare}
              label="Total messages"
              value={`${stats.totalMessages}`}
            />
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
              label="Sessions"
              value={`${stats.sessionCount}`}
            />
          </div>
        )}

        {/* Active sessions */}
        {runningSessions.length > 0 && (
          <div className="border-b border-border/60 px-3 py-2">
            <div className="mb-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground/50">
              Active Sessions
            </div>
            <div className="space-y-1.5">
              {runningSessions.map((s) => (
                <SessionCard
                  key={s.sessionKey}
                  session={s}
                  expanded={expandedKey === s.sessionKey}
                  onToggle={() =>
                    setExpandedKey(
                      expandedKey === s.sessionKey ? null : s.sessionKey,
                    )
                  }
                />
              ))}
            </div>
          </div>
        )}

        {/* History (collapsible) */}
        {idleSessions.length > 0 && (
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
              History ({idleSessions.length})
            </button>
            {showHistory && (
              <div className="space-y-1.5">
                {idleSessions.slice(0, 20).map((s) => (
                  <SessionCard
                    key={s.sessionKey}
                    session={s}
                    expanded={expandedKey === s.sessionKey}
                    onToggle={() =>
                      setExpandedKey(
                        expandedKey === s.sessionKey ? null : s.sessionKey,
                      )
                    }
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
            <div className="flex gap-0.5">
              {(["all", "user", "assistant"] as const).map((f) => (
                <button
                  key={f}
                  type="button"
                  className={`rounded px-1.5 py-0.5 font-mono text-[9px] font-bold tracking-wider transition ${
                    roleFilter === f
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground/40 hover:text-muted-foreground/70"
                  }`}
                  onClick={() => setRoleFilter(f)}
                >
                  {f.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          {filteredEvents.length === 0 ? (
            <div className="flex flex-col items-center gap-2 py-8">
              <MessageSquare className="h-7 w-7 text-muted-foreground/15" />
              <span className="font-mono text-[12px] text-muted-foreground/40">
                {events.length === 0
                  ? "Waiting for ACP events..."
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
                    className={`shrink-0 rounded px-1.5 py-0.5 font-mono text-[9px] font-bold ${
                      ev.role === "user"
                        ? ROLE_COLORS.user
                        : ev.role === "assistant"
                          ? ROLE_COLORS.assistant
                          : "bg-surface-2 text-muted-foreground"
                    }`}
                  >
                    {ev.role === "user"
                      ? "USR"
                      : ev.role === "assistant"
                        ? "AI"
                        : "SYS"}
                  </span>
                  {ev.toolCalls && ev.toolCalls.length > 0 && (
                    <div className="flex flex-wrap gap-0.5">
                      {ev.toolCalls.map((tc, j) => (
                        <span
                          key={j}
                          className="shrink-0 rounded bg-amber-500/10 px-1 py-0.5 font-mono text-[8px] font-semibold text-amber-400/70"
                        >
                          {tc.name}
                        </span>
                      ))}
                    </div>
                  )}
                  <span className="flex-1 font-mono text-[11px] leading-relaxed text-foreground/70">
                    {ev.summary}
                    {ev.usage && ev.usage.cost > 0 && (
                      <span className="ml-1 text-emerald-400/50">
                        {formatCost(ev.usage.cost)}
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
    </div>
  );
};
