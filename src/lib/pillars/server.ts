import fs from "fs";
import path from "path";
import type { PillarsConfig } from "./index";
import { PillarsConfigSchema } from "./schemas";
import { resolveStateDir } from "@/lib/clawdbot/paths";

function getPillarsPath(): string {
  return path.join(resolveStateDir(), "studio", "pillars.json");
}

export function loadPillarsConfig(): PillarsConfig | null {
  const pillarsPath = getPillarsPath();
  try {
    if (!fs.existsSync(pillarsPath)) {
      return null;
    }
    const raw = fs.readFileSync(pillarsPath, "utf-8");
    const parsed = JSON.parse(raw) as unknown;
    const result = PillarsConfigSchema.safeParse(parsed);
    if (!result.success) {
      console.error("[pillars] Invalid pillars.json:", result.error.message);
      return null;
    }
    return result.data;
  } catch (err) {
    console.error("[pillars] Failed to load pillars.json:", err);
    return null;
  }
}

export function savePillarsConfig(config: PillarsConfig): void {
  const pillarsPath = getPillarsPath();
  const validated = PillarsConfigSchema.parse(config);
  const dir = path.dirname(pillarsPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(pillarsPath, JSON.stringify(validated, null, 2), "utf-8");
}

/**
 * One-shot migration: if pillars.json does not exist, create an empty config.
 * Idempotent — safe to call on every server startup.
 */
export function migratePillarsFromWorkflows(): void {
  const pillarsPath = getPillarsPath();
  if (fs.existsSync(pillarsPath)) {
    return;
  }

  const emptyConfig: PillarsConfig = {
    version: "1",
    pillars: [],
  };

  try {
    const validated = PillarsConfigSchema.parse(emptyConfig);
    const dir = path.dirname(pillarsPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(pillarsPath, JSON.stringify(validated, null, 2), "utf-8");
    console.info("[pillars] Initialized pillars.json at", pillarsPath);
  } catch (err) {
    console.error("[pillars] Failed to initialize pillars.json:", err);
  }
}
