import { createContext, useContext } from "react";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type {
  ProviderId,
  ProviderConfig,
  ProviderWithStatus,
  ProviderKeyEntry,
} from "./types";
import { PROVIDER_REGISTRY, getProviderById } from "./providerRegistry";

const STORAGE_KEY = "openclaw-studio-providers";

export type ProviderStoreState = {
  configs: Record<string, ProviderConfig>;
};

export type ProviderStoreActions = {
  loadConfigs: (newConfigs: Record<string, ProviderConfig>) => void;
  saveProvider: (config: ProviderConfig) => void;
  removeProvider: (storageKey: string) => void;
  getProvidersWithStatus: () => ProviderWithStatus[];
  getConfiguredProviderIds: () => ProviderId[];
};

export type ProviderStore = ProviderStoreState & ProviderStoreActions;

// ─── Zustand Store ───────────────────────────────────────────────────────────
// Primary store. ProviderStoreProvider initialises it with data from
// localStorage and re-exposes the same API via Context for backward compat.

type ProviderZustandStore = ProviderStoreState & ProviderStoreActions;

export const useProviderZustandStore = create<ProviderZustandStore>()(
  devtools(
    (set, get) => ({
      configs: {},

      loadConfigs: (newConfigs: Record<string, ProviderConfig>) => {
        set(() => ({ configs: newConfigs }), false, "loadConfigs");
      },

      saveProvider: (config: ProviderConfig) => {
        set(
          (state) => {
            const storageKey = config.storageKey || config.id;
            const next = { ...state.configs, [storageKey]: config };
            persistProviderConfigs(next);
            return { configs: next };
          },
          false,
          "saveProvider",
        );
      },

      removeProvider: (storageKey: string) => {
        set(
          (state) => {
            const next = { ...state.configs };
            delete next[storageKey];
            persistProviderConfigs(next);
            return { configs: next };
          },
          false,
          "removeProvider",
        );
      },

      getProvidersWithStatus: (): ProviderWithStatus[] =>
        buildProvidersWithStatus(get().configs),

      getConfiguredProviderIds: (): ProviderId[] =>
        getConfiguredProviderIdsFromConfigs(get().configs),
    }),
    { name: "ProviderStore" },
  ),
);

// ─── Context shim — backward compatibility ───────────────────────────────────
// Components that call useProviderStore() keep working without changes.

export const ProviderStoreContext = createContext<ProviderStore | null>(null);

export const useProviderStore = (): ProviderStore => {
  const store = useProviderZustandStore();
  // If a Context provider is present (e.g. ProviderStoreProvider), prefer it
  // so that components nested inside it receive the same reference.
  const ctx = useContext(ProviderStoreContext);
  if (ctx) return ctx;
  // Fallback: return the Zustand store directly (works outside any Provider).
  return store;
};

const migrateProviderConfig = (
  raw: Record<string, unknown>,
  storageKey: string,
): ProviderConfig => {
  const config = raw as Record<string, unknown>;
  return {
    id: config.id as ProviderId,
    storageKey,
    label: (config.label as string) || undefined,
    apiKey: (config.apiKey as string) || undefined,
    accessToken: (config.accessToken as string) || undefined,
    authType: (config.authType as ProviderConfig["authType"]) || "apiKey",
    baseUrl: (config.baseUrl as string) || undefined,
    enabled: config.enabled !== false,
  };
};

export const loadProviderConfigs = (): Record<string, ProviderConfig> => {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, Record<string, unknown>>;
    const migrated: Record<string, ProviderConfig> = {};
    for (const [key, value] of Object.entries(parsed)) {
      migrated[key] = migrateProviderConfig(value, key);
    }
    return migrated;
  } catch {
    return {};
  }
};

export const persistProviderConfigs = (
  configs: Record<string, ProviderConfig>,
) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(configs));
  } catch {
    // localStorage may be full or unavailable
  }
};

type GatewayProviderInfo = {
  id: string;
  apiKey?: string;
  accessToken?: string;
  baseUrl?: string;
  api?: string;
  label?: string;
  enabled: boolean;
};

/** Fetch configured providers from openclaw.json via the API, merge with localStorage */
export const fetchProviderConfigs = async (): Promise<
  Record<string, ProviderConfig>
> => {
  try {
    const res = await fetch("/api/providers");
    if (!res.ok) return loadProviderConfigs();
    const data = (await res.json()) as { providers?: GatewayProviderInfo[] };
    const fromGateway: Record<string, ProviderConfig> = {};
    for (const p of data.providers ?? []) {
      const parentId = resolveParentProviderId(p.id, p.api);
      fromGateway[p.id] = {
        id: parentId as ProviderId,
        storageKey: p.id,
        label: p.label || undefined,
        apiKey: p.apiKey,
        accessToken: p.accessToken,
        baseUrl: p.baseUrl,
        authType: p.accessToken ? "accessToken" : "apiKey",
        enabled: p.enabled,
      };
    }
    // Merge: gateway wins, then localStorage extras
    const local = loadProviderConfigs();
    const merged = { ...local, ...fromGateway };
    persistProviderConfigs(merged);
    return merged;
  } catch {
    return loadProviderConfigs();
  }
};

