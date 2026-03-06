"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Layers, Search, Upload, Activity, Loader2 } from "lucide-react";
import { Toaster, toast } from "sonner";
import { ProviderCard } from "./ProviderCard";
import { ApiKeyModal } from "./ApiKeyModal";
import { EnvImportModal } from "./EnvImportModal";
import type { EnvImportResult } from "@/features/credentials/envImportApi";
import {
  useProviderStore,
  ProviderStoreContext,
  fetchProviderConfigs,
  persistProviderConfigs,
  patchGatewayProvider,
  deleteGatewayProvider,
  buildProvidersWithStatus,
  getConfiguredProviderIdsFromConfigs,
  generateStorageKey,
} from "../providerStore";
import { PROVIDER_REGISTRY } from "../providerRegistry";
import type { ProviderConfig, ProviderWithStatus } from "../types";

type ProviderCategory =
  | "all"
  | "commercial"
  | "open-source"
  | "self-hosted"
  | "gateway";

const CATEGORY_LABELS: Record<ProviderCategory, string> = {
  all: "All",
  commercial: "Commercial",
  "open-source": "Open Source",
  "self-hosted": "Self-Hosted",
  gateway: "Gateway",
};

const PROVIDER_CATEGORIES: Record<string, ProviderCategory> = {
  anthropic: "commercial",
  openai: "commercial",
  perplexity: "commercial",
  google: "commercial",
  mistral: "commercial",
  groq: "commercial",
  deepseek: "commercial",
  cohere: "commercial",
  xai: "commercial",
  "amazon-bedrock": "commercial",
  "azure-openai": "commercial",
  fireworks: "commercial",
  nvidia: "commercial",
  together: "open-source",
  huggingface: "open-source",
  ollama: "self-hosted",
  cloudflare: "self-hosted",
  custom: "self-hosted",
  openrouter: "gateway",
  litellm: "gateway",
};

type ModalState =
  | { mode: "edit"; storageKey: string; providerId: string }
  | { mode: "add"; providerId: string }
  | null;

type HealthStatus = "idle" | "testing" | "healthy" | "unhealthy";

