import type { CredentialEntry } from "./types";

const API_BASE = "/api/credentials";

export const fetchAgentCredentials = async (agentId: string): Promise<CredentialEntry[]> => {
  const res = await fetch(`${API_BASE}/${encodeURIComponent(agentId)}`);
  if (!res.ok) throw new Error("Failed to load credentials");
  return res.json() as Promise<CredentialEntry[]>;
};

export const saveAgentCredentials = async (
  agentId: string,
  entries: CredentialEntry[],
): Promise<void> => {
  const res = await fetch(`${API_BASE}/${encodeURIComponent(agentId)}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(entries),
  });
  if (!res.ok) throw new Error("Failed to save credentials");
};

export const deleteAgentCredentials = async (agentId: string): Promise<void> => {
  const res = await fetch(`${API_BASE}/${encodeURIComponent(agentId)}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete credentials");
};
