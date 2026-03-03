"use client";

import { useEffect, useState } from "react";
import { useWatcherConfigController } from "@/features/watcher/operations/useWatcherConfigController";
import { SourceConfigPanel } from "@/features/watcher/components/settings/SourceConfigPanel";

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

const SOURCE_KEYS = [
  "github",
  "npm",
  "twitter",
  "reddit",
  "hackernews",
  "youtube",
  "stackoverflow",
  "rss",
  "web_monitoring",
  "clawhub",
  "skills",
] as const;

const SOURCE_LABELS: Record<string, string> = {
  github: "GitHub",
  npm: "npm",
  twitter: "Twitter / X",
  reddit: "Reddit",
  hackernews: "Hacker News",
  youtube: "YouTube",
  stackoverflow: "Stack Overflow",
  rss: "RSS",
  web_monitoring: "Web Monitoring",
  clawhub: "ClawHub",
  skills: "Skills",
};

export default function SettingsSourcesPage() {
  const {
    configDirty,
    configSaving,
    configError,
    loadConfig,
    saveConfig,
    resetConfig,
  } = useWatcherConfigController();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    loadConfig();
  }, [loadConfig]);

  function toggleSection(key: string) {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <div className="space-y-4">
      <SaveBar
        dirty={configDirty}
        saving={configSaving}
        error={configError}
        onSave={() => saveConfig()}
        onReset={resetConfig}
      />

      <div className="space-y-2">
        {SOURCE_KEYS.map((key) => (
          <div key={key} className="glass-panel overflow-hidden">
            <button
              onClick={() => toggleSection(key)}
              className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-white/5 transition-colors"
            >
              <span className="font-medium text-foreground">
                {SOURCE_LABELS[key]}
              </span>
              <span className="text-muted-foreground text-sm">
                {openSections[key] ? "▲" : "▼"}
              </span>
            </button>
            {openSections[key] && (
              <div className="border-t border-border/40 px-4 py-4">
                <SourceConfigPanel sourceKey={key} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
