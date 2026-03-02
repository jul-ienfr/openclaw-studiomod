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

export function NotificationsPanel() {
  const { config, updateField } = useWatcherConfigController();

  if (!config) {
    return <div className="text-muted-foreground text-sm">Chargement...</div>;
  }

  if (!config.notifications) {
    return <div className="text-muted-foreground text-sm">Section &quot;notifications&quot; absente de la configuration.</div>;
  }

  const n = config.notifications;

  return (
    <div className="space-y-8">
      {/* Telegram */}
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Telegram</h3>
        <div className="flex items-center justify-between">
          <label className="text-sm text-muted-foreground">Telegram activé</label>
          <Toggle value={n.telegram_enabled} onChange={(v) => updateField("notifications.telegram_enabled", v)} />
        </div>

        <div className="space-y-1">
          <label className="text-xs text-muted-foreground">Chat ID</label>
          <input
            type="text"
            value={n.telegram_chat_id}
            onChange={(e) => updateField("notifications.telegram_chat_id", e.target.value)}
            placeholder="-1001234567890"
            className="w-full rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm text-muted-foreground">Mode digest</label>
          <Toggle value={n.digest_mode} onChange={(v) => updateField("notifications.digest_mode", v)} />
        </div>

        <Slider min={30} max={1440} value={n.digest_interval_minutes}
          onChange={(v) => updateField("notifications.digest_interval_minutes", v)}
          label="Intervalle digest (minutes)" />

        <div className="flex items-center justify-between">
          <label className="text-sm text-muted-foreground">Clavier inline</label>
          <Toggle value={n.inline_keyboard} onChange={(v) => updateField("notifications.inline_keyboard", v)} />
        </div>
      </section>

      {/* Niveaux de notification */}
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Niveaux de notification</h3>
        {[
          { path: "notifications.notify_on_auto", label: "Notifier sur auto-implémentation", value: n.notify_on_auto },
          { path: "notifications.notify_on_propose", label: "Notifier sur proposition", value: n.notify_on_propose },
          { path: "notifications.notify_on_block", label: "Notifier sur blocage", value: n.notify_on_block },
          { path: "notifications.notify_on_errors", label: "Notifier sur erreurs", value: n.notify_on_errors },
        ].map(({ path, label, value }) => (
          <div key={path} className="flex items-center justify-between">
            <label className="text-sm text-muted-foreground">{label}</label>
            <Toggle value={value} onChange={(v) => updateField(path, v)} />
          </div>
        ))}
      </section>

      {/* Rapport hebdomadaire */}
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Rapport hebdomadaire</h3>
        <div className="flex items-center justify-between">
          <label className="text-sm text-muted-foreground">Rapport hebdo activé</label>
          <Toggle value={n.weekly_report_enabled} onChange={(v) => updateField("notifications.weekly_report_enabled", v)} />
        </div>

        <div className="space-y-1">
          <label className="text-xs text-muted-foreground">Schedule (cron)</label>
          <input
            type="text"
            value={n.weekly_report_schedule}
            onChange={(e) => updateField("notifications.weekly_report_schedule", e.target.value)}
            placeholder="0 9 * * 1"
            className="w-full rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs text-muted-foreground">Timezone (IANA)</label>
          <input
            type="text"
            value={n.weekly_report_timezone}
            onChange={(e) => updateField("notifications.weekly_report_timezone", e.target.value)}
            placeholder="Europe/Paris"
            className="w-full rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs text-muted-foreground">Format</label>
          <select
            value={n.weekly_report_format}
            onChange={(e) => updateField("notifications.weekly_report_format", e.target.value)}
            className="w-full rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="markdown">Markdown</option>
            <option value="html">HTML</option>
            <option value="json">JSON</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm text-muted-foreground">Sync Nextcloud</label>
          <Toggle value={n.weekly_report_sync_nextcloud} onChange={(v) => updateField("notifications.weekly_report_sync_nextcloud", v)} />
        </div>
      </section>
    </div>
  );
}
