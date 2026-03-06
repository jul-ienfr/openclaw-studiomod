"use client";

import { useCallback, useMemo, type ReactNode } from "react";
import type {
  TranscriptAppendMeta,
  TranscriptEntry,
} from "@/features/agents/state/transcript";
import { useAgentZustandStore } from "./zustandStore";

// ---------------------------------------------------------------------------
// Types — all previously exported types remain identical.
// ---------------------------------------------------------------------------

export type AgentStatus = "idle" | "running" | "error";
export type FocusFilter = "all" | "running" | "approvals";

export type AgentStoreSeed = {
  agentId: string;
  name: string;
  sessionKey: string;
  avatarSeed?: string | null;
  avatarUrl?: string | null;
  model?: string | null;
  thinkingLevel?: string | null;
  sessionExecHost?: "sandbox" | "gateway" | "node";
  sessionExecSecurity?: "deny" | "allowlist" | "full";
  sessionExecAsk?: "off" | "on-miss" | "always";
  toolCallingEnabled?: boolean;
  showThinkingTraces?: boolean;
};

export type AgentState = AgentStoreSeed & {
  /** Optimistic name set during rename — preserved across hydration until restart completes. */
  _pendingName?: string;
  status: AgentStatus;
  sessionCreated: boolean;
  awaitingUserInput: boolean;
  hasUnseenActivity: boolean;
  outputLines: string[];
  lastResult: string | null;
  lastDiff: string | null;
  runId: string | null;
  runStartedAt: number | null;
  streamText: string | null;
  thinkingTrace: string | null;
  latestOverride: string | null;
  latestOverrideKind: "heartbeat" | "cron" | null;
  lastAssistantMessageAt: number | null;
  lastActivityAt: number | null;
  latestPreview: string | null;
  lastUserMessage: string | null;
  draft: string;
  queuedMessages?: string[];
  sessionSettingsSynced: boolean;
  historyLoadedAt: number | null;
  historyFetchLimit: number | null;
  historyFetchedCount: number | null;
  historyMaybeTruncated: boolean;
  toolCallingEnabled: boolean;
  showThinkingTraces: boolean;
  hideSystemMessages: boolean;
  transcriptEntries?: TranscriptEntry[];
  transcriptRevision?: number;
  transcriptSequenceCounter?: number;
  sessionEpoch?: number;
  lastHistoryRequestRevision?: number | null;
  lastAppliedHistoryRequestId?: string | null;
};

export const buildNewSessionAgentPatch = (
  agent: AgentState,
): Partial<AgentState> => {
  return {
    sessionKey: agent.sessionKey,
    status: "idle",
    runId: null,
    runStartedAt: null,
    streamText: null,
    thinkingTrace: null,
    outputLines: [],
    lastResult: null,
    lastDiff: null,
    latestOverride: null,
    latestOverrideKind: null,
    lastAssistantMessageAt: null,
    lastActivityAt: null,
    latestPreview: null,
    lastUserMessage: null,
    draft: "",
    queuedMessages: [],
    historyLoadedAt: null,
    historyFetchLimit: null,
    historyFetchedCount: null,
    historyMaybeTruncated: false,
    awaitingUserInput: false,
    hasUnseenActivity: false,
    sessionCreated: true,
    sessionSettingsSynced: true,
    transcriptEntries: [],
    transcriptRevision: (agent.transcriptRevision ?? 0) + 1,
    transcriptSequenceCounter: 0,
    sessionEpoch: (agent.sessionEpoch ?? 0) + 1,
    lastHistoryRequestRevision: null,
    lastAppliedHistoryRequestId: null,
  };
};

export type AgentStoreState = {
  agents: AgentState[];
  selectedAgentId: string | null;
  loading: boolean;
  error: string | null;
};

// ---------------------------------------------------------------------------
// Action union — exported as AgentAction for external consumers.
// The internal alias `Action` is kept for backward compatibility within this file.
// ---------------------------------------------------------------------------

type Action =
  | {
      type: "hydrateAgents";
      agents: AgentStoreSeed[];
      selectedAgentId?: string;
    }
  | { type: "setError"; error: string | null }
  | { type: "setLoading"; loading: boolean }
  | { type: "updateAgent"; agentId: string; patch: Partial<AgentState> }
  | {
      type: "appendOutput";
      agentId: string;
      line: string;
      transcript?: TranscriptAppendMeta;
    }
  | { type: "enqueueQueuedMessage"; agentId: string; message: string }
  | { type: "removeQueuedMessage"; agentId: string; index: number }
  | { type: "shiftQueuedMessage"; agentId: string; expectedMessage?: string }
  | { type: "markActivity"; agentId: string; at?: number }
  | { type: "selectAgent"; agentId: string | null };

export type AgentAction = Action;

// ---------------------------------------------------------------------------
// Legacy exports — kept so existing imports don't break.
// The reducer and initialState are no longer used at runtime but some test
// or utility code may reference them.
// ---------------------------------------------------------------------------

const initialState: AgentStoreState = {
  agents: [],
  selectedAgentId: null,
  loading: false,
  error: null,
};

