import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { resolveStateDir } from "@/lib/clawdbot/paths";
import { withErrorHandler } from "@/lib/api/error-handler";
import { applyRateLimit, RATE_LIMITS } from "@/lib/rateLimit";
import { parseBody, isValidationError } from "@/lib/api/validation";
import { createConfigBackup } from "@/lib/config/backup";
import { z } from "zod";

export const runtime = "nodejs";

// ── Types ────────────────────────────────────────────────────────────────────

export type AvailableModel = {
  id: string; // "anthropic-proxy/claude-sonnet-4-6"
  name: string;
  provider: string;
};

export type AgentModelConfig = {
  id: string;
  name: string;
  primary: string | null;
  fallbacks: string[];
};

export type ModelsConfig = {
  availableModels: AvailableModel[];
  globalPrimary: string | null;
  globalFallbacks: string[];
  agents: AgentModelConfig[];
  tools: Array<{ id: string; primary: string | null; fallbacks: string[] }>;
};

// ── Helpers ──────────────────────────────────────────────────────────────────

function readConfig(): Record<string, unknown> {
  try {
    const p = path.join(resolveStateDir(), "openclaw.json");
    return JSON.parse(fs.readFileSync(p, "utf8")) as Record<string, unknown>;
  } catch {
    return {};
  }
}

function writeConfig(config: Record<string, unknown>) {
  const p = path.join(resolveStateDir(), "openclaw.json");
  fs.writeFileSync(p, JSON.stringify(config, null, 2), "utf8");
}

// Format agent ID as human-readable name
function agentIdToName(id: string): string {
  return id
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/\bceo\b/gi, "CEO")
    .replace(/\bdev\b/gi, "Dev")
    .replace(/\bops\b/gi, "Ops");
}

// Try to read agent name from SKILL.md frontmatter
function readAgentName(agentId: string): string {
  try {
    const skillPath = path.join(
      resolveStateDir(),
      "agents",
      agentId,
      "SKILL.md",
    );
    const content = fs.readFileSync(skillPath, "utf8");
    const match = content.match(/^name:\s*(.+)$/m);
    if (match?.[1]) return match[1].trim();
  } catch {
    // fallback
  }
  return agentIdToName(agentId);
}

// Get all agent IDs from the agents directory
function listAgentIds(): string[] {
  try {
    const agentsDir = path.join(resolveStateDir(), "agents");
    return fs.readdirSync(agentsDir).filter((d) => {
      try {
        return fs.statSync(path.join(agentsDir, d)).isDirectory();
      } catch {
        return false;
      }
    });
  } catch {
    return [];
  }
}

// ── GET ───────────────────────────────────────────────────────────────────────

