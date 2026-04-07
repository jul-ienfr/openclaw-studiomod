"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  useGatewayConnection,
  type GatewayConnectionState,
} from "./GatewayClient";
import { createStudioSettingsCoordinator } from "@/lib/studio/coordinator";

type GatewayConnectionContextValue = GatewayConnectionState & {
  settingsCoordinator: ReturnType<typeof createStudioSettingsCoordinator>;
};

const GatewayConnectionContext =
  createContext<GatewayConnectionContextValue | null>(null);

export function GatewayConnectionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [settingsCoordinator] = useState(() =>
    createStudioSettingsCoordinator(),
  );
  const connection = useGatewayConnection(settingsCoordinator);

  useEffect(() => {
    return () => {
      void settingsCoordinator.flushPending();
    };
  }, [settingsCoordinator]);

  return (
    <GatewayConnectionContext.Provider
      value={{ ...connection, settingsCoordinator }}
    >
      {children}
    </GatewayConnectionContext.Provider>
  );
}

export function useSharedGatewayConnection(): GatewayConnectionContextValue {
  const ctx = useContext(GatewayConnectionContext);
  if (!ctx) {
    throw new Error(
      "useSharedGatewayConnection must be used within GatewayConnectionProvider",
    );
  }
  return ctx;
}
