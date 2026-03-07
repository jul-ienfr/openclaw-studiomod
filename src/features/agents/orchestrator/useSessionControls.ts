import { useCallback } from "react";
import type { AgentState, AgentAction } from "@/features/agents/state/store";
import type { GatewayClient } from "@/lib/gateway/GatewayClient";
import { applySessionSettingMutation } from "@/features/agents/state/sessionSettingsMutations";
import { saveAgentUiPref } from "@/features/agents/state/agentUiPrefs";

export interface UseSessionControlsParams {
  client: GatewayClient;
  dispatch: (action: AgentAction) => void;
  getAgents: () => AgentState[];
}

export function useSessionControls({
  client,
  dispatch,
  getAgents,
}: UseSessionControlsParams) {
  const handleSessionSettingChange = useCallback(
    async (
      agentId: string,
      sessionKey: string,
      field: "model" | "thinkingLevel",
      value: string | null,
    ) => {
      await applySessionSettingMutation({
        agents: getAgents(),
        dispatch,
        client,
        agentId,
        sessionKey,
        field,
        value,
      });
    },
    [client, dispatch, getAgents],
  );

  const handleModelChange = useCallback(
    async (agentId: string, sessionKey: string, value: string | null) => {
      // Persist immediately to localStorage so the choice survives WS reconnects/re-bootstrap
      saveAgentUiPref(agentId, "model", value);
      await handleSessionSettingChange(agentId, sessionKey, "model", value);
    },
    [handleSessionSettingChange],
  );

  const handleThinkingChange = useCallback(
    async (agentId: string, sessionKey: string, value: string | null) => {
      await handleSessionSettingChange(
        agentId,
        sessionKey,
        "thinkingLevel",
        value,
      );
    },
    [handleSessionSettingChange],
  );

  const handleToolCallingToggle = useCallback(
    (agentId: string, enabled: boolean) => {
      dispatch({
        type: "updateAgent",
        agentId,
        patch: { toolCallingEnabled: enabled },
      });
      saveAgentUiPref(agentId, "toolCallingEnabled", enabled);
    },
    [dispatch],
  );

  const handleThinkingTracesToggle = useCallback(
    (agentId: string, enabled: boolean) => {
      dispatch({
        type: "updateAgent",
        agentId,
        patch: { showThinkingTraces: enabled },
      });
      saveAgentUiPref(agentId, "showThinkingTraces", enabled);
    },
    [dispatch],
  );

  const handleHideSystemMessagesToggle = useCallback(
    (agentId: string, enabled: boolean) => {
      dispatch({
        type: "updateAgent",
        agentId,
        patch: { hideSystemMessages: enabled },
      });
      saveAgentUiPref(agentId, "hideSystemMessages", enabled);
    },
    [dispatch],
  );

  return {
    handleModelChange,
    handleThinkingChange,
    handleToolCallingToggle,
    handleThinkingTracesToggle,
    handleHideSystemMessagesToggle,
  };
}
