"use client";

import { useState, useEffect, useCallback } from "react";
import { Modal } from "@/components/ui/Modal";
import { FallbackChainEditor } from "@/features/models/components/FallbackChainEditor";
import type { AvailableModel, ModelsConfig } from "@/app/api/models/route";
import { toast } from "sonner";

interface AgentModelConfigModalProps {
  open: boolean;
  agentId: string;
  agentName: string;
  onClose: () => void;
  onSaved: (primary: string | null, fallbacks: string[]) => void;
}

export function AgentModelConfigModal({
  open,
  agentId,
  agentName,
  onClose,
  onSaved,
}: AgentModelConfigModalProps) {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [availableModels, setAvailableModels] = useState<AvailableModel[]>([]);
  const [primary, setPrimary] = useState<string>("");
  const [fallbacks, setFallbacks] = useState<string[]>([]);

  const loadConfig = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/models");
      if (!res.ok) throw new Error("Failed to load model config");
      const data = (await res.json()) as ModelsConfig;

      setAvailableModels(data.availableModels);

      const agentConfig = data.agents.find((a) => a.id === agentId);
      if (agentConfig) {
        setPrimary(agentConfig.primary ?? "");
        setFallbacks(agentConfig.fallbacks);
      } else {
        setPrimary("");
        setFallbacks([]);
      }
    } catch (err) {
      console.error(err);
      toast.error("Impossible de charger la configuration des modèles");
      onClose();
    } finally {
      setLoading(false);
    }
  }, [agentId, onClose]);

  useEffect(() => {
    if (open) {
      void loadConfig();
    }
  }, [loadConfig, open]);

  const handleSave = async () => {
    setSaving(true);
    try {
      const finalPrimary = primary || null;
      const res = await fetch("/api/models/agent", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          agentId,
          primary: finalPrimary,
          fallbacks,
        }),
      });

      if (!res.ok) throw new Error("Failed to save");

      toast.success("Configuration sauvegardée");
      onSaved(finalPrimary, fallbacks);
      onClose();
    } catch (err) {
      console.error(err);
      toast.error("Erreur lors de la sauvegarde");
    } finally {
      setSaving(false);
    }
  };

  const handleReset = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/models/agent", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          agentId,
          primary: null,
          fallbacks: [],
        }),
      });

      if (!res.ok) throw new Error("Failed to reset");

      toast.success("Configuration réinitialisée avec succès");
      onSaved(null, []);
      onClose();
    } catch (err) {
      console.error(err);
      toast.error("Erreur lors de la réinitialisation");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Modal
        open={open}
        onClose={onClose}
        title={`Modèle — ${agentName}`}
        size="md"
      >
        <div className="flex items-center justify-center p-8">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      </Modal>
    );
  }

  // models not already in fallbacks (and not primary)
  const fallbackModels = availableModels.filter((m) => m.id !== primary);

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={`Modèle — ${agentName}`}
      size="md"
    >
      <div className="space-y-5">
        {/* Primary model */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Modèle principal
          </label>
          <select
            value={primary}
            onChange={(e) => {
              const val = e.target.value;
              setPrimary(val);
              setFallbacks((prev) => prev.filter((f) => f !== val));
            }}
            className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            style={{
              backgroundColor: "var(--card)",
              color: "var(--foreground)",
            }}
          >
            <option value="">Par défaut (Global Fallback Chain)</option>
            {availableModels.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name}
              </option>
            ))}
          </select>
        </div>

        {/* Fallbacks */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Fallbacks (dans l&apos;ordre)
          </label>
          <div className="max-w-sm">
            <FallbackChainEditor
              items={fallbacks}
              availableModels={fallbackModels}
              onChange={setFallbacks}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-1">
          <button
            type="button"
            onClick={handleReset}
            disabled={saving}
            className="text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground disabled:opacity-40"
          >
            Réinitialiser par défaut
          </button>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              disabled={saving}
              className="ui-btn-secondary px-3 py-2 text-sm"
            >
              Annuler
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="ui-btn-primary px-3 py-2 text-sm"
            >
              {saving ? "Sauvegarde..." : "Sauvegarder"}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
