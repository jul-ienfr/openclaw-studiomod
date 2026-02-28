"use client";

import type { Decision } from "@/features/watcher/types";

type DecisionBadgeProps = {
  decision: Decision;
};

const badgeStyles: Record<Decision, string> = {
  AUTO: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
  PROPOSE: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  NOTIFY: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200",
  ARCHIVE: "bg-slate-50 text-slate-500 dark:bg-slate-900 dark:text-slate-500",
  BLOCK: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  SUSPECT: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
};

export function DecisionBadge({ decision }: DecisionBadgeProps) {
  return (
    <span
      className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${badgeStyles[decision]}`}
    >
      {decision}
    </span>
  );
}
