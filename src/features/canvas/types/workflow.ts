export type WorkflowNodeStatus =
  | "idle"
  | "active"
  | "success"
  | "error"
  | "warning";

export type WorkflowNode = {
  id: string;
  label: string;
  agent?: string;
  status: WorkflowNodeStatus;
  description?: string;
};

export type WorkflowEdge = {
  from: string;
  to: string;
  label?: string;
};

export type Workflow = {
  id: string;
  name: string;
  icon: string;
  color: string;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
};
