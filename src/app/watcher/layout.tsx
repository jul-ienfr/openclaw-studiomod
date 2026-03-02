import { WatcherProvider } from "@/features/watcher/state/store";
import { WatcherErrorBoundary } from "@/features/watcher/components/WatcherErrorBoundary";
import { WatcherIntegratedHeader } from "@/features/watcher/components/WatcherIntegratedHeader";
import type { ReactNode } from "react";

export default function WatcherLayout({ children }: { children: ReactNode }) {
  return (
    <WatcherProvider>
      <WatcherErrorBoundary>
        <div className="flex h-full flex-col overflow-hidden">
          <WatcherIntegratedHeader />
          <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
        </div>
      </WatcherErrorBoundary>
    </WatcherProvider>
  );
}
