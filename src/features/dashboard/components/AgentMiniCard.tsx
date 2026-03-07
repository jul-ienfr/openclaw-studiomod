"use client";

import Link from "next/link";
import { useAgentStore } from "@/features/agents/state/store";

type AgentMiniCardProps = {
  agentId: string;
  role?: string;
  highlighted?: boolean;
};

type StatusDotProps = {
  status: "idle" | "running" | "error";
};

function StatusDot({ status }: StatusDotProps) {
  const colorClass =
    status === "running"
      ? "bg-green-500"
      : status === "error"
        ? "bg-red-500"
        : "bg-muted-foreground/40";

  const label =
    status === "running" ? "Running" : status === "error" ? "Error" : "Idle";

  return (
    <span
      className={`h-2 w-2 rounded-full shrink-0 ${colorClass}`}
      title={label}
      aria-label={`Status: ${label}`}
    />
  );
}

function agentInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function AgentMiniCard({
  agentId,
  role,
  highlighted = false,
}: AgentMiniCardProps) {
  const { state } = useAgentStore();
  const agent = state.agents.find((a) => a.agentId === agentId) ?? null;

  // Fallback when agent is not yet loaded or unknown
  if (!agent) {
    return (
      <div
        className={`flex items-center gap-2.5 rounded-lg border border-border bg-card/50 px-3 py-2 opacity-60 ${
          highlighted ? "ring-2 ring-primary/30" : ""
        }`}
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-[10px] font-semibold text-muted-foreground shrink-0">
          {agentId.slice(0, 2).toUpperCase()}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-medium text-muted-foreground">
            {agentId}
          </p>
          {role && (
            <p className="truncate text-[10px] text-muted-foreground/60">
              {role}
            </p>
          )}
        </div>
        <span className="h-2 w-2 rounded-full bg-muted-foreground/20 shrink-0" />
      </div>
    );
  }

  const displayName = agent._pendingName ?? agent.name;
  const previewText = agent.latestPreview ?? agent.streamText ?? agent.lastResult;
  const truncatedPreview = previewText
    ? previewText.slice(0, 60) + (previewText.length > 60 ? "…" : "")
    : null;

  return (
    <Link
      href={`/agents?agent=${encodeURIComponent(agentId)}`}
      className={`group flex items-center gap-2.5 rounded-lg border bg-card px-3 py-2 transition-all hover:border-primary/30 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
        highlighted
          ? "border-primary/40 ring-1 ring-primary/20"
          : "border-border"
      }`}
    >
      {/* Avatar */}
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-[10px] font-semibold text-primary shrink-0">
        {agentInitials(displayName)}
      </div>

      {/* Name + preview */}
      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-medium text-foreground">
          {displayName}
        </p>
        {truncatedPreview ? (
          <p className="truncate text-[10px] text-muted-foreground">
            {truncatedPreview}
          </p>
        ) : role ? (
          <p className="truncate text-[10px] text-muted-foreground/70">
            {role}
          </p>
        ) : null}
      </div>

      {/* Status dot */}
      <StatusDot status={agent.status} />
    </Link>
  );
}
