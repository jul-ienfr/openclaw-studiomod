/**
 * Skill executor: template rendering with basic safety checks.
 * Does NOT execute commands — only renders the exec template string.
 */

/** Characters/patterns that indicate shell injection attempts */
const DANGEROUS_PATTERNS = [
  /[;|&`]/,
  /\$\(/,
  /\$\{/,
  /\n/,
  /\r/,
];

/**
 * Validate that a parameter value does not contain shell injection patterns.
 * Throws if dangerous content is detected.
 */
export function validateParam(name: string, value: string): void {
  for (const pattern of DANGEROUS_PATTERNS) {
    if (pattern.test(value)) {
      throw new Error(
        `Parameter "${name}" contains potentially dangerous characters. ` +
        `Values must not contain: ; | & \` $( \${`
      );
    }
  }
}

/**
 * Render an exec template by replacing {{param}} placeholders with provided values.
 * Also replaces {baseDir} with the skill directory path.
 *
 * @param execTemplate - The raw exec string from SKILL.md
 * @param parameters - Map of parameter name → user-provided value
 * @param baseDir - The skill directory path (replaces {baseDir})
 * @returns The rendered command string
 */
export function renderExecTemplate(
  execTemplate: string,
  parameters: Record<string, string>,
  baseDir: string,
): string {
  // Validate all parameter values
  for (const [name, value] of Object.entries(parameters)) {
    validateParam(name, value);
  }

  let result = execTemplate;

  // Replace {baseDir} (single braces)
  result = result.replace(/\{baseDir\}/g, baseDir);

  // Replace {{param}} and {{param|default}} placeholders
  result = result.replace(/\{\{(\w+)(?:\|([^}]*))?\}\}/g, (_match, name: string, defaultVal?: string) => {
    const value = parameters[name];
    if (value !== undefined && value !== "") return value;
    if (defaultVal !== undefined) return defaultVal;
    return `{{${name}}}`;  // leave unresolved if no value and no default
  });

  return result;
}
