// app.js — Main application logic

/** @type {object|null} Currently connected server (for disconnect state tracking). */
// eslint-disable-next-line no-unused-vars
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

// ─── Init ───
async function init() {
  await renderSavedServers();

  // Auto-connect to last server
  const last = await Storage.getLastServer();
  if (last) {
    await connectToServer(last);
    return;
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
    connectBtn.innerHTML = `
      <span class="server-name">${s.name ?? s.url}</span>
      ${s.name ? `<span class="server-url">${s.url}</span>` : ""}
    `;
    connectBtn.addEventListener("click", () => connectToServer(s));

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "server-delete-btn";
    deleteBtn.textContent = "✕";
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

// ─── Connect to server ───
async function connectToServer(server) {
  currentServer = server;
  await Storage.setLastServerId(server.id);

  const url = `${server.url}${server.token ? `?access_token=${encodeURIComponent(server.token)}` : ""}`;

  // Check connectivity first
  setStatus("Connecting...");
  showStudioScreen();

  try {
    // Use Capacitor WebView navigation
    if (window.Capacitor?.Plugins?.WebView) {
      await window.Capacitor.Plugins.WebView.setServerAssetPath({ path: "public" });
    }

    // Navigate the whole webview to the Studio URL
    window.location.href = url;
  } catch {
    // Fallback: direct navigation
    window.location.href = url;
  }
}

// ─── Test connection ───
async function testConnection(url, token) {
  try {
    const statusUrl = `${url.replace(/\/$/, "")}/api/mobile-access/status`;
    const res = await fetch(statusUrl, {
      headers: token ? { Cookie: `studio_access=${token}` } : {},
      signal: AbortSignal.timeout(5000),
    });
    return res.ok;
  } catch {
    return false;
  }
}

// ─── Screen helpers ───
function showStudioScreen() {
  screenPairing.classList.add("hidden");
  screenStudio.classList.remove("hidden");
  setTimeout(() => statusBar.classList.add("visible"), 100);
}

function showPairingScreen() {
  screenStudio.classList.add("hidden");
  statusBar.classList.remove("visible");
  screenPairing.classList.remove("hidden");
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

// QR scan button
btnScan.addEventListener("click", async () => {
  try {
    btnScan.disabled = true;
    btnScan.textContent = "Scanning...";
    const result = await Scanner.scanQRCode();
    inputUrl.value = result.url;
    inputToken.value = result.token;
    clearError();
  } catch (e) {
    showError(e.message || "Scan failed");
  } finally {
    btnScan.disabled = false;
    btnScan.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
      <path d="M3 3h6v6H3z M15 3h6v6h-6z M3 15h6v6H3z M15 15h2 M19 15v2 M15 19h4 M19 19v2"/>
    </svg> Scan QR Code`;
  }
});

// Manual connect form
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
  btnConnect.textContent = "Testing...";

  const ok = await testConnection(url, token);
  if (!ok) {
    showError("Cannot reach server. Check URL, token, and network.");
    btnConnect.disabled = false;
    btnConnect.textContent = "Connect";
    return;
  }

  const server = await Storage.saveServer({ url, token });
  await renderSavedServers();
  await connectToServer(server);

  btnConnect.disabled = false;
  btnConnect.textContent = "Connect";
});

// Disconnect button
btnDisconnect.addEventListener("click", () => {
  currentServer = null;
  showPairingScreen();
});

// ─── Start ───
document.addEventListener("DOMContentLoaded", init);
