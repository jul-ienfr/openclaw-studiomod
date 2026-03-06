"use client";

import { useEffect, useCallback, useRef } from "react";
import { eventBus } from "./EventBus";
import type { EventType, SSEEvent } from "./types";

export function useEventBus(
  type: EventType | "*",
  handler: (event: SSEEvent) => void,
) {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  });

  useEffect(() => {
    eventBus.connect();

    const stableHandler = (event: SSEEvent) => handlerRef.current(event);
    const unsubscribe = eventBus.on(type, stableHandler);

    return unsubscribe;
  }, [type]);
}

export function useEventBusConnection() {
  useEffect(() => {
    eventBus.connect();
    return () => {
      // Don't disconnect on unmount — singleton stays alive
    };
  }, []);
}
