import fs from "node:fs";
import path from "node:path";

import { resolveStateDir } from "@/lib/clawdbot/paths";
import {
  defaultStudioSettings,
  mergeStudioSettings,
  normalizeStudioSettings,
  type StudioSettings,
  type StudioSettingsPatch,
} from "@/lib/studio/settings";

const SETTINGS_DIRNAME = "openclaw-studio";
const SETTINGS_FILENAME = "settings.json";
const OPENCLAW_CONFIG_FILENAME = "openclaw.json";

export const resolveStudioSettingsPath = () =>
  path.join(resolveStateDir(), SETTINGS_DIRNAME, SETTINGS_FILENAME);

const isRecord = (value: unknown): value is Record<string, unknown> =>
  Boolean(value && typeof value === "object");

const resolveEnvRef = (value: string): string => {
  const match = value.match(/^\$\{(.+)\}$/);
  if (!match) return value;
  const varName = match[1];
  // Try process.env first
  if (process.env[varName]) return process.env[varName]!;
  // Try reading from .env file next to openclaw.json
  try {
    const envPath = path.join(resolveStateDir(), ".env");
    if (!fs.existsSync(envPath)) return value;
    const envRaw = fs.readFileSync(envPath, "utf8");
    for (const line of envRaw.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eqIdx = trimmed.indexOf("=");
      if (eqIdx === -1) continue;
      if (trimmed.slice(0, eqIdx).trim() === varName) {
        return trimmed.slice(eqIdx + 1).trim();
      }
    }
  } catch {}
  return value;
};

const DEFAULT_GATEWAY_WS_PORT = 18789;

const readOpenclawGatewayDefaults = (): {
  url: string;
  token: string;
} | null => {
  try {
    const configPath = path.join(resolveStateDir(), OPENCLAW_CONFIG_FILENAME);
    if (!fs.existsSync(configPath)) return null;
    const raw = fs.readFileSync(configPath, "utf8");
    const parsed = JSON.parse(raw) as unknown;
    if (!isRecord(parsed)) return null;
    const gateway = isRecord(parsed.gateway) ? parsed.gateway : null;
    if (!gateway) return null;
    const auth = isRecord(gateway.auth) ? gateway.auth : null;
    let token = typeof auth?.token === "string" ? auth.token.trim() : "";
    if (token) token = resolveEnvRef(token);
    const port =
      typeof gateway.port === "number" && Number.isFinite(gateway.port)
        ? gateway.port
        : DEFAULT_GATEWAY_WS_PORT;
    if (!token || token.startsWith("${")) return null;
    // Use 127.0.0.1 instead of localhost — the proxy connects server-side
    const url = `ws://127.0.0.1:${port}`;
    return { url, token };
  } catch {
    return null;
  }
};

export const loadLocalGatewayDefaults = () => {
  return readOpenclawGatewayDefaults();
};

export const loadStudioSettings = (): StudioSettings => {
  const settingsPath = resolveStudioSettingsPath();
  if (!fs.existsSync(settingsPath)) {
    const defaults = defaultStudioSettings();
    const gateway = loadLocalGatewayDefaults();
    return gateway ? { ...defaults, gateway } : defaults;
  }
  const raw = fs.readFileSync(settingsPath, "utf8");
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    // Corrupted settings file — fall back to defaults
    const defaults = defaultStudioSettings();
    const gateway = loadLocalGatewayDefaults();
    return gateway ? { ...defaults, gateway } : defaults;
  }
  const settings = normalizeStudioSettings(parsed);
  // Toujours préférer le token live du gateway local (openclaw.json)
  // car le gateway peut régénérer son token au redémarrage
  const gateway = loadLocalGatewayDefaults();
  if (gateway) {
    return {
      ...settings,
      gateway: {
        url: settings.gateway?.url?.trim() || gateway.url,
        token: gateway.token,
      },
    };
  }
  return settings;
};

export const saveStudioSettings = (next: StudioSettings) => {
  const settingsPath = resolveStudioSettingsPath();
  const dir = path.dirname(settingsPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), "utf8");
};

export const applyStudioSettingsPatch = (
  patch: StudioSettingsPatch,
): StudioSettings => {
  const current = loadStudioSettings();
  const next = mergeStudioSettings(current, patch);
  saveStudioSettings(next);
  return next;
};