async function get_handler(): Promise<NextResponse> {
  const config = readConfig();

  // ── Available models from multiple sources ──
  const availableModels: AvailableModel[] = [];
  const seenModelIds = new Set<string>();

  // Source 1: models.providers[providerId].models[]
  const modelsSection = (config.models ?? {}) as Record<string, unknown>;
  const rawProviders = (modelsSection.providers ?? {}) as Record<
    string,
    {
      models?: Array<{ id: string; name?: string }>;
    }
  >;

  for (const [providerId, providerConf] of Object.entries(rawProviders)) {
    if (!Array.isArray(providerConf.models)) continue;
    for (const m of providerConf.models) {
      if (!m.id) continue;
      const fullId = `${providerId}/${m.id}`;
      if (!seenModelIds.has(fullId)) {
        seenModelIds.add(fullId);
        availableModels.push({
          id: fullId,
          name: m.name ?? m.id,
          provider: providerId,
        });
      }
    }
  }

  // Source 2: agents.defaults.models (source of truth for actually used models)
  const agentsSection = (config.agents ?? {}) as Record<string, unknown>;
  const agentsDefaults = (agentsSection.defaults ?? {}) as Record<
    string,
    unknown
  >;
  const defaultModelsMap = (agentsDefaults.models ?? {}) as Record<
    string,
    unknown
  >;

  for (const modelId of Object.keys(defaultModelsMap)) {
    if (modelId && !seenModelIds.has(modelId)) {
      seenModelIds.add(modelId);
      // Extract provider and model name from ID (e.g., "google-antigravity/gemini-3.1-pro-high")
      const [provider, ...modelParts] = modelId.split("/");
      const shortName = modelParts.join("/") || modelId;
      const providerDisplay = provider || "unknown";
      // Format name with provider in parentheses for consistency
      const displayName = `${shortName} (${providerDisplay})`;
      availableModels.push({
        id: modelId,
        name: displayName,
        provider: providerDisplay,
      });
    }
  }

  // ── Global fallback chain (stored in agents.defaults.model) ──
  // (agentsSection and agentsDefaults already defined above)
  const defaultModel = agentsDefaults.model as
    | { primary?: string; fallbacks?: string[] }
    | string
    | null
    | undefined;
  let globalPrimary: string | null = null;
  let globalFallbacks: string[] = [];
  if (typeof defaultModel === "string") {
    globalPrimary = defaultModel;
  } else if (defaultModel && typeof defaultModel === "object") {
    globalPrimary = defaultModel.primary ?? null;
    globalFallbacks = defaultModel.fallbacks ?? [];
  }

  const agentsList = (agentsSection.list ?? []) as Array<{
    id?: string;
    model?: string | { primary?: string; fallbacks?: string[] };
  }>;

  // Build map of configured agents
  const configuredAgents = new Map<
    string,
    { primary: string | null; fallbacks: string[] }
  >();
  for (const entry of agentsList) {
    if (!entry.id) continue;
    if (typeof entry.model === "string") {
      configuredAgents.set(entry.id, { primary: entry.model, fallbacks: [] });
    } else if (entry.model && typeof entry.model === "object") {
      configuredAgents.set(entry.id, {
        primary: entry.model.primary ?? null,
        fallbacks: entry.model.fallbacks ?? [],
      });
    } else {
      configuredAgents.set(entry.id, { primary: null, fallbacks: [] });
    }
  }

  // Merge with agents discovered from disk
  const diskAgentIds = listAgentIds();
  const allAgentIds = new Set([
    ...diskAgentIds,
    ...Array.from(configuredAgents.keys()),
  ]);

  const agents: AgentModelConfig[] = Array.from(allAgentIds)
    .sort()
    .map((id) => {
      const cfg = configuredAgents.get(id) ?? { primary: null, fallbacks: [] };
      return {
        id,
        name: readAgentName(id),
        primary: cfg.primary,
        fallbacks: cfg.fallbacks,
      };
    });

  // ── Tools with model configuration ──
  const toolsSection = (config.tools ?? {}) as Record<string, unknown>;
  const toolsList = (toolsSection.list ?? []) as Array<{
    id?: string;
    model?: string | { primary?: string; fallbacks?: string[] };
  }>;

  const tools = toolsList
    .filter((t) => t.id)
    .map((t) => {
      let primary: string | null = null;
      let fallbacks: string[] = [];
      if (typeof t.model === "string") {
        primary = t.model;
      } else if (t.model && typeof t.model === "object") {
        primary = t.model.primary ?? null;
        fallbacks = t.model.fallbacks ?? [];
      }
      return { id: t.id!, primary, fallbacks };
    });

  return NextResponse.json({
    availableModels,
    globalPrimary,
    globalFallbacks,
    agents,
    tools,
  } satisfies ModelsConfig);
}

// ── PATCH ─────────────────────────────────────────────────────────────────────

const GlobalFallbackPatchSchema = z.object({
  primary: z.string().nullable(),
  fallbacks: z.array(z.string()),
});

async function patch_handler(request: Request): Promise<NextResponse> {
  const limited = applyRateLimit(request, RATE_LIMITS.configPatch);
  if (limited) return limited;

  const parsed = await parseBody(request, GlobalFallbackPatchSchema);
  if (isValidationError(parsed)) return parsed;

  const { primary, fallbacks } = parsed;

  const config = readConfig();
  // Write to agents.defaults.model (the gateway-valid location)
  const agentsSection = (config.agents ?? {}) as Record<string, unknown>;
  const agentsDefaults = (agentsSection.defaults ?? {}) as Record<
    string,
    unknown
  >;
  if (primary === null && fallbacks.length === 0) {
    delete agentsDefaults.model;
  } else {
    agentsDefaults.model =
      fallbacks.length > 0 ? { primary, fallbacks } : { primary };
  }
  agentsSection.defaults = agentsDefaults;
  config.agents = agentsSection;

  // Create backup before writing
  await createConfigBackup(config);

  writeConfig(config);

  return NextResponse.json({ ok: true });
}

export const GET = withErrorHandler(get_handler);
export const PATCH = withErrorHandler(patch_handler);
