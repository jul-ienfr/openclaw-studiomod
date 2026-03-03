const http = require("node:http");
const next = require("next");

const { createAccessGate } = require("./access-gate");
const { createGatewayProxy } = require("./gateway-proxy");
const mobileTokenStore = require("./mobile-token-store");
const { assertPublicHostAllowed, resolveHosts } = require("./network-policy");
const { loadUpstreamGatewaySettings } = require("./studio-settings");

const resolvePort = () => {
  const raw = process.env.PORT?.trim() || "3000";
  const port = Number(raw);
  if (!Number.isFinite(port) || port <= 0) return 3000;
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
    token: process.env.STUDIO_ACCESS_TOKEN,
    tokenStore: mobileTokenStore,
  });

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
    // Proxy WebSocket AI Manager admin
    if (resolvePathname(req.url) === '/ai-manager/admin/ws') {
      const net = require('node:net');
      const upstream = net.connect(18089, '127.0.0.1', () => {
        // Whitelist safe WebSocket upgrade headers (prevents CRLF injection)
        const WS_SAFE_HEADERS = new Set(['upgrade', 'connection', 'sec-websocket-key', 'sec-websocket-version', 'sec-websocket-extensions', 'origin', 'user-agent']);
        let extraHeaders = '';
        for (let i = 0; i < req.rawHeaders.length; i += 2) {
          const name = req.rawHeaders[i].toLowerCase();
          if (WS_SAFE_HEADERS.has(name)) {
            const val = req.rawHeaders[i + 1].replace(/[\r\n]/g, '');
            extraHeaders += `${name}: ${val}\r\n`;
          }
        }
        upstream.write(`GET /admin/ws HTTP/1.1\r\nHost: 127.0.0.1:18089\r\n${extraHeaders}\r\n`);
        socket.pipe(upstream);
        upstream.pipe(socket);
      });
      upstream.on('error', () => socket.destroy());
      return;
    }
    handleUpgrade(req, socket, head);
  };

  const createServer = () => {
    const srv = http.createServer((req, res) => {
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
        proxyReq.on('error', () => res.writeHead(502).end('Bad Gateway'));
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
          fs.createReadStream(filePath).pipe(res);
        } else {
          // SPA fallback: always serve index.html for client-side routing
          const indexPath = path.join(spaDir, 'index.html');
          res.writeHead(200, { 'Content-Type': 'text/html' });
          fs.createReadStream(indexPath).pipe(res);
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