function ProvidersPanelInner() {
  const t = useTranslations("providers");
  const store = useProviderStore();
  const [modalState, setModalState] = useState<ModalState>(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<ProviderCategory>("all");
  const [showEnvImport, setShowEnvImport] = useState(false);
  const [healthMap, setHealthMap] = useState<Record<string, HealthStatus>>({});
  const [testingAll, setTestingAll] = useState(false);
  const [fallbackChain, setFallbackChain] = useState<string[]>([]);

  // Fetch fallback chain from API
  useEffect(() => {
    void (async () => {
      try {
        const res = await fetch("/api/providers");
        if (!res.ok) return;
        const data = (await res.json()) as { fallbackChain?: string[] };
        if (data.fallbackChain) setFallbackChain(data.fallbackChain);
      } catch { /* ignore */ }
    })();
  }, []);

  const providersWithStatus: ProviderWithStatus[] = useMemo(
    () => store.getProvidersWithStatus(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [store.configs],
  );

  const configuredProviders = useMemo(
    () => providersWithStatus.filter((p) => p.status === "configured"),
    [providersWithStatus],
  );

  const unconfiguredProviders = useMemo(() => {
    let list = providersWithStatus.filter((p) => p.status !== "configured");

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q),
      );
    }

    if (activeCategory !== "all") {
      list = list.filter(
        (p) => (PROVIDER_CATEGORIES[p.id] ?? "commercial") === activeCategory,
      );
    }

    return list;
  }, [providersWithStatus, search, activeCategory]);

  // Resolve modal context from state
  const modalProvider = modalState
    ? (providersWithStatus.find((p) => p.id === modalState.providerId) ?? null)
    : null;

  const modalExistingConfig =
    modalState?.mode === "edit"
      ? store.configs[modalState.storageKey]
      : undefined;

  const isNewKey = modalState?.mode === "add";

  const handleConfigure = (storageKey: string) => {
    // Find which provider this storageKey belongs to
    const config = store.configs[storageKey];
    const providerId = config?.id ?? storageKey;
    setModalState({
      mode: "edit",
      storageKey,
      providerId: providerId as string,
    });
  };

  const handleAddKey = (providerId: string) => {
    // Check if provider has no keys yet — if so, create as "default" (no label needed)
    const provider = providersWithStatus.find((p) => p.id === providerId);
    if (provider && provider.keys.length === 0) {
      // First key: open modal without label requirement
      setModalState({ mode: "edit", storageKey: providerId, providerId });
    } else {
      setModalState({ mode: "add", providerId });
    }
  };

  const handleSave = (config: ProviderConfig) => {
    let storageKey: string;

    if (modalState?.mode === "edit") {
      storageKey = modalState.storageKey;
    } else {
      // New key — generate storage key from label
      storageKey = generateStorageKey(
        config.id,
        config.label ?? "",
        Object.keys(store.configs),
      );
    }

    const finalConfig: ProviderConfig = {
      ...config,
      storageKey,
    };

    store.saveProvider(finalConfig);
    setModalState(null);

    const providerName =
      PROVIDER_REGISTRY.find((p) => p.id === config.id)?.name ?? config.id;
    const label = config.label ? ` (${config.label})` : "";
    toast.success(`${providerName}${label} configuré`);
  };

  const handleRemove = (storageKey: string) => {
    store.removeProvider(storageKey);
    setModalState(null);
    toast.success("Clé supprimée");
  };

  const handleTestAll = useCallback(async () => {
    const configured = configuredProviders.filter((p) => p.config);
    if (configured.length === 0) return;

    setTestingAll(true);
    const initial: Record<string, HealthStatus> = {};
    for (const p of configured) initial[p.id] = "testing";
    setHealthMap(initial);

    try {
      const body = configured.map((p) => ({
        providerId: p.id,
        apiKey: p.config?.apiKey,
        accessToken: p.config?.accessToken,
        baseUrl: p.config?.baseUrl,
      }));
      const res = await fetch("/api/providers/validate-batch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ providers: body }),
      });
      const data = (await res.json()) as {
        results: Array<{
          providerId: string;
          valid: boolean;
          error?: string | null;
        }>;
      };
      const next: Record<string, HealthStatus> = {};
      let healthy = 0;
      for (const r of data.results) {
        next[r.providerId] = r.valid ? "healthy" : "unhealthy";
        if (r.valid) healthy++;
      }
      setHealthMap(next);
      toast.success(`${healthy}/${data.results.length} providers healthy`);
    } catch {
      const fail: Record<string, HealthStatus> = {};
      for (const p of configured) fail[p.id] = "unhealthy";
      setHealthMap(fail);
      toast.error("Batch validation failed");
    } finally {
      setTestingAll(false);
    }
  }, [configuredProviders]);

  const handleEnvImportProviders = useCallback(
    (providers: EnvImportResult["providers"]) => {
      for (const p of providers) {
        const def = PROVIDER_REGISTRY.find((r) => r.id === p.serviceType);
        if (!def) continue;
        store.saveProvider({
          id: def.id,
          apiKey: p.apiKey,
          authType: "apiKey",
          enabled: true,
        });
      }
      toast.success(`${providers.length} provider(s) imported`);
    },
    [store],
  );

  const totalCount = PROVIDER_REGISTRY.length;
  const configuredCount = configuredProviders.length;

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <Toaster position="bottom-right" />

      {/* Header */}
      <header className="flex items-center justify-between border-b border-border px-6 py-4 shrink-0">
        <div className="flex items-center gap-3">
          <Layers className="h-5 w-5 text-muted-foreground" />
          <div>
            <h1 className="console-title type-page-title text-foreground">
              {t("title")}
            </h1>
            <p className="text-sm text-muted-foreground">{t("description")}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {configuredProviders.length > 0 ? (
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-[11px] font-medium text-foreground transition-colors hover:bg-surface-2 disabled:opacity-50"
              onClick={handleTestAll}
              disabled={testingAll}
            >
              {testingAll ? (
                <Loader2 className="h-3 w-3 animate-spin" aria-hidden="true" />
              ) : (
                <Activity className="h-3 w-3" aria-hidden="true" />
              )}
              {testingAll ? t("testingAll") : t("testAll")}
            </button>
          ) : null}
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-[11px] font-medium text-foreground transition-colors hover:bg-surface-2"
            onClick={() => setShowEnvImport(true)}
          >
            <Upload className="h-3 w-3" aria-hidden="true" />
            {t("importEnv")}
          </button>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              {configuredCount}
            </span>
            <span>/</span>
            <span>{totalCount}</span>
            <span>{t("configuredSection").toLowerCase()}</span>
          </div>
        </div>
      </header>

      <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto px-6 py-6">
        {/* Fallback chain */}
        {fallbackChain.length > 0 && (
          <section>
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Fallback Chain
            </h2>
            <div className="flex flex-wrap items-center gap-1.5">
              {fallbackChain.map((model, i) => {
                const [provPart] = model.split("/");
                const providerDef = PROVIDER_REGISTRY.find(
                  (p) => p.id === provPart || model.startsWith(p.id),
                );
                return (
                  <span key={`${model}-${i}`} className="flex items-center gap-1">
                    <span className="rounded-md bg-surface-2 px-2 py-1 text-[11px] font-medium text-foreground">
                      {providerDef ? (
                        <span className="mr-1 inline-block h-2 w-2 rounded-full" style={{ backgroundColor: providerDef.iconColor }} />
                      ) : null}
                      {model}
                    </span>
                    {i < fallbackChain.length - 1 && (
                      <span className="text-[10px] text-muted-foreground">→</span>
                    )}
                  </span>
                );
              })}
            </div>
          </section>
        )}

        {/* Configured providers */}
        {configuredProviders.length > 0 ? (
          <section>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t("configuredSection")}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {configuredProviders.map((provider) => (
                <ProviderCard
                  key={provider.id}
                  provider={provider}
                  onConfigure={handleConfigure}
                  onAddKey={handleAddKey}
                  healthStatus={healthMap[provider.id]}
                />
              ))}
            </div>
          </section>
        ) : null}

        {/* Available providers */}
        <section>
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {configuredProviders.length > 0
                ? t("availableSection")
                : t("title")}
            </h2>
            <div className="flex items-center gap-2">
              {/* Search */}
              <div className="relative">
                <Search
                  className="absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  placeholder={t("searchPlaceholder")}
                  className="ui-input h-7 rounded-md border border-border bg-surface-2 pl-7 pr-3 text-xs"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              {/* Category filter */}
              <div className="flex items-center gap-1">
                {(Object.keys(CATEGORY_LABELS) as ProviderCategory[]).map(
                  (cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveCategory(cat)}
                      className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors ${
                        activeCategory === cat
                          ? "bg-primary text-primary-foreground"
                          : "bg-surface-2 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {CATEGORY_LABELS[cat]}
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>

          {unconfiguredProviders.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {unconfiguredProviders.map((provider) => (
                <ProviderCard
                  key={provider.id}
                  provider={provider}
                  onConfigure={handleConfigure}
                  onAddKey={handleAddKey}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 py-16 text-muted-foreground">
              <Layers className="h-8 w-8" />
              <p className="text-sm">
                {search || activeCategory !== "all"
                  ? t("noResults")
                  : t("allConfigured")}
              </p>
            </div>
          )}
        </section>
      </div>

      {/* Modal */}
      {modalProvider ? (
        <ApiKeyModal
          provider={modalProvider}
          existingConfig={modalExistingConfig}
          isNewKey={isNewKey}
          onSave={handleSave}
          onRemove={
            modalExistingConfig && modalState?.mode === "edit"
              ? () => handleRemove(modalState.storageKey)
              : undefined
          }
          onClose={() => setModalState(null)}
        />
      ) : null}

      {/* Env Import Modal */}
      {showEnvImport ? (
        <EnvImportModal
          onImportProviders={handleEnvImportProviders}
          onClose={() => setShowEnvImport(false)}
        />
      ) : null}
    </div>
  );
}

// Provider store context provider — loads from openclaw.json via API
function ProviderStoreProvider({ children }: { children: React.ReactNode }) {
  const [configs, setConfigs] = useState<Record<string, ProviderConfig>>(() =>
    typeof window !== "undefined"
      ? (JSON.parse(
          localStorage.getItem("openclaw-studio-providers") ?? "{}",
        ) as Record<string, ProviderConfig>)
      : {},
  );

  // Load from gateway on mount
  useEffect(() => {
    void fetchProviderConfigs().then((merged) => setConfigs(merged));
  }, []);

  const saveProvider = (config: ProviderConfig) => {
    const key = config.storageKey || config.id;
    setConfigs((prev) => {
      const next = { ...prev, [key]: config };
      persistProviderConfigs(next);
      void patchGatewayProvider(config);
      return next;
    });
  };

  const removeProvider = (storageKey: string) => {
    setConfigs((prev) => {
      const next = { ...prev };
      delete next[storageKey];
      persistProviderConfigs(next);
      void deleteGatewayProvider(storageKey);
      return next;
    });
  };

  const getProvidersWithStatus = () => buildProvidersWithStatus(configs);

  const getConfiguredProviderIds = () =>
    getConfiguredProviderIdsFromConfigs(configs);

  return (
    <ProviderStoreContext.Provider
      value={{
        configs,
        saveProvider,
        removeProvider,
        getProvidersWithStatus,
        getConfiguredProviderIds,
      }}
    >
      {children}
    </ProviderStoreContext.Provider>
  );
}

export function ProvidersPanel() {
  return (
    <ProviderStoreProvider>
      <ProvidersPanelInner />
    </ProviderStoreProvider>
  );
}
