// app.js — Main application logic

/** @type {object|null} Currently connected server. */
let currentServer = null;

// ─── DOM refs ───
const screenPairing = document.getElementById("screen-pairing");
const screenStudio = document.getElementById("screen-studio");
const btnScan = document.getElementById("btn-scan");
const formManual = document.getElementById("form-manual");
const inputUrl = document.getElementById("input-url");
const inputToken = document.getElementById("input-token");
const btnConnect = document.getElementById("btn-connect");
const formError = document.getElementById("form-error");
const savedServersEl = document.getElementById("saved-servers");
const serversList = document.getElementById("servers-list");
const btnDisconnect = document.getElementById("btn-disconnect");
const statusBar = document.getElementById("status-bar");
const statusText = document.getElementById("status-text");
const studioFrame = document.getElementById("studio-frame");

// ─── Init ───
async function init() {
  await renderSavedServers();
  const last = await Storage.getLastServer();
  if (last) {
    await smartConnect(last);
  }
}

// ─── Render saved servers ───
async function renderSavedServers() {
  const servers = await Storage.getServers();
  if (servers.length === 0) {
    savedServersEl.classList.add("hidden");
    return;
  }
  savedServersEl.classList.remove("hidden");
  serversList.innerHTML = "";
  for (const s of servers) {
    const li = document.createElement("li");
    const connectBtn = document.createElement("button");
    connectBtn.className = "server-item-btn";
    const displayName = s.name ?? s.tunnel ?? s.lan ?? "Server";
    connectBtn.innerHTML = `
      <span class="server-name">${displayName}</span>
      ${s.lan ? `<span class="server-url">${s.lan}</span>` : ""}
    `;
    connectBtn.addEventListener("click", () => smartConnect(s));

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "server-delete-btn";
    deleteBtn.textContent = "\u2715";
    deleteBtn.setAttribute("aria-label", "Remove server");
    deleteBtn.addEventListener("click", async (e) => {
      e.stopPropagation();
      await Storage.deleteServer(s.id);
      await renderSavedServers();
    });

    li.appendChild(connectBtn);
    li.appendChild(deleteBtn);
    serversList.appendChild(li);
  }
}

// ─── Test a single URL ───
async function testUrl(url, token) {
  try {
    let statusUrl = `${url.replace(/\/$/, "")}/api/mobile-access/status`;
    if (token) statusUrl += `?access_token=${encodeURIComponent(token)}`;
    const res = await fetch(statusUrl, {
      signal: AbortSignal.timeout(5000),
      mode: "cors",
    });
    return res.ok;
  } catch {
    return false;
  }
}

