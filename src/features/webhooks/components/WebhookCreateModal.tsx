"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { X, Eye, EyeOff } from "lucide-react";
import type { WebhookConfig, WebhookEvent } from "../types";

const ALL_EVENTS: WebhookEvent[] = [
  "agent.started",
  "agent.stopped",
  "agent.error",
  "message.received",
  "message.sent",
  "approval.requested",
  "approval.resolved",
  "session.created",
  "session.ended",
];

type Props = {
  webhook?: WebhookConfig;
  onSave: (webhook: WebhookConfig) => void;
  onClose: () => void;
};

export function WebhookCreateModal({ webhook, onSave, onClose }: Props) {
  const t = useTranslations("webhooks");
  const te = useTranslations("webhookEvents");
  const [name, setName] = useState(webhook?.name ?? "");
  const [url, setUrl] = useState(webhook?.url ?? "");
  const [secret, setSecret] = useState(webhook?.secret ?? "");
  const [showSecret, setShowSecret] = useState(false);
  const [events, setEvents] = useState<Set<WebhookEvent>>(
    new Set(webhook?.events ?? []),
  );

  const isValid = name.trim() !== "" && url.trim() !== "" && events.size > 0;

  const toggleEvent = (event: WebhookEvent) => {
    setEvents((prev) => {
      const next = new Set(prev);
      if (next.has(event)) {
        next.delete(event);
      } else {
        next.add(event);
      }
      return next;
    });
  };

  const handleSave = () => {
    if (!isValid) return;
    onSave({
      id: webhook?.id ?? crypto.randomUUID(),
      name: name.trim() || te("untitledWebhook"),
      url: url.trim(),
      secret: secret.trim() || undefined,
      events: Array.from(events),
      enabled: webhook?.enabled ?? true,
      createdAt: webhook?.createdAt ?? new Date().toISOString(),
    });
  };

  const title = webhook ? t("editWebhook") : t("addWebhook");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      aria-modal="true"
      role="dialog"
      aria-label={title}
    >
      <div className="w-full max-w-lg rounded-xl border border-border bg-background shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="text-base font-semibold text-foreground">{title}</h2>
          <button
            onClick={onClose}
            aria-label={t("close")}
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-4 overflow-y-auto px-6 py-4" style={{ maxHeight: "60vh" }}>
          {/* Name */}
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">{t("nameLabel")}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("namePlaceholder")}
              className="w-full rounded-md border border-border bg-surface-2 px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* URL */}
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">{t("urlLabel")}</label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/webhook"
              className="w-full rounded-md border border-border bg-surface-2 px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Secret */}
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">{t("secretLabel")} <span className="text-muted-foreground">({t("optional")})</span></label>
            <div className="relative">
              <input
                type={showSecret ? "text" : "password"}
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                placeholder={t("secretPlaceholder")}
                className="w-full rounded-md border border-border bg-surface-2 px-3 py-1.5 pr-9 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="button"
                onClick={() => setShowSecret((v) => !v)}
                aria-label={showSecret ? te("hide") : te("show")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showSecret ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Events */}
          <div className="space-y-2">
            <label className="text-xs text-muted-foreground">{t("events")}</label>
            <div className="grid grid-cols-2 gap-2">
              {ALL_EVENTS.map((event) => (
                <label
                  key={event}
                  className="flex cursor-pointer items-center gap-2 rounded-md border border-border bg-surface-2 px-3 py-2 text-xs text-foreground hover:bg-muted"
                >
                  <input
                    type="checkbox"
                    checked={events.has(event)}
                    onChange={() => toggleEvent(event)}
                    className="h-3.5 w-3.5 cursor-pointer"
                  />
                  <span className="font-mono">{event}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 border-t border-border px-6 py-4">
          <button
            onClick={onClose}
            className="ui-btn-secondary px-4 py-2 text-sm"
          >
            {t("cancel")}
          </button>
          <button
            onClick={handleSave}
            disabled={!isValid}
            className="ui-btn-primary px-4 py-2 text-sm disabled:opacity-50"
          >
            {t("save")}
          </button>
        </div>
      </div>
    </div>
  );
}
