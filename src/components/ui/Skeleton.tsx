"use client";

import type { HTMLAttributes } from "react";

/* ---------------------------------------------------------------------------
 * Base Skeleton
 * A single pulsing placeholder block. Respects `--animation-duration`: when
 * set to 0 the pulse animation is suppressed (useful for reduced-motion or
 * test environments).
 * ----------------------------------------------------------------------- */

export function Skeleton({
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`animate-pulse rounded-md bg-muted [animation-duration:var(--animation-duration,1.5s)] ${className}`}
      {...props}
    />
  );
}

/* ---------------------------------------------------------------------------
 * SkeletonCard
 * Rectangle with a header line and two body lines.
 * ----------------------------------------------------------------------- */

export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse space-y-3 rounded-[var(--radius-card)] border border-border bg-card p-4 [animation-duration:var(--animation-duration,1.5s)] ${className}`}
    >
      {/* Header line */}
      <Skeleton className="h-4 w-2/5" />
      {/* Body lines */}
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-4/5" />
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * SkeletonTable
 * Header row + 5 body rows, each with 3 cells.
 * ----------------------------------------------------------------------- */

export function SkeletonTable({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse space-y-2 [animation-duration:var(--animation-duration,1.5s)] ${className}`}
    >
      {/* Header row */}
      <div className="flex gap-4 border-b border-border pb-2">
        <Skeleton className="h-3 flex-1" />
        <Skeleton className="h-3 flex-1" />
        <Skeleton className="h-3 flex-1" />
      </div>
      {/* Body rows */}
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i} className="flex gap-4 py-1">
          <Skeleton className="h-3 flex-1" />
          <Skeleton className="h-3 flex-1" />
          <Skeleton className="h-3 flex-1" />
        </div>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * SkeletonTimeline
 * 4 timeline items, each with a circle indicator and a connecting line.
 * ----------------------------------------------------------------------- */

export function SkeletonTimeline({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse space-y-0 [animation-duration:var(--animation-duration,1.5s)] ${className}`}
    >
      {Array.from({ length: 4 }, (_, i) => (
        <div key={i} className="flex gap-3">
          {/* Vertical track: circle + line */}
          <div className="flex flex-col items-center">
            <Skeleton className="h-3 w-3 shrink-0 rounded-full" />
            {i < 3 && <Skeleton className="h-10 w-0.5 rounded-full" />}
          </div>
          {/* Content placeholder */}
          <div className="flex-1 space-y-1 pb-4">
            <Skeleton className="h-3 w-1/3" />
            <Skeleton className="h-2 w-2/3" />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * SkeletonChat
 * 3 alternating left/right chat bubbles.
 * ----------------------------------------------------------------------- */

export function SkeletonChat({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse space-y-3 [animation-duration:var(--animation-duration,1.5s)] ${className}`}
    >
      {/* Left bubble */}
      <div className="flex justify-start">
        <div className="space-y-1 rounded-xl rounded-tl-sm bg-muted p-3">
          <Skeleton className="h-3 w-40" />
          <Skeleton className="h-3 w-28" />
        </div>
      </div>
      {/* Right bubble */}
      <div className="flex justify-end">
        <div className="space-y-1 rounded-xl rounded-tr-sm bg-primary/15 p-3">
          <Skeleton className="h-3 w-48" />
          <Skeleton className="h-3 w-32" />
        </div>
      </div>
      {/* Left bubble */}
      <div className="flex justify-start">
        <div className="space-y-1 rounded-xl rounded-tl-sm bg-muted p-3">
          <Skeleton className="h-3 w-36" />
        </div>
      </div>
    </div>
  );
}
