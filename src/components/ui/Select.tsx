import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(
      "rounded-lg border border-border bg-surface-1 px-3 py-2 text-sm",
      "transition-all duration-[var(--transition-fast)]",
      "focus:outline-none focus:ring-2 focus:ring-ring focus:bg-card",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      "disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  >
    {children}
  </select>
));
Select.displayName = "Select";

export default Select;
