"use client";

import { useWatcherConfigController } from "@/features/watcher/operations/useWatcherConfigController";
import type { AutomationLevel } from "@/features/watcher/types";

const AUTOMATION_LEVELS: { value: AutomationLevel; label: string; description: string }[] = [
  { value: "notify", label: "Notify", description: "Notification uniquement, aucune action automatique" },
  { value: "analyze", label: "Analyze", description: "Analyse et scoring automatique, pas d'implémentation" },
  { value: "semi-auto", label: "Semi-auto", description: "Implémentation proposée, validation humaine requise" },
  { value: "full-auto", label: "Full-auto", description: "Implémentation automatique complète sans validation" },
];

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

export function AutomationPanel() {
  const { config, updateField } = useWatcherConfigController();

  if (!config) {
    return <div className="text-muted-foreground text-sm">Chargement...</div>;
  }

  if (!config.automation) {
    return <div className="text-muted-foreground text-sm">Section &quot;automation&quot; absente de la configuration.</div>;
  }

  const a = config.automation;

  return (
    <div className="space-y-8">
      {/* Niveau d'automation */}
      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Niveau d&apos;automation</h3>
        <div className="space-y-2">
          {AUTOMATION_LEVELS.map((level) => (
            <label key={level.value} className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-3 hover:bg-muted/50">
              <input
                type="radio"
                name="automation_level"
                value={level.value}
                checked={a.automation_level === level.value}
                onChange={() => updateField("automation.automation_level", level.value)}
                className="mt-0.5"
              />
              <div>
                <div className="text-sm font-medium text-foreground">{level.label}</div>
                <div className="text-xs text-muted-foreground">{level.description}</div>
              </div>
            </label>
          ))}
        </div>
      </section>

      {/* Dry-run */}
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Dry-run & Validation</h3>
        {[
          { path: "automation.dry_run_enabled", label: "Dry-run activé", value: a.dry_run_enabled },
          { path: "automation.zod_validation", label: "Validation Zod des changements", value: a.zod_validation },
          { path: "automation.npm_diff_enabled", label: "Diff npm avant installation", value: a.npm_diff_enabled },
        ].map(({ path, label, value }) => (
          <div key={path} className="flex items-center justify-between">
            <label className="text-sm text-muted-foreground">{label}</label>
            <Toggle value={value} onChange={(v) => updateField(path, v)} />
          </div>
        ))}
      </section>

      {/* Backup */}
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Backup & Rollback</h3>
        {[
          { path: "automation.backup_before_modification", label: "Backup avant modification", value: a.backup_before_modification },
          { path: "automation.auto_rollback_on_error", label: "Rollback automatique sur erreur", value: a.auto_rollback_on_error },
        ].map(({ path, label, value }) => (
          <div key={path} className="flex items-center justify-between">
            <label className="text-sm text-muted-foreground">{label}</label>
            <Toggle value={value} onChange={(v) => updateField(path, v)} />
          </div>
        ))}
        <Slider min={1} max={365} value={a.rollback_retention_days}
          onChange={(v) => updateField("automation.rollback_retention_days", v)}
          label="Rétention rollback (jours)" />
      </section>

      {/* Feedback */}
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Feedback & Auto-calibration</h3>
        <div className="flex items-center justify-between">
          <label className="text-sm text-muted-foreground">Feedback activé</label>
          <Toggle value={a.feedback_enabled} onChange={(v) => updateField("automation.feedback_enabled", v)} />
        </div>
        <Slider min={10} max={500} value={a.feedback_auto_tune_threshold}
          onChange={(v) => updateField("automation.feedback_auto_tune_threshold", v)}
          label="Seuil auto-tune" />
        <Slider min={7} max={180} value={a.feedback_recalibration_interval_days}
          onChange={(v) => updateField("automation.feedback_recalibration_interval_days", v)}
          label="Intervalle recalibration (jours)" />
      </section>

      {/* Cross-check */}
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Cross-check</h3>
        <Slider min={0} max={1} step={0.1} value={a.correlation_similarity_threshold}
          onChange={(v) => updateField("automation.correlation_similarity_threshold", v)}
          label="Seuil similarité corrélation" />
        {[
          { path: "automation.cross_check_github", label: "Cross-check GitHub", value: a.cross_check_github },
          { path: "automation.cross_check_npm", label: "Cross-check npm", value: a.cross_check_npm },
        ].map(({ path, label, value }) => (
          <div key={path} className="flex items-center justify-between">
            <label className="text-sm text-muted-foreground">{label}</label>
            <Toggle value={value} onChange={(v) => updateField(path, v)} />
          </div>
        ))}
      </section>
    </div>
  );
}
