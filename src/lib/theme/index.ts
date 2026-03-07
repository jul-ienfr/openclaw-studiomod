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

export type ThemeLayout = {
  sidebarStyle: "glass" | "solid" | "minimal";
  cardStyle: "glass" | "elevated" | "flat" | "bordered";
  headerStyle: "transparent" | "solid" | "glass";
};

export type ThemeBranding = {
  appName: string;
  logoUrl: string | null;
};

export type ThemeConfig = {
  version: "1" | "2";
  name: string;
  preset: string;
  category?: "classic" | "premium";
  colors: {
    light: ThemeColors;
    dark: ThemeColors;
  };
  typography: ThemeTypography;
  spacing: ThemeSpacing;
  layout: ThemeLayout;
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

export const DEFAULT_LAYOUT: ThemeLayout = {
  sidebarStyle: "glass",
  cardStyle: "elevated",
  headerStyle: "transparent",
};

export const DEFAULT_THEME: ThemeConfig = {
  version: "2",
  name: "Default",
  preset: "default",
  category: "classic",
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
  layout: DEFAULT_LAYOUT,
  branding: {
    appName: "OpenClaw Studio",
    logoUrl: null,
  },
};

export const THEME_PRESETS: ThemeConfig[] = [
  // ── Classic presets ──
  DEFAULT_THEME,
  {
    ...DEFAULT_THEME,
    name: "Ocean Blue",
    preset: "ocean",
    category: "classic",
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
    category: "classic",
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
    category: "classic",
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
    category: "classic",
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

  // ── Premium presets ──
  {
    ...DEFAULT_THEME,
    name: "Glassmorphism",
    preset: "glassmorphism",
    category: "premium",
    colors: {
      light: {
        ...DEFAULT_LIGHT_COLORS,
        primary: "oklch(0.55 0.12 250)",
        background: "#f0f4ff",
        sidebar: "rgba(255,255,255,0.6)",
      },
      dark: {
        ...DEFAULT_DARK_COLORS,
        primary: "#60a5fa",
        background: "#050a15",
        sidebar: "rgba(15,25,40,0.8)",
        ring: "#60a5fa",
      },
    },
    layout: {
      sidebarStyle: "glass",
      cardStyle: "glass",
      headerStyle: "glass",
    },
  },
  {
    ...DEFAULT_THEME,
    name: "Cyberpunk",
    preset: "cyberpunk",
    category: "premium",
    colors: {
      light: {
        ...DEFAULT_LIGHT_COLORS,
        primary: "oklch(0.65 0.28 330)",
        background: "#faf0ff",
      },
      dark: {
        ...DEFAULT_DARK_COLORS,
        primary: "#ff00ff",
        background: "#0a0010",
        sidebar: "#120020",
        accent: "#00ffff",
        ring: "#ff00ff",
      },
    },
    layout: {
      sidebarStyle: "glass",
      cardStyle: "bordered",
      headerStyle: "solid",
    },
  },
  {
    ...DEFAULT_THEME,
    name: "Sunset",
    preset: "sunset",
    category: "premium",
    colors: {
      light: {
        ...DEFAULT_LIGHT_COLORS,
        primary: "oklch(0.58 0.18 30)",
        background: "#fff8f0",
      },
      dark: {
        ...DEFAULT_DARK_COLORS,
        primary: "#ff7b54",
        background: "#120e0a",
        sidebar: "#1a140e",
        ring: "#ff7b54",
      },
    },
    layout: {
      sidebarStyle: "glass",
      cardStyle: "elevated",
      headerStyle: "transparent",
    },
  },
  {
    ...DEFAULT_THEME,
    name: "Forest",
    preset: "forest",
    category: "premium",
    colors: {
      light: {
        ...DEFAULT_LIGHT_COLORS,
        primary: "oklch(0.50 0.12 150)",
        background: "#f0faf0",
      },
      dark: {
        ...DEFAULT_DARK_COLORS,
        primary: "#4ade80",
        background: "#060f06",
        sidebar: "#0a150a",
        ring: "#4ade80",
      },
    },
    layout: {
      sidebarStyle: "glass",
      cardStyle: "elevated",
      headerStyle: "transparent",
    },
  },
  {
    ...DEFAULT_THEME,
    name: "Midnight",
    preset: "midnight",
    category: "premium",
    colors: {
      light: {
        ...DEFAULT_LIGHT_COLORS,
        primary: "oklch(0.45 0.15 270)",
        background: "#f0f0ff",
      },
      dark: {
        ...DEFAULT_DARK_COLORS,
        primary: "#818cf8",
        background: "#050510",
        sidebar: "#0a0a18",
        ring: "#818cf8",
      },
    },
    layout: {
      sidebarStyle: "solid",
      cardStyle: "elevated",
      headerStyle: "transparent",
    },
  },
  {
    ...DEFAULT_THEME,
    name: "Lavender",
    preset: "lavender",
    category: "premium",
    colors: {
      light: {
        ...DEFAULT_LIGHT_COLORS,
        primary: "oklch(0.55 0.10 300)",
        background: "#faf0ff",
      },
      dark: {
        ...DEFAULT_DARK_COLORS,
        primary: "#c084fc",
        background: "#0e0818",
        sidebar: "#140c20",
        ring: "#c084fc",
      },
    },
    layout: {
      sidebarStyle: "glass",
      cardStyle: "elevated",
      headerStyle: "transparent",
    },
  },
  {
    ...DEFAULT_THEME,
    name: "Arctic",
    preset: "arctic",
    category: "premium",
    colors: {
      light: {
        ...DEFAULT_LIGHT_COLORS,
        primary: "oklch(0.55 0.08 210)",
        background: "#f0faff",
      },
      dark: {
        ...DEFAULT_DARK_COLORS,
        primary: "#67e8f9",
        background: "#040e14",
        sidebar: "#08141c",
        ring: "#67e8f9",
      },
    },
    layout: {
      sidebarStyle: "minimal",
      cardStyle: "flat",
      headerStyle: "transparent",
    },
  },
  {
    ...DEFAULT_THEME,
    name: "Ember",
    preset: "ember",
    category: "premium",
    colors: {
      light: {
        ...DEFAULT_LIGHT_COLORS,
        primary: "oklch(0.55 0.20 40)",
        background: "#fff5f0",
      },
      dark: {
        ...DEFAULT_DARK_COLORS,
        primary: "#fb923c",
        background: "#140a04",
        sidebar: "#1c1008",
        ring: "#fb923c",
      },
    },
    layout: {
      sidebarStyle: "glass",
      cardStyle: "elevated",
      headerStyle: "transparent",
    },
  },
];
