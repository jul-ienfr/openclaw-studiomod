const crypto = require("node:crypto");
const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const next = require("next");

const { createAccessGate } = require("./access-gate");
const { createGatewayProxy } = require("./gateway-proxy");
const { createServerGatewayClient } = require("./server-gateway-client");
const { createEventBroadcaster } = require("./event-broadcaster");
const { handleKnownWsUpgrades } = require("./ws-proxy");
const mobileTokenStore = require("./mobile-token-store");
const tunnelDiscovery = require("./tunnel-discovery");
const { assertPublicHostAllowed, resolveHosts } = require("./network-policy");
const { resolveStateDir, loadUpstreamGatewaySettings } = require("./studio-settings");

// ── Auto-generate master token ────────────────────────────────────────
// If STUDIO_ACCESS_TOKEN is not set or uses the well-known default,
// generate a unique random token and persist it so it survives restarts.

const KNOWN_DEFAULTS = new Set(["openclaw-studio-dev", "openclaw-studio"]);
const MASTER_TOKEN_PATH = path.join(
  resolveStateDir(),
  "openclaw-studio-v2",
  "master-token",
);

function resolveAccessToken() {
  const envToken = (process.env.STUDIO_ACCESS_TOKEN ?? "").trim();

  // Explicit custom token — use as-is
  if (envToken && !KNOWN_DEFAULTS.has(envToken)) {
    return envToken;
  }

  // Try to load previously generated token
  try {
    const saved = fs.readFileSync(MASTER_TOKEN_PATH, "utf8").trim();
    if (saved) return saved;
  } catch {
    /* not yet generated */
  }

  // Generate a new random token
  const generated = crypto.randomBytes(24).toString("base64url");
  const dir = path.dirname(MASTER_TOKEN_PATH);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(MASTER_TOKEN_PATH, generated, { mode: 0o600 });
  console.info(
    "\n╔══════════════════════════════════════════════════════════════╗",
  );
  console.info(
    "║  New master access token generated (first launch)          ║",
  );
  console.info(
    `║  Token: ${generated.padEnd(49)}║`,
  );
  console.info(
    "║  Saved to: ~/.openclaw/openclaw-studio/master-token        ║",
  );
  console.info(
    "║  Set STUDIO_ACCESS_TOKEN env to override.                  ║",
  );
  console.info(
    "╚══════════════════════════════════════════════════════════════╝\n",
  );
  return generated;
}

const masterToken = resolveAccessToken();
// Expose for network-policy assertPublicHostAllowed check
process.env.STUDIO_ACCESS_TOKEN = masterToken;

// Register tunnel URL change callback on globalThis BEFORE Next.js loads
// the tunnel manager module (src/lib/tunnel/manager.ts reads this).
globalThis.__tunnelUrlChangeCallback = (url) => {
  if (url) {
    tunnelDiscovery.publishTunnelUrl(url).catch((err) => {
      console.warn("[tunnel-discovery] publish failed:", err.message);
    });
  } else {
    tunnelDiscovery.clearTunnelUrl().catch((err) => {
      console.warn("[tunnel-discovery] clear failed:", err.message);
    });
  }
};

const resolvePort = () => {
  const raw = process.env.PORT?.trim() || "3001";
  const port = Number(raw);
  if (!Number.isFinite(port) || port <= 0) return 3001;
  return port;
};

const resolvePathname = (url) => {
  const raw = typeof url === "string" ? url : "";
  const idx = raw.indexOf("?");
  return (idx === -1 ? raw : raw.slice(0, idx)) || "/";
};

