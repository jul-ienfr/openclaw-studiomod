"use server";

import QRCode from "qrcode";
import { headers } from "next/headers";
import MobileAccessClient from "./MobileAccessClient";
import { getTunnelStatus } from "@/lib/tunnel/manager";

export default async function MobileAccessPage() {
  // Detect LAN IP from request host header
  const headersList = await headers();
  const host =
    headersList.get("x-forwarded-host") ??
    headersList.get("host") ??
    "localhost:3000";
  const lanHost = host.split(":")[0];
  const port = parseInt(host.split(":")[1] ?? "3000", 10);

  const connectionInfo = {
    lan: lanHost,
    port,
  };

  // Placeholder QR without token — client generates the real one after creating an instance token
  const qrData = JSON.stringify(connectionInfo);
  const qrDataUrl = await QRCode.toDataURL(qrData, {
    width: 280,
    margin: 2,
    color: { dark: "#000000", light: "#ffffff" },
    errorCorrectionLevel: "M",
  });

  const initialTunnel = getTunnelStatus();

  return (
    <MobileAccessClient
      qrDataUrl={qrDataUrl}
      connectionInfo={connectionInfo}
      initialTunnel={initialTunnel}
    />
  );
}
