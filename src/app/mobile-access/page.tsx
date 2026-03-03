"use server";

import QRCode from "qrcode";
import { headers } from "next/headers";
import MobileAccessClient from "./MobileAccessClient";

export default async function MobileAccessPage() {
  // Detect LAN IP from request host header
  const headersList = await headers();
  const host =
    headersList.get("x-forwarded-host") ??
    headersList.get("host") ??
    "localhost:3000";
  const lanHost = host.split(":")[0];
  const port = parseInt(host.split(":")[1] ?? "3000", 10);

  const token = process.env.STUDIO_ACCESS_TOKEN ?? "";

  const connectionInfo = {
    lan: lanHost,
    port,
    token,
  };

  const qrData = JSON.stringify(connectionInfo);
  const qrDataUrl = await QRCode.toDataURL(qrData, {
    width: 280,
    margin: 2,
    color: { dark: "#000000", light: "#ffffff" },
    errorCorrectionLevel: "M",
  });

  return (
    <MobileAccessClient qrDataUrl={qrDataUrl} connectionInfo={connectionInfo} />
  );
}
