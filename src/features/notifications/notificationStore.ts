"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  createElement,
  type ReactNode,
} from "react";
import { randomUUID } from "@/lib/uuid";

// ------------------------------------------------------------------
// Types
// ------------------------------------------------------------------

export type NotificationType = "info" | "success" | "warning" | "error";

export type LogSource = string;

export type Notification = {
  id: string;
  type: NotificationType;
  /** Origin: agent id, system, gateway, etc. */
  source: LogSource;
  title: string;
  message?: string;
  timestamp: number;
  read: boolean;
  /** Auto-dismiss delay in ms. undefined = persist. */
  autoDismiss?: number;
  action?: { label: string; href: string };
};

export type PushPayload = Omit<Notification, "id" | "timestamp" | "read">;

// ------------------------------------------------------------------
// Actions
// ------------------------------------------------------------------

type Action =
  | { type: "push"; notification: Notification }
  | { type: "dismiss"; id: string }
  | { type: "markRead"; id: string }
  | { type: "markAllRead" };

// ------------------------------------------------------------------
// Reducer
// ------------------------------------------------------------------

type NotificationState = {
  notifications: Notification[];
};

function reducer(state: NotificationState, action: Action): NotificationState {
  switch (action.type) {
    case "push": {
      // Keep max 100 notifications, newest first
      const next = [action.notification, ...state.notifications].slice(0, 100);
      return { notifications: next };
    }
    case "dismiss":
      return {
        notifications: state.notifications.filter((n) => n.id !== action.id),
      };
    case "markRead":
      return {
        notifications: state.notifications.map((n) =>
          n.id === action.id ? { ...n, read: true } : n,
        ),
      };
    case "markAllRead":
      return {
        notifications: state.notifications.map((n) =>
          n.read ? n : { ...n, read: true },
        ),
      };
    default:
      return state;
  }
}

const initialState: NotificationState = { notifications: [] };

// ------------------------------------------------------------------
// Context
// ------------------------------------------------------------------

export type NotificationContextValue = {
  notifications: Notification[];
  unreadCount: number;
  pushNotification: (payload: PushPayload) => void;
  dismissNotification: (id: string) => void;
  markRead: (id: string) => void;
  markAllRead: () => void;
};

export const NotificationContext = createContext<NotificationContextValue>({
  notifications: [],
  unreadCount: 0,
  pushNotification: () => {},
  dismissNotification: () => {},
  markRead: () => {},
  markAllRead: () => {},
});

// ------------------------------------------------------------------
// Global bridge (for use outside React tree)
// ------------------------------------------------------------------

let _pushGlobal: ((payload: PushPayload) => void) | null = null;

/** Push a notification from outside React (e.g. from gateway event handlers). */
export const pushNotificationGlobal = (payload: PushPayload): void =>
  void _pushGlobal?.(payload);

// ------------------------------------------------------------------
// Provider
// ------------------------------------------------------------------

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const pushNotification = useCallback((payload: PushPayload) => {
    const notification: Notification = {
      ...payload,
      id: randomUUID(),
      timestamp: Date.now(),
      read: false,
    };
    dispatch({ type: "push", notification });
  }, []);

  const dismissNotification = useCallback((id: string) => {
    dispatch({ type: "dismiss", id });
  }, []);

  const markRead = useCallback((id: string) => {
    dispatch({ type: "markRead", id });
  }, []);

  const markAllRead = useCallback(() => {
    dispatch({ type: "markAllRead" });
  }, []);

  useEffect(() => {
    _pushGlobal = pushNotification;
    return () => {
      if (_pushGlobal === pushNotification) {
        _pushGlobal = null;
      }
    };
  }, [pushNotification]);

  const unreadCount = useMemo(
    () => state.notifications.filter((n) => !n.read).length,
    [state.notifications],
  );

  const value = useMemo<NotificationContextValue>(
    () => ({
      notifications: state.notifications,
      unreadCount,
      pushNotification,
      dismissNotification,
      markRead,
      markAllRead,
    }),
    [
      state.notifications,
      unreadCount,
      pushNotification,
      dismissNotification,
      markRead,
      markAllRead,
    ],
  );

  return createElement(NotificationContext.Provider, { value }, children);
}

// ------------------------------------------------------------------
// Low-level hook (raw store access)
// ------------------------------------------------------------------

export function useNotificationStore(): NotificationContextValue {
  return useContext(NotificationContext);
}
