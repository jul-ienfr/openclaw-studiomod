import { promises as fs } from "fs";
import path from "path";
import { ThemeConfig, DEFAULT_THEME } from "./index";
import { resolveStateDir } from "@/lib/clawdbot/paths";

export function getThemePath(): string {
  return path.join(resolveStateDir(), "studio", "theme.json");
}

export async function readTheme(): Promise<ThemeConfig> {
  const themePath = getThemePath();
  try {
    const content = await fs.readFile(themePath, "utf-8");
    const parsed = JSON.parse(content) as Partial<ThemeConfig>;
    return {
      ...DEFAULT_THEME,
      ...parsed,
      colors: {
        light: {
          ...DEFAULT_THEME.colors.light,
          ...(parsed.colors?.light ?? {}),
        },
        dark: { ...DEFAULT_THEME.colors.dark, ...(parsed.colors?.dark ?? {}) },
      },
    };
  } catch {
    return DEFAULT_THEME;
  }
}

export async function writeTheme(theme: ThemeConfig): Promise<void> {
  const themePath = getThemePath();
  await fs.mkdir(path.dirname(themePath), { recursive: true });
  await fs.writeFile(themePath, JSON.stringify(theme, null, 2), "utf-8");
}
