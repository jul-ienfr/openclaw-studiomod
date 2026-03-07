"use client";

import { useEffect, useRef, useState } from "react";
import { X, CheckCircle2, AlertTriangle, Info, AlertCircle } from "lucide-react";

import { useNotifications } from "./useNotifications";
import type { Notification, NotificationType } from "./notificationStore";

// ------------------------------------------------------------------
// Toast item
// ------------------------------------------------------------------

const TOAST_ICONS: Record<NotificationType, React.ComponentType<{ className?: string }>> = {
  success: CheckCircle2,
  warning: AlertTriangle,
  info: Info,
  error: AlertCircle,
};

const TOAST_COLORS: Record<NotificationType, string> = {
  success: "text-green-500",
  warning: "text-yellow-500",
  info: "text-blue-500",
  error: "text-destructive",
};

const AUTO_DISMISS_MS: Record<NotificationType, number | undefined> = {
  info: 5000,
  success: 5000,
  warning: 5000,
  error: undefined, // errors persist
};

type ToastItemProps = {
  notification: Notification;
  onDismiss: (id: string) => void;
};

function ToastItem({ notification, onDismiss }: ToastItemProps) {
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const autoDismissMs =
    notification.autoDismiss ?? AUTO_DISMISS_MS[notification.type];

  useEffect(() => {
    if (autoDismissMs == null) return;
    timerRef.current = setTimeout(() => {
      setVisible(false);
    }, autoDismissMs);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [autoDismissMs]);

  // Actually remove after animation
  useEffect(() => {
    if (!visible) {
      const t = setTimeout(() => onDismiss(notification.id), 300);
      return () => clearTimeout(t);
    }
  }, [visible, notification.id, onDismiss]);

  const Icon = TOAST_ICONS[notification.type];
  const colorClass = TOAST_COLORS[notification.type];

  return (
    <div
      role="alert"
      aria-live="polite"
      className={`flex w-80 items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-lg transition-all duration-300 ${
        visible ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
      }`}
    >
      <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${colorClass}`} aria-hidden="true" />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-foreground leading-snug">
          {notification.title}
        </p>
        {notification.message && (
          <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">
            {notification.message}
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
// Container — shows last 3 notifications as toasts
// ------------------------------------------------------------------

export function ToastContainer() {
  const { notifications, dismiss } = useNotifications();

  // Show only the 3 most recent notifications
  const toasts = notifications.slice(0, 3);

  if (toasts.length === 0) return null;

  return (
    <div
      aria-label="Notifications"
      className="fixed bottom-4 right-4 z-50 flex flex-col gap-2"
    >
      {toasts.map((n) => (
        <ToastItem key={n.id} notification={n} onDismiss={dismiss} />
      ))}
    </div>
  );
}