/** Persist a provider to openclaw.json (masked key awareness: only send if changed from "****") */
export const patchGatewayProvider = async (
  config: ProviderConfig,
): Promise<void> => {
  const isMasked = (val?: string) => val?.includes("****") ?? false;
  const def = getProviderById(config.id);
  const storageKey = config.storageKey || config.id;
  const effectiveBaseUrl = config.baseUrl || def?.defaultBaseUrl;
  await fetch("/api/providers", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: storageKey,
      api: def?.ocApi,
      label: config.label,
      apiKey: isMasked(config.apiKey) ? undefined : config.apiKey,
      accessToken: isMasked(config.accessToken)
        ? undefined
        : config.accessToken,
      baseUrl: effectiveBaseUrl,
    }),
  });
};

export const deleteGatewayProvider = async (
  storageKey: string,
): Promise<void> => {
  await fetch(`/api/providers?id=${encodeURIComponent(storageKey)}`, {
    method: "DELETE",
  });
};

const isProviderConfigured = (config?: ProviderConfig): boolean => {
  if (!config?.enabled) return false;
  if (config.apiKey || config.accessToken) return true;
  if (config.baseUrl) return true;
  return false;
};

/** Map of ocApi type → registry provider IDs that use it */
const API_TYPE_TO_REGISTRY: Record<string, string[]> = {};
for (const def of PROVIDER_REGISTRY) {
  const list = API_TYPE_TO_REGISTRY[def.ocApi] ?? [];
  list.push(def.id);
  API_TYPE_TO_REGISTRY[def.ocApi] = list;
}

const REGISTRY_IDS = new Set(PROVIDER_REGISTRY.map((d) => d.id));

/**
 * Resolve which registry provider a storage key belongs to.
 * e.g. "anthropic-proxy" with api "anthropic-messages" → "anthropic"
 */
export function resolveParentProviderId(
  storageKey: string,
  api?: string,
): string {
  // Exact match to registry
  if (REGISTRY_IDS.has(storageKey as ProviderId)) return storageKey;

  // Check prefix match: "anthropic-proxy" starts with "anthropic"
  for (const regId of REGISTRY_IDS) {
    if (
      storageKey.startsWith(regId + "-") ||
      storageKey.startsWith(regId + "/")
    ) {
      return regId;
    }
  }

  // Match by api type to a unique registry provider
  if (api) {
    const candidates = API_TYPE_TO_REGISTRY[api];
    if (candidates?.length === 1) return candidates[0];
  }

  return storageKey;
}

/** Derive a display label from the storage key and parent */
function deriveLabel(
  storageKey: string,
  parentId: string,
  storedLabel?: string,
): string {
  if (storedLabel) return storedLabel;
  if (storageKey === parentId) return "Default";
  // Strip parent prefix: "anthropic-proxy" → "proxy", "anthropic/work" → "work"
  const suffix = storageKey.startsWith(parentId + "-")
    ? storageKey.slice(parentId.length + 1)
    : storageKey.startsWith(parentId + "/")
      ? storageKey.slice(parentId.length + 1)
      : storageKey;
  return suffix.charAt(0).toUpperCase() + suffix.slice(1);
}

export const buildProvidersWithStatus = (
  configs: Record<string, ProviderConfig>,
): ProviderWithStatus[] => {
  // Group all configs by their parent registry provider
  const keysByParent = new Map<string, ProviderKeyEntry[]>();
  const handledStorageKeys = new Set<string>();

  for (const [storageKey, config] of Object.entries(configs)) {
    if (!isProviderConfigured(config)) continue;
    const parentId = config.id || resolveParentProviderId(storageKey);
    const label = deriveLabel(storageKey, parentId, config.label);
    const entries = keysByParent.get(parentId) ?? [];
    entries.push({ storageKey, label, config });
    keysByParent.set(parentId, entries);
    handledStorageKeys.add(storageKey);
  }

  const results: ProviderWithStatus[] = PROVIDER_REGISTRY.map((def) => {
    const keys = keysByParent.get(def.id) ?? [];
    const mainConfig = configs[def.id];
    const status = keys.length > 0 ? "configured" : "unconfigured";
    return { ...def, status, config: mainConfig, keys };
  });

  // Standalone custom providers not matched to any registry entry
  const usedParents = new Set(PROVIDER_REGISTRY.map((d) => d.id));
  for (const [parentId, keys] of keysByParent.entries()) {
    if (usedParents.has(parentId as ProviderId)) continue;
    const firstConfig = keys[0].config;
    results.push({
      id: parentId as ProviderId,
      name: parentId,
      description: firstConfig.baseUrl
        ? `Custom endpoint: ${firstConfig.baseUrl}`
        : "Custom provider",
      docsUrl: "",
      iconColor: "#6B7280",
      models: [],
      supportsCustomEndpoint: true,
      supportsAccessToken: false,
      ocApi: "openai",
      status: "configured",
      config: firstConfig,
      keys,
    });
  }

  return results;
};

export const getConfiguredProviderIdsFromConfigs = (
  configs: Record<string, ProviderConfig>,
): ProviderId[] => {
  return Object.values(configs)
    .filter(isProviderConfigured)
    .map((c) => c.id);
};

/** Generate a storage key for a new key entry */
export function generateStorageKey(
  parentId: string,
  label: string,
  existingKeys: string[],
): string {
  const slug = label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const candidate = slug ? `${parentId}-${slug}` : parentId;
  if (!existingKeys.includes(candidate)) return candidate;
  // Append number if collision
  for (let i = 2; i < 100; i++) {
    const c = `${candidate}-${i}`;
    if (!existingKeys.includes(c)) return c;
  }
  return `${parentId}-${Date.now()}`;
}
