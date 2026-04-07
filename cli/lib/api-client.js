const http = require("node:http");
const https = require("node:https");
const fs = require("node:fs");
const path = require("node:path");
const os = require("node:os");

const DEFAULT_BASE_URL = "http://localhost:3000";

const getConfigUrl = () => {
  try {
    const configPath = path.join(os.homedir(), ".openclaw", "openclaw.json");
    if (fs.existsSync(configPath)) {
      const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
      // Check if URL is defined in config, default back if not
      if (config.url) return config.url;
      if (config.gateway?.url) return config.gateway.url;
    }
  } catch (err) {
    // Ignore errors reading config and fallback to env/default
  }
  return null;
};

const getBaseUrl = () => process.env.OPENCLAW_STUDIO_URL || getConfigUrl() || DEFAULT_BASE_URL;

/**
 * Make an HTTP request to the Studio API.
 */
const request = (method, apiPath, body) => {
  return new Promise((resolve, reject) => {
    const base = getBaseUrl();
    const url = new URL(apiPath, base);
    const isHttps = url.protocol === "https:";
    const lib = isHttps ? https : http;

    const options = {
      hostname: url.hostname,
      port: url.port || (isHttps ? 443 : 80),
      path: url.pathname + url.search,
      method,
      headers: { "Content-Type": "application/json" },
    };

    const req = lib.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => { data += chunk; });
      res.on("end", () => {
        try {
          const json = JSON.parse(data);
          if (res.statusCode >= 400) {
            reject(new Error(json.error || `HTTP ${res.statusCode}`));
          } else {
            resolve(json);
          }
        } catch {
          reject(new Error(`Invalid JSON response: ${data.slice(0, 200)}`));
        }
      });
    });

    req.on("error", (err) => {
      reject(new Error(`Could not connect to Studio at ${base}. Is it running?\n${err.message}`));
    });

    if (body) req.write(JSON.stringify(body));
    req.end();
  });
};

const api = {
  get: (apiPath) => request("GET", apiPath),
  post: (apiPath, body) => request("POST", apiPath, body),
  put: (apiPath, body) => request("PUT", apiPath, body),
};

module.exports = { api, getBaseUrl };
