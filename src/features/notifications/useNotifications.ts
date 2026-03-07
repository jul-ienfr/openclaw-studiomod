"use client";

import { useContext } from "react";
import {
  NotificationContext,
  type Notification,
  type NotificationContextValue,
  type PushPayload,
} from "./notificationStore";

export type { Notification, PushPayload };

/**
 * Primary hook for consuming the notification system.
 *
 * Usage:
 *   const { notifications, unreadCount, push, dismiss, markAllRead } = useNotifications();
 */
export function useNotifications(): NotificationContextValue & {
  /** Alias for pushNotification — shorter form */
  push: (payload: PushPayload) => void;
  /** Alias for dismissNotification — shorter form */
  dismiss: (id: string) => void;
} {
  const ctx = useContext(NotificationContext);
  return {
    ...ctx,
    push: ctx.pushNotification,
    dismiss: ctx.dismissNotification,
  };
}
