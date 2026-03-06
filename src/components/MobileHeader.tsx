"use client";

import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, MoreVertical } from "lucide-react";

const PAGE_TITLES: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/agents": "Agents",
  "/skills": "Skills",
  "/channels": "Channels",
  "/config": "Configuration",
  "/settings": "Settings",
  "/logs": "Logs",
  "/reports": "Rapports",
  "/intercom": "Intercom",
  "/analytics": "Analytics",
  "/watcher": "Watcher",
  "/providers": "Providers",
  "/credentials": "Credentials",
  "/voice": "Voice",
  "/routing": "Routing",
  "/webhooks": "Webhooks",
  "/canvas": "Canvas",
  "/ai-manager": "AI Manager",
  "/mobile-access": "Mobile Access",
};

/** Top-level tab paths — no back arrow for these */
const TAB_ROOTS = new Set([
  "/dashboard",
  "/agents",
  "/skills",
  "/channels",
  "/config",
]);

function resolveTitle(pathname: string): string {
  if (PAGE_TITLES[pathname]) return PAGE_TITLES[pathname];
  // Try parent path
  const parent = pathname.replace(/\/[^/]+$/, "");
  if (PAGE_TITLES[parent]) return PAGE_TITLES[parent];
  return "OpenClaw Studio";
}

export function MobileHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const title = resolveTitle(pathname);
  const isSubPage = !TAB_ROOTS.has(pathname) && pathname !== "/";

  return (
    <header className="mobile-header">
      <div className="mobile-header-left">
        {isSubPage && (
          <button
            onClick={() => router.back()}
            className="mobile-header-btn"
            aria-label="Go back"
          >
            <ArrowLeft className="h-5 w-5" strokeWidth={1.75} />
          </button>
        )}
      </div>
      <h1 className="mobile-header-title">{title}</h1>
      <div className="mobile-header-right" />
    </header>
  );
}
