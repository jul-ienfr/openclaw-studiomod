"use client";

import { useState } from "react";
import {
  Briefcase,
  Shield,
  HardDrive,
  TrendingUp,
  Crown,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Workflow, WorkflowNodeStatus } from "../types/workflow";
import { workflows } from "../data/workflows";

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  Shield,
  HardDrive,
  TrendingUp,
  Crown,
};

const statusStyles: Record<
  WorkflowNodeStatus,
  { border: string; bg: string; dot: string }
> = {
  idle: {
    border: "border-l-gray-400",
    bg: "bg-gray-500/5",
    dot: "bg-gray-400",
  },
  active: {
    border: "border-l-blue-500",
    bg: "bg-blue-500/5",
    dot: "bg-blue-500",
  },
  success: {
    border: "border-l-green-500",
    bg: "bg-green-500/5",
    dot: "bg-green-500",
  },
  error: {
    border: "border-l-red-500",
    bg: "bg-red-500/5",
    dot: "bg-red-500",
  },
  warning: {
    border: "border-l-yellow-500",
    bg: "bg-yellow-500/5",
    dot: "bg-yellow-500",
  },
};

const tabColorMap: Record<string, { active: string; icon: string }> = {
  blue: {
    active: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    icon: "text-blue-500",
  },
  purple: {
    active: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    icon: "text-purple-500",
  },
  orange: {
    active: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    icon: "text-orange-500",
  },
  green: {
    active: "bg-green-500/10 text-green-600 dark:text-green-400",
    icon: "text-green-500",
  },
  amber: {
    active: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    icon: "text-amber-500",
  },
};

function WorkflowTab({
  workflow,
  isActive,
  onClick,
}: {
  workflow: Workflow;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = iconMap[workflow.icon];
  const colors = tabColorMap[workflow.color] ?? tabColorMap.blue;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
        isActive
          ? colors.active
          : "text-muted-foreground hover:bg-card hover:text-foreground"
      }`}
    >
      {Icon && (
        <Icon
          className={`h-4 w-4 ${isActive ? "" : "text-muted-foreground"}`}
          strokeWidth={1.75}
        />
      )}
      <span>{workflow.name}</span>
    </button>
  );
}

function NodeCard({
  label,
  agent,
  status,
  description,
}: {
  label: string;
  agent?: string;
  status: WorkflowNodeStatus;
  description?: string;
}) {
  const styles = statusStyles[status];

  return (
    <div
      className={`shrink-0 rounded-lg border border-border ${styles.border} border-l-4 ${styles.bg} px-4 py-3 min-w-[140px] max-w-[180px]`}
      title={description}
    >
      <div className="flex items-center gap-2 mb-1">
        <span className={`h-2 w-2 shrink-0 rounded-full ${styles.dot}`} />
        <span className="text-sm font-semibold text-foreground leading-tight">
          {label}
        </span>
      </div>
      {agent && <p className="text-xs text-muted-foreground pl-4">{agent}</p>}
    </div>
  );
}

function ArrowConnector() {
  return (
    <div className="flex shrink-0 items-center px-1 text-muted-foreground">
      <div className="h-px w-6 bg-border" />
      <ChevronRight className="h-4 w-4 -ml-1" />
    </div>
  );
}

function WorkflowFlow({ workflow }: { workflow: Workflow }) {
  return (
    <div className="overflow-x-auto pb-4">
      <div className="flex items-center gap-0 min-w-max py-2 px-1">
        {workflow.nodes.map((node, i) => (
          <div key={node.id} className="flex items-center">
            {i > 0 && <ArrowConnector />}
            <NodeCard
              label={node.label}
              agent={node.agent}
              status={node.status}
              description={node.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export const WorkflowCanvas = () => {
  const [activeId, setActiveId] = useState(workflows[0].id);
  const activeWorkflow =
    workflows.find((w) => w.id === activeId) ?? workflows[0];
  const activeColors = tabColorMap[activeWorkflow.color] ?? tabColorMap.blue;
  const ActiveIcon = iconMap[activeWorkflow.icon];

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {/* Tab selector */}
      <div className="flex shrink-0 items-center gap-1 overflow-x-auto border-b border-border px-6 py-3">
        {workflows.map((w) => (
          <WorkflowTab
            key={w.id}
            workflow={w}
            isActive={w.id === activeId}
            onClick={() => setActiveId(w.id)}
          />
        ))}
      </div>

      {/* Workflow detail */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Workflow header */}
        <div className="mb-6 flex items-center gap-3">
          {ActiveIcon && (
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl ${activeColors.active}`}
            >
              <ActiveIcon className="h-5 w-5" strokeWidth={1.75} />
            </div>
          )}
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              {activeWorkflow.name}
            </h2>
            <p className="text-xs text-muted-foreground">
              {activeWorkflow.nodes.length} etapes &middot;{" "}
              {[
                ...new Set(
                  activeWorkflow.nodes.map((n) => n.agent).filter(Boolean),
                ),
              ].join(", ")}
            </p>
          </div>
        </div>

        {/* Flow diagram */}
        <div className="rounded-xl border border-border bg-card p-6">
          <WorkflowFlow workflow={activeWorkflow} />
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          {(
            Object.entries(statusStyles) as [
              WorkflowNodeStatus,
              (typeof statusStyles)[WorkflowNodeStatus],
            ][]
          ).map(([status, styles]) => (
            <div key={status} className="flex items-center gap-1.5">
              <span className={`h-2 w-2 rounded-full ${styles.dot}`} />
              <span className="capitalize">{status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
