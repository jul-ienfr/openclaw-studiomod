import { z } from "zod";

// ── Reports ──────────────────────────────────────────────────────────────────

export const ReportsQuerySchema = z.object({
  agent: z.string().max(256).optional(),
  status: z.enum(["OK", "ALERTE", "CRITIQUE"]).optional(),
});

export type ReportsQueryInput = z.infer<typeof ReportsQuerySchema>;
