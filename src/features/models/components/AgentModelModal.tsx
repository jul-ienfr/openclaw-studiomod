"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { FallbackChainEditor } from "./FallbackChainEditor";
import type { AgentModelConfig, AvailableModel } from "@/app/api/models/route";

interface AgentModelModalProps {
  open: boolean;
  agent: AgentModelConfig;
  availableModels: AvailableModel[];
  onSave: (
    agentId: string,
    primary: string | null,
    fallbacks: string[],
  ) => Promise<void>;
  onClose: () => void;
}

export function AgentModelModal({
  open,
  agent,
  availableModels,
  onSave,
  onClose,
}: AgentModelModalProps) {
  const [primary, setPrimary] = useState<string>(agent.primary ?? "");
  const [fallbacks, setFallbacks] = useState<string[]>(agent.fallbacks);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      await onSave(agent.id, primary || null, fallbacks);
      onClose();
    } finally {
      setSaving(false);
    }
  };

  const handleReset = async () => {
    setSaving(true);
    try {
      await onSave(agent.id, null, []);
      onClose();
    } finally {
      setSaving(false);
    }
  };

  // models not already in fallbacks (and not primary)
  const fallbackModels = availableModels.filter((m) => m.id !== primary);

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={`Model — ${agent.name}`}
      size="md"
    >
      <div className="space-y-5">
        {/* Primary model */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Primary model
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
            <option value="">Default (global fallback chain)</option>
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
            Fallbacks
          </label>
          <FallbackChainEditor
            items={fallbacks}
            availableModels={fallbackModels}
            onChange={setFallbacks}
          />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-1">
          <button
            type="button"
            onClick={handleReset}
            disabled={saving}
            className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2 disabled:opacity-40"
          >
            Reset to default
          </button>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              disabled={saving}
              className="ui-btn-secondary px-3 py-2 text-sm"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="ui-btn-primary px-3 py-2 text-sm"
            >
              {saving ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
