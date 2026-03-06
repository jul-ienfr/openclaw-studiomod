"use server";

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

  const initialTunnel = getTunnelStatus();

  return (
    <MobileAccessClient
      connectionInfo={connectionInfo}
      initialTunnel={initialTunnel}
    />
  );
}
