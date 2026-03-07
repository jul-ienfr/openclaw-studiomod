import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type CardVariant = "flat" | "elevated" | "glass" | "gradient" | "interactive";

const VARIANT_STYLES: Record<CardVariant, string> = {
  flat: "bg-card border-border",
  elevated: "bg-card border-border shadow-[var(--shadow-md)]",
  glass: "backdrop-blur-xl bg-card/60 border-white/10",
  gradient: "bg-gradient-to-br from-card to-surface-2 border-border",
  interactive:
    "bg-card border-border cursor-pointer hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]",
};

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "flat", className, children, ...props }, ref) => (
    <div
      ref={ref}
      data-card-style={variant}
      className={cn(
        "rounded-xl border p-4 transition-all duration-[var(--transition-base)]",
        VARIANT_STYLES[variant],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);
Card.displayName = "Card";

export function CardHeader({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mb-3 flex items-center justify-between", className)}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <h3 className={cn("text-sm font-semibold", className)}>{children}</h3>;
}

export function CardContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn(className)}>{children}</div>;
}

export default Card;
