export type AgentMetricFormat = "number" | "currency" | "percent" | "status" | "duration";
export type AgentMetricSource = "report" | "cron" | "gateway";

export type AgentMetric = {
  key: string;
  label: string;
  format: AgentMetricFormat;
  source: AgentMetricSource;
  unit?: string;
};

export type AgentBinding = {
  agentId: string;
  role: string;
  label: string;
  metrics: AgentMetric[];
};

export type WorkflowNode = {
  id: string;
  label: string;
  agentId: string;
  description?: string;
};

export type WorkflowEdge = { from: string; to: string };

export type PillarWorkflow = {
  id: string;
  name: string;
  icon?: string;
  color?: string;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
};

export type PillarType = "personal" | "business";

export type Pillar = {
  id: string;
  type: PillarType;
  name: string;
  icon?: string;
  color?: string;
  agents: AgentBinding[];
  workflows: PillarWorkflow[];
  ceoAgentId?: string;
  order: number;
  enabled: boolean;
};

export type PillarsConfig = {
  version: "1";
  pillars: Pillar[];
};
