const { URL } = require("node:url");
const crypto = require("node:crypto");
const path = require("node:path");
const { resolveStateDir } = require("./studio-settings");

// ─── Cookie helpers ────────────────────────────────────────────────────────────

const parseCookies = (header) => {
  const raw = typeof header === "string" ? header : "";
  if (!raw.trim()) return {};
  const out = {};
  for (const part of raw.split(";")) {
    const idx = part.indexOf("=");
    if (idx === -1) continue;
    const key = part.slice(0, idx).trim();
    const value = part.slice(idx + 1).trim();
    if (!key) continue;
    out[key] = value;
  }
  return out;
};

const buildRedirectUrl = (req, nextPathWithQuery) => {
  const host = req.headers?.host || "localhost";
  const proto =
    String(req.headers?.["x-forwarded-proto"] || "").toLowerCase() === "https"
      ? "https"
      : "http";
  return `${proto}://${host}${nextPathWithQuery}`;
};

// ─── SQLite session validator ──────────────────────────────────────────────────
// Lazy-loaded so it doesn't crash during initial require before DB is ready.

let _sessionValidator = null;

function getSessionValidator() {
  if (_sessionValidator) return _sessionValidator;
  try {
    const dbPath = process.env.STUDIO_DB_PATH ??
      path.join(resolveStateDir(), "openclaw-studio", "studio.db");
    // bun:sqlite is only available in the Bun runtime
    const { Database } = require("bun:sqlite");
    const db = new Database(dbPath, { readonly: true });
    db.exec("PRAGMA journal_mode = WAL");

    _sessionValidator = {
      validate(token) {
        try {
          const hash = crypto.createHash("sha256").update(token).digest("hex");
          const row = db.prepare(
            "SELECT user_id, expires_at FROM sessions WHERE token_hash = ? AND expires_at > ?"
          ).get(hash, Date.now());
          return row ? { type: "session", userId: row.user_id } : null;
        } catch {
          return null;
        }
      },
    };
  } catch {
    // DB not yet available (e.g. first boot before migration)
    _sessionValidator = { validate: () => null };
  }
  return _sessionValidator;
}

// ─── createAccessGate factory ─────────────────────────────────────────────────

