"use client";

import type { Pillar } from "@/lib/pillars";
import {
  Bot,
  User,
  Building2,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Clock,
} from "lucide-react";

type PillarCardProps = {
  pillar: Pillar;
  agentCount?: number;
  activeCount?: number;
  onClick?: () => void;
};

const PILLAR_ICONS: Record<
  string,
  React.ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  User,
  Building2,
  TrendingUp,
  Bot,
};

export function PillarCard({
  pillar,
  agentCount = 0,
  activeCount = 0,
  onClick,
}: PillarCardProps) {
  const Icon = pillar.icon
    ? (PILLAR_ICONS[pillar.icon] ?? Bot)
    : pillar.type === "personal"
      ? User
      : Building2;
  const color = pillar.color ?? "var(--primary)";
  const idle = agentCount - activeCount;

  return (
    <button
      onClick={onClick}
      className="group relative flex flex-col gap-3 rounded-xl border border-border bg-card p-4 text-left transition-all hover:border-[var(--pillar-color)] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      style={{ "--pillar-color": color } as React.CSSProperties}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${color}22`, color }}
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-foreground">
            {pillar.name}
          </p>
          <p className="text-xs text-muted-foreground capitalize">
            {pillar.type === "personal" ? "Personnel" : "Business"}
          </p>
        </div>
        {activeCount > 0 && (
          <span
            className="flex h-2 w-2 rounded-full bg-green-500 ring-2 ring-card"
            title="Active agents"
          />
        )}
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col items-center rounded-lg bg-surface1 py-2">
          <Bot
            className="mb-1 h-3.5 w-3.5 text-muted-foreground"
            strokeWidth={1.75}
          />
          <span className="text-base font-bold text-foreground tabular-nums">
            {agentCount}
          </span>
          <span className="text-[10px] text-muted-foreground">Agents</span>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-surface1 py-2">
          <CheckCircle2
            className="mb-1 h-3.5 w-3.5 text-green-500"
            strokeWidth={1.75}
          />
          <span className="text-base font-bold text-foreground tabular-nums">
            {activeCount}
          </span>
          <span className="text-[10px] text-muted-foreground">Actifs</span>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-surface1 py-2">
          <Clock
            className="mb-1 h-3.5 w-3.5 text-muted-foreground"
            strokeWidth={1.75}
          />
          <span className="text-base font-bold text-foreground tabular-nums">
            {idle}
          </span>
          <span className="text-[10px] text-muted-foreground">Idle</span>
        </div>
      </div>

      {/* Accent bar */}
      <div
        className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
        style={{ backgroundColor: color }}
      />
    </button>
  );
}
