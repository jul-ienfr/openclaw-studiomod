"use client";

import { useEffect } from "react";
import { useWatcherConfigController } from "@/features/watcher/operations/useWatcherConfigController";
import { CircuitBreakerPanel } from "@/features/watcher/components/settings/CircuitBreakerPanel";
import { CacheFilterPanel } from "@/features/watcher/components/settings/CacheFilterPanel";
import { LogsPerformancePanel } from "@/features/watcher/components/settings/LogsPerformancePanel";
import { CronSchedulePanel } from "@/features/watcher/components/settings/CronSchedulePanel";

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

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="border-b border-border/40 pb-2 text-base font-semibold text-foreground">
      {children}
    </h2>
  );
}

export default function SettingsAdvancedPage() {
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
    <div className="space-y-8">
      <SaveBar
        dirty={configDirty}
        saving={configSaving}
        error={configError}
        onSave={() => saveConfig()}
        onReset={resetConfig}
      />

      <section className="space-y-4">
        <SectionTitle>Circuit Breaker</SectionTitle>
        <CircuitBreakerPanel />
      </section>

      <section className="space-y-4">
        <SectionTitle>Cache et filtres</SectionTitle>
        <CacheFilterPanel />
      </section>

      <section className="space-y-4">
        <SectionTitle>Logs et performances</SectionTitle>
        <LogsPerformancePanel />
      </section>

      <section className="space-y-4">
        <SectionTitle>Planification cron</SectionTitle>
        <CronSchedulePanel />
      </section>
    </div>
  );
}
