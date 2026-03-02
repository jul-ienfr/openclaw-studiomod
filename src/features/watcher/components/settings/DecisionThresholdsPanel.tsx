"use client";

import { useWatcherConfigController } from "@/features/watcher/operations/useWatcherConfigController";

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button role="switch" aria-checked={checked} onClick={() => onChange(!checked)}
      className={`relative inline-flex h-5 w-9 cursor-pointer rounded-full transition-colors ${checked ? "bg-primary" : "bg-muted"}`}>
      <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${checked ? "translate-x-4" : "translate-x-0.5"}`} />
    </button>
  );
}

const ZONES = [
  { key: "auto", label: "AUTO", color: "bg-green-500" },
  { key: "propose", label: "PROPOSE", color: "bg-blue-500" },
  { key: "notify", label: "NOTIFY", color: "bg-yellow-500" },
] as const;

export function DecisionThresholdsPanel() {
  const { config, updateField } = useWatcherConfigController();
  if (!config) return <div className="text-muted-foreground text-sm">Chargement...</div>;

  const thresholds = config.scoring?.thresholds ?? {
    auto: { global: 80, fiabilite_min: 70, securite_min: 75 },
    propose: { global: 65, fiabilite_min: 60, securite_min: 60 },
    notify: { global: 45, fiabilite_min: 40, securite_min: 50 },
  };

  const autoG = thresholds.auto?.global ?? 80;
  const proposeG = thresholds.propose?.global ?? 65;
  const notifyG = thresholds.notify?.global ?? 45;

  return (
    <div className="space-y-6">
      {/* Visualization bar */}
      <section className="space-y-2">
        <h3 className="text-sm font-semibold text-foreground">Zones de décision</h3>
        <div className="flex h-4 w-full overflow-hidden rounded-full text-[10px] font-mono">
          <div className="bg-muted text-muted-foreground flex items-center justify-center" style={{ width: `${notifyG}%` }}>ARCHIVE</div>
          <div className="bg-yellow-500/70 flex items-center justify-center text-yellow-900" style={{ width: `${proposeG - notifyG}%` }}>NOTIFY</div>
          <div className="bg-blue-500/70 flex items-center justify-center text-blue-900" style={{ width: `${autoG - proposeG}%` }}>PROP.</div>
          <div className="bg-green-500/70 flex items-center justify-center text-green-900" style={{ width: `${100 - autoG}%` }}>AUTO</div>
        </div>
      </section>

      {/* Seuils par niveau */}
      {ZONES.map((z) => {
        const th = thresholds[z.key];
        return (
          <section key={z.key} className="space-y-3 rounded-lg border border-border p-3">
            <div className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${z.color}`} />
              <h4 className="text-sm font-semibold text-foreground">{z.label}</h4>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Score global minimum</span><span>{th?.global ?? 0}</span>
              </div>
              <input type="range" min={0} max={100} value={th?.global ?? 0}
                onChange={(e) => updateField(`scoring.thresholds.${z.key}.global`, Number(e.target.value))} className="w-full" />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Fiabilité minimum</span><span>{th?.fiabilite_min ?? 0}</span>
              </div>
              <input type="range" min={0} max={100} value={th?.fiabilite_min ?? 0}
                onChange={(e) => updateField(`scoring.thresholds.${z.key}.fiabilite_min`, Number(e.target.value))} className="w-full" />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Sécurité minimum</span><span>{th?.securite_min ?? 0}</span>
              </div>
              <input type="range" min={0} max={100} value={th?.securite_min ?? 0}
                onChange={(e) => updateField(`scoring.thresholds.${z.key}.securite_min`, Number(e.target.value))} className="w-full" />
            </div>
          </section>
        );
      })}

      {/* Floors & blocking rules */}
      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Règles de blocage</h3>
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Plancher sécurité (→ BLOCK)</span><span>{config.scoring?.security_floor ?? 40}</span>
          </div>
          <input type="range" min={0} max={100} value={config.scoring?.security_floor ?? 40}
            onChange={(e) => updateField("scoring.security_floor", Number(e.target.value))} className="w-full" />
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Plancher fiabilité (→ SUSPECT)</span><span>{config.scoring?.reliability_floor ?? 30}</span>
          </div>
          <input type="range" min={0} max={100} value={config.scoring?.reliability_floor ?? 30}
            onChange={(e) => updateField("scoring.reliability_floor", Number(e.target.value))} className="w-full" />
        </div>
        {(["block_credentials_modification", "block_systemd_modification", "block_root_access", "warn_unaudited_npm"] as const).map((k) => (
          <div key={k} className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">{k.replaceAll("_", " ")}</span>
            <Toggle checked={!!(config.scoring?.[k])} onChange={(v) => updateField(`scoring.${k}`, v)} />
          </div>
        ))}
      </section>
    </div>
  );
}
