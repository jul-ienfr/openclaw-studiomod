"use client";

import { useWatcherConfigController } from "@/features/watcher/operations/useWatcherConfigController";
import { TagListEditor } from "./TagListEditor";
import { WebPageEditor } from "./WebPageEditor";

interface SourceConfigPanelProps {
  sourceKey: string;
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-5 w-9 cursor-pointer rounded-full transition-colors ${checked ? "bg-primary" : "bg-muted"}`}
    >
      <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${checked ? "translate-x-4" : "translate-x-0.5"}`} />
    </button>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-muted-foreground">{label}</span>
      <div className="flex-shrink-0">{children}</div>
    </div>
  );
}

function Slider({ label, value, min, max, step = 1, onChange }: { label: string; value: number; min: number; max: number; step?: number; onChange: (v: number) => void }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{label}</span><span>{value}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full" />
    </div>
  );
}

export function SourceConfigPanel({ sourceKey }: SourceConfigPanelProps) {
  const { config, updateField } = useWatcherConfigController();
  if (!config) return <div className="text-muted-foreground text-sm">Chargement...</div>;

  const src = config.sources?.[sourceKey] ?? { enabled: false, check_interval_minutes: 60 };
  const base = `sources.${sourceKey}`;

  const upd = (field: string, val: unknown) => updateField(`${base}.${field}`, val);

  return (
    <div className="space-y-4">
      <Row label="Activé">
        <Toggle checked={!!(src.enabled)} onChange={(v) => upd("enabled", v)} />
      </Row>

      <Slider
        label="Intervalle de vérification (minutes)"
        value={(src.check_interval_minutes as number) ?? 60}
        min={15} max={1440}
        onChange={(v) => upd("check_interval_minutes", v)}
      />

      {/* GitHub */}
      {sourceKey === "github" && (
        <>
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">Owner</label>
            <input type="text" className="w-full rounded border border-border bg-background px-2 py-1 text-sm" value={(src.owner as string) ?? ""} onChange={(e) => upd("owner", e.target.value)} />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">Repo</label>
            <input type="text" className="w-full rounded border border-border bg-background px-2 py-1 text-sm" value={(src.repo as string) ?? ""} onChange={(e) => upd("repo", e.target.value)} />
          </div>
        </>
      )}

      {/* npm */}
      {sourceKey === "npm" && (
        <div className="space-y-1">
          <label className="text-xs text-muted-foreground">Package name</label>
          <input type="text" className="w-full rounded border border-border bg-background px-2 py-1 text-sm" value={(src.package_name as string) ?? ""} onChange={(e) => upd("package_name", e.target.value)} />
        </div>
      )}

      {/* Twitter */}
      {sourceKey === "twitter" && (
        <>
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">Comptes</label>
            <TagListEditor value={(src.accounts as string[]) ?? []} onChange={(v) => upd("accounts", v)} placeholder="@account" />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">Mots-clés</label>
            <TagListEditor value={(src.search_keywords as string[]) ?? []} onChange={(v) => upd("search_keywords", v)} />
          </div>
          <Slider label="Max items par vérification" value={(src.max_items_per_check as number) ?? 50} min={1} max={1000} onChange={(v) => upd("max_items_per_check", v)} />
        </>
      )}

      {/* Reddit */}
      {sourceKey === "reddit" && (
        <>
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">Subreddits</label>
            <TagListEditor value={(src.subreddits as string[]) ?? []} onChange={(v) => upd("subreddits", v)} placeholder="r/..." />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">Mots-clés</label>
            <TagListEditor value={(src.search_keywords as string[]) ?? []} onChange={(v) => upd("search_keywords", v)} />
          </div>
        </>
      )}

      {/* HN */}
      {sourceKey === "hackernews" && (
        <div className="space-y-1">
          <label className="text-xs text-muted-foreground">Mots-clés</label>
          <TagListEditor value={(src.search_keywords as string[]) ?? []} onChange={(v) => upd("search_keywords", v)} />
        </div>
      )}

      {/* Web monitoring */}
      {sourceKey === "web_monitoring" && (
        <div className="space-y-1">
          <label className="text-xs text-muted-foreground">Pages surveillées</label>
          <WebPageEditor value={(src.pages as Array<{ url: string; selector: string; label: string }>) ?? []} onChange={(v) => upd("pages", v)} />
        </div>
      )}

      {/* Generic keywords fallback */}
      {["youtube", "stackoverflow", "rss"].includes(sourceKey) && (
        <div className="space-y-1">
          <label className="text-xs text-muted-foreground">Mots-clés / Tags</label>
          <TagListEditor value={(src.search_keywords as string[] ?? src.tags as string[] ?? src.feed_urls as string[]) ?? []} onChange={(v) => upd(sourceKey === "rss" ? "feed_urls" : sourceKey === "stackoverflow" ? "tags" : "search_keywords", v)} validate={sourceKey === "rss" ? "url" : "none"} />
        </div>
      )}
    </div>
  );
}
