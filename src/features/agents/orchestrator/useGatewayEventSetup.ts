import { useEffect, useRef } from "react";
import { createGatewayRuntimeEventHandler } from "@/features/agents/state/gatewayRuntimeEventHandler";
import {
  isGatewayDisconnectLikeError,
  type EventFrame,
  type GatewayClient,
  type GatewayStatus,
} from "@/lib/gateway/GatewayClient";
import type { AgentState, AgentAction } from "@/features/agents/state/store";
import { pushNotificationGlobal } from "@/features/notifications/notificationStore";

export interface UseGatewayEventSetupParams {
  client: GatewayClient;
  status: GatewayStatus;
  dispatch: (action: AgentAction) => void;
  getAgents: () => AgentState[];
  queueLivePatch: (agentId: string, patch: Record<string, unknown>) => void;
  clearPendingLivePatch: (agentId: string) => void;
  loadSummarySnapshot: () => Promise<void>;
  loadAgentHistory: (agentId: string) => void;
  refreshHeartbeatLatestUpdate: () => void;
  setHeartbeatTick: React.Dispatch<React.SetStateAction<number>>;
  approvalPausedRunIdByAgentRef: React.MutableRefObject<Map<string, string>>;
  specialLatestUpdate: {
    update: (
      agentId: string,
      agent: AgentState,
      message: string,
    ) => Promise<void>;
  };
  handleGatewayEventIngress: (event: EventFrame) => void;
}

export function useGatewayEventSetup({
  client,
  status,
  dispatch,
  getAgents,
  queueLivePatch,
  clearPendingLivePatch,
  loadSummarySnapshot,
  loadAgentHistory,
  refreshHeartbeatLatestUpdate,
  setHeartbeatTick,
  approvalPausedRunIdByAgentRef,
  specialLatestUpdate,
  handleGatewayEventIngress,
}: UseGatewayEventSetupParams) {
  const runtimeEventHandlerRef = useRef<ReturnType<
    typeof createGatewayRuntimeEventHandler
  > | null>(null);

  useEffect(() => {
    const handler = createGatewayRuntimeEventHandler({
      getStatus: () => status,
      getAgents,
      dispatch,
      queueLivePatch,
      clearPendingLivePatch,
      loadSummarySnapshot,
      requestHistoryRefresh: ({ agentId }) => loadAgentHistory(agentId),
      refreshHeartbeatLatestUpdate,
      bumpHeartbeatTick: () => setHeartbeatTick((prev) => prev + 1),
      setTimeout: (fn, delayMs) => window.setTimeout(fn, delayMs),
      clearTimeout: (id) => window.clearTimeout(id),
      isDisconnectLikeError: isGatewayDisconnectLikeError,
      logWarn: (message, meta) => console.warn(message, meta),
      shouldSuppressRunAbortedLine: ({ agentId, runId, stopReason }) => {
        if (stopReason !== "rpc") return false;
        const normalizedRunId = runId?.trim() ?? "";
        if (!normalizedRunId) return false;
        const pausedRunId =
          approvalPausedRunIdByAgentRef.current.get(agentId)?.trim() ?? "";
        return pausedRunId.length > 0 && pausedRunId === normalizedRunId;
      },
      updateSpecialLatestUpdate: (agentId, agent, message) => {
        void specialLatestUpdate.update(agentId, agent, message);
      },
    });
    runtimeEventHandlerRef.current = handler;
    const unsubscribe = client.onEvent((event: EventFrame) => {
      handler.handleEvent(event);
      handleGatewayEventIngress(event);

      if (event.type === "event") {
        if (event.event === "agent.error") {
          pushNotificationGlobal({
            type: "error",
            source:
              (event.payload as { agentId?: string } | undefined)?.agentId ??
              "gateway",
            title: "Agent error",
            message:
              (event.payload as { message?: string } | undefined)?.message ??
              "An agent encountered an error",
            autoDismiss: 8000,
          });
        } else if (event.event === "cron.failure") {
          pushNotificationGlobal({
            type: "warning",
            source: "cron",
            title: "Cron failure",
            message:
              (event.payload as { jobId?: string } | undefined)?.jobId ??
              "A scheduled job failed",
            autoDismiss: 8000,
          });
        } else if (event.event === "gateway.reconnected") {
          pushNotificationGlobal({
            type: "info",
            source: "gateway",
            title: "Gateway reconnected",
            autoDismiss: 4000,
          });
        }
      }
    });
    return () => {
      runtimeEventHandlerRef.current = null;
      handler.dispose();
      unsubscribe();
    };
  }, [
    client,
    dispatch,
    loadAgentHistory,
    loadSummarySnapshot,
    clearPendingLivePatch,
    queueLivePatch,
    refreshHeartbeatLatestUpdate,
    specialLatestUpdate,
    handleGatewayEventIngress,
    status,
    getAgents,
    setHeartbeatTick,
    approvalPausedRunIdByAgentRef,
  ]);

  return { runtimeEventHandlerRef };
}
