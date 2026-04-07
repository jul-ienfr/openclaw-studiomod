const { WebSocket } = require("ws");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");
const os = require("node:os");

// ── Device identity (persistent Ed25519 keypair) ───────────────────────────

function resolveDeviceIdentityPath() {
  const override =
    process.env.OPENCLAW_STATE_DIR?.trim() ||
    undefined?.trim();
  const stateDir = override || (() => {
    const home = os.homedir() || os.tmpdir();
    return path.join(home, ".openclaw");
  })();
  return path.join(stateDir, "openclaw-studio-v2", "server-device.json");
}

function base64UrlEncode(buf) {
  return buf
    .toString("base64")
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replace(/=+$/, "");
}

function base64UrlDecode(str) {
  const normalized = str.replaceAll("-", "+").replaceAll("_", "/");
  const padded = normalized + "=".repeat((4 - (normalized.length % 4)) % 4);
  return Buffer.from(padded, "base64");
}

function fingerprintPublicKey(publicKeyBytes) {
  return crypto.createHash("sha256").update(publicKeyBytes).digest("hex");
}

/**
 * Load or generate a persistent Ed25519 device identity for the server.
 * Returns { deviceId, publicKey (base64url), privateKeyObj (KeyObject) }.
 */
function loadOrCreateServerDeviceIdentity() {
  const identityPath = resolveDeviceIdentityPath();

  // Try loading existing identity
  try {
    const raw = fs.readFileSync(identityPath, "utf8");
    const parsed = JSON.parse(raw);
    if (
      parsed?.version === 1 &&
      typeof parsed.publicKey === "string" &&
      parsed.privateKeyJwk &&
      typeof parsed.privateKeyJwk === "object"
    ) {
      const privateKeyObj = crypto.createPrivateKey({ key: parsed.privateKeyJwk, format: "jwk" });
      const pubBytes = base64UrlDecode(parsed.publicKey);
      const deviceId = fingerprintPublicKey(pubBytes);
      console.log(`[server-gateway] loaded device identity (id=${deviceId.slice(0, 8)}...)`);
      return { deviceId, publicKey: parsed.publicKey, privateKeyObj };
    }
  } catch {
    // fall through to generate
  }

  // Generate new Ed25519 keypair
  const { privateKey, publicKey } = crypto.generateKeyPairSync("ed25519");
  const privateJwk = privateKey.export({ format: "jwk" });
  const publicJwk = publicKey.export({ format: "jwk" });
  const pubBytes = base64UrlDecode(publicJwk.x);
  const deviceId = fingerprintPublicKey(pubBytes);

  const stored = {
    version: 1,
    deviceId,
    publicKey: publicJwk.x,    // base64url raw 32-byte public key
    privateKeyJwk: privateJwk,  // full JWK (includes d + x for Ed25519)
    createdAtMs: Date.now(),
  };

  try {
    fs.mkdirSync(path.dirname(identityPath), { recursive: true });
    fs.writeFileSync(identityPath, JSON.stringify(stored, null, 2), { mode: 0o600 });
    console.log(`[server-gateway] generated new device identity (id=${deviceId.slice(0, 8)}...)`);
  } catch (err) {
    console.warn(`[server-gateway] failed to save device identity: ${err.message}`);
  }

  return { deviceId, publicKey: publicJwk.x, privateKeyObj: privateKey };
}

function buildDeviceAuthPayload({ deviceId, clientId, clientMode, role, scopes, signedAtMs, token, nonce }) {
  const version = nonce ? "v2" : "v1";
  const scopeStr = [...scopes].sort().join(",");
  const parts = [version, deviceId, clientId, clientMode, role, scopeStr, String(signedAtMs), token ?? ""];
  if (version === "v2") parts.push(nonce ?? "");
  return parts.join("|");
}

function signDevicePayload(privateKeyObj, payload) {
  const data = Buffer.from(payload, "utf8");
  const sigBytes = crypto.sign(null, data, privateKeyObj);
  return base64UrlEncode(sigBytes);
}

// ── Gateway client ──────────────────────────────────────────────────────────

/**
 * Server-owned persistent WebSocket connection to OpenClaw Gateway.
 *
 * Auth flow (mirrors what GatewayBrowserClient does in the browser):
 *   1. Connect WebSocket to gateway
 *   2. Gateway sends connect.challenge with a nonce
 *   3. Server responds with connect + auth token + Ed25519-signed device identity
 *   4. Gateway replies ok → connection is established
 *   5. All events broadcast to registered browser SSE clients
 */
