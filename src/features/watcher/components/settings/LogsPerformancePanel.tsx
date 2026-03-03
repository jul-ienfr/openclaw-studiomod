"use client";

import { useWatcherConfigController } from "@/features/watcher/operations/useWatcherConfigController";

function Toggle({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      role="switch"
      aria-checked={value}
      onClick={() => onChange(!value)}
      className={`relative inline-flex h-5 w-9 cursor-pointer rounded-full transition-colors ${value ? "bg-primary" : "bg-muted"}`}
    >
      <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${value ? "translate-x-4" : "translate-x-0.5"}`} />
    </button>
  );
}

function Slider({ min, max, step = 1, value, onChange, label }: {
  min: number; max: number; step?: number;
  value: number; onChange: (v: number) => void; label: string;
}) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{label}</span><span>{value}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full" />
    </div>
  );
}

export function LogsPerformancePanel() {
  const { config, updateField } = useWatcherConfigController();

  if (!config) {
    return <div className="text-muted-foreground text-sm">Chargement...</div>;
  }

  if (!config.advanced) {
    return <div className="text-muted-foreground text-sm">Section &quot;advanced&quot; absente de la configuration.</div>;
  }

  const adv = config.advanced;

  return (
    <div className="space-y-8">
      {/* Logs */}
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Journaux</h3>

        <div className="space-y-1">
          <label className="text-xs text-muted-foreground">Niveau de journalisation</label>
          <select
            value={adv.log_level}
            onChange={(e) => updateField("advanced.log_level", e.target.value)}
            className="w-full rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="debug">debug</option>
            <option value="info">info</option>
            <option value="warn">warn</option>
            <option value="error">error</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-xs text-muted-foreground">Format de journalisation</label>
          <select
            value={adv.log_format}
            onChange={(e) => updateField("advanced.log_format", e.target.value)}
            className="w-full rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="json">JSON</option>
            <option value="text">Texte</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm text-muted-foreground">Écrire les journaux dans un fichier</label>
          <Toggle value={adv.log_to_file} onChange={(v) => updateField("advanced.log_to_file", v)} />
        </div>

        <Slider min={1} max={365} value={adv.log_retention_days}
          onChange={(v) => updateField("advanced.log_retention_days", v)}
          label="Rétention logs (jours)" />
      </section>

      {/* Performance HTTP */}
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Performance & HTTP</h3>

        <Slider min={1} max={10} value={adv.concurrent_source_fetches}
          onChange={(v) => updateField("advanced.concurrent_source_fetches", v)}
          label="Sources en parallèle" />

        <Slider min={5} max={120} value={adv.http_timeout_seconds}
          onChange={(v) => updateField("advanced.http_timeout_seconds", v)}
          label="Timeout HTTP (secondes)" />

        <Slider min={0} max={10} value={adv.http_retries}
          onChange={(v) => updateField("advanced.http_retries", v)}
          label="Tentatives HTTP" />

        <div className="flex items-center justify-between">
          <label className="text-sm text-muted-foreground">Respecter les rate limits</label>
          <Toggle value={adv.rate_limit_respect} onChange={(v) => updateField("advanced.rate_limit_respect", v)} />
        </div>
      </section>
    </div>
  );
}
