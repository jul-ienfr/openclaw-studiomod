import { beforeEach, describe, expect, it } from "vitest";

import { type AgentStoreSeed } from "@/features/agents/state/store";
import { useAgentZustandStore } from "@/features/agents/state/zustandStore";
import { createTranscriptEntryFromLine } from "@/features/agents/state/transcript";

describe("agent store transcript upsert", () => {
  beforeEach(() => {
    useAgentZustandStore.setState({
      agents: [],
      selectedAgentId: null,
      loading: false,
      error: null,
    });
  });

  it("replaces appendOutput entries that share transcript entryId", () => {
    const seed: AgentStoreSeed = {
      agentId: "agent-1",
      name: "Agent One",
      sessionKey: "agent:agent-1:studio:test-session",
    };

    const store = useAgentZustandStore.getState();
    store.hydrateAgents([seed]);

    store.appendOutput("agent-1", "fallback final", {
      source: "runtime-agent",
      runId: "run-1",
      sessionKey: seed.sessionKey,
      timestampMs: 1000,
      role: "assistant",
      kind: "assistant",
      entryId: "run:run-1:assistant:final",
      confirmed: false,
    });

    store.appendOutput("agent-1", "canonical final", {
      source: "runtime-chat",
      runId: "run-1",
      sessionKey: seed.sessionKey,
      timestampMs: 1100,
      role: "assistant",
      kind: "assistant",
      entryId: "run:run-1:assistant:final",
      confirmed: true,
    });

    const agent = useAgentZustandStore
      .getState()
      .agents.find((entry) => entry.agentId === "agent-1");
    const assistantEntries = (agent?.transcriptEntries ?? []).filter(
      (entry) => entry.kind === "assistant",
    );

    expect(assistantEntries).toHaveLength(1);
    expect(assistantEntries[0]?.text).toBe("canonical final");
    expect(assistantEntries[0]?.confirmed).toBe(true);
    expect(agent?.outputLines).toEqual(["canonical final"]);
  });

  it("collapses duplicate transcript entryIds when applying an upsert", () => {
    const seed: AgentStoreSeed = {
      agentId: "agent-1",
      name: "Agent One",
      sessionKey: "agent:agent-1:studio:test-session",
    };

    const store = useAgentZustandStore.getState();
    store.hydrateAgents([seed]);

    const first = createTranscriptEntryFromLine({
      line: "first duplicate",
      sessionKey: seed.sessionKey,
      source: "runtime-agent",
      sequenceKey: 1,
      runId: "run-1",
      role: "assistant",
      kind: "assistant",
      entryId: "run:run-1:assistant:final",
      confirmed: false,
    });
    const second = createTranscriptEntryFromLine({
      line: "second duplicate",
      sessionKey: seed.sessionKey,
      source: "runtime-chat",
      sequenceKey: 2,
      runId: "run-1",
      role: "assistant",
      kind: "assistant",
      entryId: "run:run-1:assistant:final",
      confirmed: false,
    });
    if (!first || !second) {
      throw new Error("expected transcript entries");
    }

    store.updateAgent("agent-1", {
      transcriptEntries: [first, second],
      outputLines: [first.text, second.text],
    });

    store.appendOutput("agent-1", "canonical final", {
      source: "runtime-chat",
      runId: "run-1",
      sessionKey: seed.sessionKey,
      timestampMs: 1100,
      role: "assistant",
      kind: "assistant",
      entryId: "run:run-1:assistant:final",
      confirmed: true,
    });

    const agent = useAgentZustandStore
      .getState()
      .agents.find((entry) => entry.agentId === "agent-1");
    const assistantEntries = (agent?.transcriptEntries ?? []).filter(
      (entry) => entry.kind === "assistant",
    );

    expect(assistantEntries).toHaveLength(1);
    expect(assistantEntries[0]?.text).toBe("canonical final");
    expect(agent?.outputLines).toEqual(["canonical final"]);
  });
});
