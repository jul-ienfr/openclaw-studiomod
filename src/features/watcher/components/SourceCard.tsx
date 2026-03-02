"use client";

import type { SourceState } from "@/features/watcher/types";

type SourceCardProps = {
  source: SourceState;
  onCheck?: () => void;
};

function timeAgo(dateStr: string | null): string {
  if (!dateStr) return "jamais";
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
  if (days < 30) return `il y a ${days}j`;
  return `il y a ${Math.floor(days / 30)}mois`;
}

function getCircuitState(errors: number): { color: string; label: string } {
  if (errors === 0) return { color: "bg-green-500", label: "OK" };
  if (errors <= 2) return { color: "bg-yellow-500", label: "backoff" };
  return { color: "bg-red-500", label: "disabled" };
}

export function SourceCard({ source, onCheck }: SourceCardProps) {
  const { color, label } = getCircuitState(source.consecutive_errors);

  return (
    <div className="ui-card flex flex-col gap-3 p-4">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold text-foreground truncate">{source.source}</h3>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className={`h-2 w-2 rounded-full ${color}`} title={label} />
          <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400 font-mono">
            {label}
          </span>
        </div>
      </div>

      <dl className="space-y-1 text-xs text-muted-foreground">
        <div className="flex justify-between">
          <dt>Items</dt>
          <dd className="font-medium text-foreground">{source.items_total}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Derniere verif</dt>
          <dd>{timeAgo(source.last_check)}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Dernier succes</dt>
          <dd>{timeAgo(source.last_success)}</dd>
        </div>
        {source.consecutive_errors > 0 && (
          <div className="flex justify-between">
            <dt className="text-red-400">Erreurs</dt>
            <dd className="text-red-400">{source.consecutive_errors}</dd>
          </div>
        )}
        {source.last_error && (
          <div className="mt-1.5 rounded bg-red-500/10 p-1.5">
            <p className="truncate text-red-400" title={source.last_error}>
              {source.last_error.length > 60 ? source.last_error.slice(0, 60) + "..." : source.last_error}
            </p>
          </div>
        )}
      </dl>

      {onCheck && (
        <button
          type="button"
          onClick={onCheck}
          className="w-full rounded border border-slate-300 px-3 py-1 text-xs font-medium text-foreground transition-colors hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
        >
          Verifier
        </button>
      )}
    </div>
  );
}
