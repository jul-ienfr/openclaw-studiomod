import { z } from "zod";

// ── Watcher actions ───────────────────────────────────────────────────────────

export const WatcherActionSchema = z.discriminatedUnion("action", [
  z.object({
    action: z.literal("check"),
    source: z.string().optional(),
  }),
  z.object({
    action: z.literal("set-level"),
    level: z.string().min(1, "level is required for set-level action"),
  }),
  z.object({
    action: z.literal("status"),
  }),
  z.object({
    action: z.literal("vacuum"),
  }),
  z.object({
    action: z.literal("implement"),
    itemId: z.string().optional(),
    dryRun: z.boolean().optional(),
    limit: z.number().int().positive().optional(),
  }),
  z.object({
    action: z.literal("ignore"),
    itemId: z.string().min(1, "itemId is required for ignore action"),
  }),
  z.object({
    action: z.literal("set-status"),
    itemId: z.string().min(1, "itemId is required for set-status action"),
    status: z.enum(["new", "scored", "implemented", "archived"]),
  }),
]);

export type WatcherActionInput = z.infer<typeof WatcherActionSchema>;

// ── Watcher search ────────────────────────────────────────────────────────────

export const WatcherSearchQuerySchema = z.object({
  q: z.string().optional(),
  limit: z
    .string()
    .optional()
    .transform((v) => Math.min(50, Math.max(1, parseInt(v ?? "20", 10))))
    .pipe(z.number().int().positive()),
});

export type WatcherSearchQueryInput = z.infer<typeof WatcherSearchQuerySchema>;

// ── Watcher model test ────────────────────────────────────────────────────────

const WatcherModelTestEntrySchema = z.object({
  id: z.string().min(1),
  provider: z.string().min(1),
  model_id: z.string().min(1),
  base_url: z.string().optional(),
  api_key: z.string().optional(),
  timeout_seconds: z.number().positive().optional(),
});

export const WatcherModelTestSchema = z.object({
  models: z.array(WatcherModelTestEntrySchema).min(1, "models array required"),
});

export type WatcherModelTestInput = z.infer<typeof WatcherModelTestSchema>;

// ── Watcher config (PUT) ─────────────────────────────────────────────────────

export const WatcherConfigPutSchema = z
  .record(z.string(), z.unknown())
  .refine((val) => !Array.isArray(val), {
    message: "Config must be a JSON object, not an array",
  });
