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

export function CacheFilterPanel() {
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
      {/* Cache */}
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Cache</h3>
        <Slider min={1} max={365} value={adv.cache_days}
          onChange={(v) => updateField("advanced.cache_days", v)}
          label="Durée cache (jours)" />
        <Slider min={100} max={50000} step={100} value={adv.cache_max_items}
          onChange={(v) => updateField("advanced.cache_max_items", v)}
          label="Items max en cache" />
      </section>

      {/* Filtres */}
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Filtres de contenu</h3>
        <div className="space-y-1">
          <label className="text-xs text-muted-foreground">Filtre langue (codes ISO)</label>
          <TagListEditor
            value={adv.language_filter}
            onChange={(v) => updateField("advanced.language_filter", v)}
            placeholder="fr, en, de..."
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs text-muted-foreground">Mots-clés globaux</label>
          <TagListEditor
            value={adv.search_keywords_global}
            onChange={(v) => updateField("advanced.search_keywords_global", v)}
            placeholder="security, vulnerability..."
          />
        </div>
      </section>

      {/* Limites */}
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Limites de collecte</h3>
        <Slider min={10} max={1000} value={adv.max_items_per_check}
          onChange={(v) => updateField("advanced.max_items_per_check", v)}
          label="Items max par vérification" />
        <Slider min={5} max={500} value={adv.max_items_per_source}
          onChange={(v) => updateField("advanced.max_items_per_source", v)}
          label="Items max par source" />
        <Slider min={0} max={500} value={adv.min_content_length}
          onChange={(v) => updateField("advanced.min_content_length", v)}
          label="Longueur contenu minimum (caractères)" />
      </section>

      {/* Filtres sociaux */}
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Filtres sociaux</h3>
        {[
          { path: "advanced.ignore_retweets", label: "Ignorer les retweets", value: adv.ignore_retweets },
          { path: "advanced.ignore_replies", label: "Ignorer les réponses", value: adv.ignore_replies },
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
