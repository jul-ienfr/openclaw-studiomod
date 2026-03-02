"use client";

import type { Decision } from "@/features/watcher/types";

type DecisionBadgeProps = {
  decision: Decision;
};

const badgeStyles: Record<Decision, string> = {
  AUTO: "bg-green-500/20 text-green-400 border-green-500/30",
  PROPOSE: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  NOTIFY: "bg-muted text-muted-foreground border-border",
  BLOCK: "bg-red-500/20 text-red-400 border-red-500/30",
  SUSPECT: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  ARCHIVE: "bg-slate-800/60 text-slate-500 border-slate-700/40",
};

export function DecisionBadge({ decision }: DecisionBadgeProps) {
  return (
    <span
      className={`inline-block rounded-full border px-2 py-0.5 font-mono text-xs ${badgeStyles[decision]}`}
    >
      {decision}
    </span>
  );
}
