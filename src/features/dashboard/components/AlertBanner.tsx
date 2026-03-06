"use client";

import { useState } from "react";
import { AlertTriangle, Info, CheckCircle, X } from "lucide-react";

type AlertLevel = "info" | "warning" | "success" | "error";

type Alert = {
  id: string;
  level: AlertLevel;
  message: string;
  action?: { label: string; href: string };
};

type AlertBannerProps = {
  alerts: Alert[];
};

const ICONS = {
  info: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertTriangle,
};

const CLASSES: Record<AlertLevel, string> = {
  info: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  warning: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
  success: "bg-green-500/10 border-green-500/20 text-green-400",
  error: "bg-destructive/10 border-destructive/20 text-destructive",
};

export function AlertBanner({ alerts }: AlertBannerProps) {
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());

  const visible = alerts.filter((a) => !dismissed.has(a.id));
  if (visible.length === 0) return null;

  return (
    <div className="space-y-2">
      {visible.map((alert) => {
        const Icon = ICONS[alert.level];
        return (
          <div
            key={alert.id}
            className={`flex items-center gap-3 rounded-lg border px-4 py-2.5 text-sm ${CLASSES[alert.level]}`}
          >
            <Icon className="h-4 w-4 shrink-0" strokeWidth={1.75} />
            <span className="flex-1">{alert.message}</span>
            {alert.action && (
              <a
                href={alert.action.href}
                className="text-xs font-medium underline"
              >
                {alert.action.label}
              </a>
            )}
            <button
              onClick={() => setDismissed((s) => new Set([...s, alert.id]))}
              className="ml-1 rounded p-0.5 opacity-70 hover:opacity-100"
              aria-label="Dismiss"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
