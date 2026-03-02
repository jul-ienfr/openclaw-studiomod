import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { resolveStateDir } from "@/lib/clawdbot/paths";

export const runtime = "nodejs";

type RawProviderConfig = {
  apiKey?: string;
  accessToken?: string;
  baseUrl?: string;
  api?: string;
  models?: unknown[];
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

export async function GET() {
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

    return NextResponse.json({ providers });
  } catch (err) {
    return NextResponse.json({ error: String(err), providers: [] }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json() as {
      id: string;
      api?: string;
      apiKey?: string;
      accessToken?: string;
      baseUrl?: string;
      label?: string;
      enabled?: boolean;
    };
    const { id, api, apiKey, accessToken, baseUrl, label } = body;

    if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

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

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

    const config = readConfig();
    const modelsSection = (config.models ?? {}) as Record<string, unknown>;
    const rawProviders = (modelsSection.providers ?? {}) as Record<string, RawProviderConfig>;

    delete rawProviders[id];
    modelsSection.providers = rawProviders;
    config.models = modelsSection;
    writeConfig(config);

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
