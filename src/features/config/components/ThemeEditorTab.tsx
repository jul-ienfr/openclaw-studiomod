"use client";

import { useTheme } from "../hooks/useTheme";
import {
  THEME_PRESETS,
  ThemeConfig,
  ThemeColors,
  ThemeLayout,
} from "@/lib/theme";
import { Loader2, Check, Palette, Layout } from "lucide-react";
import { useState } from "react";

const COLOR_FIELDS: { key: keyof ThemeColors; label: string }[] = [
  { key: "primary", label: "Primaire" },
  { key: "background", label: "Arrière-plan" },
  { key: "foreground", label: "Texte principal" },
  { key: "card", label: "Cartes" },
  { key: "sidebar", label: "Sidebar" },
  { key: "muted", label: "Atténué" },
  { key: "mutedForeground", label: "Texte atténué" },
  { key: "border", label: "Bordures" },
  { key: "destructive", label: "Danger" },
];

function isSimpleColor(value: string): boolean {
  return /^#[0-9a-fA-F]{3,8}$/.test(value.trim()) || /^rgb/.test(value.trim());
}

export function ThemeEditorTab() {
  const { theme, loading, saving, patchTheme, applyPreset } = useTheme();
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const [saved, setSaved] = useState(false);

  if (loading || !theme) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  const handleColorChange = async (key: keyof ThemeColors, value: string) => {
    await patchTheme({
      colors: {
        [mode]: { [key]: value },
        [mode === "light" ? "dark" : "light"]: {},
      } as ThemeConfig["colors"],
    });
  };

  const handlePreset = async (preset: ThemeConfig) => {
    await applyPreset(preset);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
    // Reload page to apply new theme vars
    window.location.reload();
  };

  const handleBrandingChange = async (
    key: keyof ThemeConfig["branding"],
    value: string,
  ) => {
    await patchTheme({ branding: { ...theme.branding, [key]: value } });
  };

  const handleLayoutChange = async (key: keyof ThemeLayout, value: string) => {
    await patchTheme({
      layout: { ...theme.layout, [key]: value } as ThemeLayout,
    });
  };

  const handleSave = async () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
    window.location.reload();
  };

  return (
    <div className="space-y-8 max-w-2xl">
      {/* Preset selector */}
      <section>
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Presets
        </h3>
        {(["classic", "premium"] as const).map((cat) => {
          const presets = THEME_PRESETS.filter(
            (p) => (p.category ?? "classic") === cat,
          );
          if (presets.length === 0) return null;
          return (
            <div key={cat} className="mb-4">
              <p className="mb-2 text-xs font-medium text-muted-foreground/70 uppercase tracking-wide">
                {cat === "classic" ? "Classic" : "Premium"}
              </p>
              <div className="flex flex-wrap gap-2">
                {presets.map((preset) => (
                  <button
                    key={preset.preset}
                    onClick={() => handlePreset(preset)}
                    disabled={saving}
                    className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm transition-colors ${
                      theme.preset === preset.preset
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: preset.colors.dark.primary }}
                    />
                    {preset.name}
                    {theme.preset === preset.preset && (
                      <Check className="h-3.5 w-3.5" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Color mode toggle */}
      <section>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Couleurs personnalisées
          </h3>
          <div className="flex rounded-lg border border-border">
            {(["light", "dark"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`px-3 py-1 text-xs font-medium transition-colors ${
                  mode === m
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                } ${m === "light" ? "rounded-l-md" : "rounded-r-md"}`}
              >
                {m === "light" ? "Clair" : "Sombre"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {COLOR_FIELDS.map(({ key, label }) => {
            const value = theme.colors[mode][key] ?? "";
            return (
              <div
                key={key}
                className="flex items-center gap-3 rounded-lg border border-border p-3"
              >
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <Palette
                    className="h-3.5 w-3.5 shrink-0 text-muted-foreground"
                    strokeWidth={1.75}
                  />
                  <label className="text-xs text-muted-foreground truncate">
                    {label}
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  {isSimpleColor(value) && (
                    <input
                      type="color"
                      value={value.startsWith("#") ? value : "#000000"}
                      onChange={(e) => handleColorChange(key, e.target.value)}
                      className="h-6 w-6 cursor-pointer rounded border-0 bg-transparent p-0"
                    />
                  )}
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => handleColorChange(key, e.target.value)}
                    className="w-32 rounded border border-border bg-surface-1 px-2 py-1 text-xs font-mono"
                    placeholder="oklch(...) / #hex / rgb(...)"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Layout */}
      <section>
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Mise en page
        </h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 max-w-lg">
          <div className="flex flex-col gap-1">
            <label className="text-xs text-muted-foreground flex items-center gap-1.5">
              <Layout className="h-3 w-3" strokeWidth={1.75} />
              Sidebar
            </label>
            <select
              value={theme.layout.sidebarStyle}
              onChange={(e) =>
                handleLayoutChange("sidebarStyle", e.target.value)
              }
              className="rounded-lg border border-border bg-surface-1 px-3 py-2 text-sm"
            >
              <option value="glass">Glass</option>
              <option value="solid">Solid</option>
              <option value="minimal">Minimal</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-muted-foreground flex items-center gap-1.5">
              <Layout className="h-3 w-3" strokeWidth={1.75} />
              Cartes
            </label>
            <select
              value={theme.layout.cardStyle}
              onChange={(e) => handleLayoutChange("cardStyle", e.target.value)}
              className="rounded-lg border border-border bg-surface-1 px-3 py-2 text-sm"
            >
              <option value="glass">Glass</option>
              <option value="elevated">Elevated</option>
              <option value="flat">Flat</option>
              <option value="bordered">Bordered</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-muted-foreground flex items-center gap-1.5">
              <Layout className="h-3 w-3" strokeWidth={1.75} />
              En-tete
            </label>
            <select
              value={theme.layout.headerStyle}
              onChange={(e) =>
                handleLayoutChange("headerStyle", e.target.value)
              }
              className="rounded-lg border border-border bg-surface-1 px-3 py-2 text-sm"
            >
              <option value="transparent">Transparent</option>
              <option value="solid">Solid</option>
              <option value="glass">Glass</option>
            </select>
          </div>
        </div>
      </section>

      {/* Branding */}
      <section>
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Branding
        </h3>
        <div className="space-y-3 max-w-sm">
          <div className="flex flex-col gap-1">
            <label className="text-xs text-muted-foreground">
              Nom de l&apos;application
            </label>
            <input
              type="text"
              value={theme.branding.appName}
              onChange={(e) => handleBrandingChange("appName", e.target.value)}
              className="rounded-lg border border-border bg-surface-1 px-3 py-2 text-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-muted-foreground">
              URL du logo (optionnel)
            </label>
            <input
              type="url"
              value={theme.branding.logoUrl ?? ""}
              onChange={(e) =>
                handleBrandingChange("logoUrl", e.target.value || "")
              }
              className="rounded-lg border border-border bg-surface-1 px-3 py-2 text-sm"
              placeholder="https://..."
            />
          </div>
        </div>
      </section>

      {/* Save button */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50"
        >
          {saving ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : saved ? (
            <Check className="h-4 w-4" />
          ) : null}
          {saved ? "Sauvegardé !" : "Appliquer le thème"}
        </button>
        <p className="text-xs text-muted-foreground">
          Les changements nécessitent un rechargement de la page pour
          s&apos;appliquer.
        </p>
      </div>
    </div>
  );
}
