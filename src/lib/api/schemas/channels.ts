import { z } from "zod";

// ── Channels ─────────────────────────────────────────────────────────────────

export const ChannelsGetQuerySchema = z.object({
  raw: z.string().optional(),
});

export type ChannelsGetQueryInput = z.infer<typeof ChannelsGetQuerySchema>;

export const ChannelsPatchSchema = z.object({
  name: z.string().min(1, "name requis"),
  patch: z.record(z.string(), z.unknown()),
});

export type ChannelsPatchInput = z.infer<typeof ChannelsPatchSchema>;

export const ChannelsDeleteQuerySchema = z.object({
  name: z.string().min(1, "name requis"),
});

export type ChannelsDeleteQueryInput = z.infer<
  typeof ChannelsDeleteQuerySchema
>;
