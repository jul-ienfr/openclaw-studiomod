import type { ParsedSkill, ParsedSkillCommand } from "./skill-parser";

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

export interface SkillWithUI extends ParsedSkill {
  uiSchemas: SkillUISchema[];
}

/** Patterns for inferring field types from parameter names */
const TYPE_PATTERNS: [RegExp, SkillFieldType][] = [
  [/^(url|endpoint|base_url|baseurl|href|link|uri|website)$/i, "url"],
  [/^(count|port|limit|max|min|num|number|amount|quantity|timeout|retries|periode_jours)$/i, "number"],
  [/^(email|mail|e_mail)$/i, "email"],
  [/^(enabled|active|force|verbose|debug|dry_run|dryrun|confirm|recursive|vad)$/i, "boolean"],
  [/^(text|message|content|prompt|body|description|caption|query|comment|transcript|note)$/i, "textarea"],
];

/**
 * Infer the UI field type from a parameter name.
 */
function inferFieldType(paramName: string): SkillFieldType {
  for (const [pattern, type] of TYPE_PATTERNS) {
    if (pattern.test(paramName)) return type;
  }
  return "text";
}

/**
 * Convert a snake_case or camelCase parameter name into a human-readable label.
 */
function toLabel(paramName: string): string {
  return paramName
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Build a UI schema for a single parsed command.
 */
function buildCommandSchema(cmd: ParsedSkillCommand): SkillUISchema {
  const fields: SkillField[] = cmd.parameters.map((p) => {
    const type = inferFieldType(p.name);
    return {
      name: p.name,
      label: toLabel(p.name),
      type,
      placeholder: p.placeholder || undefined,
      required: !p.placeholder, // has default = optional
    };
  });

  return {
    commandName: cmd.name,
    commandDescription: cmd.description,
    fields,
  };
}

/**
 * Build UI schemas for all commands in a parsed skill.
 */
export function buildUISchemas(skill: ParsedSkill): SkillUISchema[] {
  return skill.commands.map(buildCommandSchema);
}

/**
 * Enrich a ParsedSkill with UI schemas.
 */
export function enrichWithUI(skill: ParsedSkill): SkillWithUI {
  return {
    ...skill,
    uiSchemas: buildUISchemas(skill),
  };
}
