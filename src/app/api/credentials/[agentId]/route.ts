import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const vault = require("../../../../../server/credential-vault");

export const runtime = "nodejs";

type RouteContext = { params: Promise<{ agentId: string }> };

const isArray = (value: unknown): value is unknown[] => Array.isArray(value);

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
    const body = (await request.json()) as unknown;
    if (!isArray(body)) {
      return NextResponse.json({ error: "Expected an array of credential entries." }, { status: 400 });
    }
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
