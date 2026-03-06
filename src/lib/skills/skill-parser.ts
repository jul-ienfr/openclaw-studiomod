import fs from "node:fs";
import path from "node:path";

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

/**
 * Extract YAML frontmatter from SKILL.md content.
 * Returns the frontmatter fields and the remaining body.
 */
function parseFrontmatter(content: string): {
  name: string;
  description: string;
  metadata: Record<string, unknown>;
  body: string;
} {
  const fmMatch = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!fmMatch) {
    return { name: "", description: "", metadata: {}, body: content };
  }

  const fmBlock = fmMatch[1];
  const body = fmMatch[2];

  // Simple YAML key-value parsing (handles strings, JSON objects)
  let name = "";
  let description = "";
  let metadata: Record<string, unknown> = {};

  for (const line of fmBlock.split("\n")) {
    const kv = line.match(/^(\w[\w-]*):\s*(.+)$/);
    if (!kv) continue;
    const [, key, rawVal] = kv;
    // Strip surrounding quotes
    const val = rawVal.replace(/^["'](.*)["']$/, "$1");

    if (key === "name") {
      name = val;
    } else if (key === "description") {
      description = val;
    } else if (key === "metadata") {
      try {
        metadata = JSON.parse(rawVal);
      } catch {
        metadata = {};
      }
    }
  }

  return { name, description, metadata, body };
}

/**
 * Extract {{paramName}} and {{paramName|default}} placeholders from an exec string.
 */
function extractParameters(
  exec: string,
): { name: string; placeholder: string }[] {
  const params: { name: string; placeholder: string }[] = [];
  const seen = new Set<string>();
  const re = /\{\{(\w+)(?:\|([^}]*))?\}\}/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(exec)) !== null) {
    const paramName = m[1];
    if (seen.has(paramName)) continue;
    seen.add(paramName);
    params.push({ name: paramName, placeholder: m[2] ?? "" });
  }
  return params;
}

/**
 * Parse all commands from the SKILL.md body.
 *
 * Commands are detected as:
 * 1. "### commandName" or "### commandName — description" headers followed by ```exec or ```bash blocks containing "exec ..."
 * 2. "## Title" sections with ```exec blocks
 *
 * Also supports bare ```exec blocks under ## headings.
 */
function parseCommands(body: string): ParsedSkillCommand[] {
  const commands: ParsedSkillCommand[] = [];
  const lines = body.split("\n");

  let currentH2 = "";
  let currentH2Desc = "";
  let currentH3 = "";
  let currentH3Desc = "";
  let inCodeBlock = false;
  let codeBlockLang = "";
  let codeLines: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Track H2 headings
    const h2Match = line.match(
      /^##\s+(.+?)(?:\s+[—\-]+\s+(.+))?$/,
    );
    if (h2Match && !inCodeBlock) {
      currentH2 = h2Match[1].trim();
      currentH2Desc = h2Match[2]?.trim() ?? "";
      currentH3 = "";
      currentH3Desc = "";
      continue;
    }

    // Track H3 headings
    const h3Match = line.match(
      /^###\s+(.+?)(?:\s+[—\-]+\s+(.+))?$/,
    );
    if (h3Match && !inCodeBlock) {
      currentH3 = h3Match[1].trim();
      currentH3Desc = h3Match[2]?.trim() ?? "";
      continue;
    }

    // Code block start
    if (!inCodeBlock && line.match(/^```(exec|bash|sh)?/)) {
      inCodeBlock = true;
      codeBlockLang = line.replace(/^```/, "").trim();
      codeLines = [];
      continue;
    }

    // Code block end
    if (inCodeBlock && line.match(/^```\s*$/)) {
      inCodeBlock = false;

      // Find exec lines in the code block
      const execLines = codeLines.filter((l) => l.trimStart().startsWith("exec "));

      if (execLines.length > 0 || codeBlockLang === "exec") {
        const execContent =
          execLines.length > 0
            ? execLines.map((l) => l.replace(/^\s*exec\s+/, "").trim()).join("\n")
            : codeLines.join("\n").trim();

        // Determine command name — prefer H3, fall back to H2
        let cmdName = currentH3 || currentH2;
        let cmdDesc = currentH3Desc || currentH2Desc;

        if (!cmdName) {
          // Try to derive from the exec content
          cmdName = execContent.split(/\s+/).slice(0, 2).join(" ");
        }

        // Normalize command name to a slug
        const slug = cmdName
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "");

        commands.push({
          name: slug || `command-${commands.length + 1}`,
          description: cmdDesc || cmdName,
          exec: execContent,
          parameters: extractParameters(execContent),
        });
      }

      codeLines = [];
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
    }
  }

  return commands;
}

/**
 * Parse a SKILL.md file at the given path.
 */
export function parseSkillMd(skillDir: string): ParsedSkill | null {
  const mdPath = path.join(skillDir, "SKILL.md");
  if (!fs.existsSync(mdPath)) return null;

  try {
    const content = fs.readFileSync(mdPath, "utf8");
    const { name, description, metadata, body } = parseFrontmatter(content);
    const commands = parseCommands(body);

    return {
      name: name || path.basename(skillDir),
      description,
      metadata,
      path: skillDir,
      commands,
    };
  } catch {
    return null;
  }
}

/**
 * Get the mtime of a SKILL.md file (for cache invalidation).
 */
export function getSkillMtime(skillDir: string): number {
  try {
    const mdPath = path.join(skillDir, "SKILL.md");
    return fs.statSync(mdPath).mtimeMs;
  } catch {
    return 0;
  }
}

/**
 * List all skill directories under the given base path.
 */
export function listSkillDirs(skillsBase: string): string[] {
  if (!fs.existsSync(skillsBase)) return [];
  try {
    return fs
      .readdirSync(skillsBase, { withFileTypes: true })
      .filter((d) => d.isDirectory() && !d.name.startsWith("_"))
      .map((d) => path.join(skillsBase, d.name))
      .filter((dir) => fs.existsSync(path.join(dir, "SKILL.md")));
  } catch {
    return [];
  }
}
