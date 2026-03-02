import type { RoutingConfig, RoutingRule } from "./types";

const STORAGE_KEY = "openclaw-studio:routing-config";

const DEFAULT_CONFIG: RoutingConfig = {
  rules: [],
  defaultAgentId: "",
};

export const loadRoutingConfig = (): RoutingConfig => {
  // Sync fallback from localStorage (initial render)
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_CONFIG;
    return JSON.parse(raw) as RoutingConfig;
  } catch {
    return DEFAULT_CONFIG;
  }
};

export const fetchRoutingConfig = async (): Promise<RoutingConfig> => {
  try {
    const res = await fetch("/api/routing");
    if (!res.ok) return loadRoutingConfig();
    const data = (await res.json()) as { rules?: RoutingRule[] };
    const config: RoutingConfig = { rules: data.rules ?? [], defaultAgentId: "" };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    return config;
  } catch {
    return loadRoutingConfig();
  }
};

export const persistRoutingConfig = (config: RoutingConfig): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  // Fire-and-forget persist to server
  void fetch("/api/routing", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rules: config.rules }),
  });
};

export const addRoutingRule = (config: RoutingConfig, rule: RoutingRule): RoutingConfig => ({
  ...config,
  rules: [...config.rules, rule].sort((a, b) => a.priority - b.priority),
});

export const updateRoutingRule = (
  config: RoutingConfig,
  ruleId: string,
  patch: Partial<RoutingRule>,
): RoutingConfig => ({
  ...config,
  rules: config.rules
    .map((r) => (r.id === ruleId ? { ...r, ...patch } : r))
    .sort((a, b) => a.priority - b.priority),
});

export const removeRoutingRule = (config: RoutingConfig, ruleId: string): RoutingConfig => ({
  ...config,
  rules: config.rules.filter((r) => r.id !== ruleId),
});
