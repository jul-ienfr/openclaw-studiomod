import { NextResponse } from "next/server";
import { resolveStateDir } from "@/lib/clawdbot/paths";
import { parseQuery, isValidationError } from "@/lib/api/validation";
import { ReportsQuerySchema } from "@/lib/api/schemas/reports";
import fs from "node:fs";
import path from "node:path";
import { withErrorHandler } from "@/lib/api/error-handler";

export const runtime = "nodejs";

type NcConfig = {
  url: string;
  user: string;
  password: string;
};

type NcNote = {
  id: number;
  title: string;
  content: string;
  category: string;
  modified: number;
  favorite: boolean;
  readonly: boolean;
};

type ReportStatus = "OK" | "ALERTE" | "CRITIQUE";

type ParsedReport = {
  id: number;
  title: string;
  content: string;
  category: string;
  modified: number;
  agent?: string;
  status?: ReportStatus;
};

function loadNcConfig(): NcConfig | null {
  const stateDir = resolveStateDir();
  const configPath = path.join(
    stateDir,
    "openclaw-studio",
    "nextcloud-config.json",
  );
  try {
    if (!fs.existsSync(configPath)) return null;
    const raw = fs.readFileSync(configPath, "utf8");
    const parsed = JSON.parse(raw) as Partial<NcConfig>;
    if (!parsed.url || !parsed.user || !parsed.password) return null;
    return parsed as NcConfig;
  } catch {
    return null;
  }
}

function detectAgent(title: string, content?: string): string | undefined {
  // Match patterns like "Rapport mining-crypto", "Rapport recherche-emploi", etc.
  const match = title.match(/^Rapport\s+(.+)$/i);
  if (match) return match[1].trim();

  // Also match "[Agent] Title" pattern
  const bracketMatch = title.match(/^\[([^\]]+)\]/);
  if (bracketMatch) return bracketMatch[1].trim();

  // Fallback: extract from content header when title is generic ("New note")
  if (content) {
    // Match "# Rapport_2026-03-13_hebdo-business" or "# rapport_2026-03-13_mining"
    const contentDateMatch = content
      .trimStart()
      .match(/^#\s*Rapport[_\s]+\d{4}-\d{2}-\d{2}[_\s]+(.+)/im);
    if (contentDateMatch) return contentDateMatch[1].trim();

    // Match "# Rapport BU-1 Veille Intelligence" or "# Rapport mining-crypto"
    const contentMatch = content.trimStart().match(/^#\s*Rapport\s+(.+)/im);
    if (contentMatch) return contentMatch[1].trim();
  }

  return undefined;
}

function detectStatus(content: string): ReportStatus | undefined {
  // Search for status keywords in the content (case-insensitive)
  const upper = content.toUpperCase();

  // Check for CRITIQUE first (most severe)
  if (upper.includes("CRITIQUE") || upper.includes("CRITICAL"))
    return "CRITIQUE";

  // Then ALERTE
  if (
    upper.includes("ALERTE") ||
    upper.includes("ALERT") ||
    upper.includes("WARNING")
  )
    return "ALERTE";

  // Then OK
  if (
    upper.includes("STATUT: OK") ||
    upper.includes("STATUS: OK") ||
    upper.includes("STATUT : OK") ||
    upper.includes("## OK") ||
    /\bOK\b/.test(upper)
  ) {
    return "OK";
  }

  return undefined;
}

function parseReport(note: NcNote): ParsedReport {
  // When title is generic "New note (X)", extract a better title from content
  let displayTitle = note.title;
  if (
    displayTitle.match(/^New note/i) &&
    note.content.trimStart().startsWith("#")
  ) {
    const firstLine = note.content.trimStart().split("\n")[0];
    const headerMatch = firstLine.match(/^#+\s*(.+)/);
    if (headerMatch) displayTitle = headerMatch[1].trim();
  }

  return {
    id: note.id,
    title: displayTitle,
    content: note.content,
    category: note.category,
    modified: note.modified,
    agent: detectAgent(displayTitle, note.content),
    status: detectStatus(note.content),
  };
}

async function get_handler(request: Request) {
  const url = new URL(request.url);
  const query = parseQuery(url, ReportsQuerySchema);
  if (isValidationError(query)) return query;

  const config = loadNcConfig();
  if (!config) {
    const stateDir = resolveStateDir();
    const configPath = path.join(
      stateDir,
      "openclaw-studio",
      "nextcloud-config.json",
    );
    return NextResponse.json(
      {
        error: "Nextcloud non configure",
        message: `Fichier de configuration introuvable: ${configPath}. Creez ce fichier avec les champs "url", "user" et "password".`,
        reports: [],
      },
      { status: 404 },
    );
  }

  const agentFilter = query.agent ?? null;
  const statusFilter = query.status ?? null;

  const notesUrl = `${config.url.replace(/\/+$/, "")}/index.php/apps/notes/api/v1/notes`;
  const basicAuth = Buffer.from(`${config.user}:${config.password}`).toString(
    "base64",
  );

  try {
    const response = await fetch(notesUrl, {
      headers: {
        Accept: "application/json",
        Authorization: `Basic ${basicAuth}`,
      },
      signal: AbortSignal.timeout(15_000),
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          error: `Nextcloud a retourne une erreur ${response.status}`,
          message: response.statusText,
          reports: [],
        },
        { status: response.status >= 500 ? 502 : response.status },
      );
    }

    const notes: NcNote[] = await response.json();

    // Filter notes that look like reports
    let reports = notes
      .filter((note) => {
        // Category-based match (existing)
        const categoryMatch = note.category.toLowerCase().includes("rapport");
        // Title-based match (existing)
        const titleMatch =
          note.title.toLowerCase().startsWith("rapport") ||
          note.title.match(/^\[.+\]/) !== null;
        // Content-based match (NEW: catches "New note" entries that are actually reports)
        const contentMatch =
          note.content.trimStart().match(/^#\s*Rapport/i) !== null;

        return categoryMatch || titleMatch || contentMatch;
      })
      .map(parseReport);

    // Apply agent filter
    if (agentFilter) {
      reports = reports.filter(
        (r) =>
          r.agent && r.agent.toLowerCase().includes(agentFilter.toLowerCase()),
      );
    }

    // Apply status filter
    if (statusFilter) {
      reports = reports.filter((r) => r.status === statusFilter);
    }

    // Sort by modified date descending (most recent first)
    reports.sort((a, b) => b.modified - a.modified);

    return NextResponse.json({ reports, count: reports.length });
  } catch (err) {
    if (err instanceof Error && err.name === "TimeoutError") {
      return NextResponse.json(
        {
          error: "Timeout lors de la connexion a Nextcloud",
          message: `Impossible de joindre ${config.url} dans les 15 secondes.`,
          reports: [],
        },
        { status: 503 },
      );
    }

    const message = err instanceof Error ? err.message : "Erreur inconnue";
    return NextResponse.json(
      {
        error: "Connexion a Nextcloud impossible",
        message,
        reports: [],
      },
      { status: 503 },
    );
  }
}

export const GET = withErrorHandler(get_handler);
