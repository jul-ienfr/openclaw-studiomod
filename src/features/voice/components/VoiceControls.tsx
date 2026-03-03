"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Mic, MicOff, Volume2, VolumeX, Settings2 } from "lucide-react";
import type { VoiceProvider } from "../types";
import { VOICE_PROVIDERS } from "../types";
import {
  initVoiceStore,
  getVoiceConfigs,
  upsertVoiceConfig,
  removeVoiceConfig,
  getVoiceSession,
  setVoiceSessionState,
} from "../voiceStore";

type VoiceControlsProps = {
  agentId?: string;
};

export const VoiceControls = ({ agentId = "default" }: VoiceControlsProps) => {
  const t = useTranslations("voice");
  const [showSettings, setShowSettings] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  // Initialize voice store once
  useEffect(() => {
    initVoiceStore();
  }, []);

  // Load initial config
  const loadedConfig = (() => {
    const configs = getVoiceConfigs();
    return configs.find((c) => c.agentId === agentId);
  })();

  // Config state with lazy initializers
  const [provider, setProvider] = useState<VoiceProvider>(
    () => loadedConfig?.provider ?? "browser",
  );
  const [language, setLanguage] = useState(
    () => loadedConfig?.language ?? "en-US",
  );
  const [speed, setSpeed] = useState(() => loadedConfig?.speed ?? 1.0);
  const [autoListen, setAutoListen] = useState(
    () => loadedConfig?.autoListen ?? false,
  );
  const [voiceId, setVoiceId] = useState(() => loadedConfig?.voiceId ?? "");

  // Reload config when agentId changes — use a single state object to avoid
  // multiple synchronous setState calls inside the effect.
  const [voiceConfig, setVoiceConfig] = useState(() => {
    const configs = getVoiceConfigs();
    const existing = configs.find((c) => c.agentId === agentId);
    return {
      provider: (existing?.provider ?? "browser") as VoiceProvider,
      language: existing?.language ?? "en-US",
      speed: existing?.speed ?? 1.0,
      autoListen: existing?.autoListen ?? false,
      voiceId: existing?.voiceId ?? "",
    };
  });

  useEffect(() => {
    const configs = getVoiceConfigs();
    const existing = configs.find((c) => c.agentId === agentId);
    if (existing) {
      setVoiceConfig({
        provider: existing.provider,
        language: existing.language,
        speed: existing.speed,
        autoListen: existing.autoListen,
        voiceId: existing.voiceId,
      });
    }
  }, [agentId]);

  const provider = voiceConfig.provider;
  const language = voiceConfig.language;
  const speed = voiceConfig.speed;
  const autoListen = voiceConfig.autoListen;
  const voiceId = voiceConfig.voiceId;
  const setProvider = (v: VoiceProvider) =>
    setVoiceConfig((s) => ({ ...s, provider: v }));
  const setLanguage = (v: string) =>
    setVoiceConfig((s) => ({ ...s, language: v }));
  const setSpeed = (v: number) => setVoiceConfig((s) => ({ ...s, speed: v }));
  const setAutoListen = (v: boolean) =>
    setVoiceConfig((s) => ({ ...s, autoListen: v }));
  const setVoiceId = (v: string) =>
    setVoiceConfig((s) => ({ ...s, voiceId: v }));

  const session = getVoiceSession(agentId);

  const selectedProvider = VOICE_PROVIDERS.find((p) => p.id === provider);
  const languages = selectedProvider?.languages ?? [];

  const handleProviderChange = (newProvider: VoiceProvider) => {
    setProvider(newProvider);
    const p = VOICE_PROVIDERS.find((x) => x.id === newProvider);
    if (p && !p.languages.includes(language)) {
      setLanguage(p.languages[0] ?? "en-US");
    }
  };

  const handleSave = useCallback(() => {
    upsertVoiceConfig({
      agentId,
      provider,
      enabled: true,
      voiceId,
      language,
      speed,
      pitch: 1.0,
      autoListen,
    });
    setShowSettings(false);
    setRefreshKey((k) => k + 1);
  }, [agentId, provider, voiceId, language, speed, autoListen]);

  const handleRemove = useCallback(() => {
    removeVoiceConfig(agentId);
    setRefreshKey((k) => k + 1);
  }, [agentId]);

  const toggleListening = useCallback(() => {
    const current = getVoiceSession(agentId).state;
    setVoiceSessionState(
      agentId,
      current === "listening" ? "idle" : "listening",
    );
    setRefreshKey((k) => k + 1);
  }, [agentId]);

  const toggleSpeaking = useCallback(() => {
    const current = getVoiceSession(agentId).state;
    setVoiceSessionState(agentId, current === "speaking" ? "idle" : "speaking");
    setRefreshKey((k) => k + 1);
  }, [agentId]);

  const isActive = session.state !== "idle";
  const isListening = session.state === "listening";
  const isSpeaking = session.state === "speaking";

  // Suppress unused warning — refreshKey used to trigger re-render
  void refreshKey;

  return (
    <div className="flex min-h-0 flex-1 flex-col" data-testid="voice-controls">
      <div className="flex items-center gap-2 border-b border-border px-5 py-3">
        <Volume2 className="h-4 w-4 text-primary" aria-hidden="true" />
        <h2 className="text-sm font-semibold text-foreground">{t("title")}</h2>
        {isActive && (
          <span className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            {t(
              session.state as "idle" | "listening" | "processing" | "speaking",
            )}
          </span>
        )}
        <button
          type="button"
          onClick={() => setShowSettings((v) => !v)}
          className="ml-auto ui-btn-icon xs"
          aria-label={t("settings")}
        >
          <Settings2 className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4">
        <p className="mb-4 text-xs text-muted-foreground">{t("description")}</p>

        {/* Control buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={toggleListening}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              isListening
                ? "bg-primary text-primary-foreground"
                : "bg-surface-2 text-foreground hover:bg-surface-3"
            }`}
          >
            {isListening ? (
              <MicOff className="h-4 w-4" />
            ) : (
              <Mic className="h-4 w-4" />
            )}
            {isListening ? t("stopListening") : t("startListening")}
          </button>

          <button
            type="button"
            onClick={toggleSpeaking}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              isSpeaking
                ? "bg-primary text-primary-foreground"
                : "bg-surface-2 text-foreground hover:bg-surface-3"
            }`}
          >
            {isSpeaking ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
            {isSpeaking ? t("stopSpeaking") : t("speak")}
          </button>
        </div>

        {/* Current config summary */}
        <div className="mt-4 rounded-lg bg-surface-2 px-3 py-2 text-[11px] text-muted-foreground">
          {t("providerLabel")}:{" "}
          <span className="text-foreground">
            {selectedProvider?.label ?? provider}
          </span>
          {" · "}
          {t("languageLabel")}:{" "}
          <span className="text-foreground">{language}</span>
          {" · "}
          {t("speedLabel")}: <span className="text-foreground">{speed}x</span>
          {" · "}
          {t("autoListen")}:{" "}
          <span className="text-foreground">{autoListen ? "On" : "Off"}</span>
        </div>

        {/* Settings panel */}
        {showSettings && (
          <div className="mt-4 space-y-4 rounded-lg border border-border bg-surface-2/50 p-4">
            <h3 className="text-xs font-semibold text-foreground">
              {t("settings")}
            </h3>

            {/* Provider */}
            <div className="space-y-1">
              <label className="text-[11px] font-medium text-muted-foreground">
                {t("providerLabel")}
              </label>
              <select
                value={provider}
                onChange={(e) =>
                  handleProviderChange(e.target.value as VoiceProvider)
                }
                className="ui-input w-full text-xs"
              >
                {VOICE_PROVIDERS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Language */}
            <div className="space-y-1">
              <label className="text-[11px] font-medium text-muted-foreground">
                {t("languageLabel")}
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="ui-input w-full text-xs"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>

            {/* Voice ID */}
            <div className="space-y-1">
              <label className="text-[11px] font-medium text-muted-foreground">
                Voice ID
              </label>
              <input
                type="text"
                value={voiceId}
                onChange={(e) => setVoiceId(e.target.value)}
                placeholder="Voice ID (optional)"
                className="ui-input w-full text-xs"
              />
            </div>

            {/* Speed */}
            <div className="space-y-1">
              <label className="text-[11px] font-medium text-muted-foreground">
                {t("speedLabel")}: {speed.toFixed(1)}x
              </label>
              <input
                type="range"
                min={0.5}
                max={2.0}
                step={0.1}
                value={speed}
                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Auto-listen */}
            <label className="flex cursor-pointer items-center gap-2 text-xs text-foreground">
              <input
                type="checkbox"
                checked={autoListen}
                onChange={(e) => setAutoListen(e.target.checked)}
                className="h-3.5 w-3.5"
              />
              {t("autoListen")}
            </label>

            {/* Actions */}
            <div className="flex gap-2 pt-1">
              <button
                type="button"
                onClick={handleSave}
                className="ui-btn-primary flex-1 py-1.5 text-xs"
              >
                {t("save")}
              </button>
              <button
                type="button"
                onClick={() => setShowSettings(false)}
                className="ui-btn-secondary flex-1 py-1.5 text-xs"
              >
                {t("cancel")}
              </button>
              <button
                type="button"
                onClick={handleRemove}
                className="ui-btn-icon xs text-destructive"
                aria-label={t("remove")}
              >
                {t("remove")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
