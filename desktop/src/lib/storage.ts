import { invoke } from "@tauri-apps/api/core";
import type { ServerConfig } from "./types";

export async function getServers(): Promise<ServerConfig[]> {
  return invoke<ServerConfig[]>("get_servers");
}

export async function saveServer(
  config: Omit<ServerConfig, "id">,
): Promise<ServerConfig> {
  return invoke<ServerConfig>("save_server", { config });
}

export async function deleteServer(id: string): Promise<void> {
  return invoke<void>("delete_server", { id });
}

export async function getLastServer(): Promise<ServerConfig | null> {
  return invoke<ServerConfig | null>("get_last_server");
}

export async function testConnection(
  url: string,
  token: string,
): Promise<boolean> {
  return invoke<boolean>("test_connection", { url, token });
}

export async function setLastServerId(id: string): Promise<void> {
  return invoke<void>("set_last_server_id", { id });
}
