"use client";

import { useRef, useState, useEffect, type KeyboardEvent } from "react";
import {
  Bell,
  CheckCircle2,
  AlertTriangle,
  Info,
  AlertCircle,
  X,
  CheckCheck,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { useNotifications } from "./useNotifications";
import type { Notification, NotificationType } from "./notificationStore";

// ------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------

const TYPE_ICONS: Record<NotificationType, React.ComponentType<{ className?: string }>> = {
  success: CheckCircle2,
  warning: AlertTriangle,
  info: Info,
  error: AlertCircle,
};

const TYPE_COLORS: Record<NotificationType, string> = {
  success: "text-green-500",
  warning: "text-yellow-500",
  info: "text-blue-500",
  error: "text-destructive",
};

function formatTimestamp(ts: number): string {
  const now = Date.now();
  const diffMs = now - ts;
  const diffSec = Math.floor(diffMs / 1000);
  if (diffSec < 60) return "just now";
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr}h ago`;
  return new Date(ts).toLocaleDateString();
}

// ------------------------------------------------------------------
// Notification row
// ------------------------------------------------------------------

function NotificationRow({
  notification,
  onDismiss,
}: {
  notification: Notification;
  onDismiss: (id: string) => void;
}) {
  const Icon = TYPE_ICONS[notification.type];
  const colorClass = TYPE_COLORS[notification.type];

  return (
    <div
      className={`flex items-start gap-3 border-b border-border px-4 py-3 transition-colors ${
        notification.read ? "opacity-60" : ""
      }`}
    >
      <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${colorClass}`} aria-hidden="true" />
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <p className="text-sm font-medium text-foreground leading-snug truncate">
            {notification.title}
          </p>
          <span className="shrink-0 text-xs text-muted-foreground">
            {formatTimestamp(notification.timestamp)}
          </span>
        </div>
        {notification.message && (
          <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">
            {notification.message}
          </p>
        )}
        {notification.source && (
          <p className="mt-0.5 text-xs text-muted-foreground/60 font-mono">
            {notification.source}
          </p>
        )}
        {notification.action && (
          <a
            href={notification.action.href}
            className="mt-1 inline-block text-xs font-medium text-primary hover:underline"
          >
            {notification.action.label}
          </a>
        )}
      </div>
      <button
        type="button"
        className="shrink-0 rounded p-0.5 text-muted-foreground transition-colors hover:text-foreground"
        onClick={() => onDismiss(notification.id)}
        aria-label="Dismiss notification"
      >
        <X className="h-3.5 w-3.5" aria-hidden="true" />
      </button>
    </div>
  );
}

// ------------------------------------------------------------------
// NotificationCenter — bell icon + dropdown panel
// ------------------------------------------------------------------

export function NotificationCenter() {
  const t = useTranslations("notifications");
  const { notifications, unreadCount, dismiss, markAllRead } =
    useNotifications();

  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Close on Escape
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Escape") setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Bell button */}
      <button
        type="button"
        aria-label={t("title")}
        aria-expanded={open}
        aria-haspopup="dialog"
        className="relative rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        onClick={() => setOpen((v) => !v)}
        onKeyDown={handleKeyDown}
      >
        <Bell className="h-5 w-5" aria-hidden="true" />
        {unreadCount > 0 && (
          <span
            className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground"
            aria-label={`${unreadCount} unread`}
          >
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown panel */}
      {open && (
        <div
          role="dialog"
          aria-label={t("title")}
          className="absolute right-0 top-full z-50 mt-2 w-80 overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <h2 className="text-sm font-semibold text-foreground">
              {t("title")}
            </h2>
            {notifications.length > 0 && (
              <button
                type="button"
                className="flex items-center gap-1.5 rounded px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                onClick={markAllRead}
              >
                <CheckCheck className="h-3.5 w-3.5" aria-hidden="true" />
                {t("mark_all_read")}
              </button>
            )}
          </div>

          {/* List */}
          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-2 py-10 text-center">
                <Bell className="h-8 w-8 text-muted-foreground/40" aria-hidden="true" />
                <p className="text-sm text-muted-foreground">{t("no_notifications")}</p>
              </div>
            ) : (
              notifications.map((n) => (
                <NotificationRow key={n.id} notification={n} onDismiss={dismiss} />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
