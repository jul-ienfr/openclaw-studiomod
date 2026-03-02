#!/usr/bin/env node
// HTTPS reverse proxy for OpenClaw Studio
// Terminates TLS and forwards HTTP + WebSocket to the Studio dev server on port 3000.
// Usage: node server/https-proxy.js
//   Access: https://192.168.31.96:3443/?access_token=openclaw-studio-dev

const fs = require("node:fs");
const https = require("node:https");
const http = require("node:http");
const path = require("node:path");
const { URL } = require("node:url");

const CERT = path.join(__dirname, "..", "certs", "cert.pem");
const KEY = path.join(__dirname, "..", "certs", "key.pem");
const LISTEN_PORT = Number(process.env.HTTPS_PORT || 3443);
const UPSTREAM = process.env.UPSTREAM || "http://127.0.0.1:3000";

const tls = {
  cert: fs.readFileSync(CERT),
  key: fs.readFileSync(KEY),
};

const upstream = new URL(UPSTREAM);

const server = https.createServer(tls, (req, res) => {
  const opts = {
    hostname: upstream.hostname,
    port: upstream.port,
    path: req.url,
    method: req.method,
    headers: { ...req.headers, "x-forwarded-proto": "https" },
  };
  const proxy = http.request(opts, (upRes) => {
    res.writeHead(upRes.statusCode, upRes.headers);
    upRes.pipe(res);
  });
  proxy.on("error", (err) => {
    console.error("[https-proxy] upstream error:", err.message);
    if (!res.headersSent) {
      res.writeHead(502);
      res.end("Bad Gateway");
    }
  });
  req.pipe(proxy);
});

// WebSocket upgrade forwarding
server.on("upgrade", (req, socket, head) => {
  console.info(`[https-proxy] WS upgrade: ${req.url} from: ${req.headers.host}`);
  const opts = {
    hostname: upstream.hostname,
    port: upstream.port,
    path: req.url,
    method: "GET",
    headers: { ...req.headers, host: `${upstream.hostname}:${upstream.port}`, "x-forwarded-proto": "https" },
  };
  const proxy = http.request(opts);
  proxy.on("upgrade", (upRes, upSocket, upHead) => {
    console.info(`[https-proxy] WS upgrade success: ${req.url}`);
    socket.write(
      `HTTP/1.1 101 Switching Protocols\r\n` +
        Object.entries(upRes.headers)
          .map(([k, v]) => `${k}: ${v}`)
          .join("\r\n") +
        "\r\n\r\n"
    );
    if (upHead.length) socket.write(upHead);
    upSocket.pipe(socket);
    socket.pipe(upSocket);
    upSocket.on("error", () => socket.destroy());
    socket.on("error", () => upSocket.destroy());
  });
  proxy.on("error", (err) => {
    console.error("[https-proxy] ws upgrade error:", err.message);
    socket.destroy();
  });
  proxy.end();
});

server.listen(LISTEN_PORT, "0.0.0.0", () => {
  console.info(`[https-proxy] Listening on https://0.0.0.0:${LISTEN_PORT}`);
  console.info(`[https-proxy] Forwarding to ${UPSTREAM}`);
  console.info(`[https-proxy] Open: https://192.168.31.96:${LISTEN_PORT}/?access_token=openclaw-studio-dev`);
});
