"use client";

import { HardDrive, Radio, Bot, Clock } from "lucide-react";

type InfraBarProps = {
  disk: { percent: number };
  gateway: string;
  daemon: string;
  crons: { active: number; total: number };
};

function StatusBadge({ status }: { status: string }) {
  const isUp = status === "up";
  return (
    <span
      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
        isUp ? "bg-green-500/15 text-green-400" : "bg-red-500/15 text-red-400"
      }`}
    >
      {isUp ? "UP" : "DOWN"}
    </span>
  );
}

function diskColor(pct: number): string {
  if (pct >= 85) return "bg-red-500";
  if (pct >= 75) return "bg-yellow-500";
  return "bg-green-500";
}

function diskTextColor(pct: number): string {
  if (pct >= 85) return "text-red-400";
  if (pct >= 75) return "text-yellow-400";
  return "text-green-400";
}

export function InfraBar({ disk, gateway, daemon, crons }: InfraBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 rounded-xl border border-border bg-card px-4 py-3">
      {/* Disk */}
      <div className="flex items-center gap-2">
        <HardDrive
          className="h-3.5 w-3.5 text-muted-foreground"
          strokeWidth={1.75}
        />
        <span className="text-xs text-muted-foreground">Disque</span>
        <span
          className={`text-xs font-semibold ${diskTextColor(disk.percent)}`}
        >
          {disk.percent}%
        </span>
        <div className="h-1.5 w-16 overflow-hidden rounded-full bg-muted">
          <div
            className={`h-full rounded-full transition-all ${diskColor(disk.percent)}`}
            style={{ width: `${Math.min(disk.percent, 100)}%` }}
          />
        </div>
      </div>

      <div className="h-4 w-px bg-border" />

      {/* Gateway */}
      <div className="flex items-center gap-2">
        <Radio
          className="h-3.5 w-3.5 text-muted-foreground"
          strokeWidth={1.75}
        />
        <span className="text-xs text-muted-foreground">Gateway</span>
        <StatusBadge status={gateway} />
      </div>

      <div className="h-4 w-px bg-border" />

      {/* ai-daemon */}
      <div className="flex items-center gap-2">
        <Bot className="h-3.5 w-3.5 text-muted-foreground" strokeWidth={1.75} />
        <span className="text-xs text-muted-foreground">ai-daemon</span>
        <StatusBadge status={daemon} />
      </div>

      <div className="h-4 w-px bg-border" />

      {/* Crons */}
      <div className="flex items-center gap-2">
        <Clock
          className="h-3.5 w-3.5 text-muted-foreground"
          strokeWidth={1.75}
        />
        <span className="text-xs text-muted-foreground">Crons</span>
        <span className="text-xs font-semibold">
          {crons.active}/{crons.total} actifs
        </span>
      </div>
    </div>
  );
}
