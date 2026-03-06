import type { ChannelConfig, ChannelStatus, ChannelWithStatus } from "./types";
import { CHANNEL_REGISTRY } from "./channelRegistry";

const STORAGE_KEY = "openclaw-studio-channels";

export function loadChannelConfigs(): Record<string, ChannelConfig> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as Record<string, ChannelConfig>;
  } catch {
    return {};
  }
}

export function persistChannelConfigs(configs: Record<string, ChannelConfig>): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(configs));
  } catch {
    // localStorage may be unavailable
  }
}

type GatewayChannelInfo = {
  name: string;
  enabled: boolean;
  status?: ChannelStatus;
  details: Record<string, string>;
  lastActivity?: number | null;
};

export type ChannelFetchResult = {
  configs: Record<string, ChannelConfig>;
  statusMap: Record<string, ChannelStatus>;
  lastActivityMap: Record<string, number | null>;
  gatewayOnline: boolean;
};

export async function fetchChannelConfigsFromGateway(): Promise<ChannelFetchResult> {
  const result: ChannelFetchResult = {
    configs: {},
    statusMap: {},
    lastActivityMap: {},
    gatewayOnline: false,
  };
  try {
    const res = await fetch("/api/channels");
    if (!res.ok) return result;
    const data = (await res.json()) as {
      channels?: GatewayChannelInfo[];
      gatewayOnline?: boolean;
    };
    result.gatewayOnline = data.gatewayOnline ?? false;

    await Promise.all(
      (data.channels ?? []).map(async (ch) => {
        // Fetch raw config (camelCase keys) so the edit modal pre-populates correctly
        let rawFields: Record<string, string> = {};
        try {
          const rawRes = await fetch(`/api/channels?raw=${encodeURIComponent(ch.name)}`);
          if (rawRes.ok) {
            const rawData = (await rawRes.json()) as { raw?: Record<string, unknown> };
            rawFields = Object.fromEntries(
              Object.entries(rawData.raw ?? {}).map(([k, v]) => [k, String(v ?? "")])
            );
          }
        } catch { /* fall back to display details */ }

        result.configs[ch.name] = {
          id: ch.name as ChannelConfig["id"],
          enabled: ch.enabled,
          fields: Object.keys(rawFields).length > 0 ? rawFields : ch.details,
        };
        if (ch.status) {
          result.statusMap[ch.name] = ch.status;
        }
        result.lastActivityMap[ch.name] = ch.lastActivity ?? null;
      })
    );
  } catch { /* network error */ }

  return result;
}

export async function patchGatewayChannel(
  name: string,
  patch: Record<string, unknown>
): Promise<void> {
  await fetch("/api/channels", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, patch }),
  });
}

export async function deleteGatewayChannel(name: string): Promise<void> {
  await fetch(`/api/channels?name=${encodeURIComponent(name)}`, { method: "DELETE" });
}

export function buildChannelsWithStatus(
  configs: Record<string, ChannelConfig>,
  statusMap?: Record<string, ChannelStatus>,
  lastActivityMap?: Record<string, number | null>,
): (ChannelWithStatus & { lastActivity?: number | null })[] {
  return CHANNEL_REGISTRY.map((def) => {
    const config = configs[def.id];
    let status: ChannelWithStatus["status"] = "disconnected";
    // Use real status from API if available
    if (statusMap && statusMap[def.id]) {
      status = statusMap[def.id];
    } else if (config?.enabled) {
      status = "connected";
    } else if (config) {
      status = "configuring";
    }
    return {
      ...def,
      status,
      config,
      lastActivity: lastActivityMap?.[def.id] ?? null,
    };
  });
}
