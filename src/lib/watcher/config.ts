import fs from "fs";
import path from "path";
import crypto from "crypto";
import { spawn } from "child_process";
import { acquireLock, releaseLock } from "@/features/watcher/operations/configLock";

const CONFIG_PATH = process.env.WATCHER_CONFIG_PATH
  ?? path.join(process.env.HOME ?? "/home/jul", ".openclaw/skills/openclaw-watcher/config/defaults.json");

const ENCRYPTION_KEY = process.env.WATCHER_API_TOKEN ?? "dev-key-change-me";

// ─── Encryption helpers (AES-256-GCM + PBKDF2) ───

function deriveKey(password: string): Buffer {
  return crypto.pbkdf2Sync(password, "watcher-salt-v1", 100_000, 32, "sha256");
}

export function encryptApiKey(plaintext: string): string {
  const key = deriveKey(ENCRYPTION_KEY);
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
  const enc = Buffer.concat([cipher.update(plaintext, "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();
  return `enc:${iv.toString("hex")}:${tag.toString("hex")}:${enc.toString("hex")}`;
}

export function decryptApiKey(ciphertext: string): string {
  if (!ciphertext.startsWith("enc:")) return ciphertext;
  const [, ivHex, tagHex, encHex] = ciphertext.split(":");
  const key = deriveKey(ENCRYPTION_KEY);
  const iv = Buffer.from(ivHex, "hex");
  const tag = Buffer.from(tagHex, "hex");
  const encData = Buffer.from(encHex, "hex");
  const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);
  decipher.setAuthTag(tag);
  return decipher.update(encData).toString("utf8") + decipher.final("utf8");
}

export function maskApiKey(key: string | undefined): string | undefined {
  if (!key) return key;
  // If it's already masked (returned by a previous GET), keep as-is
  if (key.endsWith("***")) return key;
  // If encrypted, mask
  if (key.startsWith("enc:")) {
    try {
      const plain = decryptApiKey(key);
      if (plain.length <= 8) return "***";
      return `${plain.slice(0, 7)}...***`;
    } catch {
      return "***";
    }
  }
  return key.length <= 8 ? "***" : `${key.slice(0, 7)}...***`;
}

// ─── Config I/O ───

export function loadWatcherConfig(): Record<string, unknown> {
  try {
    const raw = fs.readFileSync(CONFIG_PATH, "utf-8");
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export function loadWatcherConfigMasked(): Record<string, unknown> {
  const config = loadWatcherConfig();
  const models = (config.models ?? []) as Array<Record<string, unknown>>;
  config.models = models.map((m) => ({
    ...m,
    api_key: maskApiKey(m.api_key as string | undefined),
  }));
  return config;
}

function processModelsForSave(
  newModels: Array<Record<string, unknown>>,
  existing: Array<Record<string, unknown>>
): Array<Record<string, unknown>> {
  return newModels.map((m) => {
    const existingModel = existing.find((e) => e.id === m.id);
    const newKey = m.api_key as string | undefined;

    if (!newKey || newKey.endsWith("***")) {
      // Keep existing encrypted key
      return { ...m, api_key: existingModel?.api_key ?? undefined };
    }
    if (newKey.startsWith("enc:")) {
      return { ...m, api_key: newKey };
    }
    // Encrypt new plaintext key
    return { ...m, api_key: encryptApiKey(newKey) };
  });
}

function deepMerge(base: Record<string, unknown>, patch: Record<string, unknown>): Record<string, unknown> {
  const result = { ...base };
  for (const key of Object.keys(patch)) {
    const bv = base[key];
    const pv = patch[key];
    if (pv !== null && typeof pv === "object" && !Array.isArray(pv) &&
        bv !== null && typeof bv === "object" && !Array.isArray(bv)) {
      result[key] = deepMerge(bv as Record<string, unknown>, pv as Record<string, unknown>);
    } else {
      result[key] = pv;
    }
  }
  return result;
}

export async function saveWatcherConfigLocked(patch: Record<string, unknown>): Promise<void> {
  const lock = await acquireLock(CONFIG_PATH);
  try {
    // Deep-merge avec la config existante pour ne pas écraser les sections non envoyées
    const existing = loadWatcherConfig();
    const merged = deepMerge(existing, patch);

    // Traitement spécial des modèles (gestion des clés API chiffrées)
    const existingModels = (existing.models ?? []) as Array<Record<string, unknown>>;
    const newModels = (merged.models ?? []) as Array<Record<string, unknown>>;
    merged.models = processModelsForSave(newModels, existingModels);

    const dir = path.dirname(CONFIG_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(merged, null, 2), "utf-8");

    // Apply LLM provider to skills if changed
    const oldProvider = (existing.security as Record<string, unknown> | undefined)?.llm_proxy_provider as string | undefined;
    const newProvider = (merged.security as Record<string, unknown> | undefined)?.llm_proxy_provider as string | undefined;
    if (newProvider && newProvider !== oldProvider) {
      applyLlmProviderToSkills(newProvider);
    }
  } finally {
    releaseLock(lock);
  }
}

function applyLlmProviderToSkills(provider: string): void {
  const scriptPath = path.join(
    process.env.HOME ?? "/home/jul",
    ".openclaw/skills/openclaw-watcher/scripts/apply_llm_provider.py"
  );
  if (!fs.existsSync(scriptPath)) {
    console.warn(`[watcher/config] apply_llm_provider.py not found at ${scriptPath}`);
    return;
  }
  const child = spawn("python3", [scriptPath, "--provider", provider], {
    stdio: "pipe",
    detached: true,
  });
  child.stdout?.on("data", (data: Buffer) => {
    console.log(`[llm-provider] ${data.toString().trim()}`);
  });
  child.stderr?.on("data", (data: Buffer) => {
    console.error(`[llm-provider] ${data.toString().trim()}`);
  });
  child.on("error", (err: Error) => {
    console.error(`[llm-provider] Failed to run apply_llm_provider.py: ${err.message}`);
  });
  child.unref();
}

export function saveWatcherConfig(config: Record<string, unknown>): void {
  const dir = path.dirname(CONFIG_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), "utf-8");
}

export function getConfigPath(): string {
  return CONFIG_PATH;
}
