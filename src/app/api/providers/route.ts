import { NextResponse } from "next/server";
import { z } from "zod";
import fs from "node:fs";
import path from "node:path";
import { resolveStateDir } from "@/lib/clawdbot/paths";
import { parseBody, parseQuery, isValidationError } from "@/lib/api/validation";
import { createLogger } from "@/lib/logger";
import { withErrorHandler } from "@/lib/api/error-handler";

export const runtime = "nodejs";

const log = createLogger("api:providers");

// --- Schemas ---

const ProviderPatchSchema = z.object({
  id: z.string().min(1, "id required"),
  api: z.string().optional(),
  apiKey: z.string().optional(),
  accessToken: z.string().optional(),
  baseUrl: z.string().optional(),
  label: z.string().optional(),
  enabled: z.boolean().optional(),
});

const ProviderDeleteQuerySchema = z.object({
  id: z.string().min(1, "id required"),
});

// --- Helpers ---

type RawProviderConfig = {
  apiKey?: string;
  accessToken?: string;
  baseUrl?: string;
  api?: string;
  models?: unknown[];
  label?: string;
  [key: string]: unknown;
};

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
  fs.writeFileSync(p, JSON.stringify(config, null, 4), "utf8");
}

function maskKey(key: string): string {
  if (!key || key.length <= 8) return "****";
  return key.slice(0, 4) + "****" + key.slice(-4);
}

async function get_handler() {
  try {
    const config = readConfig();
    const modelsSection = (config.models ?? {}) as Record<string, unknown>;
    const rawProviders = (modelsSection.providers ?? {}) as Record<string, RawProviderConfig>;

    const providers = Object.entries(rawProviders).map(([id, conf]) => ({
      id,
      apiKey: conf.apiKey ? maskKey(conf.apiKey) : undefined,
      accessToken: conf.accessToken ? maskKey(conf.accessToken) : undefined,
      baseUrl: conf.baseUrl,
      api: conf.api,
      label: conf.label as string | undefined,
      enabled: true,
    }));

    // Extract fallback chain from agents.defaults.models
    const agentsSection = (config.agents ?? {}) as Record<string, unknown>;
    const defaults = (agentsSection.defaults ?? {}) as Record<string, unknown>;
    const fallbackChain = (defaults.models ?? []) as string[];

    log.info("Listed providers", { count: providers.length });
    return NextResponse.json({ providers, fallbackChain });
  } catch (err) {
    log.error("Failed to list providers", { error: String(err) });
    return NextResponse.json({ error: String(err), providers: [], fallbackChain: [] }, { status: 500 });
  }
}

async function patch_handler(request: Request) {
  try {
    const parsed = await parseBody(request, ProviderPatchSchema);
    if (isValidationError(parsed)) return parsed;

    const { id, api, apiKey, accessToken, baseUrl, label } = parsed;

    const config = readConfig();
    const modelsSection = (config.models ?? {}) as Record<string, unknown>;
    const rawProviders = (modelsSection.providers ?? {}) as Record<string, RawProviderConfig>;

    const existing = rawProviders[id] ?? {} as RawProviderConfig;

    if (api !== undefined) existing.api = api;
    if (label !== undefined) existing.label = label || undefined;
    if (apiKey !== undefined && apiKey !== "") existing.apiKey = apiKey;
    if (accessToken !== undefined && accessToken !== "") existing.accessToken = accessToken;
    if (baseUrl !== undefined) existing.baseUrl = baseUrl || undefined;

    rawProviders[id] = existing;
    modelsSection.providers = rawProviders;
    config.models = modelsSection;
    writeConfig(config);

    log.info("Patched provider", { providerId: id });
    return NextResponse.json({ ok: true });
  } catch (err) {
    log.error("Failed to patch provider", { error: String(err) });
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

async function delete_handler(request: Request) {
  try {
    const url = new URL(request.url);
    const parsed = parseQuery(url, ProviderDeleteQuerySchema);
    if (isValidationError(parsed)) return parsed;

    const { id } = parsed;

    const config = readConfig();
    const modelsSection = (config.models ?? {}) as Record<string, unknown>;
    const rawProviders = (modelsSection.providers ?? {}) as Record<string, RawProviderConfig>;

    delete rawProviders[id];
    modelsSection.providers = rawProviders;
    config.models = modelsSection;
    writeConfig(config);

    log.info("Deleted provider", { providerId: id });
    return NextResponse.json({ ok: true });
  } catch (err) {
    log.error("Failed to delete provider", { error: String(err) });
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export const GET = withErrorHandler(get_handler);
export const PATCH = withErrorHandler(patch_handler);
export const DELETE = withErrorHandler(delete_handler);