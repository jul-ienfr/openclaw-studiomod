// TypeScript interfaces matching Paperclip's PostgreSQL schema

export interface PcCompany {
  id: string;
  name: string;
  description: string | null;
  status: "active" | "archived";
  issuePrefix: string;
  issueCounter: number;
  budgetMonthlyCents: number;
  spentMonthlyCents: number;
  requireBoardApprovalForNewAgents: boolean;
  brandColor: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface PcAgent {
  id: string;
  companyId: string;
  name: string;
  role: string;
  title: string | null;
  icon: string | null;
  status: "idle" | "running" | "error";
  reportsTo: string | null;
  capabilities: string | null;
  adapterType: string;
  adapterConfig: Record<string, unknown> | null;
  runtimeConfig: Record<string, unknown> | null;
  budgetMonthlyCents: number;
  spentMonthlyCents: number;
  permissions: Record<string, unknown> | null;
  lastHeartbeatAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface PcProject {
  id: string;
  companyId: string;
  name: string;
  description: string | null;
  status: "backlog" | "active" | "done";
  color: string | null;
  targetDate: string | null;
  archivedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface PcIssue {
  id: string;
  companyId: string;
  projectId: string | null;
  parentId: string | null;
  title: string;
  description: string | null;
  status: "backlog" | "todo" | "in_progress" | "done";
  priority: "low" | "medium" | "high";
  assigneeAgentId: string | null;
  identifier: string;
  issueNumber: number;
  billingCode: string | null;
  startedAt: string | null;
  completedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface PcApproval {
  id: string;
  companyId: string;
  type: string;
  requestedByAgentId: string | null;
  requestedByUserId: string | null;
  status: "pending" | "approved" | "rejected" | "revision_requested";
  payload: Record<string, unknown>;
  decisionNote: string | null;
  decidedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface PcActivityLog {
  id: string;
  companyId: string;
  actorType: "agent" | "user" | "system";
  actorId: string | null;
  action: string;
  entityType: string | null;
  entityId: string | null;
  details: Record<string, unknown> | null;
  createdAt: string;
}

export interface PcGoal {
  id: string;
  companyId: string;
  title: string;
  description: string | null;
  level: "task" | "epic" | "strategic";
  status: "planned" | "in_progress" | "completed";
  parentId: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface PcDashboard {
  agentStatusCounts: Record<string, number>;
  failedRunsCount: number;
  pendingApprovalsCount: number;
  costSummary: {
    totalCents: number;
    budgetCents: number;
  } | null;
}
