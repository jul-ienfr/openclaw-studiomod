import {
  isWebchatSessionMutationBlockedError,
  syncGatewaySessionSettings,
  type GatewayClient,
  type GatewaySessionsPatchResult,
} from "@/lib/gateway/GatewayClient";
import { STUDIO_NOTICE_PREFIX } from "@/features/agents/components/chatItems";

// Module-level debounce timer for cross-channel model persistence
let configWriteTimer: ReturnType<typeof setTimeout> | null = null;

const scheduleModelConfigWrite = (agentId: string, model: string) => {
  if (configWriteTimer !== null) {
    clearTimeout(configWriteTimer);
  }
  configWriteTimer = setTimeout(() => {
    configWriteTimer = null;
    void fetch("/api/agents/model", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ agentId, model }),
    }).catch(console.warn);
  }, 800);
};

type SessionSettingField = "model" | "thinkingLevel";

type AgentSessionState = {
  agentId: string;
  sessionCreated: boolean;
  model?: string | null;
  thinkingLevel?: string | null;
};

type SessionSettingsDispatchAction =
  | {
      type: "updateAgent";
      agentId: string;
      patch: {
        model?: string | null;
        thinkingLevel?: string | null;
        sessionSettingsSynced?: boolean;
        sessionCreated?: boolean;
      };
    }
  | {
      type: "appendOutput";
      agentId: string;
      line: string;
    };

type SessionSettingsDispatch = (action: SessionSettingsDispatchAction) => void;

export type ApplySessionSettingMutationParams = {
  agents: AgentSessionState[];
  dispatch: SessionSettingsDispatch;
  client: GatewayClient;
  agentId: string;
  sessionKey: string;
  field: SessionSettingField;
  value: string | null;
};

const buildFallbackError = (field: SessionSettingField) =>
  field === "model" ? "Failed to set model." : "Failed to set thinking level.";

const buildErrorPrefix = (field: SessionSettingField) =>
  field === "model" ? "Model update failed" : "Thinking update failed";

const buildWebchatBlockedMessage = (field: SessionSettingField) =>
  field === "model"
    ? "Model update not applied: this gateway blocks sessions.patch for WebChat clients; message sending still works."
    : "Thinking level update not applied: this gateway blocks sessions.patch for WebChat clients; message sending still works.";

export const applySessionSettingMutation = async ({
  agents,
  dispatch,
  client,
  agentId,
  sessionKey,
  field,
  value,
}: ApplySessionSettingMutationParams) => {
  const targetAgent =
    agents.find((candidate) => candidate.agentId === agentId) ?? null;
  const previousModel = targetAgent?.model ?? null;
  const previousThinkingLevel = targetAgent?.thinkingLevel ?? null;
  dispatch({
    type: "updateAgent",
    agentId,
    patch: {
      [field]: value,
      sessionSettingsSynced: false,
    },
  });
  try {
    const result = await syncGatewaySessionSettings({
      client,
      sessionKey,
      ...(field === "model"
        ? { model: value ?? null }
        : { thinkingLevel: value ?? null }),
    });
    const patch: {
      model?: string | null;
      thinkingLevel?: string | null;
      sessionSettingsSynced: boolean;
      sessionCreated: boolean;
    } = { sessionSettingsSynced: true, sessionCreated: true };
    if (field === "model") {
      const resolvedModel = resolveModelFromPatchResult(result);
      // Keep the user's selected model in the UI — the gateway-resolved form
      // is an internal routing detail and must not override the user's choice.
      patch.model = value;
      // Reset thinking level so it adapts to the new model's capabilities.
      patch.thinkingLevel = null;
      // Persist the resolved model (or user's value as fallback) to openclaw.json
      // so the choice applies to all channels (Telegram, WhatsApp…).
      const persistedModel = resolvedModel ?? value;
      void fetch("/api/agents/model", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ agentId, model: persistedModel }),
      });
      // Debounced secondary write (POST) for cross-channel consistency
      if (persistedModel) {
        scheduleModelConfigWrite(agentId, persistedModel);
      }
    } else {
      const nextThinkingLevel =
        typeof result.entry?.thinkingLevel === "string"
          ? result.entry.thinkingLevel
          : undefined;
      if (nextThinkingLevel !== undefined) {
        patch.thinkingLevel = nextThinkingLevel;
      }
    }
    dispatch({
      type: "updateAgent",
      agentId,
      patch,
    });
  } catch (err) {
    if (isWebchatSessionMutationBlockedError(err)) {
      if (field === "model" && value) {
        // Gateway blocks sessions.patch for WebChat — persist to openclaw.json instead
        void fetch("/api/agents/model", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ agentId, model: value }),
        });
        // Keep the optimistic update (don't revert), reset thinking level, and confirm to the user
        dispatch({
          type: "updateAgent",
          agentId,
          patch: {
            sessionSettingsSynced: true,
            sessionCreated: true,
            thinkingLevel: null,
          },
        });
        dispatch({
          type: "appendOutput",
          agentId,
          line: `${STUDIO_NOTICE_PREFIX}Model saved persistently: **${value}**. Will apply to all channels (Telegram, WhatsApp…) immediately.`,
        });
      } else {
        // For thinkingLevel or null model: revert and explain
        dispatch({
          type: "updateAgent",
          agentId,
          patch: {
            ...(field === "model"
              ? { model: previousModel }
              : { thinkingLevel: previousThinkingLevel }),
            sessionSettingsSynced: true,
            sessionCreated: true,
          },
        });
        dispatch({
          type: "appendOutput",
          agentId,
          line: `${STUDIO_NOTICE_PREFIX}${buildWebchatBlockedMessage(field)}`,
        });
      }
      return;
    }
    dispatch({
      type: "updateAgent",
      agentId,
      patch: {
        ...(field === "model"
          ? { model: previousModel }
          : { thinkingLevel: previousThinkingLevel }),
        sessionSettingsSynced: true,
      },
    });
    const msg = err instanceof Error ? err.message : buildFallbackError(field);
    dispatch({
      type: "appendOutput",
      agentId,
      line: `${STUDIO_NOTICE_PREFIX}${buildErrorPrefix(field)}: ${msg}`,
    });
  }
};

const resolveModelFromPatchResult = (
  result: GatewaySessionsPatchResult,
): string | null | undefined => {
  // Prefer entry.modelOverride/providerOverride (the actual active override) over resolved
  // because the gateway's resolved field may return the base model, not the override.
  const overrideProvider =
    typeof result.entry?.providerOverride === "string"
      ? result.entry.providerOverride.trim()
      : "";
  const overrideModel =
    typeof result.entry?.modelOverride === "string"
      ? result.entry.modelOverride.trim()
      : "";
  if (overrideProvider && overrideModel) {
    return `${overrideProvider}/${overrideModel}`;
  }

  const provider =
    typeof result.resolved?.modelProvider === "string"
      ? result.resolved.modelProvider.trim()
      : "";
  const model =
    typeof result.resolved?.model === "string"
      ? result.resolved.model.trim()
      : "";
  if (!provider || !model) return undefined;
  return `${provider}/${model}`;
};
