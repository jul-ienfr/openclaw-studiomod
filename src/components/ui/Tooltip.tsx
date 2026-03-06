"use client";
import { useState, useRef, type ReactNode } from "react";

export function Tooltip({
  content,
  children,
}: {
  content: string;
  children: ReactNode;
}) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative inline-flex"
      ref={ref}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-1.5 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-popover px-2 py-1 text-xs text-popover-foreground shadow-md">
          {content}
        </div>
      )}
    </div>
  );
}
