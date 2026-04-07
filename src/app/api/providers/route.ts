import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { resolveStateDir } from "@/lib/clawdbot/paths";
import { parseBody, parseQuery, isValidationError } from "@/lib/api/validation";
import {
  ProviderPatchSchema,
  ProviderDeleteQuerySchema,
} from "@/lib/api/schemas/providers";
import { createLogger } from "@/lib/logger";
import { withErrorHandler } from "@/lib/api/error-handler";
import { applyRateLimit, RATE_LIMITS } from "@/lib/rateLimit";

export const runtime = "nodejs";

const log = createLogger("api:providers");

// --- Helpers ---

type RawProviderConfig = {
  apiKey?: string | { source: string; provider?: string; id?: string };
  accessToken?: string | { source: string; provider?: string; id?: string };
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

function describeKey(key: unknown): string {
  if (!key) return "****";
  if (typeof key === "object") {
    const id = (key as { id?: string }).id;
    return id ? `[env:${id}]` : "[env]";
  }
  const s = String(key);
  // Template string like "${VAR_NAME}"
  const tmpl = s.match(/^\$\{(.+)\}$/);
  if (tmpl) return `[env:${tmpl[1]}]`;
  // Plain string — mask it
  return maskKey(s);
}

async function get_handler() {
  try {
    const config = readConfig();
    const modelsSection = (config.models ?? {}) as Record<string, unknown>;
    const rawProviders = (modelsSection.providers ?? {}) as Record<
      string,
      RawProviderConfig
    >;

    const providers = Object.entries(rawProviders).map(([id, conf]) => ({
      id,
      apiKey: conf.apiKey ? describeKey(conf.apiKey) : undefined,
      accessToken: conf.accessToken ? describeKey(conf.accessToken) : undefined,
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
    return NextResponse.json(
      { error: String(err), providers: [], fallbackChain: [] },
      { status: 500 },
    );
  }
}

async function patch_handler(request: Request) {
  const limited = applyRateLimit(request, RATE_LIMITS.providersWrite);
  if (limited) return limited;

  try {
    const parsed = await parseBody(request, ProviderPatchSchema);
    if (isValidationError(parsed)) return parsed;

    const { id, api, apiKey, accessToken, baseUrl, label } = parsed;

    const config = readConfig();
    const modelsSection = (config.models ?? {}) as Record<string, unknown>;
    const rawProviders = (modelsSection.providers ?? {}) as Record<
      string,
      RawProviderConfig
    >;

    const existing = rawProviders[id] ?? ({} as RawProviderConfig);

    if (api !== undefined) existing.api = api;
    if (label !== undefined) existing.label = label || undefined;
    if (apiKey !== undefined && apiKey !== "") existing.apiKey = apiKey;
    if (accessToken !== undefined && accessToken !== "")
      existing.accessToken = accessToken;
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
  const limited = applyRateLimit(request, RATE_LIMITS.providersWrite);
  if (limited) return limited;

  try {
    const url = new URL(request.url);
    const parsed = parseQuery(url, ProviderDeleteQuerySchema);
    if (isValidationError(parsed)) return parsed;

    const { id } = parsed;

    const config = readConfig();
    const modelsSection = (config.models ?? {}) as Record<string, unknown>;
    const rawProviders = (modelsSection.providers ?? {}) as Record<
      string,
      RawProviderConfig
    >;

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
