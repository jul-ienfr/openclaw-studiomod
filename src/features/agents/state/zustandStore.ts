"use client";

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type {
  AgentStoreState,
  AgentState,
  AgentStoreSeed,
} from "./store";
import {
  areTranscriptEntriesEqual,
  buildOutputLinesFromTranscriptEntries,
  buildTranscriptEntriesFromLines,
  createTranscriptEntryFromLine,
  sortTranscriptEntries,
  TRANSCRIPT_V2_ENABLED,
  type TranscriptAppendMeta,
  type TranscriptEntry,
} from "@/features/agents/state/transcript";

// ---------------------------------------------------------------------------
// Helpers (mirrored from store.tsx reducer internals)
// ---------------------------------------------------------------------------

const areStringArraysEqual = (left: string[], right: string[]): boolean => {
  if (left.length !== right.length) return false;
  for (let i = 0; i < left.length; i += 1) {
    if (left[i] !== right[i]) return false;
  }
  return true;
};

const ensureTranscriptEntries = (agent: AgentState): TranscriptEntry[] => {
  if (Array.isArray(agent.transcriptEntries)) {
    return agent.transcriptEntries;
  }
  return buildTranscriptEntriesFromLines({
    lines: agent.outputLines,
    sessionKey: agent.sessionKey,
    source: "legacy",
    startSequence: 0,
    confirmed: true,
  });
};

const nextTranscriptSequenceCounter = (
  currentCounter: number | undefined,
  entries: TranscriptEntry[],
): number => {
  const derived = entries.reduce(
    (max, entry) => Math.max(max, entry.sequenceKey + 1),
    0,
  );
  return Math.max(currentCounter ?? 0, derived);
};

const createRuntimeAgentState = (
  seed: AgentStoreSeed,
  existing?: AgentState | null,
): AgentState => {
  const sameSessionKey = existing?.sessionKey === seed.sessionKey;
  const outputLines = sameSessionKey ? (existing?.outputLines ?? []) : [];
  const queuedMessages = sameSessionKey
    ? [...(existing?.queuedMessages ?? [])]
    : [];
  const transcriptEntries = sameSessionKey
    ? Array.isArray(existing?.transcriptEntries)
      ? existing.transcriptEntries
      : buildTranscriptEntriesFromLines({
          lines: outputLines,
          sessionKey: seed.sessionKey,
          source: "legacy",
          startSequence: 0,
          confirmed: true,
        })
    : [];
  const pendingName = existing?._pendingName;
  const resolvedName = pendingName ?? seed.name;
  return {
    ...seed,
    name: resolvedName,
    _pendingName: pendingName,
    avatarSeed: seed.avatarSeed ?? existing?.avatarSeed ?? seed.agentId,
    avatarUrl: seed.avatarUrl ?? existing?.avatarUrl ?? null,
    model: seed.model ?? existing?.model ?? null,
    thinkingLevel: seed.thinkingLevel ?? existing?.thinkingLevel ?? "high",
    sessionExecHost: seed.sessionExecHost ?? existing?.sessionExecHost,
    sessionExecSecurity:
      seed.sessionExecSecurity ?? existing?.sessionExecSecurity,
    sessionExecAsk: seed.sessionExecAsk ?? existing?.sessionExecAsk,
    status: sameSessionKey ? (existing?.status ?? "idle") : "idle",
    sessionCreated: sameSessionKey
      ? (existing?.sessionCreated ?? false)
      : false,
    awaitingUserInput: sameSessionKey
      ? (existing?.awaitingUserInput ?? false)
      : false,
    hasUnseenActivity: sameSessionKey
      ? (existing?.hasUnseenActivity ?? false)
      : false,
    outputLines,
    lastResult: sameSessionKey ? (existing?.lastResult ?? null) : null,
    lastDiff: sameSessionKey ? (existing?.lastDiff ?? null) : null,
    runId: sameSessionKey ? (existing?.runId ?? null) : null,
    runStartedAt: sameSessionKey ? (existing?.runStartedAt ?? null) : null,
    streamText: sameSessionKey ? (existing?.streamText ?? null) : null,
    thinkingTrace: sameSessionKey ? (existing?.thinkingTrace ?? null) : null,
    latestOverride: sameSessionKey ? (existing?.latestOverride ?? null) : null,
    latestOverrideKind: sameSessionKey
      ? (existing?.latestOverrideKind ?? null)
      : null,
    lastAssistantMessageAt: sameSessionKey
      ? (existing?.lastAssistantMessageAt ?? null)
      : null,
    lastActivityAt: sameSessionKey ? (existing?.lastActivityAt ?? null) : null,
    latestPreview: sameSessionKey ? (existing?.latestPreview ?? null) : null,
    lastUserMessage: sameSessionKey
      ? (existing?.lastUserMessage ?? null)
      : null,
    draft: sameSessionKey ? (existing?.draft ?? "") : "",
    queuedMessages,
    sessionSettingsSynced: sameSessionKey
      ? (existing?.sessionSettingsSynced ?? false)
      : false,
    historyLoadedAt: sameSessionKey
      ? (existing?.historyLoadedAt ?? null)
      : null,
    historyFetchLimit: sameSessionKey
      ? (existing?.historyFetchLimit ?? null)
      : null,
    historyFetchedCount: sameSessionKey
      ? (existing?.historyFetchedCount ?? null)
      : null,
    historyMaybeTruncated: sameSessionKey
      ? (existing?.historyMaybeTruncated ?? false)
      : false,
    toolCallingEnabled:
      seed.toolCallingEnabled ?? existing?.toolCallingEnabled ?? false,
    showThinkingTraces:
      seed.showThinkingTraces ?? existing?.showThinkingTraces ?? true,
    hideSystemMessages: existing?.hideSystemMessages ?? false,
    transcriptEntries,
    transcriptRevision: sameSessionKey
      ? (existing?.transcriptRevision ?? outputLines.length)
      : 0,
    transcriptSequenceCounter: sameSessionKey
      ? (existing?.transcriptSequenceCounter ??
        nextTranscriptSequenceCounter(
          existing?.transcriptSequenceCounter,
          transcriptEntries,
        ))
      : 0,
    sessionEpoch: sameSessionKey
      ? (existing?.sessionEpoch ?? 0)
      : (existing?.sessionEpoch ?? 0) + 1,
    lastHistoryRequestRevision: sameSessionKey
      ? (existing?.lastHistoryRequestRevision ?? null)
      : null,
    lastAppliedHistoryRequestId: sameSessionKey
      ? (existing?.lastAppliedHistoryRequestId ?? null)
      : null,
  };
};

