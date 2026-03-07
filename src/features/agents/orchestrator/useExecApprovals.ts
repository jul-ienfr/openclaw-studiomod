import { useCallback, useEffect, useRef, useState } from "react";
import type {
  ExecApprovalDecision,
  PendingExecApproval,
} from "@/features/agents/approvals/types";
import {
  planAwaitingUserInputPatches,
  planPendingPruneDelay,
  planPrunedPendingState,
} from "@/features/agents/approvals/execApprovalControlLoopWorkflow";
import {
  runGatewayEventIngressOperation,
  runPauseRunForExecApprovalOperation,
  runResolveExecApprovalOperation,
} from "@/features/agents/approvals/execApprovalRunControlOperation";
import { mergePendingApprovalsForFocusedAgent } from "@/features/agents/approvals/pendingStore";
import type { AgentState, AgentAction } from "@/features/agents/state/store";
import {
  isGatewayDisconnectLikeError,
  type EventFrame,
} from "@/lib/gateway/GatewayClient";
import type { GatewayClient, GatewayStatus } from "@/lib/gateway/GatewayClient";

const PENDING_EXEC_APPROVAL_PRUNE_GRACE_MS = 500;

export interface UseExecApprovalsParams {
  client: GatewayClient;
  status: GatewayStatus;
  agents: AgentState[];
  focusedAgentId: string | null;
  dispatch: (action: AgentAction) => void;
  getAgents: () => AgentState[];
  loadAgentHistory: (agentId: string) => void;
  runtimeEventHandlerRef: React.MutableRefObject<{
    clearRunTracking: (runId: string) => void;
  } | null>;
}

