"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useRef } from "react";
import { Bot, LayoutDashboard, Puzzle, Radio, Settings } from "lucide-react";

const TABS = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/agents", label: "Agents", icon: Bot },
  { href: "/skills", label: "Skills", icon: Puzzle },
  { href: "/channels", label: "Channels", icon: Radio },
  { href: "/config", label: "Config", icon: Settings },
] as const;

export function MobileTabBar() {
  const pathname = usePathname();
  const router = useRouter();
  const touchStartX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      const currentIndex = TABS.findIndex(
        (tab) => pathname === tab.href || pathname.startsWith(tab.href + "/"),
      );
      if (currentIndex === -1) return;
      const nextIndex =
        delta < 0
          ? Math.min(currentIndex + 1, TABS.length - 1)
          : Math.max(currentIndex - 1, 0);
      if (nextIndex !== currentIndex) {
        router.push(TABS[nextIndex].href);
      }
    }
  };

  return (
    <nav
      className="mobile-bottom-nav"
      aria-label="Mobile navigation"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {TABS.map((tab) => {
        const active =
          pathname === tab.href || pathname.startsWith(tab.href + "/");
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className="mobile-bottom-nav-item"
            data-active={active}
          >
            <tab.icon strokeWidth={1.75} />
            <span>{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