function createAccessGate(options) {
  const masterToken = String(options?.token ?? "").trim();
  const tokenStore = options?.tokenStore ?? null;
  // Legacy cookie name kept for backward compat
  const legacyCookieName = String(options?.cookieName ?? "studio_access").trim() || "studio_access";
  const sessionCookieName = "studio_session";
  const queryParam = String(options?.queryParam ?? "access_token").trim() || "access_token";

  const enabled = Boolean(masterToken);

  // ── Token resolution ──────────────────────────────────────────────────────

  const resolveMasterOrMobileToken = (value) => {
    if (!value) return null;
    // Master token (legacy, cookie-based access)
    if (value === masterToken) return { type: "master" };
    // Mobile instance token (bearer or cookie)
    if (tokenStore) {
      const entry = tokenStore.findByTokenValue(value);
      if (entry) return { type: "instance", entry };
    }
    return null;
  };

  // ── Check a request for any valid auth ────────────────────────────────────

  const resolveAuth = (req) => {
    const cookies = parseCookies(req.headers?.cookie);

    // 1. Bearer token (mobile app) — highest priority
    const authHeader = String(req.headers?.authorization ?? "");
    if (authHeader.toLowerCase().startsWith("bearer ")) {
      const bearerToken = authHeader.slice(7).trim();
      const match = resolveMasterOrMobileToken(bearerToken);
      if (match) {
        if (match.type === "instance" && tokenStore) {
          tokenStore.touchLastUsed(match.entry.id);
        }
        return match;
      }
      return null; // Invalid bearer — reject immediately
    }

    // 2. New session cookie (studio_session → SQLite)
    const sessionToken = cookies[sessionCookieName];
    if (sessionToken) {
      const result = getSessionValidator().validate(sessionToken);
      if (result) return result;
    }

    // 3. Legacy master/mobile cookie (studio_access)
    const legacyToken = cookies[legacyCookieName];
    if (legacyToken) {
      const match = resolveMasterOrMobileToken(legacyToken);
      if (match) {
        if (match.type === "instance" && tokenStore) {
          tokenStore.touchLastUsed(match.entry.id);
        }
        return match;
      }
    }

    return null;
  };

  const isAuthorized = (req) => {
    if (!enabled) return true;
    return resolveAuth(req) !== null;
  };

  // ── HTTP middleware ────────────────────────────────────────────────────────

  const handleHttp = (req, res) => {
    if (!enabled) return false;
    const host = req.headers?.host || "localhost";
    const url = new URL(req.url || "/", `http://${host}`);

    // CORS: allow Capacitor WebView and configured origins for /api/
    const origin = req.headers?.origin;
    if (origin && url.pathname.startsWith("/api/")) {
      const allowedOrigins = resolveAllowedOrigins(req);
      if (allowedOrigins.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin);
        res.setHeader("Vary", "Origin");
      } else {
        // Fallback: allow localhost variants for dev
        if (/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)) {
          res.setHeader("Access-Control-Allow-Origin", origin);
          res.setHeader("Vary", "Origin");
        }
      }
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
      res.setHeader("Access-Control-Allow-Credentials", "true");
      if (req.method === "OPTIONS") {
        res.statusCode = 204;
        res.end();
        return true;
      }
    }

    // Skip auth for public routes
    if (isPublicPath(url.pathname)) {
      return false;
    }

    // Handle legacy access_token query param (set cookie and redirect)
    const provided = url.searchParams.get(queryParam);
    if (provided !== null) {
      const match = resolveMasterOrMobileToken(provided);
      if (!match) {
        res.statusCode = 401;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: "Invalid Studio access token." }));
        return true;
      }

      // For API calls, authenticate inline without redirect
      if (url.pathname.startsWith("/api/")) {
        if (match.type === "instance" && tokenStore) {
          tokenStore.touchLastUsed(match.entry.id);
        }
        return false;
      }

      // Browser: set legacy cookie and redirect (clean URL)
      url.searchParams.delete(queryParam);
      const cookieValue = `${legacyCookieName}=${provided}; HttpOnly; Path=/; SameSite=Lax; Max-Age=604800`;
      res.statusCode = 302;
      res.setHeader("Set-Cookie", cookieValue);
      res.setHeader("Location", buildRedirectUrl(req, url.pathname + url.search));
      res.end();
      return true;
    }

    // Enforce auth on API routes
    if (url.pathname.startsWith("/api/")) {
      if (!isAuthorized(req)) {
        res.statusCode = 401;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: "Authentication required." }));
        return true;
      }
    }

    return false;
  };

  const allowUpgrade = (req) => {
    if (!enabled) return true;
    return isAuthorized(req);
  };

  return { enabled, handleHttp, allowUpgrade, resolveAuth, parseCookies };
}

// ─── Helper: public paths that bypass auth ────────────────────────────────────

function isPublicPath(pathname) {
  const PUBLIC_PATHS = [
    "/api/auth/login",
    "/api/auth/setup",
    "/api/auth/logout",
    "/login",
    "/setup",
    "/favicon.ico",
    "/manifest.json",
    "/_next/",
    "/public/",
  ];
  return PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(p));
}

// ─── Helper: resolve allowed CORS origins ─────────────────────────────────────

function resolveAllowedOrigins(req) {
  const port = process.env.PORT?.trim() || "3001";
  const host = (req.headers?.host || "localhost").split(":")[0];
  return [
    `http://localhost:${port}`,
    `https://localhost:${port}`,
    `http://127.0.0.1:${port}`,
    `https://127.0.0.1:${port}`,
    `http://${host}:${port}`,
    `https://${host}:${port}`,
    // Capacitor mobile apps
    "capacitor://localhost",
    "ionic://localhost",
    "http://localhost",
  ];
}

module.exports = { createAccessGate };