export const agentStoreReducer = (
  _state: AgentStoreState,
  _action: Action,
): AgentStoreState => {
  throw new Error(
    "agentStoreReducer is deprecated — state is now managed by Zustand. " +
      "Use useAgentStore().dispatch() or import actions from zustandStore.",
  );
};
export const initialAgentStoreState = initialState;

// ---------------------------------------------------------------------------
// AgentStoreProvider — simplified wrapper.  The Zustand store is global, so
// the provider is now a pass-through that keeps the JSX tree valid for
// existing <AgentStoreProvider> usage.
// ---------------------------------------------------------------------------

export const AgentStoreProvider = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

// ---------------------------------------------------------------------------
// useAgentStore — returns the same shape as before, backed by Zustand.
// ---------------------------------------------------------------------------

type AgentStoreContextValue = {
  state: AgentStoreState;
  dispatch: React.Dispatch<Action>;
  hydrateAgents: (agents: AgentStoreSeed[], selectedAgentId?: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
};

export const useAgentStore = (): AgentStoreContextValue => {
  const agents = useAgentZustandStore((s) => s.agents);
  const selectedAgentId = useAgentZustandStore((s) => s.selectedAgentId);
  const loading = useAgentZustandStore((s) => s.loading);
  const error = useAgentZustandStore((s) => s.error);

  const state: AgentStoreState = useMemo(
    () => ({ agents, selectedAgentId, loading, error }),
    [agents, selectedAgentId, loading, error],
  );

  // Stable callbacks — use getState() to avoid depending on the whole store
  const dispatch = useCallback(
    (action: Action) => {
      const s = useAgentZustandStore.getState();
      switch (action.type) {
        case "hydrateAgents":
          s.hydrateAgents(action.agents, action.selectedAgentId);
          break;
        case "setError":
          s.setError(action.error);
          break;
        case "setLoading":
          s.setLoading(action.loading);
          break;
        case "updateAgent":
          s.updateAgent(action.agentId, action.patch);
          break;
        case "appendOutput":
          s.appendOutput(action.agentId, action.line, action.transcript);
          break;
        case "enqueueQueuedMessage":
          s.enqueueQueuedMessage(action.agentId, action.message);
          break;
        case "removeQueuedMessage":
          s.removeQueuedMessage(action.agentId, action.index);
          break;
        case "shiftQueuedMessage":
          s.shiftQueuedMessage(action.agentId, action.expectedMessage);
          break;
        case "markActivity":
          s.markActivity(action.agentId, action.at);
          break;
        case "selectAgent":
          s.selectAgent(action.agentId);
          break;
        default: {
          const _never: never = action;
          void _never;
        }
      }
    },
    [],
  );

  const hydrateAgents = useCallback(
    (agents: AgentStoreSeed[], selectedAgentId?: string) => {
      useAgentZustandStore.getState().hydrateAgents(agents, selectedAgentId);
    },
    [],
  );

  const setLoading = useCallback(
    (loading: boolean) => {
      useAgentZustandStore.getState().setLoading(loading);
    },
    [],
  );

  const setError = useCallback(
    (error: string | null) => {
      useAgentZustandStore.getState().setError(error);
    },
    [],
  );

  return { state, dispatch, hydrateAgents, setLoading, setError };
};

// ---------------------------------------------------------------------------
// Pure utility selectors — unchanged.
// ---------------------------------------------------------------------------

export const getSelectedAgent = (state: AgentStoreState): AgentState | null => {
  if (!state.selectedAgentId) return null;
  return (
    state.agents.find((agent) => agent.agentId === state.selectedAgentId) ??
    null
  );
};

export const getFilteredAgents = (
  state: AgentStoreState,
  filter: FocusFilter,
): AgentState[] => {
  const statusPriority: Record<AgentStatus, number> = {
    running: 0,
    idle: 1,
    error: 2,
  };
  const getActivityTimestamp = (agent: AgentState) =>
    Math.max(
      agent.lastActivityAt ?? 0,
      agent.runStartedAt ?? 0,
      agent.lastAssistantMessageAt ?? 0,
    );
  const sortAgents = (agents: AgentState[], prioritizeStatus: boolean) =>
    agents
      .map((agent, index) => ({ agent, index }))
      .sort((left, right) => {
        if (prioritizeStatus) {
          const statusDelta =
            statusPriority[left.agent.status] -
            statusPriority[right.agent.status];
          if (statusDelta !== 0) return statusDelta;
        }
        const timeDelta =
          getActivityTimestamp(right.agent) - getActivityTimestamp(left.agent);
        if (timeDelta !== 0) return timeDelta;
        return left.index - right.index;
      })
      .map(({ agent }) => agent);
  switch (filter) {
    case "all":
      return sortAgents(state.agents, true);
    case "running":
      return sortAgents(
        state.agents.filter((agent) => agent.status === "running"),
        false,
      );
    case "approvals":
      return sortAgents(
        state.agents.filter((agent) => agent.awaitingUserInput),
        false,
      );
    default: {
      const _exhaustive: never = filter;
      void _exhaustive;
      return sortAgents(state.agents, true);
    }
  }
};
