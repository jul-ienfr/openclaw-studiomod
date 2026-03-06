"use client";

import { useEffect, useState } from "react";

type LayoutType = "mobile" | "tablet" | "desktop";

const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
} as const;

function getLayoutFromWidth(width: number): LayoutType {
  if (width < BREAKPOINTS.mobile) return "mobile";
  if (width < BREAKPOINTS.tablet) return "tablet";
  return "desktop";
}

export function useLayout(): {
  layout: LayoutType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
} {
  const [layout, setLayout] = useState<LayoutType>("desktop");

  useEffect(() => {
    const update = () => setLayout(getLayoutFromWidth(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return {
    layout,
    isMobile: layout === "mobile",
    isTablet: layout === "tablet",
    isDesktop: layout === "desktop",
  };
}
