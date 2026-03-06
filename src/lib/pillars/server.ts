import { promises as fs } from "fs";
import path from "path";
import { PillarsConfig, DEFAULT_PILLARS } from "./index";
import { resolveStateDir } from "@/lib/clawdbot/paths";

export function getPillarsPath(): string {
  return path.join(resolveStateDir(), "studio", "pillars.json");
}

export async function readPillars(): Promise<PillarsConfig> {
  const pillarsPath = getPillarsPath();
  try {
    const content = await fs.readFile(pillarsPath, "utf-8");
    return { ...DEFAULT_PILLARS, ...JSON.parse(content) };
  } catch {
    return DEFAULT_PILLARS;
  }
}

export async function writePillars(config: PillarsConfig): Promise<void> {
  const pillarsPath = getPillarsPath();
  await fs.mkdir(path.dirname(pillarsPath), { recursive: true });
  await fs.writeFile(pillarsPath, JSON.stringify(config, null, 2), "utf-8");
}
