const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const LEGACY_STATE_DIRNAMES = [".clawdbot", ".moltbot"];
const NEW_STATE_DIRNAME = ".openclaw";

const resolveUserPath = (input) => {
  const trimmed = String(input ?? "").trim();
  if (!trimmed) return trimmed;
  if (trimmed.startsWith("~")) {
    const expanded = trimmed.replace(/^~(?=$|[\\/])/, os.homedir());
    return path.resolve(expanded);
  }
  return path.resolve(trimmed);
};

const resolveDefaultHomeDir = () => {
  const home = os.homedir();
  if (home) {
    try {
      if (fs.existsSync(home)) return home;
    } catch {}
  }
  return os.tmpdir();
};

const resolveStateDir = (env = process.env) => {
  const override =
    env.OPENCLAW_STATE_DIR?.trim() ||
    env.MOLTBOT_STATE_DIR?.trim() ||
    env.CLAWDBOT_STATE_DIR?.trim();
  if (override) return resolveUserPath(override);

  const home = resolveDefaultHomeDir();
  const newDir = path.join(home, NEW_STATE_DIRNAME);
  const legacyDirs = LEGACY_STATE_DIRNAMES.map((dir) => path.join(home, dir));
  try {
    if (fs.existsSync(newDir)) return newDir;
  } catch {}
  for (const dir of legacyDirs) {
    try {
      if (fs.existsSync(dir)) return dir;
    } catch {}
  }
  return newDir;
};

const resolveStudioSettingsPath = (env = process.env) => {
  return path.join(resolveStateDir(env), "openclaw-studio-v2", "settings.json");
};

const readJsonFile = (filePath) => {
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
};

const DEFAULT_GATEWAY_URL = "ws://localhost:18789";
const OPENCLAW_CONFIG_FILENAME = "openclaw.json";

const isRecord = (value) => Boolean(value && typeof value === "object");

const resolveEnvRef = (value, env = process.env) => {
  const match = value.match(/^\$\{(.+)\}$/);
  if (!match) return value;
  const varName = match[1];
  if (env[varName]) return env[varName];
  try {
    const envPath = path.join(resolveStateDir(env), ".env");
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

const readOpenclawGatewayDefaults = (env = process.env) => {
  try {
    const stateDir = resolveStateDir(env);
    const configPath = path.join(stateDir, OPENCLAW_CONFIG_FILENAME);
    const parsed = readJsonFile(configPath);
    if (!isRecord(parsed)) return null;
    const gateway = isRecord(parsed.gateway) ? parsed.gateway : null;
    if (!gateway) return null;
    const auth = isRecord(gateway.auth) ? gateway.auth : null;
    let token = typeof auth?.token === "string" ? auth.token.trim() : "";
    if (token) token = resolveEnvRef(token, env);
    const port =
      typeof gateway.port === "number" && Number.isFinite(gateway.port) ? gateway.port : DEFAULT_GATEWAY_WS_PORT;
    if (!token || token.startsWith("${")) return null;
    const url = `ws://127.0.0.1:${port}`;
    return { url, token };
  } catch {
    return null;
  }
};

const loadUpstreamGatewaySettings = (env = process.env) => {
  const settingsPath = resolveStudioSettingsPath(env);
  const parsed = readJsonFile(settingsPath);
  const gateway = parsed && typeof parsed === "object" ? parsed.gateway : null;
  const url = typeof gateway?.url === "string" ? gateway.url.trim() : "";

  // Toujours préférer le token live de openclaw.json
  const defaults = readOpenclawGatewayDefaults(env);
  if (defaults) {
    return {
      url: url || defaults.url,
      token: defaults.token,
      settingsPath,
    };
  }

  const token = typeof gateway?.token === "string" ? gateway.token.trim() : "";
  return {
    url: url || DEFAULT_GATEWAY_URL,
    token,
    settingsPath,
  };
};

module.exports = {
  resolveStateDir,
  resolveStudioSettingsPath,
  loadUpstreamGatewaySettings,
};
