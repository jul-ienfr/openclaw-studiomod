import { z } from "zod";

export const AgentMetricSchema = z.object({
  key: z.string(),
  label: z.string(),
  format: z.enum(["number", "currency", "percent", "status", "duration"]),
  source: z.enum(["report", "cron", "gateway"]),
  unit: z.string().optional(),
});

export const AgentBindingSchema = z.object({
  agentId: z.string(),
  role: z.string(),
  label: z.string(),
  metrics: z.array(AgentMetricSchema),
});

export const WorkflowNodeSchema = z.object({
  id: z.string(),
  label: z.string(),
  agentId: z.string(),
  description: z.string().optional(),
});

export const WorkflowEdgeSchema = z.object({
  from: z.string(),
  to: z.string(),
});

export const PillarWorkflowSchema = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string().optional(),
  color: z.string().optional(),
  nodes: z.array(WorkflowNodeSchema),
  edges: z.array(WorkflowEdgeSchema),
});

export const PillarSchema = z.object({
  id: z.string(),
  type: z.enum(["personal", "business"]),
  name: z.string(),
  icon: z.string().optional(),
  color: z.string().optional(),
  agents: z.array(AgentBindingSchema),
  workflows: z.array(PillarWorkflowSchema).default([]),
  ceoAgentId: z.string().optional(),
  order: z.number(),
  enabled: z.boolean(),
});

export const PillarsConfigSchema = z.object({
  version: z.literal("1"),
  pillars: z.array(PillarSchema),
});
