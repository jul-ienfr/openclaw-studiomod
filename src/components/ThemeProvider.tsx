import { readTheme } from "@/lib/theme/server";
import { ThemeColors } from "@/lib/theme";

function colorsToCSSVars(colors: ThemeColors): string {
  const lines: string[] = [];
  const camel2kebab = (s: string) =>
    s.replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`);
  for (const [key, value] of Object.entries(colors)) {
    lines.push(`  --${camel2kebab(key)}: ${value};`);
  }
  return lines.join("\n");
}

export async function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = await readTheme();

  const css = `
:root {
${colorsToCSSVars(theme.colors.light)}
  --radius: ${theme.spacing.radius};
  --radius-small: ${theme.spacing.radiusSmall};
  --nav-width: ${theme.spacing.navWidth};
  --font-size-base: ${theme.typography.fontSize};
  --line-height-base: ${theme.typography.lineHeight};
}
.dark {
${colorsToCSSVars(theme.colors.dark)}
}`.trim();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      {children}
    </>
  );
}
