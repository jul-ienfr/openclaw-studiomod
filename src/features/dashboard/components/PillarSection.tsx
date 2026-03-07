"use client";

import { Bot, User, Building2, TrendingUp, Star } from "lucide-react";
import type { Pillar } from "@/lib/pillars";
import { AgentMiniCard } from "./AgentMiniCard";
import { MiniWorkflow } from "./MiniWorkflow";

type PillarSectionProps = {
  pillar: Pillar;
};

// ---------------------------------------------------------------------------
// Icon registry — looks up icon by name string from pillar config
// ---------------------------------------------------------------------------

const ICON_REGISTRY: Record<
  string,
  React.ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  User,
  Building2,
  TrendingUp,
  Bot,
  Star,
};

function resolvePillarIcon(
  iconName: string | undefined,
  type: Pillar["type"],
): React.ComponentType<{ className?: string; strokeWidth?: number }> {
  if (iconName && ICON_REGISTRY[iconName]) return ICON_REGISTRY[iconName];
  return type === "personal" ? User : Building2;
}

// ---------------------------------------------------------------------------
// PillarType badge
// ---------------------------------------------------------------------------

function PillarTypeBadge({ type }: { type: Pillar["type"] }) {
  const label = type === "personal" ? "Personal" : "Business";
  const colorClass =
    type === "personal"
      ? "bg-blue-500/10 text-blue-400"
      : "bg-violet-500/10 text-violet-400";
  return (
    <span
      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${colorClass}`}
    >
      {label}
    </span>
  );
}

// ---------------------------------------------------------------------------
// PillarSection
// ---------------------------------------------------------------------------

export function PillarSection({ pillar }: PillarSectionProps) {
  const Icon = resolvePillarIcon(pillar.icon, pillar.type);
  const accentColor = pillar.color ?? "var(--primary)";

  return (
    <section
      className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4"
      style={{ "--pillar-accent": accentColor } as React.CSSProperties}
      aria-label={pillar.name}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
          style={{
            backgroundColor: `${accentColor}22`,
            color: accentColor,
          }}
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="truncate text-sm font-semibold text-foreground">
            {pillar.name}
          </h2>
        </div>

        <PillarTypeBadge type={pillar.type} />
      </div>

      {/* Agents grid */}
      {pillar.agents.length > 0 ? (
        <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
          {/* CEO agent gets a highlighted card at the top */}
          {pillar.ceoAgentId && (
            <div className="sm:col-span-2">
              <AgentMiniCard
                agentId={pillar.ceoAgentId}
                role="CEO"
                highlighted
              />
            </div>
          )}

          {/* Remaining agents */}
          {pillar.agents
            .filter((binding) => binding.agentId !== pillar.ceoAgentId)
            .map((binding) => (
              <AgentMiniCard
                key={binding.agentId}
                agentId={binding.agentId}
                role={binding.role}
              />
            ))}
        </div>
      ) : (
        <p className="text-xs text-muted-foreground">
          No agents configured for this pillar.
        </p>
      )}

      {/* Workflows */}
      {pillar.workflows.length > 0 && (
        <div className="flex flex-col gap-2 border-t border-border pt-3">
          {pillar.workflows.map((workflow) => (
            <MiniWorkflow key={workflow.id} workflow={workflow} />
          ))}
        </div>
      )}
    </section>
  );
}
