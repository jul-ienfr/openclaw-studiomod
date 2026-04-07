import { getDb, getDbWrite } from "../studio-db";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface User {
  id: string;
  username: string;
  display_name: string | null;
  password_hash: string;
  role: string;
  created_at: number;
  last_login: number | null;
}

export interface Session {
  id: string;
  user_id: string;
  token_hash: string;
  expires_at: number;
  created_at: number;
  user_agent: string | null;
  ip: string | null;
}

export interface SafeUser {
  id: string;
  username: string;
  display_name: string | null;
  role: string;
  created_at: number;
  last_login: number | null;
}

// ─── User CRUD ────────────────────────────────────────────────────────────────

export function countUsers(): number {
  const db = getDb();
  try {
    const row = db.prepare("SELECT COUNT(*) AS c FROM users").get() as {
      c: number;
    };
    return row.c;
  } finally {
    db.close();
  }
}

export function findUserByUsername(username: string): User | null {
  const db = getDb();
  try {
    const row = db
      .prepare("SELECT * FROM users WHERE username = ?")
      .get(username) as User | undefined;
    return row ?? null;
  } finally {
    db.close();
  }
}

export function findUserById(id: string): SafeUser | null {
  const db = getDb();
  try {
    const row = db
      .prepare(
        "SELECT id, username, display_name, role, created_at, last_login FROM users WHERE id = ?",
      )
      .get(id) as SafeUser | undefined;
    return row ?? null;
  } finally {
    db.close();
  }
}

export function createUser(params: {
  id: string;
  username: string;
  display_name?: string;
  password_hash: string;
  role?: string;
}): SafeUser {
  const db = getDbWrite();
  const now = Date.now();
  try {
    db.prepare(
      `INSERT INTO users (id, username, display_name, password_hash, role, created_at)
       VALUES (?, ?, ?, ?, ?, ?)`,
    ).run(
      params.id,
      params.username,
      params.display_name ?? null,
      params.password_hash,
      params.role ?? "admin",
      now,
    );
    return {
      id: params.id,
      username: params.username,
      display_name: params.display_name ?? null,
      role: params.role ?? "admin",
      created_at: now,
      last_login: null,
    };
  } finally {
    db.close();
  }
}

export function updateLastLogin(userId: string): void {
  const db = getDbWrite();
  try {
    db.prepare("UPDATE users SET last_login = ? WHERE id = ?").run(
      Date.now(),
      userId,
    );
  } finally {
    db.close();
  }
}

// ─── Session CRUD ─────────────────────────────────────────────────────────────

export function createSession(params: {
  id: string;
  user_id: string;
  token_hash: string;
  expires_at: number;
  user_agent?: string;
  ip?: string;
}): void {
  const db = getDbWrite();
  try {
    db.prepare(
      `INSERT INTO sessions (id, user_id, token_hash, expires_at, created_at, user_agent, ip)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
    ).run(
      params.id,
      params.user_id,
      params.token_hash,
      params.expires_at,
      Date.now(),
      params.user_agent ?? null,
      params.ip ?? null,
    );
  } finally {
    db.close();
  }
}

export function findSessionByTokenHash(tokenHash: string): Session | null {
  const db = getDb();
  try {
    const row = db
      .prepare("SELECT * FROM sessions WHERE token_hash = ?")
      .get(tokenHash) as Session | undefined;
    return row ?? null;
  } finally {
    db.close();
  }
}

export function deleteSession(sessionId: string): void {
  const db = getDbWrite();
  try {
    db.prepare("DELETE FROM sessions WHERE id = ?").run(sessionId);
  } finally {
    db.close();
  }
}

export function deleteSessionByTokenHash(tokenHash: string): void {
  const db = getDbWrite();
  try {
    db.prepare("DELETE FROM sessions WHERE token_hash = ?").run(tokenHash);
  } finally {
    db.close();
  }
}

export function deleteExpiredSessions(): number {
  const db = getDbWrite();
  try {
    const result = db
      .prepare("DELETE FROM sessions WHERE expires_at < ?")
      .run(Date.now());
    return result.changes;
  } finally {
    db.close();
  }
}

export function deleteAllUserSessions(userId: string): void {
  const db = getDbWrite();
  try {
    db.prepare("DELETE FROM sessions WHERE user_id = ?").run(userId);
  } finally {
    db.close();
  }
}
