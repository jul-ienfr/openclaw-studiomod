"use client";

import { useWatcherConfigController } from "@/features/watcher/operations/useWatcherConfigController";
import { TagListEditor } from "./TagListEditor";

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

export function SecurityPanel() {
  const { config, updateField } = useWatcherConfigController();

  if (!config) {
    return <div className="text-muted-foreground text-sm">Chargement...</div>;
  }

  if (!config.security) {
    return <div className="text-muted-foreground text-sm">Section &quot;security&quot; absente de la configuration.</div>;
  }

  const s = config.security;

  return (
    <div className="space-y-8">
      {/* Blocklists */}
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Blocklists</h3>
        <div className="space-y-1">
          <label className="text-xs text-muted-foreground">Auteurs bloqués</label>
          <TagListEditor
            value={s.blocklist_authors ?? []}
            onChange={(v) => updateField("security.blocklist_authors", v)}
            placeholder="nom-auteur"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs text-muted-foreground">Packages bloqués</label>
          <TagListEditor
            value={s.blocklist_packages ?? []}
            onChange={(v) => updateField("security.blocklist_packages", v)}
            placeholder="nom-package"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs text-muted-foreground">Patterns bloqués (regex)</label>
          <TagListEditor
            value={s.blocklist_patterns ?? []}
            onChange={(v) => updateField("security.blocklist_patterns", v)}
            placeholder="^evil-.*"
            validate="regex"
          />
        </div>
      </section>

      {/* VirusTotal */}
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">VirusTotal</h3>
        <div className="flex items-center justify-between">
          <label className="text-sm text-muted-foreground">Vérification VirusTotal</label>
          <Toggle value={s.virustotal_check ?? false} onChange={(v) => updateField("security.virustotal_check", v)} />
        </div>
        <Slider min={0} max={70} value={s.virustotal_min_clean_engines ?? 0}
          onChange={(v) => updateField("security.virustotal_min_clean_engines", v)}
          label="Moteurs clean minimum" />
      </section>

      {/* Auto-implémentation */}
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Auto-implémentation</h3>
        <Slider min={0} max={10000} value={s.min_downloads_for_auto ?? 0}
          onChange={(v) => updateField("security.min_downloads_for_auto", v)}
          label="Téléchargements minimum pour auto" />
        <div className="flex items-center justify-between">
          <label className="text-sm text-muted-foreground">Code review requis</label>
          <Toggle value={s.code_review_required ?? false} onChange={(v) => updateField("security.code_review_required", v)} />
        </div>
      </section>

      {/* Patterns dangereux */}
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Patterns dangereux</h3>
        <TagListEditor
          value={s.dangerous_patterns ?? []}
          onChange={(v) => updateField("security.dangerous_patterns", v)}
          placeholder="eval\(.*\)"
          validate="regex"
        />
      </section>

      {/* Divers */}
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Divers</h3>
        {[
          { path: "security.warn_on_minified", label: "Avertir sur code minifié", value: s.warn_on_minified ?? false },
          { path: "security.warn_on_obfuscated", label: "Avertir sur code obfusqué", value: s.warn_on_obfuscated ?? false },
          { path: "security.scan_npm_dependencies", label: "Scanner les dépendances npm", value: s.scan_npm_dependencies ?? false },
          { path: "security.allow_deprecated_packages", label: "Autoriser les packages dépréciés", value: s.allow_deprecated_packages ?? false },
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
