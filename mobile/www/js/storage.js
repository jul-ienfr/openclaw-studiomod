// storage.js — Server config persistence via @capacitor/preferences
// Falls back to localStorage when running in browser (dev)

const SERVERS_KEY = "oc_servers";
const LAST_ID_KEY = "oc_last_server_id";

async function getPlugin() {
  try {
    if (window.Capacitor?.Plugins?.Preferences) {
      return window.Capacitor.Plugins.Preferences;
    }
    // Dynamic import for Capacitor v7
    const { Preferences } = await import("@capacitor/preferences");
    return Preferences;
  } catch {
    return null;
  }
}

async function prefGet(key) {
  const p = await getPlugin();
  if (p) {
    const { value } = await p.get({ key });
    return value;
  }
  return localStorage.getItem(key);
}

async function prefSet(key, value) {
  const p = await getPlugin();
  if (p) {
    await p.set({ key, value });
  } else {
    localStorage.setItem(key, value);
  }
}

async function prefRemove(key) {
  const p = await getPlugin();
  if (p) {
    await p.remove({ key });
  } else {
    localStorage.removeItem(key);
  }
}

// ─── Public API ───

async function getServers() {
  const raw = await prefGet(SERVERS_KEY);
  try {
    return JSON.parse(raw) ?? [];
  } catch {
    return [];
  }
}

async function saveServer({ url, token, name }) {
  const servers = await getServers();
  const id = crypto.randomUUID();
  const existing = servers.findIndex((s) => s.url === url);
  const entry = { id: existing >= 0 ? servers[existing].id : id, url, token, name, lastUsed: Date.now() };
  if (existing >= 0) {
    servers[existing] = entry;
  } else {
    servers.unshift(entry);
  }
  // Keep max 10 servers
  const trimmed = servers.slice(0, 10);
  await prefSet(SERVERS_KEY, JSON.stringify(trimmed));
  return entry;
}

async function deleteServer(id) {
  const servers = await getServers();
  const filtered = servers.filter((s) => s.id !== id);
  await prefSet(SERVERS_KEY, JSON.stringify(filtered));
  const lastId = await prefGet(LAST_ID_KEY);
  if (lastId === id) await prefRemove(LAST_ID_KEY);
}

async function getLastServer() {
  const servers = await getServers();
  const lastId = await prefGet(LAST_ID_KEY);
  return servers.find((s) => s.id === lastId) ?? null;
}

async function setLastServerId(id) {
  await prefSet(LAST_ID_KEY, id);
}

window.Storage = { getServers, saveServer, deleteServer, getLastServer, setLastServerId };
