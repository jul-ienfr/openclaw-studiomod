import type { ChannelConfig, ChannelWithStatus } from "./types";
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
  details: Record<string, string>;
};

export async function fetchChannelConfigsFromGateway(): Promise<Record<string, ChannelConfig>> {
  const res = await fetch("/api/channels");
  if (!res.ok) return {};
  const data = (await res.json()) as { channels?: GatewayChannelInfo[] };
  const configs: Record<string, ChannelConfig> = {};

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

      configs[ch.name] = {
        id: ch.name as ChannelConfig["id"],
        enabled: ch.enabled,
        fields: Object.keys(rawFields).length > 0 ? rawFields : ch.details,
      };
    })
  );

  return configs;
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
): ChannelWithStatus[] {
  return CHANNEL_REGISTRY.map((def) => {
    const config = configs[def.id];
    let status: ChannelWithStatus["status"] = "disconnected";
    if (config?.enabled) {
      status = "connected";
    } else if (config) {
      status = "configuring";
    }
    return { ...def, status, config };
  });
}
