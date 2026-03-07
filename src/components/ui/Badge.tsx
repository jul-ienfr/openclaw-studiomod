import { cn } from "@/lib/utils";

type BadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "outline"
  | "glow"
  | "dot";

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  default: "bg-secondary text-secondary-foreground",
  success: "bg-green-500/15 text-green-500",
  warning: "bg-yellow-500/15 text-yellow-500",
  error: "bg-destructive/15 text-destructive",
  info: "bg-blue-500/15 text-blue-400",
  outline: "border border-border text-muted-foreground",
  glow: "bg-primary/15 text-primary animate-[pulse-glow_2s_ease-in-out_infinite]",
  dot: "bg-secondary text-secondary-foreground",
};

interface BadgeProps {
  variant?: BadgeVariant;
  dotColor?: string;
  className?: string;
  children: React.ReactNode;
}

export function Badge({ variant = "default", dotColor, className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-[11px] font-medium leading-tight",
        VARIANT_CLASSES[variant],
        className,
      )}
    >
      {variant === "dot" && (
        <span
          className="inline-block h-2 w-2 shrink-0 rounded-full bg-current"
          style={dotColor ? { backgroundColor: dotColor } : undefined}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}

export default Badge;
