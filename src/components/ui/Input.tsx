import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, id, ...props }, ref) => {
    const errorId = error && id ? `${id}-error` : undefined;
    return (
      <div className="flex flex-col gap-1">
        <input
          ref={ref}
          id={id}
          aria-invalid={error ? true : undefined}
          aria-describedby={errorId}
          className={cn(
            "rounded-lg border bg-surface-1 px-3 py-2 text-sm",
            "transition-all duration-[var(--transition-fast)]",
            "placeholder:text-muted-foreground",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:bg-card",
            error ? "border-destructive" : "border-border",
            className,
          )}
          {...props}
        />
        {error && (
          <p id={errorId} className="text-xs text-destructive" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export default Input;
