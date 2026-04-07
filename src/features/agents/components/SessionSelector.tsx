"use client";

import { useState, useRef, useEffect, useMemo, useCallback, memo } from "react";
import {
  ChevronDown,
  MessageCircle,
  Globe,
  Clock,
  Hash,
  Smartphone,
  Bot,
} from "lucide-react";
import { useTranslations } from "next-intl";
import type { SessionInfo } from "@/features/agents/hooks/useAgentSessions";

type SessionSelectorProps = {
  sessions: SessionInfo[];
  currentSessionKey: string;
  onSelectSession: (sessionKey: string) => void;
  loading?: boolean;
};

const CHANNEL_ICONS: Record<string, typeof MessageCircle> = {
  telegram: MessageCircle,
  whatsapp: Smartphone,
  discord: Hash,
  webchat: Globe,
  cron: Clock,
  internal: Bot,
};

const CHANNEL_COLORS: Record<string, string> = {
  telegram: "text-blue-400",
  whatsapp: "text-green-500",
  discord: "text-indigo-400",
  webchat: "text-teal-500",
  cron: "text-amber-500",
  internal: "text-slate-400",
};

const CHANNEL_LABELS: Record<string, string> = {
  telegram: "Telegram",
  whatsapp: "WhatsApp",
  discord: "Discord",
  webchat: "Webchat",
  cron: "Cron",
  internal: "Interne",
};

function getChannelFromSession(session: SessionInfo): string {
  if (session.channel && session.channel !== "") return session.channel;
  if (session.kind === "cron") return "cron";
  if (session.kind === "main") return "webchat";
  return "other";
}

function getSessionDisplayName(session: SessionInfo): string {
  if (session.displayName && session.displayName !== session.key) {
    return session.displayName;
  }
  const ch = getChannelFromSession(session);
  const label = CHANNEL_LABELS[ch] ?? ch;
  if (session.kind === "main") return "Main";
  return label;
}

function formatRelativeTime(updatedAt: number | null): string {
  if (!updatedAt) return "";
  const diffMs = Date.now() - updatedAt;
  const diffMin = Math.floor(diffMs / 60000);
  if (diffMin < 1) return "<1m";
  if (diffMin < 60) return `${diffMin}m`;
  const diffH = Math.floor(diffMin / 60);
  if (diffH < 24) return `${diffH}h`;
  return `${Math.floor(diffH / 24)}j`;
}

export const SessionSelector = ({
  sessions,
  currentSessionKey,
  onSelectSession,
  loading = false,
}: SessionSelectorProps) => {
  const t = useTranslations("sessionSelector");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  const grouped = useMemo(() => {
    const groups: Record<string, SessionInfo[]> = {};
    for (const session of sessions) {
      const ch = getChannelFromSession(session);
      if (!groups[ch]) groups[ch] = [];
      groups[ch].push(session);
    }
    return groups;
  }, [sessions]);

  const currentSession = sessions.find((s) => s.key === currentSessionKey);
  const currentChannel = currentSession
    ? getChannelFromSession(currentSession)
    : "webchat";
  const CurrentIcon = CHANNEL_ICONS[currentChannel] ?? Hash;
  const currentColor = CHANNEL_COLORS[currentChannel] ?? "text-slate-400";
  const currentName = currentSession
    ? getSessionDisplayName(currentSession)
    : t("session");

  if (sessions.length <= 1) return null;

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        className="ui-input ui-control-important inline-flex h-6 items-center gap-1 rounded-md px-1.5 text-[10px] font-semibold text-foreground"
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("switchSession")}
        title={t("switchSession")}
      >
        <CurrentIcon
          className={`h-3 w-3 shrink-0 ${currentColor}`}
          aria-hidden="true"
        />
        <span className="max-w-[14ch] truncate">{currentName}</span>
        <ChevronDown
          className="h-3 w-3 shrink-0 text-muted-foreground"
          aria-hidden="true"
        />
      </button>

      {open ? (
        <div
          className="absolute bottom-full left-0 z-[300] mb-1 w-64 rounded-xl border border-border bg-card shadow-xl"
          role="listbox"
          aria-label={t("sessionList")}
        >
          {loading ? (
            <div className="px-3 py-3 text-center text-[11px] text-muted-foreground">
              {t("loading")}
            </div>
          ) : Object.keys(grouped).length === 0 ? (
            <div className="px-3 py-3 text-center text-[11px] text-muted-foreground">
              {t("noSessions")}
            </div>
          ) : (
            <div className="max-h-64 overflow-y-auto p-1">
              {Object.entries(grouped).map(([channel, channelSessions]) => {
                const Icon = CHANNEL_ICONS[channel] ?? Hash;
                const color = CHANNEL_COLORS[channel] ?? "text-slate-400";
                const label = CHANNEL_LABELS[channel] ?? channel;

                return (
                  <div key={channel}>
                    <p className="px-2 pb-0.5 pt-2 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                      {label}
                    </p>
                    {channelSessions.map((session) => {
                      const isSelected = session.key === currentSessionKey;
                      const name = getSessionDisplayName(session);
                      const relTime = formatRelativeTime(session.updatedAt);

                      return (
                        <button
                          key={session.key}
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          className={`flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left transition-colors ${
                            isSelected
                              ? "bg-primary/10 text-foreground"
                              : "text-foreground hover:bg-surface-2"
                          }`}
                          onClick={() => {
                            onSelectSession(session.key);
                            setOpen(false);
                          }}
                        >
                          <Icon
                            className={`h-3 w-3 shrink-0 ${color}`}
                            aria-hidden="true"
                          />
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-[11px] font-medium">
                              {name}
                            </p>
                            <p className="text-[9px] text-muted-foreground">
                              {session.kind}
                              {relTime ? ` · ${relTime}` : ""}
                            </p>
                          </div>
                          {isSelected ? (
                            <span
                              className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                              aria-hidden="true"
                            />
                          ) : null}
                        </button>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};
