import { z } from "zod";

// ── Pagination ────────────────────────────────────────────────────────────────

export const PaginationSchema = z.object({
  page: z
    .string()
    .optional()
    .transform((v) => Math.max(1, parseInt(v ?? "1", 10)))
    .pipe(z.number().int().positive()),
  limit: z
    .string()
    .optional()
    .transform((v) => Math.min(100, Math.max(1, parseInt(v ?? "20", 10))))
    .pipe(z.number().int().positive()),
});

export type PaginationInput = z.infer<typeof PaginationSchema>;

// ── Safe identifiers ──────────────────────────────────────────────────────────

export const SafeAgentIdSchema = z
  .string()
  .min(1, "agentId is required")
  .max(128)
  .regex(/^[a-zA-Z0-9][a-zA-Z0-9_-]{0,127}$/, "Invalid agentId format");
