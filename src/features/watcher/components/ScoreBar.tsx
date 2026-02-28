"use client";

type ScoreBarProps = {
  score: number;
  label?: string;
  className?: string;
};

export function ScoreBar({ score, label, className }: ScoreBarProps) {
  const clamped = Math.max(0, Math.min(100, score));
  const color =
    clamped >= 75
      ? "bg-emerald-500"
      : clamped >= 50
        ? "bg-amber-500"
        : "bg-red-500";

  return (
    <div className={className}>
      {label && (
        <span className="mb-1 block text-xs text-muted-foreground">
          {label}
        </span>
      )}
      <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
