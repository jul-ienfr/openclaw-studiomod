import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  className?: string;
}

export function ProgressBar({ value, max = 100, label, className }: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={label}
      className={cn("h-1.5 w-full overflow-hidden rounded-full bg-muted", className)}
    >
      <div
        className={cn(
          "h-full rounded-full bg-gradient-to-r from-primary to-accent",
          "transition-all duration-[var(--transition-slow)]",
          "animate-[shimmer_2s_linear_infinite] bg-[length:200%_100%]",
        )}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export default ProgressBar;
