"use client";

import { Target, Megaphone, Calculator, Eye } from "lucide-react";

const ITEMS = [
  { label: "Pipeline", agent: "prospection", icon: Target },
  { label: "Marketing", agent: "marketing", icon: Megaphone },
  { label: "Comptabilite", agent: "comptable-business", icon: Calculator },
  { label: "Veille", agent: "veille-strategique", icon: Eye },
] as const;

export function CeoBusinessPanel() {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Pilier Business
      </h3>
      <ul className="space-y-2">
        {ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.agent} className="flex items-center gap-2.5">
              <Icon
                className="h-4 w-4 shrink-0 text-muted-foreground"
                strokeWidth={1.75}
              />
              <span className="text-sm font-medium">{item.label}</span>
              <span className="ml-auto text-[11px] text-muted-foreground">
                {item.agent}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
