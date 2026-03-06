"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import type { AgentState } from "@/features/agents/state/store";
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
import {
  isGatewayDisconnectLikeError,
  type EventFrame,
} from "@/lib/gateway/GatewayClient";
import type { GatewayClient } from "@/lib/gateway/GatewayClient";
import type { GatewayStatus } from "@/lib/gateway/GatewayClient";

const PENDING_EXEC_APPROVAL_PRUNE_GRACE_MS = 500;

type ApprovalDispatchAction =
  | { type: "updateAgent"; agentId: string; patch: Partial<AgentState> }
  | { type: "appendOutput"; agentId: string; line: string; transcript?: Record<string, unknown> }
  | { type: "markActivity"; agentId: string; at?: number };

type ClearRunTrackingFn = (runId: string) => void;

export type AgentApprovalControllerParams = {
  client: GatewayClient;
  status: GatewayStatus;
  agents: AgentState[];
  focusedAgentId: string | null;
  dispatch: (action: ApprovalDispatchAction) => void;
  loadAgentHistory: (agentId: string) => void;
  clearRunTracking: ClearRunTrackingFn;
};

export type AgentApprovalControllerState = {
  /** Pending exec approvals for the focused agent (merged scoped + unscoped) */
  focusedPendingExecApprovals: PendingExecApproval[];
  /** Resolve an exec approval with a decision */
  handleResolveExecApproval: (
    approvalId: string,
    decision: ExecApprovalDecision,
  ) => Promise<void>;
  /** Handle gateway event ingress for approval tracking */
  handleGatewayEventIngress: (event: EventFrame) => void;
  /** Ref to the paused run ID map (for runtime event handler) */
  approvalPausedRunIdByAgentRef: React.RefObject<Map<string, string>>;
  /** Ref to the seen cron event IDs (for deduplication) */
  seenCronEventIdsRef: React.RefObject<Set<string>>;
};

export const useAgentApprovalController = ({
  client,
  status,
  agents,
  focusedAgentId,
  dispatch,
  loadAgentHistory,
  clearRunTracking,
}: AgentApprovalControllerParams): AgentApprovalControllerState => {
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

  // Keep refs in sync
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

  // Sync awaitingUserInput patches based on pending approvals
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

  const focusedPendingExecApprovals = useMemo(() => {
    if (!focusedAgentId) return unscopedPendingExecApprovals;
    const scoped = pendingExecApprovalsByAgentId[focusedAgentId] ?? [];
    return mergePendingApprovalsForFocusedAgent({
      scopedApprovals: scoped,
      unscopedApprovals: unscopedPendingExecApprovals,
    });
  }, [
    focusedAgentId,
    pendingExecApprovalsByAgentId,
    unscopedPendingExecApprovals,
  ]);

  const handleResolveExecApproval = useCallback(
    async (approvalId: string, decision: ExecApprovalDecision) => {
      await runResolveExecApprovalOperation({
        client,
        approvalId,
        decision,
        getAgents: () => agents,
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
        clearRunTracking,
      });
    },
    [client, dispatch, loadAgentHistory, clearRunTracking, agents],
  );

  const pauseRunForExecApproval = useCallback(
    async (approval: PendingExecApproval, preferredAgentId?: string | null) => {
      await runPauseRunForExecApprovalOperation({
        status,
        client,
        approval,
        preferredAgentId: preferredAgentId ?? null,
        getAgents: () => agents,
        pausedRunIdByAgentId: approvalPausedRunIdByAgentRef.current,
        isDisconnectLikeError: isGatewayDisconnectLikeError,
        logWarn: (message, error) => console.warn(message, error),
      });
    },
    [client, status, agents],
  );

  const handleGatewayEventIngress = useCallback(
    (event: EventFrame) => {
      runGatewayEventIngressOperation({
        event,
        getAgents: () => agents,
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
    [dispatch, pauseRunForExecApproval, agents],
  );

  return {
    focusedPendingExecApprovals,
    handleResolveExecApproval,
    handleGatewayEventIngress,
    approvalPausedRunIdByAgentRef,
    seenCronEventIdsRef,
  };
};
