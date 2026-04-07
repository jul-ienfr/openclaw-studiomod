"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useSharedGatewayConnection } from "@/lib/gateway/GatewayConnectionProvider";
import { type GatewayConnectionState } from "@/lib/gateway/GatewayClient";
import {
  type GatewayModelChoice,
  type GatewayModelPolicySnapshot,
  buildStaticModelCatalog,
  filterModelsByConfiguredProviders,
} from "@/lib/gateway/models";
import { PROVIDER_REGISTRY } from "@/features/providers/providerRegistry";
import { useProviderStore } from "@/features/providers/providerStore";
import { createStudioSettingsCoordinator } from "@/lib/studio/coordinator";
import { isLocalGatewayUrl } from "@/lib/gateway/local-gateway";

const isRecord = (value: unknown): value is Record<string, unknown> =>
  Boolean(value && typeof value === "object" && !Array.isArray(value));

const normalizeControlUiBasePath = (basePath: string): string => {
  let normalized = basePath.trim();
  if (!normalized || normalized === "/") return "";
  if (!normalized.startsWith("/")) {
    normalized = `/${normalized}`;
  }
  if (normalized.endsWith("/")) {
    normalized = normalized.slice(0, -1);
  }
  return normalized;
};

const resolveControlUiUrl = (params: {
  gatewayUrl: string;
  configSnapshot: GatewayModelPolicySnapshot | null;
}): string | null => {
  const rawGatewayUrl = params.gatewayUrl.trim();
  if (!rawGatewayUrl) return null;

  let controlUiEnabled = true;
  let controlUiBasePath = "";

  const config = params.configSnapshot?.config;
  if (isRecord(config)) {
    const configRecord = config as Record<string, unknown>;
    const gateway = isRecord(configRecord["gateway"])
      ? (configRecord["gateway"] as Record<string, unknown>)
      : null;
    const controlUi =
      gateway && isRecord(gateway.controlUi) ? gateway.controlUi : null;
    if (controlUi && typeof controlUi.enabled === "boolean") {
      controlUiEnabled = controlUi.enabled;
    }
    if (typeof controlUi?.basePath === "string") {
      controlUiBasePath = normalizeControlUiBasePath(controlUi.basePath);
    }
  }

  if (!controlUiEnabled) return null;

  try {
    const url = new URL(rawGatewayUrl);
    if (url.protocol === "ws:") {
      url.protocol = "http:";
    } else if (url.protocol === "wss:") {
      url.protocol = "https:";
    }
    url.pathname = controlUiBasePath ? `${controlUiBasePath}/` : "/";
    url.search = "";
    url.hash = "";
    return url.toString();
  } catch {
    return null;
  }
};

export type AgentGatewayControllerState = {
  /** The gateway client instance */
  client: GatewayConnectionState["client"];
  /** Current connection status */
  status: GatewayConnectionState["status"];
  /** Gateway URL */
  gatewayUrl: string;
  /** Authentication token */
  token: string;
  /** Local gateway defaults if available */
  localGatewayDefaults: GatewayConnectionState["localGatewayDefaults"];
  /** Connection error */
  gatewayError: string | null;
  /** Connect to gateway */
  connect: () => Promise<void>;
  /** Disconnect from gateway */
  disconnect: () => void;
  /** Apply local gateway defaults */
  useLocalGatewayDefaults: () => void;
  /** Set gateway URL */
  setGatewayUrl: (value: string) => void;
  /** Set authentication token */
  setToken: (value: string) => void;
  /** All available models (gateway + static catalog, filtered by providers) */
  allModels: GatewayModelChoice[];
  /** Raw gateway models */
  gatewayModels: GatewayModelChoice[];
  /** Gateway models loading error */
  gatewayModelsError: string | null;
  /** Set gateway models */
  setGatewayModels: React.Dispatch<React.SetStateAction<GatewayModelChoice[]>>;
  /** Set gateway models error */
  setGatewayModelsError: React.Dispatch<React.SetStateAction<string | null>>;
  /** Gateway config snapshot */
  gatewayConfigSnapshot: GatewayModelPolicySnapshot | null;
  /** Set gateway config snapshot */
  setGatewayConfigSnapshot: React.Dispatch<
    React.SetStateAction<GatewayModelPolicySnapshot | null>
  >;
  /** Settings coordinator */
  settingsCoordinator: ReturnType<typeof createStudioSettingsCoordinator>;
  /** Configured provider IDs */
  configuredProviderIds: string[];
  /** Whether connected to a local gateway */
  isLocalGateway: boolean;
  /** Resolved control UI URL */
  controlUiUrl: string | null;
};

export const useAgentGatewayController = (): AgentGatewayControllerState => {
  const {
    client,
    status,
    gatewayUrl,
    token,
    localGatewayDefaults,
    error: gatewayError,
    connect,
    disconnect,
    useLocalGatewayDefaults,
    setGatewayUrl,
    setToken,
    settingsCoordinator,
  } = useSharedGatewayConnection();

  const [gatewayModels, setGatewayModels] = useState<GatewayModelChoice[]>([]);
  const [gatewayModelsError, setGatewayModelsError] = useState<string | null>(
    null,
  );
  const { getConfiguredProviderIds } = useProviderStore();
  const configuredProviderIds = useMemo(
    () => getConfiguredProviderIds(),
    [getConfiguredProviderIds],
  );
  const allModels = useMemo(
    () =>
      filterModelsByConfiguredProviders(
        gatewayModels.length > 0
          ? gatewayModels
          : buildStaticModelCatalog(PROVIDER_REGISTRY),
        configuredProviderIds,
      ),
    [gatewayModels, configuredProviderIds],
  );
  const [gatewayConfigSnapshot, setGatewayConfigSnapshot] =
    useState<GatewayModelPolicySnapshot | null>(null);

  const isLocalGateway = useMemo(
    () => isLocalGatewayUrl(gatewayUrl),
    [gatewayUrl],
  );
  const controlUiUrl = useMemo(
    () =>
      resolveControlUiUrl({
        gatewayUrl,
        configSnapshot: gatewayConfigSnapshot,
      }),
    [gatewayConfigSnapshot, gatewayUrl],
  );

  return {
    client,
    status,
    gatewayUrl,
    token,
    localGatewayDefaults,
    gatewayError,
    connect,
    disconnect,
    useLocalGatewayDefaults,
    setGatewayUrl,
    setToken,
    allModels,
    gatewayModels,
    gatewayModelsError,
    setGatewayModels,
    setGatewayModelsError,
    gatewayConfigSnapshot,
    setGatewayConfigSnapshot,
    settingsCoordinator,
    configuredProviderIds,
    isLocalGateway,
    controlUiUrl,
  };
};