// ─── Resolve discovery URL to actual tunnel ───
async function resolveDiscovery(discoveryUrl) {
  try {
    const res = await fetch(discoveryUrl, {
      signal: AbortSignal.timeout(8000),
      redirect: "follow",
    });
    if (res.ok && res.url && res.url !== discoveryUrl) {
      return new URL(res.url).origin;
    }
    const html = await res.text();
    const match = html.match(/url=["']?(https:\/\/[^"'\s>]+)/i);
    if (match) return new URL(match[1]).origin;
    const jsMatch = html.match(/location\.href\s*=\s*["'](https:\/\/[^"']+)/i);
    if (jsMatch) return new URL(jsMatch[1]).origin;
    return null;
  } catch {
    return null;
  }
}

// ─── Smart connect: try all URLs in order ───
async function smartConnect(server) {
  currentServer = server;
  await Storage.setLastServerId(server.id);
  showStudioScreen();

  const candidates = [];

  // 1. Tunnel first (HTTPS, works everywhere)
  if (server.tunnel) candidates.push({ label: "tunnel", url: server.tunnel });
  // 2. LAN (HTTP, same WiFi)
  if (server.lan) candidates.push({ label: "LAN", url: server.lan });

  for (const c of candidates) {
    setStatus(`Trying ${c.label}...`);
    if (await testUrl(c.url, server.token)) {
      setStatus(`Connected via ${c.label}`, "ok");
      loadStudio(c.url, server.token);
      return;
    }
  }

  // 3. Discovery fallback — resolve to current tunnel
  if (server.discovery) {
    setStatus("Resolving discovery link...");
    const resolved = await resolveDiscovery(server.discovery);
    if (resolved) {
      server.tunnel = resolved;
      await Storage.saveServer(server);
      await renderSavedServers();

      if (await testUrl(resolved, server.token)) {
        setStatus("Connected via discovery", "ok");
        loadStudio(resolved, server.token);
        return;
      }
    }
  }

  setStatus("Cannot reach server", "error");
  setTimeout(() => {
    showPairingScreen();
    showError("Cannot reach server. Tried tunnel, LAN, and discovery link.");
  }, 1500);
}

// ─── Load Studio in iframe ───
function loadStudio(url, token) {
  const target = `${url}${token ? `?access_token=${encodeURIComponent(token)}&layout=mobile` : "?layout=mobile"}`;
  studioFrame.src = target;
  statusBar.classList.add("hide-after");
}

// ─── Screen helpers ───
function showStudioScreen() {
  screenPairing.classList.add("hidden");
  screenStudio.classList.remove("hidden");
  studioFrame.src = "about:blank";
  statusBar.classList.remove("hide-after");
  setTimeout(() => statusBar.classList.add("visible"), 100);
}

function showPairingScreen() {
  screenStudio.classList.add("hidden");
  statusBar.classList.remove("visible");
  statusBar.classList.remove("hide-after");
  screenPairing.classList.remove("hidden");
  studioFrame.src = "about:blank";
  currentServer = null;
}

function setStatus(text, type = "info") {
  statusText.textContent = text;
  statusText.style.color = type === "error" ? "var(--danger)" : type === "ok" ? "var(--success)" : "var(--text-muted)";
}

function showError(msg) {
  formError.textContent = msg;
  formError.classList.remove("hidden");
}

function clearError() {
  formError.textContent = "";
  formError.classList.add("hidden");
}

// ─── Event listeners ───

btnScan.addEventListener("click", async () => {
  try {
    btnScan.disabled = true;
    btnScan.textContent = "Scanning...";
    const result = await Scanner.scanQRCode();

    inputUrl.value = result.tunnel || result.lan || "";
    inputToken.value = result.token;
    clearError();

    if (result.token) {
      const server = await Storage.saveServer({
        lan: result.lan,
        tunnel: result.tunnel,
        discovery: result.discovery,
        token: result.token,
        name: result.tunnel ? new URL(result.tunnel).hostname : (result.lan || "Server"),
      });
      await renderSavedServers();
      await smartConnect(server);
    }
  } catch (e) {
    showError(e.message || "Scan failed");
  } finally {
    btnScan.disabled = false;
    btnScan.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
      <path d="M3 3h6v6H3z M15 3h6v6h-6z M3 15h6v6H3z M15 15h2 M19 15v2 M15 19h4 M19 19v2"/>
    </svg> Scan QR Code`;
  }
});

formManual.addEventListener("submit", async (e) => {
  e.preventDefault();
  clearError();
  const url = inputUrl.value.trim().replace(/\/$/, "");
  const token = inputToken.value.trim();

  if (!url) {
    showError("Please enter the server URL");
    return;
  }

  btnConnect.disabled = true;
  btnConnect.textContent = "Connecting...";

  const isTunnel = url.startsWith("https://");
  const server = await Storage.saveServer({
    lan: isTunnel ? undefined : url,
    tunnel: isTunnel ? url : undefined,
    token,
    name: new URL(url).hostname,
  });
  await renderSavedServers();
  await smartConnect(server);

  btnConnect.disabled = false;
  btnConnect.textContent = "Connect";
});

btnDisconnect.addEventListener("click", () => {
  showPairingScreen();
});

document.addEventListener("DOMContentLoaded", init);
