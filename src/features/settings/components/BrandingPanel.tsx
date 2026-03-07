"use client";

import { useState, useEffect, useCallback } from "react";
import { Loader2, Save, ImageIcon } from "lucide-react";

interface BrandingConfig {
  appName: string;
  logoUrl?: string;
}

export function BrandingPanel() {
  const [config, setConfig] = useState<BrandingConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [appName, setAppName] = useState("");

  const fetchConfig = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/studio/theme");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const branding: BrandingConfig = {
        appName: data.appName ?? data.name ?? "OpenClaw Studio",
        logoUrl: data.logoUrl ?? data.logo ?? undefined,
      };
      setConfig(branding);
      setAppName(branding.appName);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load branding");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchConfig();
  }, [fetchConfig]);

  const handleSave = async () => {
    setSaving(true);
    setSaveMsg(null);
    try {
      const res = await fetch("/api/studio/theme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ appName }),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(
          (json as { error?: string }).error ?? `HTTP ${res.status}`,
        );
      }
      setSaveMsg("Saved");
      setTimeout(() => setSaveMsg(null), 3000);
    } catch (err) {
      setSaveMsg(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  if (loading && !config) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error && !config) {
    return (
      <div className="p-6">
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl space-y-6 p-6">
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Branding
        </h2>
        <p className="mt-1 text-xs text-muted-foreground">
          Customise the app name and logo shown in the sidebar and title bar.
        </p>
      </div>

      {/* App name */}
      <div className="space-y-2">
        <label
          htmlFor="branding-app-name"
          className="block text-xs font-medium text-muted-foreground"
        >
          Application name
        </label>
        <input
          id="branding-app-name"
          type="text"
          value={appName}
          onChange={(e) => setAppName(e.target.value)}
          className="w-full rounded-lg border border-border bg-surface-1 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="OpenClaw Studio"
        />
      </div>

      {/* Logo placeholder */}
      <div className="space-y-2">
        <label className="block text-xs font-medium text-muted-foreground">
          Logo
        </label>
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-dashed border-border bg-surface-1">
            {config?.logoUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={config.logoUrl}
                alt="Logo"
                className="h-12 w-12 rounded object-contain"
              />
            ) : (
              <ImageIcon
                className="h-6 w-6 text-muted-foreground/40"
                strokeWidth={1.5}
              />
            )}
          </div>
          <div className="text-xs text-muted-foreground">
            <p>Logo upload coming soon.</p>
            <p className="mt-0.5 text-[11px]">
              Recommended: 128x128px, PNG or SVG.
            </p>
          </div>
        </div>
      </div>

      {/* Save */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {saving ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Save className="h-4 w-4" />
          )}
          Save
        </button>
        {saveMsg && (
          <span
            className={`text-xs ${saveMsg === "Saved" ? "text-green-500" : "text-red-400"}`}
          >
            {saveMsg}
          </span>
        )}
      </div>
    </div>
  );
}
