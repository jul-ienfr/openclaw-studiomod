"use client";

import { useEffect } from "react";
import { useWatcherConfigController } from "@/features/watcher/operations/useWatcherConfigController";
import { ScoringWeightsPanel } from "@/features/watcher/components/settings/ScoringWeightsPanel";
import { DecisionThresholdsPanel } from "@/features/watcher/components/settings/DecisionThresholdsPanel";

function SaveBar({
  dirty,
  saving,
  error,
  onSave,
  onReset,
}: {
  dirty: boolean;
  saving: boolean;
  error: string | null;
  onSave: () => void;
  onReset: () => void;
}) {
  if (!dirty) return null;
  return (
    <div className="sticky top-0 z-10 space-y-1">
      <div className="flex items-center justify-between rounded-lg border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm">
        <span className="text-yellow-400">Modifications non sauvegardées</span>
        <div className="flex gap-2">
          <button
            onClick={onReset}
            className="px-3 py-1 text-muted-foreground hover:text-foreground"
          >
            Annuler
          </button>
          <button
            onClick={onSave}
            disabled={saving}
            className="ui-btn-primary px-3 py-1"
          >
            {saving ? "Sauvegarde..." : "Sauvegarder"}
          </button>
        </div>
      </div>
      {error && (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

export default function SettingsScoringPage() {
  const {
    configDirty,
    configSaving,
    configError,
    loadConfig,
    saveConfig,
    resetConfig,
  } = useWatcherConfigController();

  useEffect(() => {
    loadConfig();
  }, [loadConfig]);

  return (
    <div className="space-y-6">
      <SaveBar
        dirty={configDirty}
        saving={configSaving}
        error={configError}
        onSave={() => saveConfig()}
        onReset={resetConfig}
      />
      <ScoringWeightsPanel />
      <DecisionThresholdsPanel />
    </div>
  );
}
