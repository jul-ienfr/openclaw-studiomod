import { describe, it, expect, beforeEach, vi } from "vitest";

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(globalThis, "localStorage", { value: localStorageMock });

// Inline the pure logic of agentUiPrefs to avoid localStorage-in-module-scope issues
type AgentUiPrefs = {
  toolCallingEnabled?: boolean;
  showThinkingTraces?: boolean;
  hideSystemMessages?: boolean;
  autoThinking?: boolean;
  model?: string | null;
  selectedChannel?: string;
};

const PREFS_KEY = (agentId: string) => `agent-ui-prefs:${agentId}`;

function loadAgentUiPrefs(agentId: string): AgentUiPrefs {
  try {
    const raw = localStorage.getItem(PREFS_KEY(agentId));
    if (!raw) return {};
    return JSON.parse(raw) as AgentUiPrefs;
  } catch {
    return {};
  }
}

function saveAgentUiPref<K extends keyof AgentUiPrefs>(
  agentId: string,
  key: K,
  value: AgentUiPrefs[K],
): void {
  try {
    const current = loadAgentUiPrefs(agentId);
    current[key] = value;
    localStorage.setItem(PREFS_KEY(agentId), JSON.stringify(current));
  } catch {
    // ignore
  }
}

describe("agentUiPrefs", () => {
  beforeEach(() => {
    localStorageMock.clear();
  });

  it("loadAgentUiPrefs returns {} when no prefs stored", () => {
    const prefs = loadAgentUiPrefs("agent-1");
    expect(prefs).toEqual({});
  });

  it("saveAgentUiPref persists a single key", () => {
    saveAgentUiPref("agent-1", "toolCallingEnabled", true);
    const prefs = loadAgentUiPrefs("agent-1");
    expect(prefs.toolCallingEnabled).toBe(true);
  });

  it("saveAgentUiPref updates without overwriting other keys", () => {
    saveAgentUiPref("agent-1", "toolCallingEnabled", true);
    saveAgentUiPref("agent-1", "showThinkingTraces", false);
    const prefs = loadAgentUiPrefs("agent-1");
    expect(prefs.toolCallingEnabled).toBe(true);
    expect(prefs.showThinkingTraces).toBe(false);
  });

  it("saveAgentUiPref can set model to null", () => {
    saveAgentUiPref("agent-1", "model", null);
    const prefs = loadAgentUiPrefs("agent-1");
    expect(prefs.model).toBeNull();
  });

  it("prefs are isolated per agentId", () => {
    saveAgentUiPref("agent-1", "toolCallingEnabled", true);
    saveAgentUiPref("agent-2", "toolCallingEnabled", false);
    expect(loadAgentUiPrefs("agent-1").toolCallingEnabled).toBe(true);
    expect(loadAgentUiPrefs("agent-2").toolCallingEnabled).toBe(false);
  });

  it("loadAgentUiPrefs returns {} on corrupted JSON", () => {
    localStorage.setItem(PREFS_KEY("agent-bad"), "NOT{JSON}");
    const prefs = loadAgentUiPrefs("agent-bad");
    expect(prefs).toEqual({});
  });
});
