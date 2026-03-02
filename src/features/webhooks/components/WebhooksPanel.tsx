"use client";

import { useState, useEffect } from "react";
import { Plus, Webhook, Pencil, Trash2, ToggleLeft, ToggleRight } from "lucide-react";
import { toast } from "sonner";
import type { WebhookConfig } from "../types";
import {
  fetchWebhooks,
  persistWebhooks,
  addWebhook,
  updateWebhook,
  removeWebhook,
} from "../webhookStore";
import { WebhookCreateModal } from "./WebhookCreateModal";

export function WebhooksPanel() {
  const [webhooks, setWebhooks] = useState<WebhookConfig[]>([]);
  const [editingWebhook, setEditingWebhook] = useState<WebhookConfig | null>(null);
  const [showEditor, setShowEditor] = useState(false);

  useEffect(() => {
    void fetchWebhooks().then(setWebhooks);
  }, []);

  const handleAdd = () => {
    setEditingWebhook(null);
    setShowEditor(true);
  };

  const handleEdit = (webhook: WebhookConfig) => {
    setEditingWebhook(webhook);
    setShowEditor(true);
  };

  const handleSave = (webhook: WebhookConfig) => {
    let next: WebhookConfig[];
    if (editingWebhook) {
      next = updateWebhook(webhooks, webhook.id, webhook);
      toast.success("Webhook updated");
    } else {
      next = addWebhook(webhooks, webhook);
      toast.success("Webhook added");
    }
    setWebhooks(next);
    persistWebhooks(next);
    setShowEditor(false);
    setEditingWebhook(null);
  };

  const handleToggle = (webhook: WebhookConfig) => {
    const next = updateWebhook(webhooks, webhook.id, { enabled: !webhook.enabled });
    setWebhooks(next);
    persistWebhooks(next);
  };

  const handleDelete = (id: string) => {
    const next = removeWebhook(webhooks, id);
    setWebhooks(next);
    persistWebhooks(next);
    toast.success("Webhook deleted");
  };

  const enabledCount = webhooks.filter((w) => w.enabled).length;

  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <header className="flex items-center justify-between border-b border-border px-6 py-4">
        <div>
          <h1 className="console-title type-page-title text-foreground flex items-center gap-2">
            Webhooks
            <span className="ml-2 inline-flex h-5 items-center rounded-full bg-muted px-2 text-xs text-muted-foreground">
              {enabledCount}/{webhooks.length}
            </span>
          </h1>
          <p className="text-sm text-muted-foreground">Configure webhook endpoints</p>
        </div>
        <button
          onClick={handleAdd}
          className="ui-btn-primary flex items-center gap-2 px-3 py-2 text-sm"
        >
          <Plus className="h-4 w-4" />
          Add Webhook
        </button>
      </header>

      <main className="flex-1 p-6 space-y-2">
        {webhooks.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-16 text-muted-foreground">
            <Webhook className="h-8 w-8" />
            <p className="text-sm">No webhooks configured</p>
          </div>
        ) : (
          webhooks.map((wh) => (
            <div
              key={wh.id}
              className={`flex items-center gap-3 rounded-lg border border-border bg-surface-2 px-4 py-3 transition-opacity ${
                wh.enabled ? "opacity-100" : "opacity-50"
              }`}
            >
              <button
                onClick={() => handleToggle(wh)}
                aria-label={wh.enabled ? "Disable webhook" : "Enable webhook"}
                className={`shrink-0 ${wh.enabled ? "text-primary" : "text-muted-foreground"}`}
              >
                {wh.enabled ? (
                  <ToggleRight className="h-5 w-5" />
                ) : (
                  <ToggleLeft className="h-5 w-5" />
                )}
              </button>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-foreground">{wh.name}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {wh.url} &middot; {wh.events.length} event{wh.events.length !== 1 ? "s" : ""}
                </p>
              </div>

              <button
                onClick={() => handleEdit(wh)}
                aria-label="Edit webhook"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <Pencil className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleDelete(wh.id)}
                aria-label="Delete webhook"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))
        )}
      </main>

      {showEditor && (
        <WebhookCreateModal
          webhook={editingWebhook ?? undefined}
          onSave={handleSave}
          onClose={() => {
            setShowEditor(false);
            setEditingWebhook(null);
          }}
        />
      )}
    </div>
  );
}