function createServerGatewayClient(options) {
  const {
    url,
    token,
    onMessage = () => {},
    onConnect = () => {},
    onClose = () => {},
    onError = () => {},
    initialReconnectDelay = 1000,
    maxReconnectDelay = 30000,
  } = options || {};

  let ws = null;
  let closed = false;
  let reconnectDelay = initialReconnectDelay;
  let reconnectTimer = null;
  let isConnected = false; // true only after gateway auth succeeds
  let challengeNonce = null;
  let authSent = false;
  let challengeFallbackTimer = null;

  // Load or generate persistent device identity (sync, once at startup)
  const deviceIdentity = loadOrCreateServerDeviceIdentity();

  const log = (msg) => console.log(`[server-gateway] ${msg}`);
  const logError = (msg, err) => console.error(`[server-gateway] ${msg}`, err?.message || err);
  const clearChallengeFallbackTimer = () => {
    if (!challengeFallbackTimer) return;
    clearTimeout(challengeFallbackTimer);
    challengeFallbackTimer = null;
  };

  const CLIENT_ID = "openclaw-control-ui";
  const CLIENT_MODE = "webchat";
  const ROLE = "operator";
  const SCOPES = [
    "operator.admin",
    "operator.approvals",
    "operator.pairing",
    "operator.read",
    "operator.write",
  ];

  const sendConnect = async () => {
    if (!ws || authSent) return;
    clearChallengeFallbackTimer();
    authSent = true;

    const signedAtMs = Date.now();
    const nonce = challengeNonce ?? undefined;

    // Build and sign device auth payload
    const payloadStr = buildDeviceAuthPayload({
      deviceId: deviceIdentity.deviceId,
      clientId: CLIENT_ID,
      clientMode: CLIENT_MODE,
      role: ROLE,
      scopes: SCOPES,
      signedAtMs,
      token: token ?? null,
      nonce,
    });

    let signature;
    try {
      signature = signDevicePayload(deviceIdentity.privateKeyObj, payloadStr);
    } catch (err) {
      logError("failed to sign device payload", err);
      authSent = false;
      return;
    }

    const connectId = `srv-connect-${Date.now()}`;
    try {
      ws.send(JSON.stringify({
        type: "req",
        id: connectId,
        method: "connect",
        params: {
          minProtocol: 3,
          maxProtocol: 3,
          client: {
            id: CLIENT_ID,
            version: "dev",
            platform: "server",
            mode: CLIENT_MODE,
          },
          role: ROLE,
          scopes: SCOPES,
          auth: {
            token: token || "",
          },
          device: {
            id: deviceIdentity.deviceId,
            publicKey: deviceIdentity.publicKey,
            signature,
            signedAt: signedAtMs,
            nonce,
          },
        },
      }));
      log(`sent connect (deviceId=${deviceIdentity.deviceId.slice(0, 8)}..., nonce=${nonce ? "yes" : "no"})`);
    } catch (err) {
      logError("failed to send connect", err);
    }
  };

  const connect = () => {
    if (closed || ws) return;

    log(`connecting to ${url}`);
    challengeNonce = null;
    authSent = false;
    clearChallengeFallbackTimer();

    try {
      ws = new WebSocket(url, {
        headers: { Origin: "http://localhost:3000" },
      });

      ws.onopen = () => {
        log("WebSocket open — waiting for connect.challenge...");
        // Fallback: if no challenge arrives within 2s, send without nonce
        clearChallengeFallbackTimer();
        challengeFallbackTimer = setTimeout(() => {
          if (!authSent) {
            log("no challenge received, sending connect without nonce");
            sendConnect();
          }
        }, 2000);
      };

      ws.onmessage = (event) => {
        let message;
        try {
          message = JSON.parse(String(event.data ?? ""));
        } catch {
          return;
        }

        // Handle connect.challenge → respond immediately
        if (message.type === "event" && message.event === "connect.challenge") {
          clearChallengeFallbackTimer();
          const nonce = message.payload?.nonce;
          if (nonce) {
            challengeNonce = nonce;
            log(`received connect.challenge (nonce=${nonce.slice(0, 8)}...)`);
            sendConnect();
          }
          return;
        }

        // Handle connect response (hello-ok or error)
        if (message.type === "res" && !isConnected) {
          if (message.ok) {
            isConnected = true;
            reconnectDelay = initialReconnectDelay;
            log("authenticated ✓ — gateway connection established");
            onConnect();
            // Broadcast hello-ok to browser SSE clients so they know gateway is ready
            try { onMessage(message); } catch {}
          } else {
            const code = message.error?.code || "unknown";
            const msg = message.error?.message || "auth failed";
            log(`auth failed: ${code} — ${msg}`);
            // Will reconnect via onclose
          }
          return;
        }

        // Forward all events to browser clients
        if (isConnected) {
          if (message.type === "res") {
            const ok = message.ok ? "ok" : `err:${message.error?.code}`;
            log(`← gateway res id=${message.id?.slice(0,8)} ${ok} payload.type=${message.payload?.type}`);
          }
          try {
            onMessage(message);
          } catch (err) {
            logError("onMessage handler error", err);
          }
        }
      };

      ws.onclose = (event) => {
        isConnected = false;
        ws = null;
        clearChallengeFallbackTimer();
        log(`disconnected (code=${event.code}, reason=${event.reason || "none"})`);
        onClose({ code: event.code, reason: event.reason });
        if (!closed) {
          scheduleReconnect();
        }
      };

      ws.onerror = (event) => {
        logError("websocket error", event.error);
        onError(event.error);
      };
    } catch (err) {
      logError("failed to create websocket", err);
      ws = null;
      if (!closed) scheduleReconnect();
    }
  };

  const scheduleReconnect = () => {
    if (closed || reconnectTimer) return;
    log(`reconnecting in ${reconnectDelay}ms...`);
    reconnectTimer = setTimeout(() => {
      reconnectTimer = null;
      reconnectDelay = Math.min(reconnectDelay * 1.5, maxReconnectDelay);
      connect();
    }, reconnectDelay);
  };

  // Send a message to the gateway (from browser via POST /api/runtime/message)
  const send = (message) => {
    if (!ws || !isConnected) {
      logError("cannot send: not connected");
      return false;
    }
    try {
      ws.send(typeof message === "string" ? message : JSON.stringify(message));
      return true;
    } catch (err) {
      logError("failed to send message", err);
      return false;
    }
  };

  const getStatus = () => ({ connected: isConnected, url });

  const shutdown = () => {
    closed = true;
    clearChallengeFallbackTimer();
    if (reconnectTimer) {
      clearTimeout(reconnectTimer);
      reconnectTimer = null;
    }
    if (ws) {
      try { ws.close(); } catch {}
      ws = null;
    }
    isConnected = false;
  };

  connect();

  return {
    send,
    getStatus,
    shutdown,
    get isConnected() { return isConnected; },
  };
}

module.exports = { createServerGatewayClient };
