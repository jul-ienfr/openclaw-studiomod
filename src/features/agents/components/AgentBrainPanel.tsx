"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";

import type { AgentState } from "@/features/agents/state/store";
import type { GatewayClient } from "@/lib/gateway/GatewayClient";
import {
  readGatewayAgentFile,
  writeGatewayAgentFile,
} from "@/lib/gateway/agentFiles";
import {
  AGENT_FILE_NAMES,
  type AgentFileName,
  createAgentFilesState,
  isAgentFileName,
} from "@/lib/agents/agentFiles";
import {
  parsePersonalityFiles,
  serializePersonalityFiles,
} from "@/lib/agents/personalityBuilder";
import type { PersonalityBuilderDraft } from "@/lib/agents/personalityBuilder";
import { BrainPanelStructured } from "./brain/BrainPanelStructured";
import { BrainPanelToggle } from "./brain/BrainPanelToggle";
import { MarkdownEditor } from "./brain/MarkdownEditor";
import { PersonaValidationBanner } from "./brain/PersonaValidationBanner";

type AgentFilesState = ReturnType<typeof createAgentFilesState>;

type UseAgentFilesEditorResult = {
  agentFiles: AgentFilesState;
  agentFilesLoading: boolean;
  agentFilesSaving: boolean;
  agentFilesDirty: boolean;
  agentFilesError: string | null;
  setAgentFileContent: (name: AgentFileName, value: string) => void;
  saveAgentFiles: () => Promise<boolean>;
  discardAgentFileChanges: () => void;
};

const useAgentFilesEditor = (params: {
  client: GatewayClient | null | undefined;
  agentId: string | null | undefined;
}): UseAgentFilesEditorResult => {
  const t = useTranslations("inspect");
  const { client, agentId } = params;
  const [agentFiles, setAgentFiles] = useState(createAgentFilesState);
  const [agentFilesLoading, setAgentFilesLoading] = useState(false);
  const [agentFilesSaving, setAgentFilesSaving] = useState(false);
  const [agentFilesDirty, setAgentFilesDirty] = useState(false);
  const [agentFilesError, setAgentFilesError] = useState<string | null>(null);
  const savedAgentFilesRef = useRef<AgentFilesState>(createAgentFilesState());

  const cloneAgentFilesState = useCallback(
    (source: AgentFilesState): AgentFilesState => {
      const next = createAgentFilesState();
      for (const name of AGENT_FILE_NAMES) {
        next[name] = { ...source[name] };
      }
      return next;
    },
    [],
  );

  const loadAgentFiles = useCallback(async () => {
    setAgentFilesLoading(true);
    setAgentFilesError(null);
    try {
      const trimmedAgentId = agentId?.trim();
      if (!trimmedAgentId) {
        const emptyState = createAgentFilesState();
        savedAgentFilesRef.current = emptyState;
        setAgentFiles(emptyState);
        setAgentFilesDirty(false);
        setAgentFilesError(t("agentIdMissing"));
        return;
      }
      if (!client) {
        setAgentFilesError(t("gatewayClientUnavailable"));
        return;
      }
      const results = await Promise.all(
        AGENT_FILE_NAMES.map(async (name) => {
          const file = await readGatewayAgentFile({
            client,
            agentId: trimmedAgentId,
            name,
          });
          return { name, content: file.content, exists: file.exists };
        }),
      );
      const nextState = createAgentFilesState();
      for (const file of results) {
        if (!isAgentFileName(file.name)) continue;
        nextState[file.name] = {
          content: file.content ?? "",
          exists: Boolean(file.exists),
        };
      }
      savedAgentFilesRef.current = nextState;
      setAgentFiles(nextState);
      setAgentFilesDirty(false);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : t("failedToLoadFiles");
      setAgentFilesError(message);
    } finally {
      setAgentFilesLoading(false);
    }
  }, [agentId, client, t]);

  const saveAgentFiles = useCallback(async () => {
    setAgentFilesSaving(true);
    setAgentFilesError(null);
    try {
      const trimmedAgentId = agentId?.trim();
      if (!trimmedAgentId) {
        setAgentFilesError(t("agentIdMissing"));
        return false;
      }
      if (!client) {
        setAgentFilesError(t("gatewayClientUnavailable"));
        return false;
      }
      await Promise.all(
        AGENT_FILE_NAMES.map(async (name) => {
          await writeGatewayAgentFile({
            client,
            agentId: trimmedAgentId,
            name,
            content: agentFiles[name].content,
          });
        }),
      );
      const nextState = createAgentFilesState();
      for (const name of AGENT_FILE_NAMES) {
        nextState[name] = {
          content: agentFiles[name].content,
          exists: true,
        };
      }
      savedAgentFilesRef.current = nextState;
      setAgentFiles(nextState);
      setAgentFilesDirty(false);
      return true;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : t("failedToSaveFiles");
      setAgentFilesError(message);
      return false;
    } finally {
      setAgentFilesSaving(false);
    }
  }, [agentFiles, agentId, client, t]);

  const setAgentFileContent = useCallback(
    (name: AgentFileName, value: string) => {
      if (!isAgentFileName(name)) return;
      setAgentFiles((prev) => ({
        ...prev,
        [name]: { ...prev[name], content: value },
      }));
      setAgentFilesDirty(true);
    },
    [],
  );

  const discardAgentFileChanges = useCallback(() => {
    setAgentFiles(cloneAgentFilesState(savedAgentFilesRef.current));
    setAgentFilesDirty(false);
    setAgentFilesError(null);
  }, [cloneAgentFilesState]);

  useEffect(() => {
    void loadAgentFiles();
  }, [loadAgentFiles]);

  return {
    agentFiles,
    agentFilesLoading,
    agentFilesSaving,
    agentFilesDirty,
    agentFilesError,
    setAgentFileContent,
    saveAgentFiles,
    discardAgentFileChanges,
  };
};

