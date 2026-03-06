export type SkillCategory =
  | "communication"
  | "productivity"
  | "data"
  | "development"
  | "marketing"
  | "finance"
  | "security"
  | "custom";

export type SkillDefinition = {
  id: string;
  name: string;
  description: string;
  category: SkillCategory;
  icon: string;
  author: string;
  version: string;
  rating: number;
  installs: number;
  tags: string[];
};

export type InstalledSkill = {
  skillId: string;
  installedAt: string;
  agentId?: string;
};

/** A skill entry from the real skills-catalog API */
export type CatalogSkill = {
  name: string;
  description?: string;
  agentId: string;
  enabled: boolean;
  path?: string;
};

// --- WebClaw Fusion types (Phase 5) ---

export type SkillFieldType =
  | "text"
  | "number"
  | "url"
  | "email"
  | "select"
  | "textarea"
  | "boolean";

export interface SkillField {
  name: string;
  label: string;
  type: SkillFieldType;
  placeholder?: string;
  required: boolean;
  options?: string[];
}

export interface SkillUISchema {
  commandName: string;
  commandDescription: string;
  fields: SkillField[];
}

export interface ParsedSkillCommand {
  name: string;
  description: string;
  exec: string;
  parameters: { name: string; placeholder: string }[];
}

export interface ParsedSkill {
  name: string;
  description: string;
  metadata: Record<string, unknown>;
  path: string;
  commands: ParsedSkillCommand[];
}

export interface SkillWithUI extends ParsedSkill {
  uiSchemas: SkillUISchema[];
}
