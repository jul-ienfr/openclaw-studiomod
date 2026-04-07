"use client";

import { useState, useEffect, useCallback } from "react";
import { Pencil, Layers, RotateCw } from "lucide-react";
import { toast } from "sonner";
import { FallbackChainEditor } from "./FallbackChainEditor";
import { AgentModelModal } from "./AgentModelModal";
import type {
  ModelsConfig,
  AgentModelConfig,
  AvailableModel,
} from "@/app/api/models/route";

async function fetchModelsConfig(): Promise<ModelsConfig> {
  const res = await fetch("/api/models");
  if (!res.ok) throw new Error("Failed to load model config");
  return res.json() as Promise<ModelsConfig>;
}

async function patchGlobalFallback(
  primary: string | null,
  fallbacks: string[],
) {
  const res = await fetch("/api/models", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ primary, fallbacks }),
  });
  if (!res.ok) throw new Error("Failed to save");
}

async function patchAgentModel(
  agentId: string,
  primary: string | null,
  fallbacks: string[],
) {
  const res = await fetch("/api/models/agent", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ agentId, primary, fallbacks }),
  });
  if (!res.ok) throw new Error("Failed to save");
}

export function ModelsPanel() {
  const [config, setConfig] = useState<ModelsConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [savingGlobal, setSavingGlobal] = useState(false);

  // Local state for global fallback edits
  const [globalPrimary, setGlobalPrimary] = useState<string>("");
  const [globalFallbacks, setGlobalFallbacks] = useState<string[]>([]);
  const [globalDirty, setGlobalDirty] = useState(false);

  // Modal state
  const [editingAgent, setEditingAgent] = useState<AgentModelConfig | null>(
    null,
  );

  useEffect(() => {
    fetchModelsConfig()
      .then((data) => {
        setConfig(data);
        setGlobalPrimary(data.globalPrimary ?? "");
        setGlobalFallbacks(data.globalFallbacks);
      })
      .catch(() => toast.error("Failed to load model configuration"))
      .finally(() => setLoading(false));
  }, []);

  const handleGlobalPrimaryChange = (val: string) => {
    setGlobalPrimary(val);
    setGlobalFallbacks((prev) => prev.filter((f) => f !== val));
    setGlobalDirty(true);
  };

  const handleGlobalFallbacksChange = (items: string[]) => {
    setGlobalFallbacks(items);
    setGlobalDirty(true);
  };

  const handleSaveGlobal = useCallback(async () => {
    setSavingGlobal(true);
    try {
      await patchGlobalFallback(globalPrimary || null, globalFallbacks);
      setGlobalDirty(false);
      toast.success("Configuration saved");
    } catch {
      toast.error("Save failed");
    } finally {
      setSavingGlobal(false);
    }
  }, [globalPrimary, globalFallbacks]);

  const handleRefreshModels = useCallback(async () => {
    setRefreshing(true);
    try {
      const data = await fetchModelsConfig();
      setConfig(data);
      toast.success(`${data.availableModels.length} modèles détectés`);
    } catch {
      toast.error("Failed to refresh models");
    } finally {
      setRefreshing(false);
    }
  }, []);

  const handleAgentSave = useCallback(
    async (agentId: string, primary: string | null, fallbacks: string[]) => {
      await patchAgentModel(agentId, primary, fallbacks);
      // Update local config
      setConfig((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          agents: prev.agents.map((a) =>
            a.id === agentId ? { ...a, primary, fallbacks } : a,
          ),
        };
      });
      toast.success("Configuration saved");
    },
    [],
  );

  const availableModels: AvailableModel[] = config?.availableModels ?? [];
  const fallbackModels = availableModels.filter((m) => m.id !== globalPrimary);

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center text-muted-foreground text-sm">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <header className="border-b border-border px-6 py-4">
        <h1 className="console-title type-page-title text-foreground flex items-center gap-2">
          <Layers className="h-5 w-5 text-muted-foreground" />
          Model Configuration
        </h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          Configure primary models and fallback chains per agent.
        </p>
        <div className="mt-3 flex items-center gap-2">
          <button
            onClick={handleRefreshModels}
            disabled={refreshing}
            className="flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-sm hover:bg-muted disabled:opacity-50"
            title="Reload models from openclaw.json"
          >
            <RotateCw
              className={`h-3.5 w-3.5 ${refreshing ? "animate-spin" : ""}`}
            />
            {refreshing ? "Refreshing..." : "Refresh Models"}
          </button>
          <span className="text-xs text-muted-foreground">
            {config?.availableModels.length || 0} models available
          </span>
        </div>
      </header>

      <main className="flex-1 space-y-8 p-6">
        {/* Global Fallback Chain */}
        <section className="space-y-4">
          <div>
            <h2 className="text-sm font-semibold text-foreground">
              Global Fallback Chain
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Default model order used by all agents without a specific config.
            </p>
          </div>

          {/* Primary */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Primary model
            </label>
            <select
              value={globalPrimary}
              onChange={(e) => handleGlobalPrimaryChange(e.target.value)}
              className="w-full max-w-sm rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              style={{
                backgroundColor: "var(--card)",
                color: "var(--foreground)",
              }}
            >
              <option value="">— None —</option>
              {availableModels.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>

          {/* Fallbacks */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Fallbacks (in order)
            </label>
            <div className="max-w-sm">
              <FallbackChainEditor
                items={globalFallbacks}
                availableModels={fallbackModels}
                onChange={handleGlobalFallbacksChange}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleSaveGlobal}
            disabled={!globalDirty || savingGlobal}
            className="ui-btn-primary px-4 py-2 text-sm disabled:opacity-40"
          >
            {savingGlobal ? "Saving..." : "Save"}
          </button>
        </section>

        {/* Per-Agent Configuration */}
        <section className="space-y-4">
          <div>
            <h2 className="text-sm font-semibold text-foreground">
              Per-Agent Configuration
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Override the model for specific agents.
            </p>
          </div>

          {(config?.agents ?? []).length === 0 ? (
            <p className="text-sm text-muted-foreground">No agents found.</p>
          ) : (
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-1 text-left">
                    <th className="px-4 py-2.5 text-xs font-medium text-muted-foreground">
                      Agent
                    </th>
                    <th className="px-4 py-2.5 text-xs font-medium text-muted-foreground">
                      Primary model
                    </th>
                    <th className="px-4 py-2.5 text-xs font-medium text-muted-foreground">
                      Fallbacks
                    </th>
                    <th className="px-4 py-2.5 w-10" />
                  </tr>
                </thead>
                <tbody>
                  {(config?.agents ?? []).map((agent) => {
                    const primaryModel = availableModels.find(
                      (m) => m.id === agent.primary,
                    );
                    return (
                      <tr
                        key={agent.id}
                        className="border-b border-border last:border-0 hover:bg-surface-1 transition-colors"
                      >
                        <td className="px-4 py-3 font-medium text-foreground">
                          {agent.name}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {agent.primary ? (
                            <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs text-primary">
                              {primaryModel?.name ?? agent.primary}
                            </span>
                          ) : (
                            <span className="text-xs text-muted-foreground italic">
                              default
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {agent.fallbacks.length > 0 ? (
                            <span className="text-xs">
                              +{agent.fallbacks.length}
                            </span>
                          ) : (
                            <span className="text-xs text-muted-foreground italic">
                              none
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3">
                          <button
                            type="button"
                            onClick={() => setEditingAgent(agent)}
                            aria-label={`Edit ${agent.name}`}
                            className="flex h-7 w-7 items-center justify-center rounded text-muted-foreground hover:bg-muted hover:text-foreground"
                          >
                            <Pencil className="h-3.5 w-3.5" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>

      {editingAgent && (
        <AgentModelModal
          open
          agent={editingAgent}
          availableModels={availableModels}
          onSave={handleAgentSave}
          onClose={() => setEditingAgent(null)}
        />
      )}
    </div>
  );
}
