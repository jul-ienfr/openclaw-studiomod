"use client";

import { useEffect, useRef } from "react";

/**
 * Calls `callback` immediately and then every `delayMs` milliseconds.
 * Automatically cleans up on unmount.
 */
export function useInterval(callback: () => void, delayMs: number) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    savedCallback.current();
    const id = setInterval(() => savedCallback.current(), delayMs);
    return () => clearInterval(id);
  }, [delayMs]);
}
