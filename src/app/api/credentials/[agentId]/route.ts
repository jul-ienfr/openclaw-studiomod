import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const vault = require("../../../../../server/credential-vault");
import { z } from "zod";
import { parseBody, isValidationError } from "@/lib/api/validation";

export const runtime = "nodejs";

type RouteContext = { params: Promise<{ agentId: string }> };

const CredentialEntrySchema = z
  .object({
    key: z.string(),
    value: z.string(),
  })
  .passthrough();

const PutBodySchema = z.array(CredentialEntrySchema);

export async function GET(_request: Request, context: RouteContext) {
  try {
    const { agentId } = await context.params;
    const entries = vault.loadCredentials(agentId);
    return NextResponse.json(entries);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to load credentials.";
    console.error(message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(request: Request, context: RouteContext) {
  try {
    const { agentId } = await context.params;
    const body = await parseBody(request, PutBodySchema);
    if (isValidationError(body)) return body;
    vault.saveCredentials(agentId, body);
    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to save credentials.";
    console.error(message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  try {
    const { agentId } = await context.params;
    vault.removeCredentials(agentId);
    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to remove credentials.";
    console.error(message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
