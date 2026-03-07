import { z } from "zod";

// ── Theme ─────────────────────────────────────────────────────────────────────

const ThemeColorsSchema = z
  .object({
    primary: z.string(),
    primaryForeground: z.string(),
    background: z.string(),
    foreground: z.string(),
    card: z.string(),
    cardForeground: z.string(),
    popover: z.string(),
    popoverForeground: z.string(),
    secondary: z.string(),
    secondaryForeground: z.string(),
    muted: z.string(),
    mutedForeground: z.string(),
    accent: z.string(),
    accentForeground: z.string(),
    destructive: z.string(),
    destructiveForeground: z.string(),
    border: z.string(),
    input: z.string(),
    ring: z.string(),
    sidebar: z.string(),
    sidebarBorder: z.string(),
    sidebarForeground: z.string(),
    surface1: z.string(),
    surface2: z.string(),
    surface3: z.string(),
    neutralTint: z.string(),
  })
  .partial();

const ThemeTypographySchema = z
  .object({
    fontSans: z.string(),
    fontMono: z.string(),
    fontDisplay: z.string(),
    fontSize: z.string(),
    lineHeight: z.string(),
  })
  .partial();

const ThemeSpacingSchema = z
  .object({
    radius: z.string(),
    radiusSmall: z.string(),
    navWidth: z.string(),
  })
  .partial();

const ThemeLayoutSchema = z
  .object({
    sidebarStyle: z.enum(["glass", "solid", "minimal"]),
    cardStyle: z.enum(["glass", "elevated", "flat", "bordered"]),
    headerStyle: z.enum(["transparent", "solid", "glass"]),
  })
  .partial();

const ThemeBrandingSchema = z
  .object({
    appName: z.string(),
    logoUrl: z.string().nullable(),
  })
  .partial();

/** Full theme for PUT (complete replacement) */
export const ThemePutSchema = z
  .object({
    version: z.enum(["1", "2"]).optional(),
    name: z.string().min(1),
    preset: z.string().min(1),
    category: z.enum(["classic", "premium"]).optional(),
    colors: z.object({
      light: ThemeColorsSchema,
      dark: ThemeColorsSchema,
    }),
    typography: ThemeTypographySchema,
    spacing: ThemeSpacingSchema,
    layout: ThemeLayoutSchema,
    branding: ThemeBrandingSchema,
  })
  .passthrough();

export type ThemePutInput = z.infer<typeof ThemePutSchema>;

/** Partial theme for PATCH (merge) */
export const ThemePatchSchema = z
  .object({
    name: z.string().optional(),
    preset: z.string().optional(),
    category: z.enum(["classic", "premium"]).optional(),
    colors: z
      .object({
        light: ThemeColorsSchema.optional(),
        dark: ThemeColorsSchema.optional(),
      })
      .optional(),
    typography: ThemeTypographySchema.optional(),
    spacing: ThemeSpacingSchema.optional(),
    layout: ThemeLayoutSchema.optional(),
    branding: ThemeBrandingSchema.optional(),
  })
  .passthrough();

export type ThemePatchInput = z.infer<typeof ThemePatchSchema>;

// ── Pillars ───────────────────────────────────────────────────────────────────

const AgentMetricSchema = z.object({
  key: z.string(),
  label: z.string(),
  format: z.enum(["number", "currency", "percent", "status", "duration"]),
  source: z.enum(["report", "cron", "gateway"]),
  unit: z.string().optional(),
});

const AgentBindingSchema = z.object({
  agentId: z.string(),
  role: z.string(),
  label: z.string(),
  metrics: z.array(AgentMetricSchema),
});

const WorkflowNodeSchema = z.object({
  id: z.string(),
  label: z.string(),
  agentId: z.string(),
  description: z.string().optional(),
});

const WorkflowEdgeSchema = z.object({
  from: z.string(),
  to: z.string(),
});

const PillarWorkflowSchema = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string().optional(),
  color: z.string().optional(),
  nodes: z.array(WorkflowNodeSchema),
  edges: z.array(WorkflowEdgeSchema),
});

export const PillarCreateSchema = z.object({
  id: z.string().min(1, "id is required"),
  type: z.enum(["personal", "business"]).optional().default("business"),
  name: z.string().min(1, "name is required"),
  icon: z.string().optional(),
  color: z.string().optional(),
  agents: z.array(AgentBindingSchema).optional().default([]),
  workflows: z.array(PillarWorkflowSchema).optional().default([]),
  ceoAgentId: z.string().optional(),
  order: z.number().int().optional(),
  enabled: z.boolean().optional().default(true),
});

export type PillarCreateInput = z.infer<typeof PillarCreateSchema>;

export const PillarPatchSchema = z
  .object({
    type: z.enum(["personal", "business"]).optional(),
    name: z.string().min(1).optional(),
    icon: z.string().optional(),
    color: z.string().optional(),
    agents: z.array(AgentBindingSchema).optional(),
    workflows: z.array(PillarWorkflowSchema).optional(),
    ceoAgentId: z.string().nullable().optional(),
    order: z.number().int().optional(),
    enabled: z.boolean().optional(),
  })
  .passthrough();

export type PillarPatchInput = z.infer<typeof PillarPatchSchema>;

export const PillarsReorderSchema = z.object({
  pillars: z.array(
    z.object({
      id: z.string(),
      type: z.enum(["personal", "business"]),
      name: z.string(),
      icon: z.string().optional(),
      color: z.string().optional(),
      agents: z.array(AgentBindingSchema),
      workflows: z.array(PillarWorkflowSchema),
      ceoAgentId: z.string().optional(),
      order: z.number().int(),
      enabled: z.boolean(),
    }),
  ),
});

export type PillarsReorderInput = z.infer<typeof PillarsReorderSchema>;

// ── Studio settings ───────────────────────────────────────────────────────────

export const StudioSettingsPutSchema = z
  .object({
    gateway: z
      .object({
        url: z.string(),
        token: z.string(),
      })
      .nullable()
      .optional(),
    focused: z
      .record(
        z.string(),
        z
          .object({
            mode: z.string().optional(),
            selectedAgentId: z.string().nullable().optional(),
            filter: z.string().optional(),
          })
          .nullable(),
      )
      .optional(),
    avatars: z
      .record(z.string(), z.record(z.string(), z.string().nullable()))
      .optional(),
  })
  .passthrough();

export type StudioSettingsPutInput = z.infer<typeof StudioSettingsPutSchema>;

// ── Persona builder ──────────────────────────────────────────────────────────

export const PersonaBuilderSchema = z.object({
  description: z
    .string()
    .min(1, "description is required")
    .transform((v) => v.trim()),
  feedback: z
    .string()
    .optional()
    .transform((v) => v?.trim()),
});

export type PersonaBuilderInput = z.infer<typeof PersonaBuilderSchema>;

// ── Skills execute ───────────────────────────────────────────────────────────

export const SkillExecuteSchema = z.object({
  skillPath: z.string().min(1, "skillPath is required"),
  commandName: z.string().min(1, "commandName is required"),
  parameters: z.record(z.string(), z.string()).optional(),
});

export type SkillExecuteInput = z.infer<typeof SkillExecuteSchema>;
