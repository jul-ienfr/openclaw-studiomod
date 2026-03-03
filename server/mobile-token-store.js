const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const { resolveStateDir } = require("./studio-settings");

const MAX_TOKENS = 50;
const FLUSH_INTERVAL_MS = 60_000;

const tokensPath = path.join(resolveStateDir(), "openclaw-studio", "mobile-tokens.json");

let cache = null;
const lastUsedDirty = new Map();
let flushTimer = null;

const load = () => {
  if (cache) return cache;
  try {
    const raw = fs.readFileSync(tokensPath, "utf8");
    const parsed = JSON.parse(raw);
    if (parsed && Array.isArray(parsed.tokens)) {
      cache = parsed;
    } else {
      cache = { version: 1, tokens: [] };
    }
  } catch {
    cache = { version: 1, tokens: [] };
  }
  return cache;
};

const save = () => {
  const data = load();
  const dir = path.dirname(tokensPath);
  fs.mkdirSync(dir, { recursive: true });
  const tmp = tokensPath + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2), "utf8");
  fs.renameSync(tmp, tokensPath);
};

const flushLastUsed = () => {
  if (lastUsedDirty.size === 0) return;
  const data = load();
  for (const [id, ts] of lastUsedDirty) {
    const entry = data.tokens.find((t) => t.id === id);
    if (entry) entry.lastUsedAt = ts;
  }
  lastUsedDirty.clear();
  save();
};

const ensureFlushTimer = () => {
  if (flushTimer) return;
  flushTimer = setInterval(flushLastUsed, FLUSH_INTERVAL_MS);
  if (flushTimer.unref) flushTimer.unref();
};

const generateToken = (label) => {
  const data = load();
  if (data.tokens.length >= MAX_TOKENS) {
    throw new Error(`Maximum number of tokens (${MAX_TOKENS}) reached`);
  }
  const entry = {
    id: crypto.randomUUID(),
    token: crypto.randomBytes(32).toString("hex"),
    label: String(label || "Mobile device").slice(0, 100),
    createdAt: new Date().toISOString(),
    lastUsedAt: null,
  };
  data.tokens.push(entry);
  save();
  return entry;
};

const revokeToken = (id) => {
  const data = load();
  const idx = data.tokens.findIndex((t) => t.id === id);
  if (idx === -1) return false;
  data.tokens.splice(idx, 1);
  lastUsedDirty.delete(id);
  save();
  return true;
};

const updateLabel = (id, label) => {
  const data = load();
  const entry = data.tokens.find((t) => t.id === id);
  if (!entry) return false;
  entry.label = String(label).slice(0, 100);
  save();
  return true;
};

const listTokens = () => {
  const data = load();
  return data.tokens.map((t) => ({
    id: t.id,
    label: t.label,
    createdAt: t.createdAt,
    lastUsedAt: lastUsedDirty.get(t.id) || t.lastUsedAt,
    tokenPrefix: t.token.slice(0, 8),
  }));
};

const findByTokenValue = (value) => {
  if (!value || typeof value !== "string") return null;
  const data = load();
  return data.tokens.find((t) => t.token === value) || null;
};

const touchLastUsed = (id) => {
  lastUsedDirty.set(id, new Date().toISOString());
  ensureFlushTimer();
};

const shutdown = () => {
  if (flushTimer) {
    clearInterval(flushTimer);
    flushTimer = null;
  }
  flushLastUsed();
};

process.on("exit", () => shutdown());
process.on("SIGINT", () => {
  shutdown();
  process.exit();
});
process.on("SIGTERM", () => {
  shutdown();
  process.exit();
});

module.exports = {
  generateToken,
  revokeToken,
  updateLabel,
  listTokens,
  findByTokenValue,
  touchLastUsed,
};
