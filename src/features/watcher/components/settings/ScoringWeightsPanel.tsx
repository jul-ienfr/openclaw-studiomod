"use client";

import { useWatcherConfigController } from "@/features/watcher/operations/useWatcherConfigController";

const AXES = [
  { key: "fiabilite", label: "Fiabilité", color: "bg-blue-500" },
  { key: "securite", label: "Sécurité", color: "bg-red-500" },
  { key: "fonctionnement", label: "Fonctionnement", color: "bg-green-500" },
  { key: "interet", label: "Intérêt", color: "bg-purple-500" },
] as const;

const TIER_KEYS = ["tier_1", "tier_1_5", "tier_2", "tier_3"];
const TIER_LABELS = ["Tier 1 (GitHub, npm)", "Tier 1.5 (ClawHub)", "Tier 2 (Twitter, Reddit, HN)", "Tier 3 (YouTube, SO, RSS)"];

export function ScoringWeightsPanel() {
  const { config, updateField } = useWatcherConfigController();
  if (!config) return <div className="text-muted-foreground text-sm">Chargement...</div>;

  const weights = config.scoring?.weights ?? { fiabilite: 30, securite: 30, fonctionnement: 20, interet: 20 };
  const total = AXES.reduce((s, ax) => s + (weights[ax.key] ?? 0), 0);
  const tiers = config.scoring?.tier_reliability ?? {};

  const handleWeightChange = (key: string, value: number) => {
    updateField(`scoring.weights.${key}`, value);
  };

  const normalize = () => {
    const t = AXES.reduce((s, ax) => s + (weights[ax.key] ?? 0), 0);
    if (t === 0) return;
    AXES.forEach((ax) => updateField(`scoring.weights.${ax.key}`, Math.round(((weights[ax.key] ?? 0) / t) * 100)));
  };

  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">Poids des 4 axes</h3>
          <div className="flex items-center gap-2">
            <span className={`text-xs font-mono ${total !== 100 ? "text-red-400" : "text-green-400"}`}>
              Total : {total}/100
            </span>
            {total !== 100 && (
              <button onClick={normalize} className="text-xs ui-btn-primary px-2 py-0.5">Normaliser</button>
            )}
          </div>
        </div>

        {/* Stacked bar visualization */}
        <div className="flex h-3 w-full overflow-hidden rounded-full">
          {AXES.map((ax) => (
            <div key={ax.key} className={`${ax.color} transition-all`} style={{ width: `${weights[ax.key] ?? 0}%` }} title={`${ax.label}: ${weights[ax.key] ?? 0}%`} />
          ))}
        </div>

        <div className="space-y-3">
          {AXES.map((ax) => (
            <div key={ax.key} className="space-y-1">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{ax.label}</span><span>{weights[ax.key] ?? 0}%</span>
              </div>
              <input type="range" min={0} max={100} value={weights[ax.key] ?? 0} onChange={(e) => handleWeightChange(ax.key, Number(e.target.value))} className="w-full" />
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Fiabilité de base par tier</h3>
        {TIER_KEYS.map((tk, i) => (
          <div key={tk} className="space-y-1">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{TIER_LABELS[i]}</span><span>{tiers[tk] ?? 50}</span>
            </div>
            <input type="range" min={0} max={100} value={tiers[tk] ?? 50} onChange={(e) => updateField(`scoring.tier_reliability.${tk}`, Number(e.target.value))} className="w-full" />
          </div>
        ))}
      </section>

      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Multiplicateurs</h3>
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Urgence correctif sécurité</span><span>{config.scoring?.security_fix_multiplier ?? 2}x</span>
          </div>
          <input type="range" min={1} max={5} step={0.5} value={config.scoring?.security_fix_multiplier ?? 2} onChange={(e) => updateField("scoring.security_fix_multiplier", Number(e.target.value))} className="w-full" />
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Plafond sécurité breaking change</span><span>{config.scoring?.breaking_change_security_ceiling ?? 50}</span>
          </div>
          <input type="range" min={0} max={100} value={config.scoring?.breaking_change_security_ceiling ?? 50} onChange={(e) => updateField("scoring.breaking_change_security_ceiling", Number(e.target.value))} className="w-full" />
        </div>
      </section>
    </div>
  );
}
