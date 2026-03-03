import { NextResponse, type NextRequest } from "next/server";

export const runtime = "nodejs";

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
    return NextResponse.json({ tokens });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
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
    const body = await req.json().catch(() => ({}));
    const label = typeof body.label === "string" ? body.label.trim() : "";
    const entry = store.generateToken(label || "Mobile device");
    return NextResponse.json({ token: entry });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
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
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { error: "id parameter required" },
        { status: 400 },
      );
    }
    const removed = store.revokeToken(id);
    return NextResponse.json({ ok: removed });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
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
    const body = await req.json().catch(() => ({}));
    const { id, label } = body;
    if (!id || typeof label !== "string") {
      return NextResponse.json(
        { error: "id and label required" },
        { status: 400 },
      );
    }
    const updated = store.updateLabel(id, label.trim());
    return NextResponse.json({ ok: updated });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
