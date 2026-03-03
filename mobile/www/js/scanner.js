// scanner.js — QR code scanning via @capawesome/capacitor-mlkit-barcode-scanning

async function getScanner() {
  try {
    const { BarcodeScanner } = await import("@capawesome/capacitor-mlkit-barcode-scanning");
    return BarcodeScanner;
  } catch {
    return null;
  }
}

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
    await scanner.requestPermissions();
  }

  // Start scanning
  const result = await scanner.scan({
    formats: [0], // 0 = QR_CODE
  });

  if (!result?.barcodes?.length) {
    throw new Error("No QR code detected");
  }

  const raw = result.barcodes[0].rawValue;

  // Parse JSON payload: {"lan":"...","port":3000,"token":"..."}
  try {
    const data = JSON.parse(raw);
    return {
      url: `http://${data.lan ?? data.host}:${data.port ?? 3000}`,
      token: data.token ?? "",
    };
  } catch {
    // Maybe it's a plain URL
    if (raw.startsWith("http")) {
      const u = new URL(raw);
      const token = u.searchParams.get("access_token") ?? "";
      u.searchParams.delete("access_token");
      return { url: u.origin, token };
    }
    throw new Error("Invalid QR code format");
  }
}

window.Scanner = { scanQRCode };
