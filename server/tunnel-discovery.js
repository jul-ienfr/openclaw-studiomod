/**
 * Tunnel discovery via GitHub Gist.
 *
 * Publishes the current tunnel URL to a public GitHub Gist so that
 * a static redirect page (GitHub Pages) can always find the latest URL.
 * This gives a stable bookmark URL even though quick tunnels change
 * their subdomain on every restart.
 */

const fs = require("node:fs");
const path = require("node:path");
const https = require("node:https");

const { resolveStateDir } = require("./studio-settings");

// ── Config persistence ────────────────────────────────────────────────

const CONFIG_PATH = path.join(
  resolveStateDir(),
  "openclaw-studio",
  "tunnel-discovery.json",
);

function loadConfig() {
  try {
    const raw = fs.readFileSync(CONFIG_PATH, "utf8");
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function saveConfig(config) {
  const dir = path.dirname(CONFIG_PATH);
  fs.mkdirSync(dir, { recursive: true });
  const tmp = CONFIG_PATH + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(config, null, 2), "utf8");
  fs.renameSync(tmp, CONFIG_PATH);
}

function getConfig() {
  return loadConfig();
}

function setGithubPat(pat) {
  const config = loadConfig();
  config.githubPat = pat;
  saveConfig(config);
}

function setGistId(gistId) {
  const config = loadConfig();
  config.gistId = gistId;
  saveConfig(config);
}

// ── Gist API helpers ──────────────────────────────────────────────────

function apiRequest(method, urlPath, token, body) {
  return new Promise((resolve, reject) => {
    const data = body ? JSON.stringify(body) : null;
    const options = {
      hostname: "api.github.com",
      path: urlPath,
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "User-Agent": "openclaw-studio-tunnel-discovery",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    };
    if (data) {
      options.headers["Content-Type"] = "application/json";
      options.headers["Content-Length"] = Buffer.byteLength(data);
    }

    const req = https.request(options, (res) => {
      const chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => {
        const text = Buffer.concat(chunks).toString("utf8");
        try {
          resolve({ status: res.statusCode, data: JSON.parse(text) });
        } catch {
          resolve({ status: res.statusCode, data: text });
        }
      });
    });
    req.on("error", reject);
    if (data) req.write(data);
    req.end();
  });
}

/**
 * Update the Gist with the current tunnel URL.
 * Creates the Gist if no gistId is configured yet.
 */
async function publishTunnelUrl(url) {
  const config = loadConfig();
  const pat = config.githubPat;
  if (!pat) {
    console.warn("[tunnel-discovery] No GitHub PAT configured — skipping publish");
    return null;
  }

  const content = JSON.stringify(
    { url, updatedAt: new Date().toISOString() },
    null,
    2,
  );

  if (config.gistId) {
    // Update existing gist (retry once on 409 conflict)
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const res = await apiRequest(
          "PATCH",
          `/gists/${config.gistId}`,
          pat,
          { files: { "tunnel.json": { content } } },
        );
        if (res.status === 200) {
          console.info(`[tunnel-discovery] Gist updated with ${url}`);
          return config.gistId;
        }
        if (res.status === 409 && attempt === 0) {
          // Conflict — wait briefly and retry
          await new Promise((r) => setTimeout(r, 1000));
          continue;
        }
        console.warn(
          `[tunnel-discovery] Gist update failed (${res.status})`,
        );
      } catch (err) {
        console.warn(
          `[tunnel-discovery] Gist update error: ${err.message}`,
        );
      }
    }
    // Don't create a new gist if one is configured — just log and bail
    return null;
  }

  // Create new gist (only if no gistId configured at all)
  try {
    const res = await apiRequest("POST", "/gists", pat, {
      description: "OpenClaw Studio tunnel URL",
      public: true,
      files: { "tunnel.json": { content } },
    });
    if (res.status === 201 && res.data?.id) {
      config.gistId = res.data.id;
      saveConfig(config);
      console.info(
        `[tunnel-discovery] Gist created: ${res.data.id} with ${url}`,
      );
      return res.data.id;
    }
    console.error(
      `[tunnel-discovery] Gist creation failed (${res.status}):`,
      res.data,
    );
  } catch (err) {
    console.error(
      `[tunnel-discovery] Gist creation error: ${err.message}`,
    );
  }
  return null;
}

/**
 * Publish null URL (tunnel stopped).
 */
async function clearTunnelUrl() {
  return publishTunnelUrl(null);
}

module.exports = {
  getConfig,
  setGithubPat,
  setGistId,
  publishTunnelUrl,
  clearTunnelUrl,
};
