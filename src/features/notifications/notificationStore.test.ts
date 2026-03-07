import { describe, expect, it, vi } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { createElement, type ReactNode } from "react";
import {
  NotificationProvider,
  useNotificationStore,
  type PushPayload,
} from "./notificationStore";

// ─── Helpers ─────────────────────────────────────────────────────────────────

// Stable UUID sequence for deterministic IDs in tests
let uuidSeq = 0;
vi.stubGlobal("crypto", {
  ...globalThis.crypto,
  randomUUID: vi.fn(() => `uuid-${++uuidSeq}`),
});

function wrapper({ children }: { children: ReactNode }) {
  return createElement(NotificationProvider, null, children);
}

function renderStore() {
  return renderHook(() => useNotificationStore(), { wrapper });
}

function makePayload(overrides: Partial<PushPayload> = {}): PushPayload {
  return {
    type: "info",
    source: "test",
    title: "Test notification",
    ...overrides,
  };
}

// ─── Tests ───────────────────────────────────────────────────────────────────

describe("notificationStore", () => {
  it("starts with no notifications and unreadCount 0", () => {
    const { result } = renderStore();
    expect(result.current.notifications).toEqual([]);
    expect(result.current.unreadCount).toBe(0);
  });

  it("push adds a notification", () => {
    const { result } = renderStore();

    act(() => {
      result.current.pushNotification(makePayload({ title: "Hello" }));
    });

    expect(result.current.notifications).toHaveLength(1);
    expect(result.current.notifications[0].title).toBe("Hello");
    expect(result.current.notifications[0].read).toBe(false);
    expect(typeof result.current.notifications[0].id).toBe("string");
    expect(typeof result.current.notifications[0].timestamp).toBe("number");
  });

  it("dismiss removes a notification", () => {
    const { result } = renderStore();

    act(() => {
      result.current.pushNotification(makePayload({ title: "A" }));
      result.current.pushNotification(makePayload({ title: "B" }));
    });

    expect(result.current.notifications).toHaveLength(2);
    const idToRemove = result.current.notifications.find(
      (n) => n.title === "A",
    )!.id;

    act(() => {
      result.current.dismissNotification(idToRemove);
    });

    expect(result.current.notifications).toHaveLength(1);
    expect(result.current.notifications[0].title).toBe("B");
  });

  it("markRead sets read=true for a specific notification", () => {
    const { result } = renderStore();

    act(() => {
      result.current.pushNotification(makePayload({ title: "X" }));
      result.current.pushNotification(makePayload({ title: "Y" }));
    });

    const target = result.current.notifications.find((n) => n.title === "X")!;
    expect(target.read).toBe(false);

    act(() => {
      result.current.markRead(target.id);
    });

    const updated = result.current.notifications.find((n) => n.title === "X")!;
    expect(updated.read).toBe(true);

    // Other notification remains unread
    const other = result.current.notifications.find((n) => n.title === "Y")!;
    expect(other.read).toBe(false);
  });

  it("markAllRead marks all as read", () => {
    const { result } = renderStore();

    act(() => {
      result.current.pushNotification(makePayload({ title: "A" }));
      result.current.pushNotification(makePayload({ title: "B" }));
      result.current.pushNotification(makePayload({ title: "C" }));
    });

    expect(result.current.unreadCount).toBe(3);

    act(() => {
      result.current.markAllRead();
    });

    expect(result.current.unreadCount).toBe(0);
    for (const n of result.current.notifications) {
      expect(n.read).toBe(true);
    }
  });

  it("max 100 notifications (overflow drops oldest)", () => {
    const { result } = renderStore();

    act(() => {
      for (let i = 0; i < 110; i++) {
        result.current.pushNotification(makePayload({ title: `N-${i}` }));
      }
    });

    expect(result.current.notifications).toHaveLength(100);
    // Newest notification (N-109) should be first
    expect(result.current.notifications[0].title).toBe("N-109");
    // Oldest retained should be N-10 (0..9 were dropped)
    expect(result.current.notifications[99].title).toBe("N-10");
  });

  it("unreadCount is computed correctly", () => {
    const { result } = renderStore();

    act(() => {
      result.current.pushNotification(makePayload({ title: "A" }));
      result.current.pushNotification(makePayload({ title: "B" }));
    });

    expect(result.current.unreadCount).toBe(2);

    const firstId = result.current.notifications[0].id;
    act(() => {
      result.current.markRead(firstId);
    });

    expect(result.current.unreadCount).toBe(1);

    act(() => {
      result.current.markAllRead();
    });

    expect(result.current.unreadCount).toBe(0);
  });
});
