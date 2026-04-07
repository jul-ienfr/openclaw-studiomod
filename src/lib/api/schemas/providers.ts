import { z } from "zod";

// ── Providers ────────────────────────────────────────────────────────────────

export const ProviderPatchSchema = z.object({
  id: z.string().min(1, "id required"),
  api: z.string().optional(),
  apiKey: z.string().optional(),
  accessToken: z.string().optional(),
  baseUrl: z.string().optional(),
  label: z.string().optional(),
  enabled: z.boolean().optional(),
});

export type ProviderPatchInput = z.infer<typeof ProviderPatchSchema>;

export const ProviderDeleteQuerySchema = z.object({
  id: z.string().min(1, "id required"),
});

export type ProviderDeleteQueryInput = z.infer<
  typeof ProviderDeleteQuerySchema
>;
