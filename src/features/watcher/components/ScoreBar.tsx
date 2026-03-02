"use client";

type ScoreBarProps = {
  value?: number;
  score?: number;
  label?: string;
  size?: "sm" | "md";
  className?: string;
};

export function ScoreBar({ value, score, label, size = "md", className }: ScoreBarProps) {
  const raw = value ?? score ?? 0;
  const clamped = Math.max(0, Math.min(100, raw));
  const color =
    clamped >= 75
      ? "bg-green-500"
      : clamped >= 50
        ? "bg-yellow-500"
        : "bg-red-500";

  const barHeight = size === "sm" ? "h-1.5" : "h-2";
  const barWidth = size === "sm" ? "w-16" : "w-24";

  return (
    <div className={className}>
      {label && (
        <span className="mb-1 block text-xs text-muted-foreground">{label}</span>
      )}
      <div className={`${barHeight} ${barWidth} overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700`}>
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
