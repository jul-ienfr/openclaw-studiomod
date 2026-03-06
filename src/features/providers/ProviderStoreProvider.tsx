"use client";

import { useEffect, useMemo, type ReactNode } from "react";
import type { ProviderId, ProviderConfig, ProviderWithStatus } from "./types";
import {
  ProviderStoreContext,
  useProviderZustandStore,
  loadProviderConfigs,
  buildProvidersWithStatus,
  getConfiguredProviderIdsFromConfigs,
} from "./providerStore";

export const ProviderStoreProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const zustand = useProviderZustandStore();

  // Seed the Zustand store from localStorage on first mount (client only)
  useEffect(() => {
    const initial = loadProviderConfigs();
    if (Object.keys(initial).length > 0) {
      useProviderZustandStore.setState({ configs: initial });
    }
  }, []);

  // Build a stable Context value that delegates to the Zustand store.
  // This keeps all existing useProviderStore() callers working as-is.
  const store = useMemo(
    () => ({
      configs: zustand.configs,
      saveProvider: zustand.saveProvider,
      removeProvider: zustand.removeProvider,
      getProvidersWithStatus: (): ProviderWithStatus[] =>
        buildProvidersWithStatus(zustand.configs),
      getConfiguredProviderIds: (): ProviderId[] =>
        getConfiguredProviderIdsFromConfigs(zustand.configs),
    }),
    // Re-compute only when configs reference changes (Zustand ensures this)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [zustand.configs],
  );

  return (
    <ProviderStoreContext.Provider value={store}>
      {children}
    </ProviderStoreContext.Provider>
  );
};
