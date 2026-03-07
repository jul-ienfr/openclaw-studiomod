"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

type Tab = {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
};

type TabVariant = "underline" | "pills";

interface TabListProps {
  tabs: Tab[];
  active: string;
  onChange: (id: string) => void;
  variant?: TabVariant;
}

export function TabList({ tabs, active, onChange, variant = "underline" }: TabListProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const updateIndicator = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const activeBtn = container.querySelector<HTMLButtonElement>(`[data-tab-id="${active}"]`);
    if (activeBtn) {
      setIndicator({ left: activeBtn.offsetLeft, width: activeBtn.offsetWidth });
    }
  }, [active]);

  useEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  const isPills = variant === "pills";

  return (
    <div
      ref={containerRef}
      role="tablist"
      className={cn("relative flex gap-1", !isPills && "border-b border-border")}
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            data-tab-id={tab.id}
            onClick={() => onChange(tab.id)}
            className={cn(
              "relative z-10 flex items-center gap-2 px-3 py-2 text-sm",
              "transition-colors duration-[var(--transition-fast)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded",
              isPills
                ? isActive
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
                : isActive
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground",
            )}
          >
            {Icon && <Icon className="h-4 w-4" strokeWidth={1.75} />}
            {tab.label}
          </button>
        );
      })}
      <span
        aria-hidden="true"
        className={cn(
          "absolute transition-all duration-[var(--transition-base)]",
          isPills
            ? "top-0.5 h-[calc(100%-4px)] rounded-md bg-primary"
            : "bottom-0 h-0.5 rounded-full bg-primary",
        )}
        style={{ left: indicator.left, width: indicator.width }}
      />
    </div>
  );
}

export default TabList;
