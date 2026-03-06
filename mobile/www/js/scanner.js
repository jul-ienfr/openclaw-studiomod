// scanner.js — QR code scanning via @capacitor-mlkit/barcode-scanning

async function getScanner() {
  try {
    // Capacitor native plugin (registered by the native bridge)
    if (window.Capacitor?.Plugins?.BarcodeScanner) {
      return window.Capacitor.Plugins.BarcodeScanner;
    }
    // Fallback: dynamic import (only works with a bundler)
    const { BarcodeScanner } = await import("@capacitor-mlkit/barcode-scanning");
    return BarcodeScanner;
  } catch {
    return null;
  }
}

/**
 * Scan a QR code and return connection info.
 *
 * Supported QR formats:
 *  1. JSON: {"lan":"...", "port":3000, "token":"...", "tunnel":"...", "discovery":"..."}
 *  2. URL:  http://host:port?access_token=xxx
 *
 * Returns: { lan, tunnel, discovery, token }
 */
async function scanQRCode() {
  const scanner = await getScanner();
  if (!scanner) {
    throw new Error("Barcode scanner plugin not available");
  }

  // Check / request camera permission
  const { camera } = await scanner.checkPermissions();
  if (camera === "denied") {
    throw new Error("Camera permission denied. Please enable it in app settings.");
  }
  if (camera !== "granted") {
    const permResult = await scanner.requestPermissions();
    if (permResult.camera !== "granted") {
      throw new Error("Camera permission required to scan QR codes");
    }
  }

  const result = await scanner.scan({ formats: ["QR_CODE"] });

  if (!result?.barcodes?.length) {
    throw new Error("No QR code detected");
  }

  const raw = result.barcodes[0].rawValue;
  return parseQRPayload(raw);
}

function parseQRPayload(raw) {
  // Try JSON format first
  try {
    const data = JSON.parse(raw);
    const lan = data.lan
      ? `http://${data.lan ?? data.host}:${data.port ?? 3000}`
      : undefined;
    return {
      lan: lan,
      tunnel: data.tunnel || undefined,
      discovery: data.discovery || undefined,
      token: data.token || "",
    };
  } catch {
    // Fallback: plain URL with ?access_token=
    if (raw.startsWith("http")) {
      const u = new URL(raw);
      const token = u.searchParams.get("access_token") ?? "";
      u.searchParams.delete("access_token");
      const url = u.origin;
      const isTunnel = u.protocol === "https:";
      return {
        lan: isTunnel ? undefined : url,
        tunnel: isTunnel ? url : undefined,
        discovery: undefined,
        token,
      };
    }
    throw new Error("Invalid QR code format");
  }
}

window.Scanner = { scanQRCode, parseQRPayload };
