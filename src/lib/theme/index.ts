// Theme system — all design tokens, presets, and types for OpenClaw Studio
// Config file: ~/.openclaw/studio/theme.json (via OPENCLAW_STATE_DIR)

export type ThemeColors = {
  primary: string;
  primaryForeground: string;
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
  sidebar: string;
  sidebarBorder: string;
  sidebarForeground: string;
  surface1: string;
  surface2: string;
  surface3: string;
  neutralTint: string;
};

export type ThemeTypography = {
  fontSans: string;
  fontMono: string;
  fontDisplay: string;
  fontSize: string;
  lineHeight: string;
};

export type ThemeSpacing = {
  radius: string;
  radiusSmall: string;
  navWidth: string;
};

export type ThemeBranding = {
  appName: string;
  logoUrl: string | null;
};

export type ThemeConfig = {
  version: "1";
  name: string;
  preset: string;
  colors: {
    light: ThemeColors;
    dark: ThemeColors;
  };
  typography: ThemeTypography;
  spacing: ThemeSpacing;
  branding: ThemeBranding;
};

export const DEFAULT_DARK_COLORS: ThemeColors = {
  primary: "#22a8cc",
  primaryForeground: "#ffffff",
  background: "#0b1118",
  foreground: "rgb(246 250 255 / 0.97)",
  card: "#121a24",
  cardForeground: "rgb(246 250 255 / 0.97)",
  popover: "#121a24",
  popoverForeground: "rgb(246 250 255 / 0.97)",
  secondary: "rgb(255 255 255 / 0.06)",
  secondaryForeground: "rgb(246 250 255 / 0.97)",
  muted: "rgb(255 255 255 / 0.08)",
  mutedForeground: "rgb(108 132 160 / 0.9)",
  accent: "rgb(255 255 255 / 0.08)",
  accentForeground: "rgb(246 250 255 / 0.97)",
  destructive: "oklch(0.62 0.21 22)",
  destructiveForeground: "#ffffff",
  border: "rgb(255 255 255 / 0.08)",
  input: "rgb(255 255 255 / 0.08)",
  ring: "#22a8cc",
  sidebar: "#0f1721",
  sidebarBorder: "rgb(255 255 255 / 0.06)",
  sidebarForeground: "rgb(246 250 255 / 0.7)",
  surface1: "rgb(255 255 255 / 0.04)",
  surface2: "rgb(255 255 255 / 0.08)",
  surface3: "rgb(255 255 255 / 0.12)",
  neutralTint: "rgb(108 146 176)",
};

export const DEFAULT_LIGHT_COLORS: ThemeColors = {
  primary: "oklch(0.56 0.1 214)",
  primaryForeground: "#ffffff",
  background: "#f7f9fc",
  foreground: "rgb(27 33 43)",
  card: "#ffffff",
  cardForeground: "rgb(27 33 43)",
  popover: "#ffffff",
  popoverForeground: "rgb(27 33 43)",
  secondary: "rgb(0 0 0 / 0.04)",
  secondaryForeground: "rgb(27 33 43)",
  muted: "rgb(0 0 0 / 0.04)",
  mutedForeground: "rgb(90 110 135)",
  accent: "rgb(0 0 0 / 0.04)",
  accentForeground: "rgb(27 33 43)",
  destructive: "oklch(0.58 0.22 22)",
  destructiveForeground: "#ffffff",
  border: "rgb(0 0 0 / 0.08)",
  input: "rgb(0 0 0 / 0.08)",
  ring: "oklch(0.56 0.1 214)",
  sidebar: "rgb(255 255 255 / 0.92)",
  sidebarBorder: "rgb(0 0 0 / 0.08)",
  sidebarForeground: "rgb(27 33 43 / 0.7)",
  surface1: "rgb(0 0 0 / 0.02)",
  surface2: "rgb(0 0 0 / 0.04)",
  surface3: "rgb(0 0 0 / 0.06)",
  neutralTint: "rgb(90 132 154)",
};

export const DEFAULT_THEME: ThemeConfig = {
  version: "1",
  name: "Default",
  preset: "default",
  colors: {
    light: DEFAULT_LIGHT_COLORS,
    dark: DEFAULT_DARK_COLORS,
  },
  typography: {
    fontSans: "IBM Plex Sans",
    fontMono: "IBM Plex Mono",
    fontDisplay: "Bebas Neue",
    fontSize: "14px",
    lineHeight: "1.5",
  },
  spacing: {
    radius: "1rem",
    radiusSmall: "6px",
    navWidth: "56px",
  },
  branding: {
    appName: "OpenClaw Studio",
    logoUrl: null,
  },
};

export const THEME_PRESETS: ThemeConfig[] = [
  DEFAULT_THEME,
  {
    ...DEFAULT_THEME,
    name: "Ocean Blue",
    preset: "ocean",
    colors: {
      light: { ...DEFAULT_LIGHT_COLORS, primary: "oklch(0.55 0.15 230)" },
      dark: {
        ...DEFAULT_DARK_COLORS,
        primary: "#1e90ff",
        background: "#080e18",
        sidebar: "#0a1220",
        ring: "#1e90ff",
      },
    },
  },
  {
    ...DEFAULT_THEME,
    name: "Corporate",
    preset: "corporate",
    colors: {
      light: {
        ...DEFAULT_LIGHT_COLORS,
        primary: "oklch(0.45 0.08 270)",
        background: "#f5f5f5",
      },
      dark: {
        ...DEFAULT_DARK_COLORS,
        primary: "#7c5cbf",
        background: "#0e0e14",
        sidebar: "#12121c",
        ring: "#7c5cbf",
      },
    },
  },
  {
    ...DEFAULT_THEME,
    name: "Neon",
    preset: "neon",
    colors: {
      light: { ...DEFAULT_LIGHT_COLORS, primary: "oklch(0.60 0.25 140)" },
      dark: {
        ...DEFAULT_DARK_COLORS,
        primary: "#00ff9f",
        background: "#030712",
        sidebar: "#050a10",
        ring: "#00ff9f",
      },
    },
  },
  {
    ...DEFAULT_THEME,
    name: "Minimal",
    preset: "minimal",
    colors: {
      light: {
        ...DEFAULT_LIGHT_COLORS,
        primary: "oklch(0.30 0.00 0)",
        background: "#fafafa",
        sidebar: "#f0f0f0",
      },
      dark: {
        ...DEFAULT_DARK_COLORS,
        primary: "rgb(200 200 200)",
        background: "#111111",
        sidebar: "#161616",
        ring: "rgb(200 200 200)",
      },
    },
  },
];
