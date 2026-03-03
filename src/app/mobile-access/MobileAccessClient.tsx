"use client";

import { useState } from "react";
import Image from "next/image";
import { Copy, Check, Smartphone, Wifi, Globe } from "lucide-react";

interface ConnectionInfo {
  lan: string;
  port: number;
  token: string;
}

interface Props {
  qrDataUrl: string;
  connectionInfo: ConnectionInfo;
}

export default function MobileAccessClient({
  qrDataUrl,
  connectionInfo,
}: Props) {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = async (text: string, key: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedItem(key);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const lanUrl = `http://${connectionInfo.lan}:${connectionInfo.port}`;
  const jsonStr = JSON.stringify({
    lan: connectionInfo.lan,
    port: connectionInfo.port,
    token: connectionInfo.token,
  });

  return (
    <div className="flex h-full flex-col items-center justify-start overflow-y-auto bg-background p-8">
      <div className="w-full max-w-lg space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <Smartphone className="h-7 w-7 text-primary" strokeWidth={1.75} />
          <div>
            <h1 className="font-display text-2xl font-bold tracking-wide text-foreground">
              Mobile Access
            </h1>
            <p className="text-sm text-muted-foreground">
              Scan to connect OpenClaw Studio from your phone
            </p>
          </div>
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center rounded-xl border border-border bg-white p-6 shadow-sm">
          <Image
            src={qrDataUrl}
            alt="QR code for mobile access"
            width={280}
            height={280}
            unoptimized
          />
          <p className="mt-3 text-xs text-muted-foreground">
            Scan with the OpenClaw Studio mobile app
          </p>
        </div>

        {/* Connection details */}
        <div className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Connection details
          </h2>

          {/* LAN URL */}
          <div className="flex items-center gap-2 rounded-lg border border-border bg-surface-1 px-3 py-2.5">
            <Wifi className="h-4 w-4 shrink-0 text-muted-foreground" />
            <span className="min-w-0 flex-1 truncate font-mono text-sm text-foreground">
              {lanUrl}
            </span>
            <button
              onClick={() => copyToClipboard(lanUrl, "lan")}
              className="shrink-0 rounded p-1 hover:bg-surface-2"
              aria-label="Copy LAN URL"
            >
              {copiedItem === "lan" ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
          </div>

          {/* Token */}
          {connectionInfo.token && (
            <div className="flex items-center gap-2 rounded-lg border border-border bg-surface-1 px-3 py-2.5">
              <Globe className="h-4 w-4 shrink-0 text-muted-foreground" />
              <span className="min-w-0 flex-1 truncate font-mono text-sm text-foreground">
                token: {connectionInfo.token}
              </span>
              <button
                onClick={() => copyToClipboard(connectionInfo.token, "token")}
                className="shrink-0 rounded p-1 hover:bg-surface-2"
                aria-label="Copy token"
              >
                {copiedItem === "token" ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4 text-muted-foreground" />
                )}
              </button>
            </div>
          )}

          {/* JSON for desktop app */}
          <div className="flex items-start gap-2 rounded-lg border border-border bg-surface-1 px-3 py-2.5">
            <Smartphone className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
            <span className="min-w-0 flex-1 break-all font-mono text-xs text-muted-foreground">
              {jsonStr}
            </span>
            <button
              onClick={() => copyToClipboard(jsonStr, "json")}
              className="shrink-0 rounded p-1 hover:bg-surface-2"
              aria-label="Copy connection JSON"
            >
              {copiedItem === "json" ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="rounded-xl border border-border bg-surface-1 p-4 space-y-3">
          <h2 className="text-sm font-semibold text-foreground">
            How to connect
          </h2>
          <ol className="space-y-2 text-sm text-muted-foreground list-none">
            <li className="flex gap-2">
              <span className="font-mono text-xs font-bold text-primary bg-primary/10 rounded px-1.5 py-0.5 h-fit">
                1
              </span>
              <span>
                <strong className="text-foreground">Same WiFi:</strong> Install
                the OpenClaw Studio app on your phone, scan this QR code
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-mono text-xs font-bold text-primary bg-primary/10 rounded px-1.5 py-0.5 h-fit">
                2
              </span>
              <span>
                <strong className="text-foreground">Remote (4G/LTE):</strong>{" "}
                Install Tailscale on both PC and phone, connect to same account
                — then use the Tailscale IP instead
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-mono text-xs font-bold text-primary bg-primary/10 rounded px-1.5 py-0.5 h-fit">
                3
              </span>
              <span>
                <strong className="text-foreground">Desktop app:</strong> Copy
                the JSON above and paste it in the OpenClaw Studio desktop app
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
