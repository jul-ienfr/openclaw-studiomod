/**
 * AgentPersonalityPanel — re-exports AgentBrainPanel under the "personality" panel name.
 * The brain/personality editor lives in AgentBrainPanel.tsx; this file provides the
 * canonical export for the personality tab so call sites can import from either name.
 */
export { AgentBrainPanel as AgentPersonalityPanel } from "./AgentBrainPanel";
export { AgentBrainPanel } from "./AgentBrainPanel";
