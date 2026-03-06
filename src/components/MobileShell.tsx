import { MobileHeader } from "./MobileHeader";
import { MobileTabBar } from "./MobileTabBar";

export function MobileShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mobile-shell">
      <MobileHeader />
      <main className="mobile-shell-content">{children}</main>
      <MobileTabBar />
    </div>
  );
}
