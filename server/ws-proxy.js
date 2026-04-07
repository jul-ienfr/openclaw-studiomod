/**
 * Consolidated WebSocket proxy helper for server/index.js.
 *
 * Replaces the three duplicated inline implementations:
 *   - /api/gateway/ws  → gateway-proxy (handled separately by createGatewayProxy)
 *   - /ai-manager/admin/ws  → port 18089
 *   - /browser-view/websockify  → port 6080 (noVNC)
 */

const net = require("node:net");

/**
 * Safe WebSocket upgrade headers: only forward these to prevent
 * CRLF injection / header smuggling attacks.
 */
const WS_SAFE_HEADERS = new Set([
  "upgrade",
  "connection",
  "sec-websocket-key",
  "sec-websocket-version",
  "sec-websocket-extensions",
  "sec-websocket-protocol",
  "origin",
  "user-agent",
]);

/**
 * Proxy a WebSocket upgrade request to a local TCP target.
 *
 * @param {object} options
 * @param {import("http").IncomingMessage} options.req     - Incoming HTTP upgrade request
 * @param {import("net").Socket}           options.socket  - Client socket
 * @param {Buffer}                         options.head    - Buffered data
 * @param {number}                         options.port    - Target local port
 * @param {string}                         [options.host]  - Target host (default: 127.0.0.1)
 * @param {string}                         options.targetPath - HTTP path to request on target
 * @param {number}                         [options.timeout]  - Socket connect timeout ms (default: 10000)
 */
function proxyWebSocket({ req, socket, head, port, host = "127.0.0.1", targetPath, timeout = 10_000 }) {
  const upstream = net.connect(port, host, () => {
    // Build safe upgrade headers from the original request
    let extraHeaders = "";
    for (let i = 0; i < req.rawHeaders.length; i += 2) {
      const name = req.rawHeaders[i].toLowerCase();
      if (WS_SAFE_HEADERS.has(name)) {
        // Strip CR/LF from header values to prevent injection
        const val = req.rawHeaders[i + 1].replace(/[\r\n]/g, "");
        extraHeaders += `${name}: ${val}\r\n`;
      }
    }

    upstream.write(
      `GET ${targetPath} HTTP/1.1\r\nHost: ${host}:${port}\r\n${extraHeaders}\r\n`
    );

    if (head && head.length > 0) {
      upstream.write(head);
    }

    // Use explicit data forwarding for Bun compatibility.
    // Bun's upgrade socket may not support pipe() correctly, and
    // socket.write() may silently fail. Use the underlying _handle or
    // fall back to the raw socket if available.
    const clientWrite = typeof socket.write === "function"
      ? (chunk) => { try { socket.write(chunk); } catch {} }
      : () => {};
    const upstreamWrite = (chunk) => { try { upstream.write(chunk); } catch {} };

    upstream.on("data", (chunk) => {
      if (!socket.destroyed) clientWrite(chunk);
    });
    socket.on("data", (chunk) => {
      if (!upstream.destroyed) upstreamWrite(chunk);
    });
    upstream.on("end", () => { if (!socket.destroyed) { try { socket.end(); } catch {} } });
    socket.on("end", () => { if (!upstream.destroyed) upstream.end(); });
  });

  upstream.setTimeout(timeout, () => {
    upstream.destroy();
    socket.destroy();
  });

  upstream.on("error", (err) => {
    console.warn(`[ws-proxy] upstream error (${host}:${port}${targetPath}):`, err.message);
    if (!socket.destroyed) socket.destroy();
  });

  socket.on("error", (err) => {
    console.warn(`[ws-proxy] client socket error:`, err.message);
    if (!upstream.destroyed) upstream.destroy();
  });
}

/**
 * Route table for well-known upgrade paths.
 *
 * Returns true if the request was handled, false if not.
 */
function handleKnownWsUpgrades(req, socket, head) {
  const pathname = resolvePathname(req.url);

  if (pathname === "/ai-manager/admin/ws") {
    proxyWebSocket({
      req,
      socket,
      head,
      port: 18089,
      targetPath: "/admin/ws",
    });
    return true;
  }

  if (pathname === "/browser-view/websockify") {
    proxyWebSocket({
      req,
      socket,
      head,
      port: 6080,
      targetPath: "/websockify",
    });
    return true;
  }

  return false;
}

function resolvePathname(url) {
  const raw = typeof url === "string" ? url : "";
  const idx = raw.indexOf("?");
  return (idx === -1 ? raw : raw.slice(0, idx)) || "/";
}

module.exports = { proxyWebSocket, handleKnownWsUpgrades };