// ---------------------------------------------------------------------------
// Action signatures
// ---------------------------------------------------------------------------

type AgentStoreActions = {
  hydrateAgents: (agents: AgentStoreSeed[], selectedAgentId?: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  selectAgent: (agentId: string | null) => void;
  updateAgent: (agentId: string, patch: Partial<AgentState>) => void;
  appendOutput: (
    agentId: string,
    line: string,
    transcript?: TranscriptAppendMeta,
  ) => void;
  enqueueQueuedMessage: (agentId: string, message: string) => void;
  removeQueuedMessage: (agentId: string, index: number) => void;
  shiftQueuedMessage: (agentId: string, expectedMessage?: string) => void;
  markActivity: (agentId: string, at?: number) => void;
};

export type AgentZustandStore = AgentStoreState & AgentStoreActions;

// ---------------------------------------------------------------------------
// Store
// ---------------------------------------------------------------------------

export const useAgentZustandStore = create<AgentZustandStore>()(
  devtools(
    (set) => ({
      // Initial state
      agents: [],
      selectedAgentId: null,
      loading: false,
      error: null,

      // -----------------------------------------------------------------------
      // Actions — semantics match the reducer cases in store.tsx exactly.
      // -----------------------------------------------------------------------

      hydrateAgents: (seeds, selectedAgentId) =>
        set(
          (state) => {
            const byId = new Map(
              state.agents.map((agent) => [agent.agentId, agent]),
            );
            const agents = seeds.map((seed) =>
              createRuntimeAgentState(seed, byId.get(seed.agentId)),
            );
            const requestedSelectedAgentId =
              selectedAgentId?.trim() ?? "";
            const resolvedSelectedAgentId =
              requestedSelectedAgentId &&
              agents.some(
                (agent) => agent.agentId === requestedSelectedAgentId,
              )
                ? requestedSelectedAgentId
                : state.selectedAgentId &&
                    agents.some(
                      (agent) => agent.agentId === state.selectedAgentId,
                    )
                  ? state.selectedAgentId
                  : (agents[0]?.agentId ?? null);
            return {
              agents,
              selectedAgentId: resolvedSelectedAgentId,
              loading: false,
              error: null,
            };
          },
          false,
          "hydrateAgents",
        ),

      setLoading: (loading) => set({ loading }, false, "setLoading"),

      setError: (error) => set({ error, loading: false }, false, "setError"),

      selectAgent: (agentId) =>
        set(
          (state) => {
            if (agentId === state.selectedAgentId) {
              if (agentId === null) return state;
              const selected =
                state.agents.find((a) => a.agentId === agentId) ?? null;
              if (!selected || !selected.hasUnseenActivity) return state;
            }
            return {
              selectedAgentId: agentId,
              agents:
                agentId === null
                  ? state.agents
                  : state.agents.map((a) =>
                      a.agentId === agentId
                        ? { ...a, hasUnseenActivity: false }
                        : a,
                    ),
            };
          },
          false,
          "selectAgent",
        ),

      updateAgent: (agentId, patch) =>
        set(
          (state) => ({
            agents: state.agents.map((agent) => {
              if (agent.agentId !== agentId) return agent;

              const nextSessionKey = (
                patch.sessionKey ?? agent.sessionKey
              ).trim();
              const sessionKeyChanged =
                nextSessionKey !== agent.sessionKey.trim();
              const patchHasTranscriptEntries = Array.isArray(
                patch.transcriptEntries,
              );
              const patchHasOutputLines = Array.isArray(patch.outputLines);
              const patchMutatesTranscript =
                patchHasTranscriptEntries || patchHasOutputLines;

              const existingEntries = ensureTranscriptEntries(agent);
              const base: AgentState = { ...agent, ...patch };
              let nextEntries: TranscriptEntry[] = existingEntries;
              if (Array.isArray(base.transcriptEntries)) {
                nextEntries = base.transcriptEntries as TranscriptEntry[];
              }
              let nextOutputLines: string[] = agent.outputLines;
              if (Array.isArray(base.outputLines)) {
                nextOutputLines = base.outputLines as string[];
              }
              let transcriptMutated = false;

              if (patchHasTranscriptEntries) {
                const patchedTranscriptEntries =
                  patch.transcriptEntries as TranscriptEntry[];
                const normalized = TRANSCRIPT_V2_ENABLED
                  ? sortTranscriptEntries(patchedTranscriptEntries)
                  : [...patchedTranscriptEntries];
                transcriptMutated = !areTranscriptEntriesEqual(
                  existingEntries,
                  normalized,
                );
                nextEntries = normalized;
                nextOutputLines =
                  buildOutputLinesFromTranscriptEntries(normalized);
              } else if (patchHasOutputLines) {
                const patchedOutputLines = patch.outputLines as string[];
                const rebuilt = buildTranscriptEntriesFromLines({
                  lines: patchedOutputLines,
                  sessionKey: nextSessionKey || agent.sessionKey,
                  source: "legacy",
                  startSequence: 0,
                  confirmed: true,
                });
                const normalized = TRANSCRIPT_V2_ENABLED
                  ? sortTranscriptEntries(rebuilt)
                  : rebuilt;
                transcriptMutated = !areStringArraysEqual(
                  agent.outputLines,
                  patchedOutputLines,
                );
                nextEntries = normalized;
                nextOutputLines = TRANSCRIPT_V2_ENABLED
                  ? buildOutputLinesFromTranscriptEntries(normalized)
                  : [...patchedOutputLines];
              }

              const revision = transcriptMutated
                ? (agent.transcriptRevision ?? 0) + 1
                : (patch.transcriptRevision ?? agent.transcriptRevision ?? 0);
              const nextCounter = patchMutatesTranscript
                ? nextTranscriptSequenceCounter(
                    base.transcriptSequenceCounter,
                    nextEntries,
                  )
                : (base.transcriptSequenceCounter ??
                  agent.transcriptSequenceCounter ??
                  0);

              return {
                ...base,
                outputLines: nextOutputLines,
                transcriptEntries: nextEntries,
                transcriptRevision: revision,
                transcriptSequenceCounter: nextCounter,
                sessionEpoch:
                  patch.sessionEpoch !== undefined
                    ? patch.sessionEpoch
                    : sessionKeyChanged
                      ? (agent.sessionEpoch ?? 0) + 1
                      : (agent.sessionEpoch ?? 0),
              };
            }),
          }),
          false,
          "updateAgent",
        ),

      appendOutput: (agentId, line, transcript) =>
        set(
          (state) => ({
            agents: state.agents.map((agent) => {
              if (agent.agentId !== agentId) return agent;

              const existingEntries = ensureTranscriptEntries(agent);
              const nextSequence = nextTranscriptSequenceCounter(
                agent.transcriptSequenceCounter,
                existingEntries,
              );
              const nextEntry = createTranscriptEntryFromLine({
                line,
                sessionKey: transcript?.sessionKey ?? agent.sessionKey,
                source: transcript?.source ?? "legacy",
                runId: transcript?.runId ?? agent.runId,
                timestampMs: transcript?.timestampMs,
                fallbackTimestampMs: transcript?.timestampMs ?? Date.now(),
                role: transcript?.role,
                kind: transcript?.kind,
                entryId: transcript?.entryId,
                confirmed: transcript?.confirmed,
                sequenceKey: nextSequence,
              });
              if (!nextEntry) {
                const MAX_OUTPUT_LINES = 10_000;
                const appended = [...agent.outputLines, line];
                return {
                  ...agent,
                  outputLines:
                    appended.length > MAX_OUTPUT_LINES
                      ? appended.slice(-MAX_OUTPUT_LINES)
                      : appended,
                };
              }
              const nextEntryId = nextEntry.entryId.trim();
              const existingIndex =
                nextEntryId.length > 0
                  ? existingEntries.findIndex(
                      (entry) => entry.entryId === nextEntryId,
                    )
                  : -1;
              const hasReplacement = existingIndex >= 0;

              let nextEntries: TranscriptEntry[];
              if (hasReplacement) {
                let replacedOne = false;
                const replaced = existingEntries.reduce<TranscriptEntry[]>(
                  (acc, entry) => {
                    if (entry.entryId !== nextEntryId) {
                      acc.push(entry);
                      return acc;
                    }
                    if (replacedOne) {
                      return acc;
                    }
                    replacedOne = true;
                    acc.push({
                      ...nextEntry,
                      sequenceKey: entry.sequenceKey,
                    });
                    return acc;
                  },
                  [],
                );
                nextEntries = TRANSCRIPT_V2_ENABLED
                  ? sortTranscriptEntries(replaced)
                  : replaced;
              } else {
                const appended = [...existingEntries, nextEntry];
                nextEntries = TRANSCRIPT_V2_ENABLED
                  ? sortTranscriptEntries(appended)
                  : appended;
              }

              return {
                ...agent,
                outputLines: (() => {
                  const MAX_OUTPUT_LINES = 10_000;
                  const lines =
                    TRANSCRIPT_V2_ENABLED || hasReplacement
                      ? buildOutputLinesFromTranscriptEntries(nextEntries)
                      : [...agent.outputLines, line];
                  return lines.length > MAX_OUTPUT_LINES
                    ? lines.slice(-MAX_OUTPUT_LINES)
                    : lines;
                })(),
                transcriptEntries: nextEntries,
                transcriptRevision: (agent.transcriptRevision ?? 0) + 1,
                transcriptSequenceCounter: Math.max(
                  agent.transcriptSequenceCounter ?? 0,
                  nextEntry.sequenceKey + 1,
                ),
              };
            }),
          }),
          false,
          "appendOutput",
        ),

      enqueueQueuedMessage: (agentId, message) =>
        set(
          (state) => ({
            agents: state.agents.map((agent) => {
              if (agent.agentId !== agentId) return agent;
              const trimmed = message.trim();
              if (!trimmed) return agent;
              const queuedMessages = [
                ...(agent.queuedMessages ?? []),
                trimmed,
              ];
              return { ...agent, queuedMessages };
            }),
          }),
          false,
          "enqueueQueuedMessage",
        ),

      removeQueuedMessage: (agentId, index) =>
        set(
          (state) => ({
            agents: state.agents.map((agent) => {
              if (agent.agentId !== agentId) return agent;
              if (!Number.isInteger(index) || index < 0) return agent;
              const queuedMessages = agent.queuedMessages ?? [];
              if (index >= queuedMessages.length) return agent;
              return {
                ...agent,
                queuedMessages: queuedMessages.filter(
                  (_, i) => i !== index,
                ),
              };
            }),
          }),
          false,
          "removeQueuedMessage",
        ),

      shiftQueuedMessage: (agentId, expectedMessage) =>
        set(
          (state) => ({
            agents: state.agents.map((agent) => {
              if (agent.agentId !== agentId) return agent;
              const queuedMessages = agent.queuedMessages ?? [];
              if (queuedMessages.length === 0) return agent;
              if (
                expectedMessage !== undefined &&
                expectedMessage.trim() !== queuedMessages[0]
              ) {
                return agent;
              }
              return { ...agent, queuedMessages: queuedMessages.slice(1) };
            }),
          }),
          false,
          "shiftQueuedMessage",
        ),

      markActivity: (agentId, at) =>
        set(
          (state) => {
            const timestamp = at ?? Date.now();
            return {
              agents: state.agents.map((agent) => {
                if (agent.agentId !== agentId) return agent;
                const isSelected = state.selectedAgentId === agentId;
                return {
                  ...agent,
                  lastActivityAt: timestamp,
                  hasUnseenActivity: isSelected ? false : true,
                };
              }),
            };
          },
          false,
          "markActivity",
        ),
    }),
    { name: "AgentStore" },
  ),
);

// ---------------------------------------------------------------------------
// Granular selectors
// ---------------------------------------------------------------------------

/** Returns the currently selected AgentState, or undefined when nothing is selected. */
export const useSelectedAgent = () =>
  useAgentZustandStore((s) =>
    s.agents.find((a) => a.agentId === s.selectedAgentId),
  );

/** Returns the AgentState for a specific agent id, or undefined if not found. */
export const useAgentById = (agentId: string) =>
  useAgentZustandStore((s) => s.agents.find((a) => a.agentId === agentId));

/** Returns the full agents array. Prefer useAgentById / useSelectedAgent when possible. */
export const useAgentList = () => useAgentZustandStore((s) => s.agents);

/** Returns the global loading flag. */
export const useAgentLoading = () => useAgentZustandStore((s) => s.loading);

/** Returns the global error string (or null). */
export const useAgentError = () => useAgentZustandStore((s) => s.error);

/** Returns the currently selected agent id (or null). */
export const useSelectedAgentId = () =>
  useAgentZustandStore((s) => s.selectedAgentId);

/** Returns transcript entries for a specific agent. */
export const useAgentTranscript = (agentId: string) =>
  useAgentZustandStore(
    (s) =>
      s.agents.find((a) => a.agentId === agentId)?.transcriptEntries ?? [],
  );

/** Returns the status of a specific agent. */
export const useAgentStatus = (agentId: string) =>
  useAgentZustandStore(
    (s) =>
      s.agents.find((a) => a.agentId === agentId)?.status ?? "idle",
  );

/** Returns the queued messages for a specific agent. */
export const useAgentQueuedMessages = (agentId: string) =>
  useAgentZustandStore(
    (s) => s.agents.find((a) => a.agentId === agentId)?.queuedMessages ?? [],
  );

/** Returns the draft text for a specific agent. */
export const useAgentDraft = (agentId: string) =>
  useAgentZustandStore(
    (s) => s.agents.find((a) => a.agentId === agentId)?.draft ?? "",
  );

/** Returns the output lines for a specific agent. */
export const useAgentOutputLines = (agentId: string) =>
  useAgentZustandStore(
    (s) => s.agents.find((a) => a.agentId === agentId)?.outputLines ?? [],
  );

/** Returns the stream text for a specific agent. */
export const useAgentStreamText = (agentId: string) =>
  useAgentZustandStore(
    (s) => s.agents.find((a) => a.agentId === agentId)?.streamText ?? null,
  );

/** Returns whether a specific agent has unseen activity. */
export const useAgentHasUnseenActivity = (agentId: string) =>
  useAgentZustandStore(
    (s) =>
      s.agents.find((a) => a.agentId === agentId)?.hasUnseenActivity ?? false,
  );

/** Returns whether a specific agent is awaiting user input. */
export const useAgentAwaitingInput = (agentId: string) =>
  useAgentZustandStore(
    (s) =>
      s.agents.find((a) => a.agentId === agentId)?.awaitingUserInput ?? false,
  );

/** Returns the transcript revision for a specific agent. */
export const useAgentTranscriptRevision = (agentId: string) =>
  useAgentZustandStore(
    (s) =>
      s.agents.find((a) => a.agentId === agentId)?.transcriptRevision ?? 0,
  );
