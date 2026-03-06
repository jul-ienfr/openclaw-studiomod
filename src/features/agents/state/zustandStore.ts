"use client";

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { AgentStoreState, AgentState, AgentStoreSeed } from "./store";

// Zustand store mirroring the existing Context+useReducer store.
// This provides selectors for granular re-render control
// while maintaining backward compatibility with useAgentStore().
//
// IMPORTANT: This file is ADDITIVE. It does not replace or modify
// the existing store.tsx. The 48 callers of useAgentStore() are
// unaffected. New components can import from this file for
// optimized, selector-based subscriptions.

type AgentStoreActions = {
  hydrateAgents: (agents: AgentStoreSeed[], selectedAgentId?: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  selectAgent: (agentId: string | null) => void;
  updateAgent: (agentId: string, patch: Partial<AgentState>) => void;
};

type AgentZustandStore = AgentStoreState & AgentStoreActions;

export const useAgentZustandStore = create<AgentZustandStore>()(
  devtools(
    (set) => ({
      // Initial state — mirrors initialState in store.tsx
      agents: [],
      selectedAgentId: null,
      loading: false,
      error: null,

      // Actions

      hydrateAgents: (agents, selectedAgentId) =>
        set(
          (state) => ({
            agents: agents.map((seed) => {
              const existing = state.agents.find(
                (a) => a.agentId === seed.agentId,
              );
              return existing ? { ...existing, ...seed } : (seed as AgentState);
            }),
            selectedAgentId: selectedAgentId ?? state.selectedAgentId,
            loading: false,
          }),
          false,
          "hydrateAgents",
        ),

      setLoading: (loading) => set({ loading }, false, "setLoading"),

      setError: (error) => set({ error, loading: false }, false, "setError"),

      selectAgent: (agentId) =>
        set(
          (state) => ({
            selectedAgentId: agentId,
            agents:
              agentId === null
                ? state.agents
                : state.agents.map((a) =>
                    a.agentId === agentId
                      ? { ...a, hasUnseenActivity: false }
                      : a,
                  ),
          }),
          false,
          "selectAgent",
        ),

      updateAgent: (agentId, patch) =>
        set(
          (state) => ({
            agents: state.agents.map((a) =>
              a.agentId === agentId ? { ...a, ...patch } : a,
            ),
          }),
          false,
          "updateAgent",
        ),
    }),
    { name: "AgentStore" },
  ),
);

// ---------------------------------------------------------------------------
// Granular selectors — use these in new components to avoid re-rendering on
// unrelated state changes. Each selector only subscribes to the slice it needs.
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