async function main() {
  const dev = process.argv.includes("--dev");
  const hostnames = Array.from(new Set(resolveHosts(process.env)));
  const hostname = hostnames[0] ?? "127.0.0.1";
  const port = resolvePort();
  for (const host of hostnames) {
    assertPublicHostAllowed({
      host,
      studioAccessToken: process.env.STUDIO_ACCESS_TOKEN,
    });
  }

  const app = next({
    dev,
    hostname,
    port,
    ...(dev ? { webpack: true } : null),
  });
  const handle = app.getRequestHandler();

  const accessGate = createAccessGate({
    token: masterToken,
    tokenStore: mobileTokenStore,
  });

  // ── Server-owned gateway connection (SSE pattern) ─────────────────────
  const broadcaster = createEventBroadcaster();
  const gatewaySettings = loadUpstreamGatewaySettings(process.env);
  const serverGatewayClient = createServerGatewayClient({
    url: gatewaySettings.url,
    token: gatewaySettings.token,
    onMessage: (msg) => broadcaster.broadcast(msg),
    onConnect: () => {
      console.log("[studio] gateway connected");
      broadcaster.broadcast({ type: "event", event: "gateway.reconnected", payload: {} });
    },
    onClose: ({ code, reason }) => console.log(`[studio] gateway closed (${code}: ${reason})`),
  });
  // Expose globally so Next.js API routes can access them
  globalThis.__studioGatewayClient = serverGatewayClient;
  globalThis.__studioEventBroadcaster = broadcaster;

  const proxy = createGatewayProxy({
    loadUpstreamSettings: async () => {
      const settings = loadUpstreamGatewaySettings(process.env);
      return { url: settings.url, token: settings.token };
    },
    allowWs: (req) => {
      if (resolvePathname(req.url) !== "/api/gateway/ws") return false;
      if (!accessGate.allowUpgrade(req)) return false;
      return true;
    },
  });

  await app.prepare();
  const handleUpgrade = app.getUpgradeHandler();
  const handleServerUpgrade = (req, socket, head) => {
    if (resolvePathname(req.url) === "/api/gateway/ws") {
      proxy.handleUpgrade(req, socket, head);
      return;
    }
    // Delegate to consolidated ws-proxy for known paths (AI Manager, noVNC)
    if (handleKnownWsUpgrades(req, socket, head)) return;
    // Fall back to Next.js upgrade handler (e.g. HMR in dev)
    handleUpgrade(req, socket, head);
  };

  const STATIC_SECURITY_HEADERS = {
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  };
  const buildCSP = (host) => {
    const h = (host || "localhost").replace(/:[0-9]+$/, "");
    return [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      `connect-src 'self' ws://${h}:* wss://${h}:* http://${h}:* ws://localhost:* wss://localhost:* http://localhost:*`,
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "frame-src 'self'",
      "frame-ancestors *",
    ].join("; ");
  };

  const createServer = () => {
    const srv = http.createServer((req, res) => {
      // Security headers on all responses
      for (const [k, v] of Object.entries(STATIC_SECURITY_HEADERS)) {
        res.setHeader(k, v);
      }
      res.setHeader("Content-Security-Policy", buildCSP(req.headers.host));
      if (accessGate.handleHttp(req, res)) return;
      // Proxy AI Manager admin API
      if (req.url && req.url.startsWith('/ai-manager/admin/api/')) {
        const reqUrl = new URL(req.url, 'http://localhost');
        reqUrl.pathname = reqUrl.pathname.replace('/ai-manager/admin/api', '/admin/api');
        const targetPath = reqUrl.pathname + reqUrl.search;
        // Whitelist headers forwarded to upstream (prevents header injection / smuggling)
        const SAFE_HEADERS = ['content-type', 'content-length', 'accept', 'authorization', 'transfer-encoding'];
        const fwdHeaders = { host: '127.0.0.1:18089' };
        for (const [k, v] of Object.entries(req.headers)) {
          if (SAFE_HEADERS.includes(k.toLowerCase())) fwdHeaders[k] = v;
        }
        const options = {
          hostname: '127.0.0.1',
          port: 18089,
          path: targetPath,
          method: req.method,
          headers: fwdHeaders,
        };
        const proxyReq = http.request(options, (proxyRes) => {
          res.writeHead(proxyRes.statusCode, proxyRes.headers);
          proxyRes.pipe(res);
        });
        proxyReq.on('error', () => {
          if (!res.headersSent) res.writeHead(502).end('Bad Gateway');
        });
        req.pipe(proxyReq);
        return;
      }
      // Serve AI Manager SPA static assets (exact file match)
      if (req.url && req.url.startsWith('/ai-manager/admin/') && !req.url.startsWith('/ai-manager/admin/ws')) {
        const fs = require('node:fs');
        const path = require('node:path');
        const spaDir = path.resolve(__dirname, '..', 'public', 'ai-manager', 'admin');
        const urlPathname = new URL(req.url, 'http://localhost').pathname;
        const urlPath = urlPathname.replace('/ai-manager/admin', '') || '/';
        const filePath = path.resolve(spaDir, '.' + urlPath);
        // Path traversal protection: ensure resolved path stays within spaDir
        if (!filePath.startsWith(spaDir + path.sep) && filePath !== spaDir) {
          res.writeHead(403).end('Forbidden');
          return;
        }
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
          const ext = path.extname(filePath);
          const mime = { '.js': 'application/javascript', '.css': 'text/css', '.html': 'text/html', '.svg': 'image/svg+xml', '.ico': 'image/x-icon' }[ext] || 'application/octet-stream';
          res.writeHead(200, { 'Content-Type': mime });
          fs.createReadStream(filePath).on('error', () => { if (!res.writableEnded) res.end(); }).pipe(res);
        } else {
          // SPA fallback: always serve index.html for client-side routing
          const indexPath = path.join(spaDir, 'index.html');
          res.writeHead(200, { 'Content-Type': 'text/html' });
          fs.createReadStream(indexPath).on('error', () => { if (!res.writableEnded) res.end(); }).pipe(res);
        }
        return;
      }
      // Serve noVNC static files for browser viewer
      if (req.url && req.url.startsWith('/browser-view/') && !req.url.startsWith('/browser-view/websockify')) {
        const spaDir = path.resolve(__dirname, '..', 'public', 'novnc');
        const urlPathname = new URL(req.url, 'http://localhost').pathname;
        const urlPath = urlPathname.replace('/browser-view', '') || '/';
        const filePath = path.resolve(spaDir, '.' + urlPath);
        if (!filePath.startsWith(spaDir + path.sep) && filePath !== spaDir) {
          res.writeHead(403).end('Forbidden');
          return;
        }
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
          const ext = path.extname(filePath);
          const mime = { '.js': 'application/javascript', '.css': 'text/css', '.html': 'text/html',
            '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.png': 'image/png',
            '.woff': 'font/woff', '.woff2': 'font/woff2' }[ext] || 'application/octet-stream';
          res.writeHead(200, { 'Content-Type': mime });
          fs.createReadStream(filePath).on('error', () => { if (!res.writableEnded) res.end(); }).pipe(res);
        } else {
          const indexPath = path.join(spaDir, 'vnc.html');
          if (fs.existsSync(indexPath)) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.createReadStream(indexPath).on('error', () => { if (!res.writableEnded) res.end(); }).pipe(res);
          } else {
            res.writeHead(503).end('noVNC not installed yet. Run: sudo apt install novnc');
          }
        }
        return;
      }
      handle(req, res);
    });

    // Fix CLOSE-WAIT accumulation: when the browser closes a connection
    // (sends FIN), immediately destroy the server-side socket too.
    // Without this, upgraded connections (HMR WebSocket, gateway WS) pile
    // up in CLOSE-WAIT and eventually exhaust the browser's 6-connection-
    // per-origin limit, blocking new WebSocket connections.
    srv.on("connection", (socket) => {
      socket.on("end", () => {
        if (!socket.destroyed) socket.destroy();
      });
    });

    srv.keepAliveTimeout = 5000;
    srv.headersTimeout = 10000;

    return srv;
  };

  const servers = hostnames.map(() => createServer());

  const attachUpgradeHandlers = (server) => {
    server.on("upgrade", handleServerUpgrade);
    server.on("newListener", (eventName, listener) => {
      if (eventName !== "upgrade") return;
      if (listener === handleServerUpgrade) return;
      process.nextTick(() => {
        server.removeListener("upgrade", listener);
      });
    });
  };

  for (const server of servers) {
    attachUpgradeHandlers(server);
  }

  const listenOnHost = (server, host) =>
    new Promise((resolve, reject) => {
      const onError = (err) => {
        server.off("error", onError);
        reject(err);
      };
      server.once("error", onError);
      server.listen(port, host, () => {
        server.off("error", onError);
        resolve();
      });
    });

  const closeServer = (server) =>
    new Promise((resolve) => {
      if (!server.listening) return resolve();
      server.close(() => resolve());
    });

  try {
    await Promise.all(servers.map((server, index) => listenOnHost(server, hostnames[index])));
  } catch (err) {
    await Promise.all(servers.map((server) => closeServer(server)));
    throw err;
  }

  // ── Graceful shutdown ─────────────────────────────────────────────
  const shutdown = () => {
    console.log("[studio] shutting down gracefully...");
    serverGatewayClient.shutdown();
    broadcaster.shutdown();
    proxy.wss.close();
    Promise.all(servers.map((s) => new Promise((resolve) => s.close(resolve))))
      .then(() => {
        console.log("[studio] all servers closed");
        process.exit(0);
      });
    setTimeout(() => {
      console.warn("[studio] forced exit after timeout");
      process.exit(1);
    }, 5000).unref();
  };
  process.on("SIGTERM", shutdown);
  process.on("SIGINT", shutdown);

  const hostForBrowser = hostnames.some((value) => value === "127.0.0.1" || value === "::1")
    ? "localhost"
    : hostname === "0.0.0.0" || hostname === "::"
      ? "localhost"
      : hostname;

  const browserUrl = `http://${hostForBrowser}:${port}`;
  console.info(`Open in browser: ${browserUrl}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