type AgentBrainPanelProps = {
  client: GatewayClient;
  agents: AgentState[];
  selectedAgentId: string | null;
  onUnsavedChangesChange?: (dirty: boolean) => void;
};

export const AgentBrainPanel = ({
  client,
  agents,
  selectedAgentId,
  onUnsavedChangesChange,
}: AgentBrainPanelProps) => {
  const t = useTranslations("inspect");
  const [brainMode, setBrainMode] = useState<"structured" | "expert">(
    "structured",
  );

  const selectedAgent = useMemo(
    () =>
      selectedAgentId
        ? (agents.find((entry) => entry.agentId === selectedAgentId) ?? null)
        : null,
    [agents, selectedAgentId],
  );

  const {
    agentFiles,
    agentFilesLoading,
    agentFilesSaving,
    agentFilesDirty,
    agentFilesError,
    setAgentFileContent,
    saveAgentFiles,
    discardAgentFileChanges,
  } = useAgentFilesEditor({ client, agentId: selectedAgent?.agentId ?? null });

  const draft = useMemo(() => parsePersonalityFiles(agentFiles), [agentFiles]);

  const handleDraftChange = useCallback(
    (nextDraft: PersonalityBuilderDraft) => {
      const serialized = serializePersonalityFiles(nextDraft);
      setAgentFileContent("PERSONA.md", serialized["PERSONA.md"]);
      setAgentFileContent("DIRECTIVES.md", serialized["DIRECTIVES.md"]);
      setAgentFileContent("USER.md", serialized["USER.md"]);
    },
    [setAgentFileContent],
  );

  const handleSave = useCallback(async () => {
    if (agentFilesLoading || agentFilesSaving || !agentFilesDirty) return;
    await saveAgentFiles();
  }, [agentFilesDirty, agentFilesLoading, agentFilesSaving, saveAgentFiles]);

  // Auto-save with 500ms debounce
  const brainSaveTimerRef = useRef<number | null>(null);
  useEffect(() => {
    if (!agentFilesDirty) return;
    if (agentFilesLoading || agentFilesSaving) return;
    if (brainSaveTimerRef.current !== null) {
      window.clearTimeout(brainSaveTimerRef.current);
    }
    brainSaveTimerRef.current = window.setTimeout(() => {
      brainSaveTimerRef.current = null;
      void saveAgentFiles();
    }, 500);
    return () => {
      if (brainSaveTimerRef.current !== null) {
        window.clearTimeout(brainSaveTimerRef.current);
        brainSaveTimerRef.current = null;
      }
    };
  }, [agentFilesDirty, agentFilesLoading, agentFilesSaving, saveAgentFiles]);

  useEffect(() => {
    onUnsavedChangesChange?.(agentFilesDirty);
  }, [agentFilesDirty, onUnsavedChangesChange]);

  useEffect(() => {
    return () => {
      onUnsavedChangesChange?.(false);
    };
  }, [onUnsavedChangesChange]);

  if (!selectedAgentId) {
    return (
      <div
        className="agent-inspect-panel flex min-h-0 flex-col overflow-hidden"
        data-testid="agent-personality-panel"
        style={{
          position: "relative",
          left: "auto",
          top: "auto",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-6 py-6">
          <p className="text-sm text-muted-foreground">{t("agentIdMissing")}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="agent-inspect-panel flex min-h-0 flex-col overflow-hidden"
      data-testid="agent-personality-panel"
      style={{
        position: "relative",
        left: "auto",
        top: "auto",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-6 py-6">
        <section
          className="mx-auto flex w-full max-w-[920px] min-h-0 flex-col"
          data-testid="agent-personality-files"
        >
          {agentFilesError ? (
            <div className="ui-alert-danger mb-4 rounded-md px-3 py-2 text-xs">
              {agentFilesError}
            </div>
          ) : null}

          {/* Toggle + actions bar */}
          <div className="mb-6 flex items-center justify-between gap-2">
            <BrainPanelToggle mode={brainMode} onModeChange={setBrainMode} />

            <div className="flex items-center gap-2">
              <span aria-live="polite" role="status" className="text-[10px]">
                {agentFilesSaving ? (
                  <span className="text-muted-foreground animate-pulse">
                    {t("brainSaving")}
                  </span>
                ) : !agentFilesDirty && !agentFilesLoading ? (
                  <span className="text-muted-foreground/60">
                    {t("brainSaved")}
                  </span>
                ) : null}
              </span>
              <button
                type="button"
                className="ui-btn-secondary px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.06em] disabled:opacity-50"
                disabled={
                  agentFilesLoading || agentFilesSaving || !agentFilesDirty
                }
                onClick={discardAgentFileChanges}
              >
                {t("discard")}
              </button>
              <button
                type="button"
                className="ui-btn-primary px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.06em] disabled:cursor-not-allowed disabled:border-border disabled:bg-muted disabled:text-muted-foreground"
                disabled={
                  agentFilesLoading || agentFilesSaving || !agentFilesDirty
                }
                onClick={() => {
                  void handleSave();
                }}
              >
                {t("save")}
              </button>
            </div>
          </div>

          {/* Validation banner */}
          <div className="mb-4">
            <PersonaValidationBanner draft={draft} />
          </div>

          {/* Structured mode */}
          {brainMode === "structured" ? (
            <BrainPanelStructured
              draft={draft}
              onChange={handleDraftChange}
              onSave={() => void handleSave()}
              saving={agentFilesSaving}
              dirty={agentFilesDirty}
            />
          ) : null}

          {/* Expert markdown mode */}
          {brainMode === "expert" ? (
            <div className="space-y-6 pb-8">
              <MarkdownEditor
                fileName="PERSONA.md"
                value={agentFiles["PERSONA.md"].content}
                onChange={(v) => setAgentFileContent("PERSONA.md", v)}
                placeholder="# Persona\n\nDefine identity, personality, tone, and boundaries..."
              />
              <MarkdownEditor
                fileName="DIRECTIVES.md"
                value={agentFiles["DIRECTIVES.md"].content}
                onChange={(v) => setAgentFileContent("DIRECTIVES.md", v)}
                placeholder="# Directives\n\nMission, rules, priorities, output format..."
              />
              <MarkdownEditor
                fileName="USER.md"
                value={agentFiles["USER.md"].content}
                onChange={(v) => setAgentFileContent("USER.md", v)}
                placeholder="# User Context\n\nUser name, preferences, timezone..."
              />
            </div>
          ) : null}
        </section>
      </div>
    </div>
  );
};
