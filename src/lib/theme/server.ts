import { promises as fs } from "fs";
import path from "path";
import { ThemeConfig, DEFAULT_THEME, DEFAULT_LAYOUT } from "./index";
import { resolveStateDir } from "@/lib/clawdbot/paths";

export function getThemePath(): string {
  return path.join(resolveStateDir(), "studio", "theme.json");
}

export async function readTheme(): Promise<ThemeConfig> {
  const themePath = getThemePath();
  try {
    const content = await fs.readFile(themePath, "utf-8");
    const raw = JSON.parse(content) as Partial<ThemeConfig>;
    const merged: ThemeConfig = {
      ...DEFAULT_THEME,
      ...raw,
      colors: {
        light: {
          ...DEFAULT_THEME.colors.light,
          ...(raw.colors?.light ?? {}),
        },
        dark: { ...DEFAULT_THEME.colors.dark, ...(raw.colors?.dark ?? {}) },
      },
      layout: {
        ...DEFAULT_LAYOUT,
        ...(raw.layout ?? {}),
      },
    };

    // v1 → v2 migration
    if (raw.version === "1" || !raw.version) {
      merged.version = "2";
      merged.layout = merged.layout ?? DEFAULT_LAYOUT;
      merged.category = merged.category ?? "classic";
    }

    return merged;
  } catch {
    return DEFAULT_THEME;
  }
}

export async function writeTheme(theme: ThemeConfig): Promise<void> {
  const themePath = getThemePath();
  await fs.mkdir(path.dirname(themePath), { recursive: true });
  await fs.writeFile(themePath, JSON.stringify(theme, null, 2), "utf-8");
}
