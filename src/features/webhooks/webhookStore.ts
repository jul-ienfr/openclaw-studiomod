import type { WebhookConfig } from "./types";

const STORAGE_KEY = "openclaw-studio:webhooks";

export const loadWebhooks = (): WebhookConfig[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as WebhookConfig[];
  } catch {
    return [];
  }
};

export const fetchWebhooks = async (): Promise<WebhookConfig[]> => {
  try {
    const res = await fetch("/api/webhooks");
    if (!res.ok) return loadWebhooks();
    const data = (await res.json()) as { webhooks?: WebhookConfig[] };
    const webhooks = data.webhooks ?? [];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(webhooks));
    return webhooks;
  } catch {
    return loadWebhooks();
  }
};

export const persistWebhooks = (webhooks: WebhookConfig[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(webhooks));
  void fetch("/api/webhooks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ webhooks }),
  });
};

export const addWebhook = (webhooks: WebhookConfig[], webhook: WebhookConfig): WebhookConfig[] => [
  ...webhooks,
  webhook,
];

export const updateWebhook = (
  webhooks: WebhookConfig[],
  id: string,
  patch: Partial<WebhookConfig>,
): WebhookConfig[] => webhooks.map((w) => (w.id === id ? { ...w, ...patch } : w));

export const removeWebhook = (webhooks: WebhookConfig[], id: string): WebhookConfig[] =>
  webhooks.filter((w) => w.id !== id);
