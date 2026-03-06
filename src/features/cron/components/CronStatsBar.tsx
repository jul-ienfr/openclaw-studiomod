"use client";

import { CheckCircle, XCircle, Clock, Ban } from "lucide-react";
import type { CronStats } from "../types";

type CronStatsBarProps = {
  stats: CronStats;
};

const STAT_ITEMS = [
  {
    key: "total" as const,
    label: "Total",
    icon: Clock,
    className: "bg-primary/10 text-primary",
  },
  {
    key: "ok" as const,
    label: "OK",
    icon: CheckCircle,
    className: "bg-emerald-500/15 text-emerald-500",
  },
  {
    key: "error" as const,
    label: "Erreur",
    icon: XCircle,
    className: "bg-red-500/15 text-red-500",
  },
  {
    key: "neverRan" as const,
    label: "Jamais execute",
    icon: Clock,
    className: "bg-yellow-500/15 text-yellow-500",
  },
  {
    key: "disabled" as const,
    label: "Desactive",
    icon: Ban,
    className: "bg-muted-foreground/10 text-muted-foreground",
  },
];

export function CronStatsBar({ stats }: CronStatsBarProps) {
  return (
    <div className="flex items-center gap-3">
      {STAT_ITEMS.map((item) => {
        const value = stats[item.key];
        if (item.key === "disabled" && value === 0) return null;
        return (
          <div
            key={item.key}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${item.className}`}
          >
            <item.icon className="h-4 w-4" strokeWidth={1.75} />
            <span className="font-semibold">{value}</span>
            <span className="text-xs opacity-75">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}
