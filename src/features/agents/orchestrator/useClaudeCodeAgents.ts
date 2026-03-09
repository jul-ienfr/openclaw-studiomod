import { useState, useEffect } from "react";

/**
 * Fetches the list of agent IDs that have Claude Code enabled
 * from the bridge plugin config endpoint.
 */
export function useClaudeCodeAgents(): string[] {
  const [agents, setAgents] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;
    fetch("/claude-code/api/config")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!cancelled && data?.agents) {
          setAgents(data.agents);
        }
      })
      .catch(() => {
        /* bridge not available */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return agents;
}
