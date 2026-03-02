const PREFS_KEY = (agentId: string) => `agent-ui-prefs:${agentId}`;

export type AgentUiPrefs = {
  toolCallingEnabled?: boolean;
  showThinkingTraces?: boolean;
  hideSystemMessages?: boolean;
  model?: string | null;
};

export function loadAgentUiPrefs(agentId: string): AgentUiPrefs {
  try {
    const raw = localStorage.getItem(PREFS_KEY(agentId));
    if (!raw) return {};
    return JSON.parse(raw) as AgentUiPrefs;
  } catch {
    return {};
  }
}

export function saveAgentUiPref<K extends keyof AgentUiPrefs>(
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
