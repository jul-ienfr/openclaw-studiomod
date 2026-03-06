import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { parseBody, parseQuery, isValidationError } from "@/lib/api/validation";
import { createLogger } from "@/lib/logger";

export const runtime = "nodejs";

const log = createLogger("api:mobile-access:tokens");

// --- Schemas ---

const TokenPostSchema = z.object({
  label: z.string().optional().default("Mobile device"),
});

const TokenDeleteQuerySchema = z.object({
  id: z.string().min(1, "id parameter required"),
});

const TokenPatchSchema = z.object({
  id: z.string().min(1, "id required"),
  label: z.string().min(1, "label required"),
});

// Singleton module — same instance used by server/index.js and access-gate.js
// eslint-disable-next-line @typescript-eslint/no-require-imports
const store = require("../../../../../server/mobile-token-store") as {
  generateToken: (label: string) => {
    id: string;
    token: string;
    label: string;
    createdAt: string;
    lastUsedAt: string | null;
  };
  revokeToken: (id: string) => boolean;
  updateLabel: (id: string, label: string) => boolean;
  listTokens: () => {
    id: string;
    label: string;
    createdAt: string;
    lastUsedAt: string | null;
    tokenPrefix: string;
  }[];
};

function isMasterAuth(req: NextRequest): boolean {
  const masterToken = process.env.STUDIO_ACCESS_TOKEN?.trim();
  if (!masterToken) return true;
  const cookie = req.cookies.get("studio_access")?.value;
  return cookie === masterToken;
}

/** GET — list all instance tokens (without raw token values) */
export async function GET(req: NextRequest) {
  if (!isMasterAuth(req)) {
    return NextResponse.json(
      { error: "Master token required" },
      { status: 403 },
    );
  }
  try {
    const tokens = store.listTokens();
    log.info("Listed mobile tokens", { count: tokens.length });
    return NextResponse.json({ tokens });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    log.error("Failed to list tokens", { error: msg });
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

/** POST — generate a new instance token */
export async function POST(req: NextRequest) {
  if (!isMasterAuth(req)) {
    return NextResponse.json(
      { error: "Master token required" },
      { status: 403 },
    );
  }
  try {
    const parsed = await parseBody(req, TokenPostSchema);
    if (isValidationError(parsed)) return parsed;

    const label = parsed.label.trim() || "Mobile device";
    const entry = store.generateToken(label);
    log.info("Generated mobile token", { id: entry.id, label });
    return NextResponse.json({ token: entry });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    log.error("Failed to generate token", { error: msg });
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

/** DELETE — revoke an instance token by ID */
export async function DELETE(req: NextRequest) {
  if (!isMasterAuth(req)) {
    return NextResponse.json(
      { error: "Master token required" },
      { status: 403 },
    );
  }
  try {
    const url = new URL(req.url);
    const parsed = parseQuery(url, TokenDeleteQuerySchema);
    if (isValidationError(parsed)) return parsed;

    const removed = store.revokeToken(parsed.id);
    log.info("Revoked mobile token", { id: parsed.id, removed });
    return NextResponse.json({ ok: removed });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    log.error("Failed to revoke token", { error: msg });
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

/** PATCH — update token label */
export async function PATCH(req: NextRequest) {
  if (!isMasterAuth(req)) {
    return NextResponse.json(
      { error: "Master token required" },
      { status: 403 },
    );
  }
  try {
    const parsed = await parseBody(req, TokenPatchSchema);
    if (isValidationError(parsed)) return parsed;

    const updated = store.updateLabel(parsed.id, parsed.label.trim());
    log.info("Updated token label", { id: parsed.id, label: parsed.label });
    return NextResponse.json({ ok: updated });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    log.error("Failed to update token label", { error: msg });
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
