"use client";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type TooltipPlacement = "top" | "bottom";

const PLACEMENT: Record<TooltipPlacement, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
};

const ARROW: Record<TooltipPlacement, string> = {
  top: "top-full left-1/2 -translate-x-1/2 border-t-popover border-x-transparent border-b-transparent",
  bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-popover border-x-transparent border-t-transparent",
};

interface TooltipProps {
  content: string;
  placement?: TooltipPlacement;
  children: ReactNode;
}

export function Tooltip({ content, placement = "top", children }: TooltipProps) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {children}
      {show && (
        <div
          role="tooltip"
          className={cn(
            "pointer-events-none absolute z-[var(--z-tooltip)] whitespace-nowrap",
            "rounded-md border border-border bg-popover px-2 py-1 text-xs text-popover-foreground",
            "shadow-[var(--shadow-sm)]",
            "animate-[fadeIn_var(--transition-fast)_ease-out]",
            PLACEMENT[placement],
          )}
        >
          {content}
          <span
            aria-hidden="true"
            className={cn("absolute h-0 w-0 border-4", ARROW[placement])}
          />
        </div>
      )}
    </div>
  );
}

export default Tooltip;
