import { NextResponse, type NextRequest } from "next/server";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { resolveStateDir } from "@/lib/clawdbot/paths";
import { applyRateLimit, RATE_LIMITS } from "@/lib/rateLimit";

export const runtime = "nodejs";

const ALGORITHM = "aes-256-gcm";
const VAULT_KEY_ENV = "OPENCLAW_VAULT_KEY";

function getKey(): Buffer {
  const keyB64 = process.env[VAULT_KEY_ENV];
  if (keyB64) {
    const buf = Buffer.from(keyB64, "base64");
    if (buf.length === 32) return buf;
  }
  // Derive a stable key from hostname as fallback
  return crypto.scryptSync(
    process.env.HOSTNAME ?? "openclaw-studio",
    "openclaw-vault-salt",
    32,
  );
}

function encrypt(plaintext: string): string {
  const key = getKey();
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
  const encrypted = Buffer.concat([
    cipher.update(plaintext, "utf8"),
    cipher.final(),
  ]);
  const tag = cipher.getAuthTag();
  return JSON.stringify({
    iv: iv.toString("base64"),
    tag: tag.toString("base64"),
    data: encrypted.toString("base64"),
  });
}

function decrypt(ciphertext: string): string {
  const key = getKey();
  const { iv, tag, data } = JSON.parse(ciphertext) as {
    iv: string;
    tag: string;
    data: string;
  };
  const decipher = crypto.createDecipheriv(
    ALGORITHM,
    key,
    Buffer.from(iv, "base64"),
  );
  decipher.setAuthTag(Buffer.from(tag, "base64"));
  return (
    decipher.update(Buffer.from(data, "base64")).toString("utf8") +
    decipher.final("utf8")
  );
}

function vaultPath(agentId: string): string {
  const stateDir = resolveStateDir();
  const dir = path.join(stateDir, "credentials");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { mode: 0o700 });
  return path.join(dir, `${agentId}.enc.json`);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const agentId = searchParams.get("agentId");
  if (!agentId)
    return NextResponse.json({ error: "agentId required" }, { status: 400 });

  try {
    const vp = vaultPath(agentId);
    if (!fs.existsSync(vp)) return NextResponse.json({ credentials: [] });
    const raw = fs.readFileSync(vp, "utf8");
    const plaintext = decrypt(raw);
    const credentials = JSON.parse(plaintext) as Array<{
      key: string;
      value: string;
    }>;
    return NextResponse.json({ credentials });
  } catch (err) {
    return NextResponse.json(
      { error: String(err), credentials: [] },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  const limited = applyRateLimit(request, RATE_LIMITS.credentials);
  if (limited) return limited;

  try {
    const body = (await request.json()) as {
      agentId: string;
      credentials: Array<{ key: string; value: string }>;
    };
    const { agentId, credentials } = body;
    if (!agentId || typeof agentId !== "string")
      return NextResponse.json({ error: "agentId required" }, { status: 400 });
    if (!Array.isArray(credentials))
      return NextResponse.json(
        { error: "credentials array required" },
        { status: 400 },
      );

    const vp = vaultPath(agentId);
    const plaintext = JSON.stringify(credentials);
    const encrypted = encrypt(plaintext);
    fs.writeFileSync(vp, encrypted, { mode: 0o600 });
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
