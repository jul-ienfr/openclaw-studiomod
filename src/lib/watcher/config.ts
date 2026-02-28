import fs from "fs";
import path from "path";

const CONFIG_PATH = process.env.WATCHER_CONFIG_PATH
  ?? path.join(process.env.HOME ?? "/home/jul", ".openclaw/skills/openclaw-watcher/config/defaults.json");

export function loadWatcherConfig(): Record<string, unknown> {
  try {
    const raw = fs.readFileSync(CONFIG_PATH, "utf-8");
    return JSON.parse(raw);
  } catch {
    return {};
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
