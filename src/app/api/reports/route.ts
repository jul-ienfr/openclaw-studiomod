import { NextResponse } from "next/server";
import { resolveStateDir } from "@/lib/clawdbot/paths";
import fs from "node:fs";
import path from "node:path";

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

function detectAgent(title: string): string | undefined {
  // Match patterns like "Rapport mining-crypto", "Rapport recherche-emploi", etc.
  const match = title.match(/^Rapport\s+(.+)$/i);
  if (match) return match[1].trim();

  // Also match "[Agent] Title" pattern
  const bracketMatch = title.match(/^\[([^\]]+)\]/);
  if (bracketMatch) return bracketMatch[1].trim();

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
  return {
    id: note.id,
    title: note.title,
    content: note.content,
    category: note.category,
    modified: note.modified,
    agent: detectAgent(note.title),
    status: detectStatus(note.content),
  };
}

export async function GET(request: Request) {
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

  const { searchParams } = new URL(request.url);
  const agentFilter = searchParams.get("agent");
  const statusFilter = searchParams.get("status") as ReportStatus | null;

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

    // Filter notes that look like reports (category contains "rapport" or title starts with "Rapport")
    let reports = notes
      .filter((note) => {
        const isReport =
          note.category.toLowerCase().includes("rapport") ||
          note.title.toLowerCase().startsWith("rapport") ||
          note.title.match(/^\[.+\]/) !== null;
        return isReport;
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
