"use client";

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Plus, Trash2, ArrowRight, GripVertical } from "lucide-react";
import type { PillarWorkflow, WorkflowNode, WorkflowEdge } from "@/lib/pillars/index";

type Props = {
  workflow?: PillarWorkflow;
  onChange?: (w: PillarWorkflow) => void;
};

function buildDefaultWorkflow(): PillarWorkflow {
  return {
    id: crypto.randomUUID(),
    name: "",
    nodes: [],
    edges: [],
  };
}

function NodeRow({
  node,
  onRemove,
  onChange,
}: {
  node: WorkflowNode;
  onRemove: (id: string) => void;
  onChange: (updated: WorkflowNode) => void;
}) {
  const t = useTranslations("workflowEditor");
  return (
    <div className="flex items-center gap-2 rounded-md border border-border bg-surface-1 p-2">
      <GripVertical className="h-4 w-4 shrink-0 text-muted-foreground" />
      <input
        type="text"
        value={node.label}
        onChange={(e) => onChange({ ...node, label: e.target.value })}
        placeholder={t("nodeLabelPlaceholder")}
        className="h-7 min-w-0 flex-1 rounded border border-border bg-surface-2 px-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
      />
      <input
        type="text"
        value={node.agentId}
        onChange={(e) => onChange({ ...node, agentId: e.target.value })}
        placeholder={t("nodeAgentIdPlaceholder")}
        className="h-7 w-40 shrink-0 rounded border border-border bg-surface-2 px-2 font-mono text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
      />
      <button
        type="button"
        onClick={() => onRemove(node.id)}
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
        aria-label={t("removeNode")}
      >
        <Trash2 className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

function PipelinePreview({ nodes, edges }: { nodes: WorkflowNode[]; edges: WorkflowEdge[] }) {
  const t = useTranslations("workflowEditor");
  if (nodes.length === 0) {
    return (
      <div className="flex items-center justify-center rounded-md border border-dashed border-border p-6 text-sm text-muted-foreground">
        {t("emptyPreview")}
      </div>
    );
  }

  const nodeMap = new Map(nodes.map((n) => [n.id, n]));
  const linked = new Set(edges.map((e) => e.from));

  // Build chain starting from nodes not pointed to by edges
  const targets = new Set(edges.map((e) => e.to));
  const roots = nodes.filter((n) => !targets.has(n.id));
  const chain: WorkflowNode[] = [];
  const visited = new Set<string>();

  const walk = (nodeId: string) => {
    if (visited.has(nodeId)) return;
    visited.add(nodeId);
    const node = nodeMap.get(nodeId);
    if (node) chain.push(node);
    const next = edges.find((e) => e.from === nodeId);
    if (next) walk(next.to);
  };

  for (const root of roots) {
    walk(root.id);
  }

  // Add any unlinked nodes
  for (const node of nodes) {
    if (!visited.has(node.id)) chain.push(node);
  }

  void linked;

  return (
    <div className="flex flex-wrap items-center gap-1 rounded-md border border-border bg-surface-1 p-3">
      {chain.map((node, i) => (
        <div key={node.id} className="flex items-center gap-1">
          <div className="rounded bg-surface-2 border border-border px-2 py-1 text-xs">
            <div className="font-medium text-foreground truncate max-w-24">{node.label || node.agentId}</div>
            {node.agentId && node.label && (
              <div className="font-mono text-muted-foreground truncate max-w-24">{node.agentId}</div>
            )}
          </div>
          {i < chain.length - 1 && (
            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
          )}
        </div>
      ))}
    </div>
  );
}

export function WorkflowEditor({ workflow, onChange }: Props) {
  const t = useTranslations("workflowEditor");
  const [current, setCurrent] = useState<PillarWorkflow>(
    workflow ?? buildDefaultWorkflow(),
  );

  useEffect(() => {
    if (workflow) setCurrent(workflow);
  }, [workflow]);

  const update = useCallback(
    (patch: Partial<PillarWorkflow>) => {
      setCurrent((prev) => {
        const next = { ...prev, ...patch };
        onChange?.(next);
        return next;
      });
    },
    [onChange],
  );

  const addNode = () => {
    const newNode: WorkflowNode = {
      id: crypto.randomUUID(),
      label: "",
      agentId: "",
    };
    const lastNode = current.nodes[current.nodes.length - 1];
    const newEdges = lastNode
      ? [...current.edges, { from: lastNode.id, to: newNode.id }]
      : current.edges;
    update({ nodes: [...current.nodes, newNode], edges: newEdges });
  };

  const removeNode = (id: string) => {
    update({
      nodes: current.nodes.filter((n) => n.id !== id),
      edges: current.edges.filter((e) => e.from !== id && e.to !== id),
    });
  };

  const updateNode = (updated: WorkflowNode) => {
    update({ nodes: current.nodes.map((n) => (n.id === updated.id ? updated : n)) });
  };

  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <header className="flex items-center justify-between border-b border-border px-6 py-4">
        <h1 className="text-base font-semibold text-foreground">
          {t("title")}
        </h1>
      </header>

      <div className="flex-1 space-y-6 p-6">
        {/* Workflow name */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-foreground">
            {t("nameLabel")}
          </label>
          <input
            type="text"
            value={current.name}
            onChange={(e) => update({ name: e.target.value })}
            placeholder={t("namePlaceholder")}
            className="h-9 w-full rounded-md border border-border bg-surface-2 px-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Pipeline preview */}
        <div className="space-y-1.5">
          <div className="text-sm font-medium text-foreground">{t("preview")}</div>
          <PipelinePreview nodes={current.nodes} edges={current.edges} />
        </div>

        {/* Nodes */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-foreground">{t("nodes")}</div>
            <button
              type="button"
              onClick={addNode}
              className="flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs text-muted-foreground hover:bg-surface-2 hover:text-foreground"
            >
              <Plus className="h-3.5 w-3.5" />
              {t("addNode")}
            </button>
          </div>
          <div className="space-y-2">
            {current.nodes.length === 0 && (
              <p className="text-sm text-muted-foreground">{t("noNodes")}</p>
            )}
            {current.nodes.map((node) => (
              <NodeRow
                key={node.id}
                node={node}
                onRemove={removeNode}
                onChange={updateNode}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
