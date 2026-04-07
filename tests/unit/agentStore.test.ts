import { beforeEach, describe, expect, it } from "vitest";

import {
  buildNewSessionAgentPatch,
  getFilteredAgents,
  type AgentStoreSeed,
} from "@/features/agents/state/store";
import { useAgentZustandStore } from "@/features/agents/state/zustandStore";

describe("agent store", () => {
  beforeEach(() => {
    useAgentZustandStore.setState({
      agents: [],
      selectedAgentId: null,
      loading: false,
      error: null,
    });
  });

  it("hydrates agents with defaults and selection", () => {
    const seed: AgentStoreSeed = {
      agentId: "agent-1",
      name: "Agent One",
      sessionKey: "agent:agent-1:main",
    };
    useAgentZustandStore.getState().hydrateAgents([seed]);
    const state = useAgentZustandStore.getState();
    expect(state.loading).toBe(false);
    expect(state.selectedAgentId).toBe("agent-1");
    expect(state.agents).toHaveLength(1);
    expect(state.agents[0].status).toBe("idle");
    expect(state.agents[0].thinkingLevel).toBe("high");
    expect(state.agents[0].sessionCreated).toBe(false);
    expect(state.agents[0].outputLines).toEqual([]);
  });

  it("hydrates agents with a requested selection when present", () => {
    const seeds: AgentStoreSeed[] = [
      {
        agentId: "agent-1",
        name: "Agent One",
        sessionKey: "agent:agent-1:main",
      },
      {
        agentId: "agent-2",
        name: "Agent Two",
        sessionKey: "agent:agent-2:main",
      },
    ];
    useAgentZustandStore.getState().hydrateAgents(seeds, " agent-2 ");
    expect(useAgentZustandStore.getState().selectedAgentId).toBe("agent-2");
  });

  it("keeps existing selection when requested selection is invalid", () => {
    const seeds: AgentStoreSeed[] = [
      {
        agentId: "agent-1",
        name: "Agent One",
        sessionKey: "agent:agent-1:main",
      },
      {
        agentId: "agent-2",
        name: "Agent Two",
        sessionKey: "agent:agent-2:main",
      },
    ];
    const store = useAgentZustandStore.getState();
    store.hydrateAgents(seeds);
    store.selectAgent("agent-2");
    store.hydrateAgents(seeds, "missing-agent");
    expect(useAgentZustandStore.getState().selectedAgentId).toBe("agent-2");
  });

  it("builds a patch that resets runtime state for a session reset", () => {
    const seed: AgentStoreSeed = {
      agentId: "agent-1",
      name: "Agent One",
      sessionKey: "agent:agent-1:studio:old-session",
    };
    const store = useAgentZustandStore.getState();
    store.hydrateAgents([seed]);
    store.updateAgent("agent-1", {
      status: "running",
      awaitingUserInput: true,
      hasUnseenActivity: true,
      outputLines: ["> hello", "response"],
      lastResult: "response",
      lastDiff: "diff",
      runId: "run-1",
      streamText: "live",
      thinkingTrace: "thinking",
      latestOverride: "override",
      latestOverrideKind: "heartbeat",
      lastAssistantMessageAt: 1700000000000,
      lastActivityAt: 1700000000001,
      latestPreview: "preview",
      lastUserMessage: "hello",
      draft: "draft",
      historyLoadedAt: 1700000000002,
    });

    const agent = useAgentZustandStore
      .getState()
      .agents.find((entry) => entry.agentId === "agent-1")!;
    const patch = buildNewSessionAgentPatch(agent);

    expect(patch.sessionKey).toBe("agent:agent-1:studio:old-session");
    expect(patch.status).toBe("idle");
    expect(patch.sessionCreated).toBe(true);
    expect(patch.sessionSettingsSynced).toBe(true);
    expect(patch.outputLines).toEqual([]);
    expect(patch.streamText).toBeNull();
    expect(patch.thinkingTrace).toBeNull();
    expect(patch.lastResult).toBeNull();
    expect(patch.lastDiff).toBeNull();
    expect(patch.historyLoadedAt).toBeNull();
    expect(patch.lastUserMessage).toBeNull();
    expect(patch.runId).toBeNull();
    expect(patch.runStartedAt).toBeNull();
    expect(patch.latestPreview).toBeNull();
    expect(patch.latestOverride).toBeNull();
    expect(patch.latestOverrideKind).toBeNull();
    expect(patch.lastAssistantMessageAt).toBeNull();
    expect(patch.awaitingUserInput).toBe(false);
    expect(patch.hasUnseenActivity).toBe(false);
    expect(patch.draft).toBe("");
  });

  it("preserves_session_created_state_across_hydration", () => {
    const seed: AgentStoreSeed = {
      agentId: "agent-1",
      name: "Agent One",
      sessionKey: "agent:agent-1:main",
    };
    const store = useAgentZustandStore.getState();
    store.hydrateAgents([seed]);
    store.updateAgent("agent-1", { sessionCreated: true });
    store.hydrateAgents([seed]);
    expect(useAgentZustandStore.getState().agents[0]?.sessionCreated).toBe(
      true,
    );
  });

  it("resets_runtime_state_when_session_key_changes_on_hydration", () => {
    const initialSeed: AgentStoreSeed = {
      agentId: "agent-1",
      name: "Agent One",
      sessionKey: "agent:agent-1:studio:legacy",
    };
    const store = useAgentZustandStore.getState();
    store.hydrateAgents([initialSeed]);
    store.updateAgent("agent-1", {
      sessionCreated: true,
      outputLines: ["> old"],
      lastResult: "old result",
      runId: "run-1",
    });

    const nextSeed: AgentStoreSeed = {
      agentId: "agent-1",
      name: "Agent One",
      sessionKey: "agent:agent-1:main",
    };
    store.hydrateAgents([nextSeed]);
    const next = useAgentZustandStore.getState().agents[0];
    expect(next?.sessionKey).toBe("agent:agent-1:main");
    expect(next?.sessionCreated).toBe(false);
    expect(next?.outputLines).toEqual([]);
    expect(next?.lastResult).toBeNull();
    expect(next?.runId).toBeNull();
  });

  it("keeps_transcript_references_for_non_transcript_agent_updates", () => {
    const seed: AgentStoreSeed = {
      agentId: "agent-1",
      name: "Agent One",
      sessionKey: "agent:agent-1:main",
    };
    const store = useAgentZustandStore.getState();
    store.hydrateAgents([seed]);
    store.updateAgent("agent-1", {
      outputLines: ["> hello", "response"],
    });

    const beforeDraftUpdate = useAgentZustandStore.getState().agents[0];

    store.updateAgent("agent-1", { draft: "x" });
    const afterDraftUpdate = useAgentZustandStore.getState().agents[0];

    expect(afterDraftUpdate.outputLines).toBe(beforeDraftUpdate.outputLines);
    expect(afterDraftUpdate.transcriptEntries).toBe(
      beforeDraftUpdate.transcriptEntries,
    );
    expect(afterDraftUpdate.transcriptSequenceCounter).toBe(
      beforeDraftUpdate.transcriptSequenceCounter,
    );
  });

  it("tracks_unseen_activity_for_non_selected_agents", () => {
    const seeds: AgentStoreSeed[] = [
      {
        agentId: "agent-1",
        name: "Agent One",
        sessionKey: "agent:agent-1:main",
      },
      {
        agentId: "agent-2",
        name: "Agent Two",
        sessionKey: "agent:agent-2:main",
      },
    ];
    const store = useAgentZustandStore.getState();
    store.hydrateAgents(seeds);
    store.markActivity("agent-2", 1700000000000);
    const second = useAgentZustandStore
      .getState()
      .agents.find((agent) => agent.agentId === "agent-2");
    expect(second?.hasUnseenActivity).toBe(true);
    expect(second?.lastActivityAt).toBe(1700000000000);

    store.selectAgent("agent-2");
    const cleared = useAgentZustandStore
      .getState()
      .agents.find((agent) => agent.agentId === "agent-2");
    expect(cleared?.hasUnseenActivity).toBe(false);
  });

  it("filters_agents_by_status_and_approvals", () => {
    const seeds: AgentStoreSeed[] = [
      {
        agentId: "agent-1",
        name: "Agent One",
        sessionKey: "agent:agent-1:main",
      },
      {
        agentId: "agent-2",
        name: "Agent Two",
        sessionKey: "agent:agent-2:main",
      },
      {
        agentId: "agent-3",
        name: "Agent Three",
        sessionKey: "agent:agent-3:main",
      },
    ];
    const store = useAgentZustandStore.getState();
    store.hydrateAgents(seeds);
    store.updateAgent("agent-1", {
      status: "idle",
      awaitingUserInput: true,
    });
    store.updateAgent("agent-2", { status: "running" });
    store.updateAgent("agent-3", { status: "error" });

    const state = useAgentZustandStore.getState();
    expect(
      getFilteredAgents(state, "all").map((agent) => agent.agentId),
    ).toEqual(["agent-2", "agent-1", "agent-3"]);
    expect(
      getFilteredAgents(state, "running").map((agent) => agent.agentId),
    ).toEqual(["agent-2"]);
    expect(
      getFilteredAgents(state, "approvals").map((agent) => agent.agentId),
    ).toEqual(["agent-1"]);
  });

  it("clears_unseen_indicator_on_focus", () => {
    const seeds: AgentStoreSeed[] = [
      {
        agentId: "agent-1",
        name: "Agent One",
        sessionKey: "agent:agent-1:main",
      },
      {
        agentId: "agent-2",
        name: "Agent Two",
        sessionKey: "agent:agent-2:main",
      },
    ];
    const store = useAgentZustandStore.getState();
    store.hydrateAgents(seeds);
    store.markActivity("agent-2", 1700000000100);

    const before = useAgentZustandStore
      .getState()
      .agents.find((agent) => agent.agentId === "agent-2");
    expect(before?.hasUnseenActivity).toBe(true);

    store.selectAgent("agent-2");
    const after = useAgentZustandStore
      .getState()
      .agents.find((agent) => agent.agentId === "agent-2");
    expect(after?.hasUnseenActivity).toBe(false);
  });

  it("sorts_filtered_agents_by_latest_assistant_message", () => {
    const seeds: AgentStoreSeed[] = [
      {
        agentId: "agent-1",
        name: "Agent One",
        sessionKey: "agent:agent-1:main",
      },
      {
        agentId: "agent-2",
        name: "Agent Two",
        sessionKey: "agent:agent-2:main",
      },
      {
        agentId: "agent-3",
        name: "Agent Three",
        sessionKey: "agent:agent-3:main",
      },
    ];
    const store = useAgentZustandStore.getState();
    store.hydrateAgents(seeds);
    store.updateAgent("agent-1", {
      status: "running",
      lastAssistantMessageAt: 200,
    });
    store.updateAgent("agent-2", {
      status: "running",
      lastAssistantMessageAt: 500,
    });
    store.updateAgent("agent-3", {
      status: "running",
      lastAssistantMessageAt: 300,
    });

    const state = useAgentZustandStore.getState();
    expect(
      getFilteredAgents(state, "all").map((agent) => agent.agentId),
    ).toEqual(["agent-2", "agent-3", "agent-1"]);
    expect(
      getFilteredAgents(state, "running").map((agent) => agent.agentId),
    ).toEqual(["agent-2", "agent-3", "agent-1"]);
  });

  it("prioritizes_running_agents_in_all_filter_even_without_assistant_reply", () => {
    const seeds: AgentStoreSeed[] = [
      {
        agentId: "agent-1",
        name: "Agent One",
        sessionKey: "agent:agent-1:main",
      },
      {
        agentId: "agent-2",
        name: "Agent Two",
        sessionKey: "agent:agent-2:main",
      },
    ];
    const store = useAgentZustandStore.getState();
    store.hydrateAgents(seeds);
    store.updateAgent("agent-1", {
      status: "idle",
      lastAssistantMessageAt: 900,
    });
    store.updateAgent("agent-2", {
      status: "running",
      runStartedAt: 1000,
      lastAssistantMessageAt: null,
    });

    const state = useAgentZustandStore.getState();
    expect(
      getFilteredAgents(state, "all").map((agent) => agent.agentId),
    ).toEqual(["agent-2", "agent-1"]);
  });
});
