"use client";

import { useWatcherConfigController } from "@/features/watcher/operations/useWatcherConfigController";

const CRON_REGEX = /^(\S+\s+){4}\S+$/;

function parseCronNextRun(cron: string): string | null {
  if (!CRON_REGEX.test(cron.trim())) return null;
  const parts = cron.trim().split(/\s+/);
  const [minute, hour] = parts;

  // Simple approximation: next occurrence today or tomorrow at the given hour:minute
  // Only handles numeric values (not wildcards) for a useful preview
  const minNum = parseInt(minute, 10);
  const hourNum = parseInt(hour, 10);
  if (isNaN(minNum) || isNaN(hourNum)) {
    return "Prochaine exécution : calculée selon la planification";
  }

  const now = new Date();
  const next = new Date(now);
  next.setSeconds(0);
  next.setMilliseconds(0);
  next.setHours(hourNum, minNum);

  if (next <= now) {
    next.setDate(next.getDate() + 1);
  }

  return `Prochaine exécution approximative : ${next.toLocaleDateString("fr-FR", {
    weekday: "long", day: "numeric", month: "long",
  })} à ${String(hourNum).padStart(2, "0")}h${String(minNum).padStart(2, "0")}`;
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

export function CronSchedulePanel() {
  const { config, updateField } = useWatcherConfigController();

  if (!config) {
    return <div className="text-muted-foreground text-sm">Chargement...</div>;
  }

  if (!config.advanced) {
    return <div className="text-muted-foreground text-sm">Section &quot;advanced&quot; absente de la configuration.</div>;
  }

  const adv = config.advanced;
  const cronValid = CRON_REGEX.test(adv.check_schedule.trim());
  const nextRun = cronValid ? parseCronNextRun(adv.check_schedule) : null;

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Planification</h3>

        <div className="space-y-1">
          <label className="text-xs text-muted-foreground">Schedule (cron, 5 champs)</label>
          <input
            type="text"
            value={adv.check_schedule}
            onChange={(e) => updateField("advanced.check_schedule", e.target.value)}
            placeholder="*/15 * * * *"
            className={`w-full rounded-md border bg-background px-3 py-1.5 text-sm text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-primary ${
              adv.check_schedule && !cronValid ? "border-red-500" : "border-border"
            }`}
          />
          {adv.check_schedule && !cronValid && (
            <p className="text-xs text-red-500">Format invalide — 5 champs séparés par des espaces requis (ex: */15 * * * *)</p>
          )}
          {nextRun && (
            <p className="text-xs text-muted-foreground">{nextRun}</p>
          )}
        </div>

        <div className="space-y-1">
          <label className="text-xs text-muted-foreground">Timezone (IANA)</label>
          <input
            type="text"
            value={adv.check_timezone}
            onChange={(e) => updateField("advanced.check_timezone", e.target.value)}
            placeholder="Europe/Paris"
            className="w-full rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <Slider min={30} max={3600} value={adv.check_timeout_seconds}
          onChange={(v) => updateField("advanced.check_timeout_seconds", v)}
          label="Timeout vérification (secondes)" />
      </section>
    </div>
  );
}
