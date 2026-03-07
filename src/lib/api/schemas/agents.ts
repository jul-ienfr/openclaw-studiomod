import { z } from "zod";

// ── Agent model change ────────────────────────────────────────────────────────

export const AgentModelPatchSchema = z.object({
  agentId: z.string().min(1, "agentId is required"),
  model: z.string().min(1).nullable(),
});

export type AgentModelPatchInput = z.infer<typeof AgentModelPatchSchema>;
