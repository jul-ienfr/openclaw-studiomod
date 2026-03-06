import { forwardRef, type SelectHTMLAttributes } from "react";

export const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(({ className = "", children, ...props }, ref) => (
  <select
    ref={ref}
    className={`rounded-lg border border-border bg-surface-1 px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring ${className}`}
    {...props}
  >
    {children}
  </select>
));
Select.displayName = "Select";
