import { z } from "zod";

// ── Cron config ───────────────────────────────────────────────────────────────

export const CronConfigPatchSchema = z
  .object({
    enabled: z.boolean().optional(),
    maxConcurrentRuns: z.number().int().positive().optional(),
    sessionRetention: z.string().optional(),
  })
  .strict()
  .refine((data) => !("jobs" in (data as Record<string, unknown>)), {
    message:
      "Jobs must NOT be placed in openclaw.json cron section. They belong in cron/jobs.json.",
  });

export type CronConfigPatchInput = z.infer<typeof CronConfigPatchSchema>;

// ── Cron job patch ────────────────────────────────────────────────────────────

export const CronJobPatchSchema = z
  .object({
    name: z.string().min(1).optional(),
    schedule: z.string().min(1).optional(),
    agentId: z.string().min(1).optional(),
    payload: z.record(z.string(), z.unknown()).optional(),
    delivery: z.string().optional(),
    state: z.enum(["enabled", "disabled"]).optional(),
  })
  .passthrough();

export type CronJobPatchInput = z.infer<typeof CronJobPatchSchema>;

// ── Credentials ───────────────────────────────────────────────────────────────

export const CredentialEntrySchema = z.object({
  key: z.string().min(1, "Credential key is required"),
  value: z.string(),
});

export const CredentialsPostSchema = z.object({
  agentId: z.string().min(1, "agentId is required"),
  credentials: z.array(CredentialEntrySchema),
});

export type CredentialsPostInput = z.infer<typeof CredentialsPostSchema>;

// ── Env import ────────────────────────────────────────────────────────────────

export const EnvImportSchema = z.object({
  content: z.string().min(1, ".env content is required"),
});

export type EnvImportInput = z.infer<typeof EnvImportSchema>;
