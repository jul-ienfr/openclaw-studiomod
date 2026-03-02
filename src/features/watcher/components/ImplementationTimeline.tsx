"use client";

import type { Implementation } from "@/features/watcher/types";

type ImplementationTimelineProps = {
  implementations: Implementation[];
  total: number;
  onRollback: (id: string) => void;
  filterStatus?: string;
  filterSearch?: string;
};

function timeAgo(dateStr: string): string {
  const now = Date.now();
  const then = new Date(dateStr).getTime();
  const diffMs = now - then;
  if (diffMs < 0) return "maintenant";
  const seconds = Math.floor(diffMs / 1000);
  if (seconds < 60) return `il y a ${seconds}s`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `il y a ${minutes}min`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `il y a ${hours}h`;
  const days = Math.floor(hours / 24);
  return `il y a ${days}j`;
}

const STATUS_STYLES: Record<Implementation["status"], string> = {
  success: "bg-green-500/20 text-green-400 border-green-500/30",
  failed: "bg-red-500/20 text-red-400 border-red-500/30",
  rolled_back: "bg-slate-500/20 text-slate-400 border-slate-500/30",
};

const STATUS_LABELS: Record<Implementation["status"], string> = {
  success: "Succes",
  failed: "Echec",
  rolled_back: "Annule",
};

export function ImplementationTimeline({
  implementations,
  total,
  onRollback,
  filterStatus,
  filterSearch,
}: ImplementationTimelineProps) {
  const filtered = implementations.filter((impl) => {
    if (filterStatus && impl.status !== filterStatus) return false;
    if (filterSearch) {
      const q = filterSearch.toLowerCase();
      if (
        !impl.title?.toLowerCase().includes(q) &&
        !impl.action?.toLowerCase().includes(q) &&
        !impl.source?.toLowerCase().includes(q)
      ) {
        return false;
      }
    }
    return true;
  });

  const sorted = [...filtered].sort(
    (a, b) => new Date(b.implemented_at).getTime() - new Date(a.implemented_at).getTime()
  );

  const handleRollback = (impl: Implementation) => {
    const confirmed = window.confirm(
      `Voulez-vous vraiment effectuer un rollback de "${impl.title ?? impl.action}" ?\n\nCommande: ${impl.rollback_cmd ?? "N/A"}`
    );
    if (confirmed) onRollback(impl.id);
  };

  if (sorted.length === 0) {
    return (
      <p className="py-8 text-center text-sm text-muted-foreground">
        Aucune implementation. {total > 0 && `(${total} total, filtre actif)`}
      </p>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">{total} implementation{total > 1 ? "s" : ""} au total</p>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
        <div className="space-y-4 pl-10">
          {sorted.map((impl) => (
            <div key={impl.id} className="relative">
              <span
                className={`absolute -left-6 top-3 h-3 w-3 rounded-full border-2 border-background ${
                  impl.status === "success" ? "bg-green-500" : impl.status === "failed" ? "bg-red-500" : "bg-slate-500"
                }`}
              />
              <div className="ui-card p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-foreground truncate">
                      {impl.title ?? impl.item_id}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground font-mono">
                      {impl.action}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-block rounded-full border px-2 py-0.5 text-[10px] font-mono ${STATUS_STYLES[impl.status]}`}
                      >
                        {STATUS_LABELS[impl.status]}
                      </span>
                      {impl.source && (
                        <span className="text-xs text-muted-foreground">{impl.source}</span>
                      )}
                      <span className="text-xs text-muted-foreground">{timeAgo(impl.implemented_at)}</span>
                    </div>
                  </div>
                  {impl.status === "success" && (
                    <button
                      type="button"
                      onClick={() => handleRollback(impl)}
                      className="shrink-0 rounded border border-yellow-500/30 bg-yellow-500/10 px-3 py-1.5 text-xs font-medium text-yellow-400 transition-colors hover:bg-yellow-500/20"
                    >
                      Rollback
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
