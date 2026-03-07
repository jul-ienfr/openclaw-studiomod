import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "destructive"
  | "outline"
  | "gradient";
type ButtonSize = "sm" | "md" | "lg" | "icon";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
};

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground hover:brightness-110",
  secondary: "bg-secondary text-secondary-foreground hover:bg-surface-2",
  ghost: "text-muted-foreground hover:bg-surface-2 hover:text-foreground",
  destructive: "bg-destructive text-destructive-foreground hover:brightness-110",
  outline: "border border-border text-foreground hover:bg-surface-1",
  gradient:
    "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:brightness-110",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "h-7 px-2.5 text-xs gap-1.5",
  md: "h-9 px-3.5 text-sm gap-2",
  lg: "h-11 px-5 text-sm gap-2.5",
  icon: "h-9 w-9 justify-center p-0",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", loading, disabled, className, children, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium",
        "transition-all duration-[var(--transition-fast)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
        "disabled:pointer-events-none disabled:opacity-50",
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        className,
      )}
      {...props}
    >
      {loading && (
        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
          <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
        </svg>
      )}
      {children}
    </button>
  ),
);
Button.displayName = "Button";

export default Button;
