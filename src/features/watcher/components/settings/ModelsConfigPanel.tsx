"use client";

import { useState } from "react";
import { useWatcherConfigController } from "@/features/watcher/operations/useWatcherConfigController";
import { randomUUID } from "@/lib/uuid";
import type { ModelConfig, ModelProvider } from "@/features/watcher/types";

const PROVIDER_DEFAULTS: Record<ModelProvider, { base_url: string }> = {
  anthropic: { base_url: "https://api.anthropic.com" },
  google: { base_url: "https://generativelanguage.googleapis.com" },
  openai: { base_url: "https://api.openai.com" },
  custom: { base_url: "" },
};

const PRESETS: Array<{ label: string; model: Partial<ModelConfig> }> = [
  {
    label: "Claude Sonnet",
    model: {
      model_id: "anthropic/claude-sonnet-4-6",
      provider: "anthropic",
      max_tokens: 4096,
      temperature: 0.3,
      timeout_seconds: 30,
      max_retries: 1,
    },
  },
  {
    label: "Claude Haiku",
    model: {
      model_id: "anthropic/claude-haiku-4-5-20251001",
      provider: "anthropic",
      max_tokens: 4096,
      temperature: 0.3,
      timeout_seconds: 30,
      max_retries: 1,
    },
  },
  {
    label: "Gemini Flash",
    model: {
      model_id: "gemini-2.5-flash",
      provider: "google",
      max_tokens: 4096,
      temperature: 0.3,
      timeout_seconds: 30,
      max_retries: 1,
    },
  },
  {
    label: "Gemini Pro",
    model: {
      model_id: "gemini-3-pro-preview",
      provider: "google",
      max_tokens: 4096,
      temperature: 0.3,
      timeout_seconds: 30,
      max_retries: 1,
    },
  },
  {
    label: "Proxy local",
    model: {
      model_id: "",
      provider: "custom",
      base_url: "http://localhost:18081",
      max_tokens: 4096,
      temperature: 0.3,
      timeout_seconds: 30,
      max_retries: 1,
    },
  },
  {
    label: "Compatible OpenAI",
    model: {
      model_id: "",
      provider: "openai",
      max_tokens: 4096,
      temperature: 0.3,
      timeout_seconds: 30,
      max_retries: 1,
    },
  },
];

function newModel(partial?: Partial<ModelConfig>): ModelConfig {
  return {
    id: randomUUID(),
    enabled: true,
    model_id: "",
    provider: "anthropic",
    base_url: PROVIDER_DEFAULTS.anthropic.base_url,
    api_key: "",
    max_tokens: 4096,
    temperature: 0.3,
    timeout_seconds: 30,
    max_retries: 1,
    ...partial,
  };
}

