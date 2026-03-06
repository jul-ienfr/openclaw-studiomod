/**
 * AgentInspectPanels — backward-compat re-exports hub.
 *
 * All panel components have been split into dedicated files.
 * Existing imports from "@/features/agents/components/AgentInspectPanels"
 * continue to work without modification.
 */

// Brain / personality panel (was already in its own file)
export { AgentBrainPanel } from "./AgentBrainPanel";

// Main settings panel (capabilities, skills, system, automations, credentials, advanced)
export { AgentSettingsPanel } from "./AgentSettingsPanel";
export type { AgentSettingsPanelProps } from "./AgentSettingsPanel";

// Named aliases for the three canonical inspect panels
export { AgentPersonalityPanel } from "./AgentPersonalityPanel";
export { AgentSystemPanel } from "./AgentSystemPanel";
