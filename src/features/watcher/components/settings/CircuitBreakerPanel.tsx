"use client";

import { useState } from "react";
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

function BackoffEditor({ value, onChange }: { value: number[]; onChange: (v: number[]) => void }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);

  function tryAdd() {
    const trimmed = input.trim();
    const num = Number(trimmed);
    if (!trimmed || isNaN(num) || num <= 0) {
      setError("Entier positif requis");
      return;
    }
    onChange([...value, num]);
    setInput("");
    setError(null);
  }

  function remove(index: number) {
    onChange(value.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <input
          type="number"
          min={1}
          value={input}
          onChange={(e) => { setInput(e.target.value); setError(null); }}
          onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); tryAdd(); } }}
          placeholder="ex: 5"
          className="flex-1 rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button type="button" onClick={tryAdd} className="ui-btn-primary px-3 py-1.5 text-sm">
          Add
        </button>
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
      {value.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {value.map((n, i) => (
            <span key={i} className="ui-badge inline-flex items-center gap-1">
              {n}min
              <button type="button" onClick={() => remove(i)} aria-label={`Supprimer ${n}`} className="ml-0.5 opacity-60 hover:opacity-100">×</button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function CircuitBreakerPanel() {
  const { config, updateField } = useWatcherConfigController();

  if (!config) {
    return <div className="text-muted-foreground text-sm">Chargement...</div>;
  }

  if (!config.advanced?.circuit_breaker) {
    return <div className="text-muted-foreground text-sm">Section &quot;advanced.circuit_breaker&quot; absente de la configuration.</div>;
  }

  const cb = config.advanced.circuit_breaker;

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Coupe-circuit</h3>

        <Slider min={1} max={20} value={cb.max_consecutive_errors}
          onChange={(v) => updateField("advanced.circuit_breaker.max_consecutive_errors", v)}
          label="Erreurs consécutives max" />

        <div className="space-y-1">
          <label className="text-xs text-muted-foreground">Backoff (minutes) — séquence de délais</label>
          <BackoffEditor
            value={cb.backoff_minutes}
            onChange={(v) => updateField("advanced.circuit_breaker.backoff_minutes", v)}
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm text-muted-foreground">Réactivation auto sur succès</label>
          <Toggle value={cb.auto_reset_on_success} onChange={(v) => updateField("advanced.circuit_breaker.auto_reset_on_success", v)} />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm text-muted-foreground">Notifier si source inactive</label>
          <Toggle value={cb.notify_on_source_down} onChange={(v) => updateField("advanced.circuit_breaker.notify_on_source_down", v)} />
        </div>
      </section>
    </div>
  );
}