export function useExecApprovals({
  client,
  status,
  agents,
  focusedAgentId,
  dispatch,
  getAgents,
  loadAgentHistory,
  runtimeEventHandlerRef,
}: UseExecApprovalsParams) {
  const [pendingExecApprovalsByAgentId, setPendingExecApprovalsByAgentId] =
    useState<Record<string, PendingExecApproval[]>>({});
  const [unscopedPendingExecApprovals, setUnscopedPendingExecApprovals] =
    useState<PendingExecApproval[]>([]);
  const pendingExecApprovalsByAgentIdRef = useRef(
    pendingExecApprovalsByAgentId,
  );
  const unscopedPendingExecApprovalsRef = useRef(unscopedPendingExecApprovals);
  const approvalPausedRunIdByAgentRef = useRef<Map<string, string>>(new Map());
  const seenCronEventIdsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    pendingExecApprovalsByAgentIdRef.current = pendingExecApprovalsByAgentId;
  }, [pendingExecApprovalsByAgentId]);

  useEffect(() => {
    unscopedPendingExecApprovalsRef.current = unscopedPendingExecApprovals;
  }, [unscopedPendingExecApprovals]);

  // Prune expired pending approvals
  useEffect(() => {
    const nowMs = Date.now();
    const delayMs = planPendingPruneDelay({
      pendingState: {
        approvalsByAgentId: pendingExecApprovalsByAgentId,
        unscopedApprovals: unscopedPendingExecApprovals,
      },
      nowMs,
      graceMs: PENDING_EXEC_APPROVAL_PRUNE_GRACE_MS,
    });
    if (delayMs === null) return;
    const timerId = window.setTimeout(() => {
      const pendingState = planPrunedPendingState({
        pendingState: {
          approvalsByAgentId: pendingExecApprovalsByAgentIdRef.current,
          unscopedApprovals: unscopedPendingExecApprovalsRef.current,
        },
        nowMs: Date.now(),
        graceMs: PENDING_EXEC_APPROVAL_PRUNE_GRACE_MS,
      });
      pendingExecApprovalsByAgentIdRef.current =
        pendingState.approvalsByAgentId;
      unscopedPendingExecApprovalsRef.current = pendingState.unscopedApprovals;
      setPendingExecApprovalsByAgentId(pendingState.approvalsByAgentId);
      setUnscopedPendingExecApprovals(pendingState.unscopedApprovals);
    }, delayMs);
    return () => {
      window.clearTimeout(timerId);
    };
  }, [pendingExecApprovalsByAgentId, unscopedPendingExecApprovals]);

  // Sync awaiting user input patches
  useEffect(() => {
    const patches = planAwaitingUserInputPatches({
      agents,
      approvalsByAgentId: pendingExecApprovalsByAgentId,
    });
    for (const patch of patches) {
      dispatch({
        type: "updateAgent",
        agentId: patch.agentId,
        patch: { awaitingUserInput: patch.awaitingUserInput },
      });
    }
  }, [agents, dispatch, pendingExecApprovalsByAgentId]);

  const focusedPendingExecApprovals = (() => {
    if (!focusedAgentId) return unscopedPendingExecApprovals;
    const scoped = pendingExecApprovalsByAgentId[focusedAgentId] ?? [];
    return mergePendingApprovalsForFocusedAgent({
      scopedApprovals: scoped,
      unscopedApprovals: unscopedPendingExecApprovals,
    });
  })();

  const handleResolveExecApproval = useCallback(
    async (approvalId: string, decision: ExecApprovalDecision) => {
      await runResolveExecApprovalOperation({
        client,
        approvalId,
        decision,
        getAgents,
        getPendingState: () => ({
          approvalsByAgentId: pendingExecApprovalsByAgentIdRef.current,
          unscopedApprovals: unscopedPendingExecApprovalsRef.current,
        }),
        setPendingExecApprovalsByAgentId: (next) => {
          setPendingExecApprovalsByAgentId((current) => {
            const resolved = typeof next === "function" ? next(current) : next;
            pendingExecApprovalsByAgentIdRef.current = resolved;
            return resolved;
          });
        },
        setUnscopedPendingExecApprovals: (next) => {
          setUnscopedPendingExecApprovals((current) => {
            const resolved = typeof next === "function" ? next(current) : next;
            unscopedPendingExecApprovalsRef.current = resolved;
            return resolved;
          });
        },
        requestHistoryRefresh: (agentId) => loadAgentHistory(agentId),
        pausedRunIdByAgentId: approvalPausedRunIdByAgentRef.current,
        dispatch,
        isDisconnectLikeError: isGatewayDisconnectLikeError,
        logWarn: (message, error) => console.warn(message, error),
        clearRunTracking: (runId) =>
          runtimeEventHandlerRef.current?.clearRunTracking(runId),
      });
    },
    [client, dispatch, getAgents, loadAgentHistory, runtimeEventHandlerRef],
  );

  const pauseRunForExecApproval = useCallback(
    async (approval: PendingExecApproval, preferredAgentId?: string | null) => {
      await runPauseRunForExecApprovalOperation({
        status,
        client,
        approval,
        preferredAgentId: preferredAgentId ?? null,
        getAgents,
        pausedRunIdByAgentId: approvalPausedRunIdByAgentRef.current,
        isDisconnectLikeError: isGatewayDisconnectLikeError,
        logWarn: (message, error) => console.warn(message, error),
      });
    },
    [client, getAgents, status],
  );

  const handleGatewayEventIngress = useCallback(
    (event: EventFrame) => {
      runGatewayEventIngressOperation({
        event,
        getAgents,
        getPendingState: () => ({
          approvalsByAgentId: pendingExecApprovalsByAgentIdRef.current,
          unscopedApprovals: unscopedPendingExecApprovalsRef.current,
        }),
        pausedRunIdByAgentId: approvalPausedRunIdByAgentRef.current,
        seenCronDedupeKeys: seenCronEventIdsRef.current,
        nowMs: Date.now(),
        replacePendingState: (pendingState) => {
          if (
            pendingState.approvalsByAgentId !==
            pendingExecApprovalsByAgentIdRef.current
          ) {
            pendingExecApprovalsByAgentIdRef.current =
              pendingState.approvalsByAgentId;
            setPendingExecApprovalsByAgentId(pendingState.approvalsByAgentId);
          }
          if (
            pendingState.unscopedApprovals !==
            unscopedPendingExecApprovalsRef.current
          ) {
            unscopedPendingExecApprovalsRef.current =
              pendingState.unscopedApprovals;
            setUnscopedPendingExecApprovals(pendingState.unscopedApprovals);
          }
        },
        pauseRunForApproval: (approval, commandPreferredAgentId) =>
          pauseRunForExecApproval(approval, commandPreferredAgentId),
        dispatch,
        recordCronDedupeKey: (dedupeKey) =>
          seenCronEventIdsRef.current.add(dedupeKey),
      });
    },
    [dispatch, getAgents, pauseRunForExecApproval],
  );

  return {
    focusedPendingExecApprovals,
    handleResolveExecApproval,
    handleGatewayEventIngress,
    approvalPausedRunIdByAgentRef,
    seenCronEventIdsRef,
  };
}
