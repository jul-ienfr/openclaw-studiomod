type BadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "outline";

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  default: "bg-secondary text-secondary-foreground",
  success: "bg-green-500/15 text-green-500",
  warning: "bg-yellow-500/15 text-yellow-500",
  error: "bg-destructive/15 text-destructive",
  info: "bg-blue-500/15 text-blue-400",
  outline: "border border-border text-muted-foreground",
};

export function Badge({
  variant = "default",
  className = "",
  children,
}: {
  variant?: BadgeVariant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-medium leading-tight ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
