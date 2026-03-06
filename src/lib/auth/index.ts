import crypto from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import {
  createSession as dbCreateSession,
  createUser as dbCreateUser,
  deleteSessionByTokenHash,
  findSessionByTokenHash,
  findUserById,
  updateLastLogin,
  type SafeUser,
} from "@/lib/db/repositories/auth-repo";

// ─── Constants ────────────────────────────────────────────────────────────────

export const SESSION_COOKIE_NAME = "studio_session";
const SESSION_TTL_DEFAULT = 7 * 24 * 60 * 60 * 1000; // 7 days
const SESSION_TTL_REMEMBER = 30 * 24 * 60 * 60 * 1000; // 30 days

// ─── Password helpers ─────────────────────────────────────────────────────────

export async function hashPassword(password: string): Promise<string> {
  return Bun.password.hash(password, { algorithm: "bcrypt", cost: 12 });
}

export async function verifyPassword(
  password: string,
  hash: string,
): Promise<boolean> {
  return Bun.password.verify(password, hash);
}

// ─── Token helpers ────────────────────────────────────────────────────────────

function generateToken(): string {
  return crypto.randomBytes(32).toString("hex");
}

function hashToken(token: string): string {
  return crypto.createHash("sha256").update(token).digest("hex");
}

// ─── Session management ───────────────────────────────────────────────────────

export async function createAuthSession(
  userId: string,
  opts: {
    userAgent?: string;
    ip?: string;
    rememberMe?: boolean;
  } = {},
): Promise<{ token: string; expiresAt: number }> {
  const token = generateToken();
  const tokenHash = hashToken(token);
  const sessionId = crypto.randomUUID();
  const ttl = opts.rememberMe ? SESSION_TTL_REMEMBER : SESSION_TTL_DEFAULT;
  const expiresAt = Date.now() + ttl;

  dbCreateSession({
    id: sessionId,
    user_id: userId,
    token_hash: tokenHash,
    expires_at: expiresAt,
    user_agent: opts.userAgent,
    ip: opts.ip,
  });

  await updateLastLogin(userId);

  return { token, expiresAt };
}

export async function validateSessionToken(
  token: string,
): Promise<SafeUser | null> {
  const tokenHash = hashToken(token);
  const session = findSessionByTokenHash(tokenHash);
  if (!session) return null;
  if (session.expires_at < Date.now()) {
    deleteSessionByTokenHash(tokenHash);
    return null;
  }
  return findUserById(session.user_id);
}

export async function revokeSessionToken(token: string): Promise<void> {
  const tokenHash = hashToken(token);
  deleteSessionByTokenHash(tokenHash);
}

// ─── Auth user creation helper ────────────────────────────────────────────────

export async function createAdminUser(params: {
  username: string;
  password: string;
  displayName?: string;
}): Promise<SafeUser> {
  const id = crypto.randomUUID();
  const password_hash = await hashPassword(params.password);
  return dbCreateUser({
    id,
    username: params.username,
    display_name: params.displayName,
    password_hash,
    role: "admin",
  });
}

// ─── Cookie helpers ───────────────────────────────────────────────────────────

export function setSessionCookie(
  response: NextResponse,
  token: string,
  expiresAt: number,
): void {
  const maxAge = Math.floor((expiresAt - Date.now()) / 1000);
  response.cookies.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: maxAge > 0 ? maxAge : 0,
    // secure only in real HTTPS environments
    secure: process.env.NODE_ENV === "production" && process.env.FORCE_HTTPS === "true",
  });
}

export function clearSessionCookie(response: NextResponse): void {
  response.cookies.set(SESSION_COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}

export function getSessionToken(req: NextRequest): string | null {
  return req.cookies.get(SESSION_COOKIE_NAME)?.value ?? null;
}

// ─── requireAuth middleware ───────────────────────────────────────────────────

export interface AuthContext {
  user: SafeUser;
  sessionToken: string;
}

/**
 * Extract and validate the session from the request.
 * Returns an AuthContext on success, or a 401 NextResponse on failure.
 */
export async function requireAuth(
  req: NextRequest,
): Promise<AuthContext | NextResponse> {
  const token = getSessionToken(req);
  if (!token) {
    return NextResponse.json(
      { error: "Authentication required" },
      { status: 401 },
    );
  }
  const user = await validateSessionToken(token);
  if (!user) {
    const response = NextResponse.json(
      { error: "Session expired or invalid" },
      { status: 401 },
    );
    clearSessionCookie(response);
    return response;
  }
  return { user, sessionToken: token };
}

/**
 * Type guard: check if requireAuth returned an error response.
 */
export function isAuthError(
  result: AuthContext | NextResponse,
): result is NextResponse {
  return result instanceof NextResponse;
}
