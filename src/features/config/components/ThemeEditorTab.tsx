"use client";

import { useTheme } from "../hooks/useTheme";
import {
  THEME_PRESETS,
  ThemeConfig,
  ThemeColors,
  ThemeLayout,
} from "@/lib/theme";
import { LAYOUT_TEMPLATES, LayoutTemplateId } from "@/lib/theme/templates";
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
  const { theme, loading, saving, error, patchTheme, applyPreset } = useTheme();
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const [saved, setSaved] = useState(false);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error || !theme) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 py-16 text-center">
        <p className="text-sm text-destructive">
          {error ?? "Failed to load theme configuration"}
        </p>
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
    // Preserve current templateId when switching color presets
    await applyPreset({ ...preset, templateId: theme.templateId });
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
    window.location.reload();
  };

  const handleTemplateChange = async (templateId: LayoutTemplateId) => {
    await patchTheme({ templateId });
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
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
    <div className="space-y-8 max-w-3xl">
      {/* Preset selector */}
      <section>
        <h3 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Thèmes
        </h3>
        {(["classic", "premium"] as const).map((cat) => {
          const presets = THEME_PRESETS.filter(
            (p) => (p.category ?? "classic") === cat,
          );
          if (presets.length === 0) return null;
          return (
            <div key={cat} className="mb-6">
              <p className="mb-3 text-xs font-medium text-muted-foreground/70 uppercase tracking-wide">
                {cat === "classic" ? "Classic" : "Premium"}
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {presets.map((preset) => {
                  const d = preset.colors.dark;
                  const isActive = theme.preset === preset.preset;
                  return (
                    <button
                      key={preset.preset}
                      onClick={() => handlePreset(preset)}
                      disabled={saving}
                      className={`group relative flex flex-col overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                        isActive
                          ? "border-primary ring-2 ring-primary/30 scale-[1.02]"
                          : "border-border/50 hover:border-primary/40 hover:scale-[1.01]"
                      }`}
                    >
                      {/* Mini preview */}
                      <div
                        className="flex h-20 flex-col p-2"
                        style={{ backgroundColor: d.background }}
                      >
                        {/* Fake sidebar + content area */}
                        <div className="flex flex-1 gap-1.5 overflow-hidden rounded">
                          <div
                            className="w-4 shrink-0 rounded-sm"
                            style={{ backgroundColor: d.sidebar }}
                          >
                            <div
                              className="mx-auto mt-1.5 h-1 w-2 rounded-full"
                              style={{
                                backgroundColor: d.primary,
                                opacity: 0.8,
                              }}
                            />
                            <div
                              className="mx-auto mt-1 h-1 w-2 rounded-full"
                              style={{
                                backgroundColor: d.mutedForeground,
                                opacity: 0.3,
                              }}
                            />
                            <div
                              className="mx-auto mt-1 h-1 w-2 rounded-full"
                              style={{
                                backgroundColor: d.mutedForeground,
                                opacity: 0.3,
                              }}
                            />
                          </div>
                          <div className="flex flex-1 flex-col gap-1">
                            <div
                              className="h-2.5 w-3/4 rounded-sm"
                              style={{
                                backgroundColor: d.primary,
                                opacity: 0.7,
                              }}
                            />
                            <div className="flex gap-1">
                              <div
                                className="h-6 flex-1 rounded-sm"
                                style={{ backgroundColor: d.card }}
                              />
                              <div
                                className="h-6 flex-1 rounded-sm"
                                style={{ backgroundColor: d.card }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Color dots + name */}
                      <div className="flex items-center gap-2 px-2.5 py-2 bg-surface-1/50">
                        <div className="flex -space-x-1">
                          <span
                            className="h-3 w-3 rounded-full ring-1 ring-background"
                            style={{ backgroundColor: d.primary }}
                          />
                          <span
                            className="h-3 w-3 rounded-full ring-1 ring-background"
                            style={{ backgroundColor: d.background }}
                          />
                          <span
                            className="h-3 w-3 rounded-full ring-1 ring-background"
                            style={{ backgroundColor: d.sidebar }}
                          />
                        </div>
                        <span className="flex-1 truncate text-left text-xs font-medium">
                          {preset.name}
                        </span>
                        {isActive && (
                          <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      {/* Layout Template selector */}
      <section>
        <h3 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Layout Template
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {LAYOUT_TEMPLATES.filter((t) => t.category === "active").map(
            (tpl) => {
              const isActive = (theme.templateId ?? "default") === tpl.id;
              return (
                <button
                  key={tpl.id}
                  onClick={() => handleTemplateChange(tpl.id)}
                  disabled={saving}
                  className={`group relative flex flex-col overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                    isActive
                      ? "border-primary ring-2 ring-primary/30 scale-[1.02]"
                      : "border-border/50 hover:border-primary/40 hover:scale-[1.01]"
                  }`}
                >
                  {/* Template mini-preview */}
                  <div className="flex h-20 items-center justify-center bg-surface-1/50 p-2">
                    <TemplatePreview templateId={tpl.id} />
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-2">
                    <span className="flex-1 truncate text-left text-xs font-medium">
                      {tpl.name}
                    </span>
                    {isActive && (
                      <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                    )}
                  </div>
                </button>
              );
            },
          )}
        </div>
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
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
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
          <div className="flex flex-col gap-1">
            <label className="text-xs text-muted-foreground flex items-center gap-1.5">
              <Layout className="h-3 w-3" strokeWidth={1.75} />
              Arrondi
            </label>
            <select
              value={theme.layout.borderRadius}
              onChange={(e) =>
                handleLayoutChange("borderRadius", e.target.value)
              }
              className="rounded-lg border border-border bg-surface-1 px-3 py-2 text-sm"
            >
              <option value="sharp">Angulaire</option>
              <option value="rounded">Arrondi</option>
              <option value="pill">Pill</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-muted-foreground flex items-center gap-1.5">
              <Layout className="h-3 w-3" strokeWidth={1.75} />
              Densité
            </label>
            <select
              value={theme.layout.contentDensity}
              onChange={(e) =>
                handleLayoutChange("contentDensity", e.target.value)
              }
              className="rounded-lg border border-border bg-surface-1 px-3 py-2 text-sm"
            >
              <option value="compact">Compact</option>
              <option value="comfortable">Confortable</option>
              <option value="spacious">Spacieux</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-muted-foreground flex items-center gap-1.5">
              <Layout className="h-3 w-3" strokeWidth={1.75} />
              Ombres
            </label>
            <select
              value={theme.layout.shadowIntensity}
              onChange={(e) =>
                handleLayoutChange("shadowIntensity", e.target.value)
              }
              className="rounded-lg border border-border bg-surface-1 px-3 py-2 text-sm"
            >
              <option value="none">Aucune</option>
              <option value="subtle">Subtile</option>
              <option value="heavy">Forte</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-muted-foreground flex items-center gap-1.5">
              <Layout className="h-3 w-3" strokeWidth={1.75} />
              Animation
            </label>
            <select
              value={theme.layout.animationLevel}
              onChange={(e) =>
                handleLayoutChange("animationLevel", e.target.value)
              }
              className="rounded-lg border border-border bg-surface-1 px-3 py-2 text-sm"
            >
              <option value="none">Aucune</option>
              <option value="subtle">Subtile</option>
              <option value="full">Complète</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-muted-foreground flex items-center gap-1.5">
              <Palette className="h-3 w-3" strokeWidth={1.75} />
              Accents
            </label>
            <select
              value={theme.layout.accentStyle}
              onChange={(e) =>
                handleLayoutChange("accentStyle", e.target.value)
              }
              className="rounded-lg border border-border bg-surface-1 px-3 py-2 text-sm"
            >
              <option value="flat">Standard</option>
              <option value="glow">Glow</option>
              <option value="neon">Neon</option>
              <option value="gradient">Gradient</option>
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

/** Mini visual previews for each layout template */
function TemplatePreview({ templateId }: { templateId: LayoutTemplateId }) {
  const base = "w-full h-full flex gap-1";

  switch (templateId) {
    case "default":
      return (
        <div className={base}>
          <div className="w-3 shrink-0 rounded-sm bg-muted/60" />
          <div className="flex flex-1 flex-col gap-1">
            <div className="h-2 w-3/4 rounded-sm bg-muted/40" />
            <div className="flex flex-1 gap-1">
              <div className="flex-1 rounded-sm bg-muted/30" />
              <div className="flex-1 rounded-sm bg-muted/30" />
            </div>
          </div>
        </div>
      );
    case "bento":
      return (
        <div className="w-full h-full grid grid-cols-3 grid-rows-2 gap-1">
          <div className="col-span-2 rounded-[6px] bg-primary/15" />
          <div className="rounded-[6px] bg-primary/10" />
          <div className="rounded-[6px] bg-primary/10" />
          <div className="col-span-2 rounded-[6px] bg-primary/15" />
        </div>
      );
    case "glassmorphism":
      return (
        <div className="w-full h-full relative overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-ring/10 to-accent/15" />
          <div className="absolute inset-2 rounded-md border border-white/20 bg-white/10 backdrop-blur-sm" />
          <div className="absolute bottom-3 left-3 right-5 h-2 rounded bg-white/15" />
          <div className="absolute top-3 left-3 h-2 w-6 rounded bg-white/20" />
        </div>
      );
    case "neobrutalism":
      return (
        <div className="w-full h-full flex flex-col gap-1.5 p-0.5">
          <div className="h-3 w-2/3 rounded-[2px] border-2 border-foreground/60 bg-primary/20 shadow-[2px_2px_0_0] shadow-foreground/40" />
          <div className="flex flex-1 gap-1.5">
            <div className="flex-1 rounded-[2px] border-2 border-foreground/60 bg-muted/30 shadow-[2px_2px_0_0] shadow-foreground/40" />
            <div className="flex-1 rounded-[2px] border-2 border-foreground/60 bg-muted/30 shadow-[2px_2px_0_0] shadow-foreground/40" />
          </div>
        </div>
      );
    case "cinematic-dark":
      return (
        <div className="w-full h-full relative overflow-hidden rounded-lg bg-[#050508]">
          <div className="absolute top-1 left-1/2 -translate-x-1/2 h-6 w-10 rounded-full bg-primary/10 blur-md" />
          <div className="absolute inset-x-2 top-3 h-2 rounded bg-white/5 border border-white/5" />
          <div className="absolute inset-x-2 bottom-2 flex gap-1">
            <div className="flex-1 h-5 rounded bg-white/[0.03] border border-white/5" />
            <div className="flex-1 h-5 rounded bg-white/[0.03] border border-white/5" />
          </div>
        </div>
      );
    default:
      return (
        <div className={base}>
          <div className="flex-1 rounded bg-muted/20" />
        </div>
      );
  }
}
