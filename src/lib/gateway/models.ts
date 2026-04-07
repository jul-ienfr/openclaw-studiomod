export type GatewayModelChoice = {
  id: string;
  name: string;
  provider: string;
  contextWindow?: number;
  reasoning?: boolean;
};

type GatewayModelAliasEntry = {
  alias?: string;
};

type GatewayModelDefaults = {
  model?: string | { primary?: string; fallbacks?: string[] };
  models?: Record<string, GatewayModelAliasEntry>;
};

export type GatewayModelPolicySnapshot = {
  config?: {
    agents?: {
      defaults?: GatewayModelDefaults;
      list?: Array<{
        id?: string;
        model?: string | { primary?: string; fallbacks?: string[] };
      }>;
    };
  };
};

export const resolveConfiguredModelKey = (
  raw: string,
  models?: Record<string, GatewayModelAliasEntry>,
) => {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  if (trimmed.includes("/")) return trimmed;
  if (models) {
    const target = Object.entries(models).find(
      ([, entry]) =>
        entry?.alias?.trim().toLowerCase() === trimmed.toLowerCase(),
    );
    if (target?.[0]) return target[0];
  }
  return `anthropic/${trimmed}`;
};

export const buildAllowedModelKeys = (
  snapshot: GatewayModelPolicySnapshot | null,
) => {
  const allowedList: string[] = [];
  const allowedSet = new Set<string>();
  const defaults = snapshot?.config?.agents?.defaults;
  const modelDefaults = defaults?.model;
  const modelAliases = defaults?.models;
  const pushKey = (raw?: string | null) => {
    if (!raw) return;
    const resolved = resolveConfiguredModelKey(raw, modelAliases);
    if (!resolved) return;
    if (allowedSet.has(resolved)) return;
    allowedSet.add(resolved);
    allowedList.push(resolved);
  };
  if (typeof modelDefaults === "string") {
    pushKey(modelDefaults);
  } else if (modelDefaults && typeof modelDefaults === "object") {
    pushKey(modelDefaults.primary ?? null);
    for (const fallback of modelDefaults.fallbacks ?? []) {
      pushKey(fallback);
    }
  }
  if (modelAliases) {
    for (const key of Object.keys(modelAliases)) {
      pushKey(key);
    }
  }
  return allowedList;
};

export const buildGatewayModelChoices = (
  catalog: GatewayModelChoice[],
  snapshot: GatewayModelPolicySnapshot | null,
) => {
  const allowedKeys = buildAllowedModelKeys(snapshot);
  if (allowedKeys.length === 0) return catalog;
  // Start with the full catalog and append configured extras not in catalog
  const result = [...catalog];
  const catalogKeys = new Set(
    catalog.map((entry) => `${entry.provider}/${entry.id}`),
  );
  for (const key of allowedKeys) {
    if (catalogKeys.has(key)) continue;
    const [provider, id] = key.split("/");
    if (!provider || !id) continue;
    result.push({ provider, id, name: key });
  }
  return result;
};

/**
 * Build a static model catalog from a provider registry.
 * This ensures the model selector always shows all known models,
 * even when the gateway returns a limited set.
 */
export const buildStaticModelCatalog = (
  registry: Array<{
    id: string;
    name: string;
    models: Array<{
      id: string;
      name: string;
      category: string;
      contextWindow: number;
    }>;
  }>,
): GatewayModelChoice[] => {
  const catalog: GatewayModelChoice[] = [];
  for (const provider of registry) {
    for (const model of provider.models) {
      catalog.push({
        provider: provider.id,
        id: model.id,
        name: model.name,
        contextWindow: model.contextWindow,
        reasoning: model.category === "reasoning",
      });
    }
  }
  return catalog;
};

export type ThinkingLevel = { value: string; label: string };

/**
 * Returns the thinking/effort levels available for a given model.
 * - reasoning === false  → only "Off" (model doesn't support thinking)
 * - Claude models        → full set including "minimal" and "xhigh"
 * - Other reasoning models → standard set without Claude-only levels
 */
export const getThinkingLevels = (
  modelStr: string,
  reasoning?: boolean,
): ThinkingLevel[] => {
  if (reasoning === false) {
    return [{ value: "off", label: "Off" }];
  }
  const lower = modelStr.toLowerCase();
  const isClaude46 =
    lower.includes("sonnet-4-6") ||
    lower.includes("opus-4-6") ||
    lower.includes("claude-sonnet-4-6") ||
    lower.includes("claude-opus-4-6");
  const isClaude = lower.includes("claude");
  if (isClaude46) {
    return [
      { value: "", label: "Default" },
      { value: "adaptive", label: "Adaptive" },
      { value: "off", label: "Off" },
      { value: "minimal", label: "Minimal" },
      { value: "low", label: "Low" },
      { value: "medium", label: "Medium" },
      { value: "high", label: "High" },
      { value: "xhigh", label: "XHigh" },
    ];
  }
  if (isClaude) {
    return [
      { value: "", label: "Default" },
      { value: "off", label: "Off" },
      { value: "minimal", label: "Minimal" },
      { value: "low", label: "Low" },
      { value: "medium", label: "Medium" },
      { value: "high", label: "High" },
      { value: "xhigh", label: "XHigh" },
    ];
  }
  return [
    { value: "", label: "Default" },
    { value: "off", label: "Off" },
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
  ];
};

/**
 * Filter models to only include those from configured providers.
 * If no providers are configured, returns all models (backward compatibility).
 */
export const filterModelsByConfiguredProviders = (
  models: GatewayModelChoice[],
  configuredProviderIds: string[],
): GatewayModelChoice[] => {
  if (configuredProviderIds.length === 0) return models;
  const providerSet = new Set(configuredProviderIds);
  return models.filter((m) => providerSet.has(m.provider));
};

/**
 * Merge gateway models with the static catalog.
 * Gateway models take priority (they may have runtime info),
 * then static catalog fills in the rest.
 */
export const mergeModelCatalogs = (
  gatewayModels: GatewayModelChoice[],
  staticCatalog: GatewayModelChoice[],
): GatewayModelChoice[] => {
  const seen = new Set(gatewayModels.map((m) => `${m.provider}/${m.id}`));
  const extras = staticCatalog.filter(
    (m) => !seen.has(`${m.provider}/${m.id}`),
  );
  return [...gatewayModels, ...extras];
};
