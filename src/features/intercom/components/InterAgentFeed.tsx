"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useTranslations } from "next-intl";
import {
  MessageSquare,
  ArrowRight,
  RefreshCw,
  Zap,
  Bot,
  ChevronLeft,
} from "lucide-react";
import { useDocumentVisibility } from "@/hooks/useDocumentVisibility";

type ApiMessage = {
  id: string;
  from: string;
  to: string;
  sessionKey: string;
  label?: string;
  role: string;
  text: string;
  ts: number;
  sameAgent?: boolean;
};

type InterAgentFeedProps = {
  agentId?: string;
};

const VISIBLE_POLL_INTERVAL_MS = 15_000;
const HIDDEN_POLL_INTERVAL_MS = 60_000;

export const InterAgentFeed = ({ agentId }: InterAgentFeedProps) => {
  const t = useTranslations("intercom");
  const isDocumentVisible = useDocumentVisibility();
  const [messages, setMessages] = useState<ApiMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastRefresh, setLastRefresh] = useState<number>(0);

  // Detail view state
  const [selectedSession, setSelectedSession] = useState<{
    sessionKey: string;
    toAgent: string;
    fromAgent: string;
    label?: string;
  } | null>(null);
  const [detailMessages, setDetailMessages] = useState<ApiMessage[]>([]);
  const [detailLoading, setDetailLoading] = useState(false);
  const pollRef = useRef<number | null>(null);
  const listAbortRef = useRef<AbortController | null>(null);
  const detailAbortRef = useRef<AbortController | null>(null);
  const previousVisibilityRef = useRef(isDocumentVisible);

  const fetchMessages = useCallback(async () => {
    listAbortRef.current?.abort();
    const controller = new AbortController();
    listAbortRef.current = controller;

    try {
      const params = new URLSearchParams();
      if (agentId) {
        params.set("agentId", agentId);
      }
      const query = params.toString();
      const res = await fetch(`/api/intercom${query ? `?${query}` : ""}`, {
        cache: "no-store",
        signal: controller.signal,
      });
      if (!res.ok) {
        const body = await res.text().catch(() => "");
        throw new Error(`HTTP ${res.status}: ${body.slice(0, 100)}`);
      }
      const data = (await res.json()) as {
        messages: ApiMessage[];
        error?: string;
      };
      if (data.error) throw new Error(data.error);
      let msgs = data.messages ?? [];
      if (agentId) {
        msgs = msgs.filter((m) => m.from === agentId || m.to === agentId);
      }
      if (controller.signal.aborted) return;
      setMessages(msgs);
      setError(null);
      setLastRefresh(Date.now());
    } catch (err) {
      if (controller.signal.aborted) return;
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      if (listAbortRef.current === controller) {
        listAbortRef.current = null;
      }
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
  }, [agentId]);

  useEffect(() => {
    void fetchMessages();
    const intervalMs = isDocumentVisible
      ? VISIBLE_POLL_INTERVAL_MS
      : HIDDEN_POLL_INTERVAL_MS;
    pollRef.current = window.setInterval(() => {
      void fetchMessages();
    }, intervalMs);

    return () => {
      if (pollRef.current !== null) {
        window.clearInterval(pollRef.current);
        pollRef.current = null;
      }
      listAbortRef.current?.abort();
      listAbortRef.current = null;
    };
  }, [fetchMessages, isDocumentVisible]);

  useEffect(() => {
    const wasVisible = previousVisibilityRef.current;
    previousVisibilityRef.current = isDocumentVisible;
    if (!isDocumentVisible || wasVisible) return;
    void fetchMessages();
  }, [fetchMessages, isDocumentVisible]);

  const openSession = useCallback(
    async (
      sessionKey: string,
      toAgent: string,
      fromAgent: string,
      label?: string,
    ) => {
      setSelectedSession({ sessionKey, toAgent, fromAgent, label });
      setDetailLoading(true);
      detailAbortRef.current?.abort();
      const controller = new AbortController();
      detailAbortRef.current = controller;
      try {
        const res = await fetch(
          `/api/intercom?agentId=${encodeURIComponent(toAgent)}&sessionKey=${encodeURIComponent(sessionKey)}`,
          {
            cache: "no-store",
            signal: controller.signal,
          },
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as { messages: ApiMessage[] };
        if (controller.signal.aborted) return;
        setDetailMessages(data.messages ?? []);
      } catch {
        if (controller.signal.aborted) return;
        // Fallback: use the preview messages we already have
        setDetailMessages(messages.filter((m) => m.sessionKey === sessionKey));
      } finally {
        if (detailAbortRef.current === controller) {
          detailAbortRef.current = null;
        }
        if (!controller.signal.aborted) {
          setDetailLoading(false);
        }
      }
    },
    [messages],
  );

  const closeDetail = () => {
    detailAbortRef.current?.abort();
    detailAbortRef.current = null;
    setSelectedSession(null);
    setDetailMessages([]);
  };

  const roleColor = (role: string) => {
    if (role === "spawn") return "text-amber-500";
    if (role === "assistant") return "text-blue-400";
    if (role === "user") return "text-foreground";
    return "text-muted-foreground";
  };

  const roleBadgeClass = (role: string) => {
    if (role === "spawn") return "bg-amber-500/15 text-amber-500";
    if (role === "assistant") return "bg-blue-400/15 text-blue-400";
    if (role === "user") return "bg-primary/15 text-primary";
    return "bg-surface-2 text-muted-foreground";
  };

  // Group messages by sessionKey
  const grouped = messages.reduce<Record<string, ApiMessage[]>>((acc, msg) => {
    const key = msg.sessionKey;
    if (!acc[key]) acc[key] = [];
    acc[key].push(msg);
    return acc;
  }, {});

  const sessionEntries = Object.entries(grouped);

  // ─── Detail view ─────────────────────────────────────────────────────
  if (selectedSession) {
    return (
      <div
        className="flex h-full min-h-0 flex-col"
        data-testid="intercom-detail"
      >
        {/* Detail header */}
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <button
            onClick={closeDetail}
            className="rounded p-1 hover:bg-surface-2 transition-colors"
            aria-label="Back to list"
          >
            <ChevronLeft className="h-4 w-4 text-muted-foreground" />
          </button>
          <Zap className="h-3.5 w-3.5 text-primary" />
          <span className="text-xs font-semibold text-primary">
            {selectedSession.fromAgent}
          </span>
          <ArrowRight className="h-3 w-3 text-muted-foreground" />
          <span className="text-xs font-semibold text-primary">
            {selectedSession.toAgent}
          </span>
          {selectedSession.label && (
            <span className="ml-1 truncate rounded bg-surface-2 px-1.5 py-0.5 text-[9px] text-muted-foreground">
              {selectedSession.label}
            </span>
          )}
          <span className="ml-auto text-[10px] text-muted-foreground">
            {detailMessages.length} messages
          </span>
        </div>

        {/* Detail messages */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {detailLoading && (
            <p className="py-8 text-center text-xs text-muted-foreground">
              Loading…
            </p>
          )}

          {!detailLoading && detailMessages.length === 0 && (
            <p className="py-8 text-center text-xs text-muted-foreground">
              No messages in this session.
            </p>
          )}

          {!detailLoading && detailMessages.length > 0 && (
            <div className="space-y-3">
              {detailMessages.map((msg) => (
                <div
                  key={msg.id}
                  className="rounded-lg border border-border bg-card p-3"
                >
                  <div className="mb-1.5 flex items-center gap-2">
                    <span
                      className={`shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-medium capitalize ${roleBadgeClass(msg.role)}`}
                    >
                      {msg.role}
                    </span>
                    <span className="text-[9px] text-muted-foreground">
                      {new Date(msg.ts).toLocaleTimeString()}
                    </span>
                  </div>
                  <p
                    className={`whitespace-pre-wrap text-xs leading-relaxed ${roleColor(msg.role)}`}
                  >
                    {msg.text}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // ─── List view ───────────────────────────────────────────────────────
  return (
    <div className="flex h-full min-h-0 flex-col" data-testid="intercom-feed">
      <div className="flex items-center gap-2 border-b border-border px-5 py-3">
        <MessageSquare className="h-4 w-4 text-primary" aria-hidden="true" />
        <h2 className="text-sm font-semibold text-foreground">{t("title")}</h2>
        <span className="rounded-full bg-surface-2 px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
          {messages.length}
        </span>
        <button
          onClick={fetchMessages}
          className="ml-auto rounded p-1 hover:bg-surface-2 transition-colors"
          title="Refresh"
          aria-label="Refresh intercom"
        >
          <RefreshCw
            className={`h-3 w-3 text-muted-foreground ${loading ? "animate-spin" : ""}`}
          />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4">
        <p className="mb-3 text-xs text-muted-foreground">{t("description")}</p>

        {loading && messages.length === 0 && (
          <p className="py-8 text-center text-xs text-muted-foreground">
            Loading…
          </p>
        )}

        {error && (
          <div className="mb-3 rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2">
            <p className="text-xs text-destructive">{error}</p>
            <button
              onClick={fetchMessages}
              className="mt-1 text-[10px] text-destructive underline"
            >
              Retry
            </button>
          </div>
        )}

        {!loading && !error && messages.length === 0 && (
          <p className="py-8 text-center text-xs text-muted-foreground">
            {t("noMessages")}
          </p>
        )}

        {sessionEntries.length > 0 && (
          <div className="space-y-3">
            {sessionEntries.map(([sessionKey, msgs]) => {
              const first = msgs[0];
              const isCross = !first.sameAgent;
              return (
                <div
                  key={sessionKey}
                  role="button"
                  tabIndex={0}
                  onClick={() =>
                    openSession(sessionKey, first.to, first.from, first.label)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openSession(
                        sessionKey,
                        first.to,
                        first.from,
                        first.label,
                      );
                    }
                  }}
                  className={`cursor-pointer rounded-lg border p-3 transition-colors ${
                    isCross
                      ? "border-primary/30 bg-primary/5 hover:bg-primary/10"
                      : "border-border bg-card hover:bg-surface-1"
                  }`}
                >
                  {/* Session header */}
                  <div className="mb-2 flex items-center gap-1.5 text-[10px]">
                    {isCross ? (
                      <Zap className="h-3 w-3 text-primary" />
                    ) : (
                      <Bot className="h-3 w-3 text-muted-foreground" />
                    )}
                    <span className="font-semibold text-primary">
                      {first.from}
                    </span>
                    <ArrowRight className="h-2.5 w-2.5 text-muted-foreground" />
                    <span className="font-semibold text-primary">
                      {first.to}
                    </span>
                    {first.label && (
                      <span className="ml-1 truncate rounded bg-surface-2 px-1.5 py-0.5 text-[9px] text-muted-foreground">
                        {first.label}
                      </span>
                    )}
                    <span className="ml-auto shrink-0 text-muted-foreground">
                      {new Date(first.ts).toLocaleTimeString()}
                    </span>
                  </div>

                  {/* Messages preview */}
                  <div className="space-y-1.5">
                    {msgs.map((msg) => (
                      <div key={msg.id} className="flex gap-2">
                        <span
                          className={`mt-0.5 shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-medium capitalize ${roleBadgeClass(msg.role)}`}
                        >
                          {msg.role}
                        </span>
                        <p
                          className={`min-w-0 flex-1 text-xs leading-relaxed ${roleColor(msg.role)} line-clamp-4`}
                        >
                          {msg.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {lastRefresh > 0 && (
        <div className="border-t border-border px-5 py-1.5">
          <p className="text-[9px] text-muted-foreground">
            {new Date(lastRefresh).toLocaleTimeString()}
          </p>
        </div>
      )}
    </div>
  );
};