export function ModelsConfigPanel() {
  const { config, updateField } = useWatcherConfigController();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showKey, setShowKey] = useState<Record<string, boolean>>({});
  const [testResults, setTestResults] = useState<
    Record<string, { ok: boolean; latency_ms: number; error?: string }>
  >({});
  const [testing, setTesting] = useState<Record<string, boolean>>({});

  if (!config)
    return <div className="text-muted-foreground text-sm">Chargement...</div>;

  const models: ModelConfig[] = config.models ?? [];

  const setModels = (newModels: ModelConfig[]) =>
    updateField("models", newModels);

  const addModel = (preset?: Partial<ModelConfig>) => {
    const m = newModel(preset);
    if (preset?.provider)
      m.base_url =
        PROVIDER_DEFAULTS[preset.provider as ModelProvider]?.base_url ?? "";
    setModels([...models, m]);
    setExpandedId(m.id);
  };

  const removeModel = (id: string) => {
    if (models.length <= 1) return;
    setModels(models.filter((m) => m.id !== id));
  };

  const moveUp = (i: number) => {
    if (i === 0) return;
    const next = [...models];
    [next[i - 1], next[i]] = [next[i], next[i - 1]];
    setModels(next);
  };

  const moveDown = (i: number) => {
    if (i === models.length - 1) return;
    const next = [...models];
    [next[i], next[i + 1]] = [next[i + 1], next[i]];
    setModels(next);
  };

  const updateModel = (
    id: string,
    field: keyof ModelConfig,
    value: unknown,
  ) => {
    setModels(
      models.map((m) => {
        if (m.id !== id) return m;
        const updated = { ...m, [field]: value };
        if (field === "provider") {
          updated.base_url =
            PROVIDER_DEFAULTS[value as ModelProvider]?.base_url ?? "";
        }
        return updated;
      }),
    );
  };

  const testModel = async (model: ModelConfig) => {
    setTesting((p) => ({ ...p, [model.id]: true }));
    try {
      const res = await fetch("/api/watcher/models/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          models: [
            {
              id: model.id,
              provider: model.provider,
              model_id: model.model_id,
              base_url: model.base_url,
              api_key: model.api_key,
              timeout_seconds: model.timeout_seconds,
            },
          ],
        }),
      });
      const data = await res.json();
      const result = data.results?.[0];
      if (result) setTestResults((p) => ({ ...p, [model.id]: result }));
    } finally {
      setTesting((p) => ({ ...p, [model.id]: false }));
    }
  };

  const testAll = async () => {
    await Promise.all(models.map(testModel));
  };

  return (
    <div className="space-y-6">
      {/* Fallback chain */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">
            Chaîne de secours
          </h3>
          <button
            onClick={testAll}
            className="text-xs ui-btn-primary px-2 py-1"
          >
            Tout tester
          </button>
        </div>

        {models.length === 0 && (
          <p className="text-sm text-muted-foreground">
            Aucun modèle configuré. Ajoutez-en un ci-dessous.
          </p>
        )}

        {models.map((model, i) => {
          const result = testResults[model.id];
          const busy = testing[model.id];
          const expanded = expandedId === model.id;

          return (
            <div
              key={model.id}
              className="rounded-lg border border-border bg-background"
            >
              <div className="flex items-center gap-2 px-3 py-2">
                <div className="flex flex-col gap-0.5">
                  <button
                    onClick={() => moveUp(i)}
                    disabled={i === 0}
                    className="text-[10px] text-muted-foreground disabled:opacity-30"
                  >
                    ▲
                  </button>
                  <button
                    onClick={() => moveDown(i)}
                    disabled={i === models.length - 1}
                    className="text-[10px] text-muted-foreground disabled:opacity-30"
                  >
                    ▼
                  </button>
                </div>

                <button
                  role="switch"
                  aria-checked={model.enabled}
                  onClick={() =>
                    updateModel(model.id, "enabled", !model.enabled)
                  }
                  className={`relative inline-flex h-4 w-7 shrink-0 cursor-pointer rounded-full transition-colors ${model.enabled ? "bg-primary" : "bg-muted"}`}
                >
                  <span
                    className={`absolute top-0.5 h-3 w-3 rounded-full bg-white shadow transition-transform ${model.enabled ? "translate-x-3" : "translate-x-0.5"}`}
                  />
                </button>

                <div
                  className="min-w-0 flex-1"
                  onClick={() => setExpandedId(expanded ? null : model.id)}
                  role="button"
                >
                  <p className="truncate text-sm font-medium text-foreground">
                    {model.model_id || "Modèle non configuré"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {model.provider}
                  </p>
                </div>

                {result && (
                  <span
                    className={`text-xs font-mono ${result.ok ? "text-green-400" : "text-red-400"}`}
                  >
                    {result.ok ? `${result.latency_ms}ms` : "Erreur"}
                  </span>
                )}

                <button
                  onClick={() => testModel(model)}
                  disabled={busy}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  {busy ? "…" : "Test"}
                </button>

                <button
                  onClick={() => removeModel(model.id)}
                  disabled={models.length <= 1}
                  className="text-xs text-red-400 hover:text-red-300 disabled:opacity-30"
                >
                  ✕
                </button>
              </div>

              {expanded && (
                <div className="space-y-3 border-t border-border px-3 pb-3 pt-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs text-muted-foreground">
                        Model ID
                      </label>
                      <input
                        className="w-full rounded border border-border bg-background px-2 py-1 text-sm"
                        value={model.model_id}
                        onChange={(e) =>
                          updateModel(model.id, "model_id", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs text-muted-foreground">
                        Fournisseur
                      </label>
                      <select
                        className="w-full rounded border border-border bg-background px-2 py-1 text-sm"
                        value={model.provider}
                        onChange={(e) =>
                          updateModel(
                            model.id,
                            "provider",
                            e.target.value as ModelProvider,
                          )
                        }
                      >
                        <option value="anthropic">Anthropic</option>
                        <option value="google">Google</option>
                        <option value="openai">Compatible OpenAI</option>
                        <option value="custom">Autre</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-muted-foreground">
                      URL de base
                    </label>
                    <input
                      className="w-full rounded border border-border bg-background px-2 py-1 text-sm font-mono"
                      value={model.base_url ?? ""}
                      onChange={(e) =>
                        updateModel(model.id, "base_url", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-muted-foreground">
                      Clé API
                    </label>
                    <div className="flex gap-1">
                      <input
                        type={showKey[model.id] ? "text" : "password"}
                        className="flex-1 rounded border border-border bg-background px-2 py-1 text-sm font-mono"
                        value={model.api_key ?? ""}
                        onChange={(e) =>
                          updateModel(model.id, "api_key", e.target.value)
                        }
                        placeholder="sk-..."
                      />
                      <button
                        onClick={() =>
                          setShowKey((p) => ({
                            ...p,
                            [model.id]: !p[model.id],
                          }))
                        }
                        className="px-2 text-xs text-muted-foreground hover:text-foreground"
                      >
                        {showKey[model.id] ? "Masquer" : "Voir"}
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      {
                        field: "max_tokens" as keyof ModelConfig,
                        label: "Max tokens",
                        min: 256,
                        max: 32768,
                        step: 256,
                      },
                      {
                        field: "timeout_seconds" as keyof ModelConfig,
                        label: "Timeout (s)",
                        min: 5,
                        max: 120,
                        step: 5,
                      },
                      {
                        field: "max_retries" as keyof ModelConfig,
                        label: "Max retries",
                        min: 0,
                        max: 5,
                        step: 1,
                      },
                    ].map(({ field, label, min, max, step }) => (
                      <div key={field} className="space-y-1">
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>{label}</span>
                          <span>{model[field] as number}</span>
                        </div>
                        <input
                          type="range"
                          min={min}
                          max={max}
                          step={step}
                          value={model[field] as number}
                          onChange={(e) =>
                            updateModel(model.id, field, Number(e.target.value))
                          }
                          className="w-full"
                        />
                      </div>
                    ))}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Température</span>
                        <span>{model.temperature.toFixed(1)}</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={2}
                        step={0.1}
                        value={model.temperature}
                        onChange={(e) =>
                          updateModel(
                            model.id,
                            "temperature",
                            Number(e.target.value),
                          )
                        }
                        className="w-full"
                      />
                    </div>
                  </div>
                  {result && !result.ok && (
                    <p className="text-xs text-red-400 break-all">
                      {result.error}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Presets */}
      <section className="space-y-2">
        <h3 className="text-sm font-semibold text-foreground">
          Presets rapides
        </h3>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.label}
              onClick={() => addModel(p.model)}
              className="rounded border border-border px-2 py-1 text-xs text-muted-foreground hover:border-primary hover:text-foreground"
            >
              + {p.label}
            </button>
          ))}
        </div>
        <button
          onClick={() => addModel()}
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          + Modèle vide
        </button>
      </section>

      {/* Task assignment */}
      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">
          Utilisation par tâche
        </h3>
        {(["scoring", "analysis", "reports"] as const).map((task) => (
          <div key={task} className="flex items-center justify-between gap-2">
            <label className="text-sm text-muted-foreground capitalize">
              {task}
            </label>
            <select
              className="rounded border border-border bg-background px-2 py-1 text-xs"
              value={config.models_tasks?.[task] ?? ""}
              onChange={(e) =>
                updateField(`models_tasks.${task}`, e.target.value || undefined)
              }
            >
              <option value="">Chaîne de secours</option>
              {models
                .filter((m) => m.enabled)
                .map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.model_id || m.id.slice(0, 8)}
                  </option>
                ))}
            </select>
          </div>
        ))}
      </section>

      {/* Budget */}
      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">
          Budget & limites
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Limiter les appels API
          </span>
          <button
            role="switch"
            aria-checked={config.models_budget?.limit_api_calls ?? false}
            onClick={() =>
              updateField(
                "models_budget.limit_api_calls",
                !(config.models_budget?.limit_api_calls ?? false),
              )
            }
            className={`relative inline-flex h-5 w-9 cursor-pointer rounded-full transition-colors ${config.models_budget?.limit_api_calls ? "bg-primary" : "bg-muted"}`}
          >
            <span
              className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${config.models_budget?.limit_api_calls ? "translate-x-4" : "translate-x-0.5"}`}
            />
          </button>
        </div>
        {config.models_budget?.limit_api_calls && (
          <>
            {[
              {
                field: "max_calls_per_hour",
                label: "Max appels/heure",
                min: 10,
                max: 1000,
              },
              {
                field: "max_calls_per_day",
                label: "Max appels/jour",
                min: 100,
                max: 10000,
              },
            ].map(({ field, label, min, max }) => (
              <div key={field} className="space-y-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{label}</span>
                  <span>
                    {((config.models_budget as Record<string, unknown>)?.[
                      field
                    ] as number) ?? min}
                  </span>
                </div>
                <input
                  type="range"
                  min={min}
                  max={max}
                  value={
                    ((config.models_budget as Record<string, unknown>)?.[
                      field
                    ] as number) ?? min
                  }
                  onChange={(e) =>
                    updateField(
                      `models_budget.${field}`,
                      Number(e.target.value),
                    )
                  }
                  className="w-full"
                />
              </div>
            ))}
          </>
        )}
      </section>
    </div>
  );
}
