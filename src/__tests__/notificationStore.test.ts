import { describe, it, expect } from "vitest";

type NotificationType = "info" | "success" | "warning" | "error";
type Notification = {
  id: string;
  type: NotificationType;
  source: string;
  title: string;
  timestamp: number;
  read: boolean;
};
type State = { notifications: Notification[] };
type Action =
  | { type: "push"; notification: Notification }
  | { type: "dismiss"; id: string }
  | { type: "markAllRead" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "push":
      return {
        notifications: [action.notification, ...state.notifications].slice(
          0,
          100,
        ),
      };
    case "dismiss":
      return {
        notifications: state.notifications.filter((n) => n.id !== action.id),
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

describe("notification reducer", () => {
  const makeNotif = (id: string): Notification => ({
    id,
    type: "info",
    source: "test",
    title: "Test",
    timestamp: Date.now(),
    read: false,
  });

  it("push adds notification at front", () => {
    const s = reducer(
      { notifications: [] },
      { type: "push", notification: makeNotif("1") },
    );
    expect(s.notifications[0].id).toBe("1");
  });

  it("dismiss removes notification", () => {
    const notif = makeNotif("1");
    const s = reducer({ notifications: [notif] }, { type: "dismiss", id: "1" });
    expect(s.notifications).toHaveLength(0);
  });

  it("markAllRead marks all as read", () => {
    const s = reducer(
      { notifications: [makeNotif("1"), makeNotif("2")] },
      { type: "markAllRead" },
    );
    expect(s.notifications.every((n) => n.read)).toBe(true);
  });

  it("caps at 100 notifications", () => {
    let state: State = { notifications: [] };
    for (let i = 0; i < 105; i++) {
      state = reducer(state, {
        type: "push",
        notification: makeNotif(String(i)),
      });
    }
    expect(state.notifications).toHaveLength(100);
  });
});
