"use client";

type SourceCardProps = {
  name: string;
  tier: number;
  lastCheck: string | null;
  lastSuccess: string | null;
  consecutiveErrors: number;
  lastError: string | null;
  itemsTotal: number;
  onCheck?: () => void;
};

function timeAgo(dateStr: string | null): string {
  if (!dateStr) return "never";
  const now = Date.now();
  const then = new Date(dateStr).getTime();
  const diffMs = now - then;
  if (diffMs < 0) return "just now";

  const seconds = Math.floor(diffMs / 1000);
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}

export function SourceCard({
  name,
  tier,
  lastCheck,
  lastSuccess,
  consecutiveErrors,
  lastError,
  itemsTotal,
  onCheck,
}: SourceCardProps) {
  const circuitColor =
    consecutiveErrors === 0
      ? "bg-emerald-500"
      : consecutiveErrors <= 2
        ? "bg-amber-500"
        : "bg-red-500";

  return (
    <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-foreground">{name}</h3>
        <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
          T{tier}
        </span>
      </div>

      <div className="mt-2 flex items-center gap-2">
        <span className={`inline-block h-2 w-2 rounded-full ${circuitColor}`} />
        <span className="text-xs text-muted-foreground">
          {consecutiveErrors === 0
            ? "Healthy"
            : `${consecutiveErrors} error${consecutiveErrors > 1 ? "s" : ""}`}
        </span>
      </div>

      <dl className="mt-3 space-y-1 text-xs text-muted-foreground">
        <div className="flex justify-between">
          <dt>Items</dt>
          <dd className="font-medium text-foreground">{itemsTotal}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Last check</dt>
          <dd>{timeAgo(lastCheck)}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Last success</dt>
          <dd>{timeAgo(lastSuccess)}</dd>
        </div>
        {lastError && (
          <div className="mt-1">
            <dt className="text-red-500">Last error</dt>
            <dd className="mt-0.5 truncate text-red-400" title={lastError}>
              {lastError.length > 60
                ? lastError.slice(0, 60) + "..."
                : lastError}
            </dd>
          </div>
        )}
      </dl>

      {onCheck && (
        <button
          type="button"
          onClick={onCheck}
          className="mt-3 w-full rounded border border-slate-300 px-3 py-1 text-xs font-medium text-foreground transition-colors hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
        >
          Check
        </button>
      )}
    </div>
  );
}
