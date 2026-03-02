import type { CredentialEntry } from "./types";
import {
  fetchAgentCredentials,
  saveAgentCredentials,
  deleteAgentCredentials,
} from "./credentialApi";

/**
 * Loads credentials from the server-side encrypted vault.
 * Falls back to empty array on error.
 */
export const loadAgentCredentials = async (agentId: string): Promise<CredentialEntry[]> => {
  try {
    return await fetchAgentCredentials(agentId);
  } catch {
    return [];
  }
};

/**
 * Persists credentials to the server-side encrypted vault.
 */
export const persistAgentCredentials = async (
  agentId: string,
  entries: CredentialEntry[],
): Promise<void> => {
  try {
    await saveAgentCredentials(agentId, entries);
  } catch {
    // best-effort
  }
};

/**
 * Removes all credentials for an agent from the vault.
 */
export const removeAgentCredentials = async (agentId: string): Promise<void> => {
  try {
    await deleteAgentCredentials(agentId);
  } catch {
    // ignore
  }
};
