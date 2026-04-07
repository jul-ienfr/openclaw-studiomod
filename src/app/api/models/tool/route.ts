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

const ToolModelPatchSchema = z.object({
  toolId: z.string().min(1),
  primary: z.string().nullable(),
  fallbacks: z.array(z.string()),
});

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

async function patch_handler(request: Request): Promise<NextResponse> {
  const limited = applyRateLimit(request, RATE_LIMITS.agentModel); // Same limit as agent models
  if (limited) return limited;

  const parsed = await parseBody(request, ToolModelPatchSchema);
  if (isValidationError(parsed)) return parsed;

  const { toolId, primary, fallbacks } = parsed;

  const config = readConfig();

  // Ensure tools section exists
  const toolsSection = (config.tools ?? {}) as Record<string, unknown>;
  const list = (toolsSection.list ?? []) as Record<string, unknown>[];

  const idx = list.findIndex((e) => e.id === toolId);

  if (primary === null && fallbacks.length === 0) {
    // Reset to default — remove model override entirely
    if (idx >= 0) {
      const entry = { ...list[idx] };
      delete entry.model;
      list[idx] = entry;
    }
  } else {
    const modelValue =
      fallbacks.length > 0 ? { primary, fallbacks } : { primary };

    if (idx >= 0) {
      list[idx] = { ...list[idx], model: modelValue };
    } else {
      list.push({ id: toolId, model: modelValue });
    }
  }

  toolsSection.list = list;
  config.tools = toolsSection;

  // Create backup before writing
  await createConfigBackup(config);

  writeConfig(config);

  return NextResponse.json({ ok: true });
}

export const PATCH = withErrorHandler(patch_handler);
