"use client";
import { cn } from "@/lib/utils";

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
}

export function Toggle({ checked, onChange, disabled, label }: ToggleProps) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-2">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={cn(
          "relative h-5 w-9 rounded-full",
          "transition-colors duration-[var(--transition-base)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          checked ? "bg-primary" : "bg-muted",
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow-[var(--shadow-xs)]",
            "transition-transform duration-[var(--transition-base)] ease-out",
            checked && "translate-x-4",
          )}
        />
      </button>
      {label && <span className="text-sm text-foreground">{label}</span>}
    </label>
  );
}

export default Toggle;
