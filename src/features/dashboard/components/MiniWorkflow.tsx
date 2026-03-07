"use client";

import Link from "next/link";
import type { PillarWorkflow } from "@/lib/pillars";
import { ArrowRight } from "lucide-react";

type MiniWorkflowProps = {
  workflow: PillarWorkflow;
};

export function MiniWorkflow({ workflow }: MiniWorkflowProps) {
  if (workflow.nodes.length === 0) return null;

  // Build an ordered node sequence by following edges from the entry node
  // (i.e. a node that has no incoming edges). Falls back to original order.
  const buildOrderedNodes = () => {
    const { nodes, edges } = workflow;
    if (edges.length === 0) return nodes;

    const hasIncoming = new Set(edges.map((e) => e.to));
    const entry = nodes.find((n) => !hasIncoming.has(n.id)) ?? nodes[0];
    if (!entry) return nodes;

    const ordered: typeof nodes = [];
    const visited = new Set<string>();
    let current: typeof nodes[number] | undefined = entry;

    while (current && !visited.has(current.id)) {
      ordered.push(current);
      visited.add(current.id);
      const nextEdge = edges.find((e) => e.from === current!.id);
      current = nextEdge
        ? nodes.find((n) => n.id === nextEdge.to)
        : undefined;
    }

    // Append any remaining nodes that were not reachable via edges
    for (const node of nodes) {
      if (!visited.has(node.id)) ordered.push(node);
    }

    return ordered;
  };

  const orderedNodes = buildOrderedNodes();

  return (
    <div className="rounded-lg border border-border bg-surface1 px-3 py-2.5">
      {/* Workflow name */}
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {workflow.name}
      </p>

      {/* Horizontal pipeline */}
      <div
        className="flex items-center gap-1 overflow-x-auto scrollbar-none pb-1"
        role="list"
        aria-label={`Workflow: ${workflow.name}`}
      >
        {orderedNodes.map((node, idx) => (
          <div
            key={node.id}
            className="flex items-center gap-1 shrink-0"
            role="listitem"
          >
            {/* Node */}
            <Link
              href={`/agents?agent=${encodeURIComponent(node.agentId)}`}
              title={node.description ?? node.label}
              aria-label={`${node.label} — click to open agent`}
              className="group relative flex h-8 min-w-[64px] max-w-[96px] items-center justify-center rounded-full border border-border bg-card px-2.5 text-center text-[10px] font-medium text-foreground transition-all hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              style={
                workflow.color
                  ? ({ "--wf-color": workflow.color } as React.CSSProperties)
                  : undefined
              }
            >
              <span className="truncate">{node.label}</span>

              {/* Tooltip for long labels / descriptions */}
              {(node.label.length > 12 || node.description) && (
                <span className="pointer-events-none absolute bottom-full left-1/2 mb-1.5 hidden -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-popover px-2 py-1 text-xs text-popover-foreground shadow-md group-hover:block">
                  {node.description ?? node.label}
                </span>
              )}
            </Link>

            {/* Arrow connector (not after last node) */}
            {idx < orderedNodes.length - 1 && (
              <ArrowRight
                className="h-3 w-3 shrink-0 text-muted-foreground/50"
                strokeWidth={1.75}
                aria-hidden
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
