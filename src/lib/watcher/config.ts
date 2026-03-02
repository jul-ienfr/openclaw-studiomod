import fs from "fs";
import path from "path";
import crypto from "crypto";
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

export async function saveWatcherConfigLocked(config: Record<string, unknown>): Promise<void> {
  const lock = await acquireLock(CONFIG_PATH);
  try {
    const existing = loadWatcherConfig();
    const existingModels = (existing.models ?? []) as Array<Record<string, unknown>>;
    const newModels = (config.models ?? []) as Array<Record<string, unknown>>;
    config.models = processModelsForSave(newModels, existingModels);

    const dir = path.dirname(CONFIG_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), "utf-8");
  } finally {
    releaseLock(lock);
  }
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
