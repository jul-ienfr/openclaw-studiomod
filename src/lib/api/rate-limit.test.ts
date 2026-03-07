// @vitest-environment node

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// Use fake timers so we can control Date.now() without real delays
beforeEach(() => {
  vi.useFakeTimers();
});
afterEach(() => {
  vi.useRealTimers();
  vi.resetModules();
});

// Fresh import per test to avoid cross-test bucket state
async function freshRateLimit() {
  const mod = await import("./rate-limit");
  return mod.rateLimit;
}

describe("rateLimit", () => {
  it("allows requests under the limit", async () => {
    const rateLimit = await freshRateLimit();
    const check = rateLimit(5, 60); // 5 tokens, 60/min refill

    // First 5 requests should all be allowed
    for (let i = 0; i < 5; i++) {
      expect(check("192.168.1.1")).toBe(true);
    }
  });

  it("blocks requests over the limit", async () => {
    const rateLimit = await freshRateLimit();
    const check = rateLimit(3, 60); // 3 tokens

    // Exhaust all 3 tokens
    expect(check("10.0.0.1")).toBe(true);
    expect(check("10.0.0.1")).toBe(true);
    expect(check("10.0.0.1")).toBe(true);

    // 4th request should be blocked
    expect(check("10.0.0.1")).toBe(false);
    expect(check("10.0.0.1")).toBe(false);
  });

  it("resets after enough time has passed (refill)", async () => {
    const rateLimit = await freshRateLimit();
    const check = rateLimit(2, 60); // 2 tokens, refill 60/min = 1/sec

    // Exhaust tokens
    expect(check("10.0.0.2")).toBe(true);
    expect(check("10.0.0.2")).toBe(true);
    expect(check("10.0.0.2")).toBe(false);

    // Advance time by 1 minute — should refill fully (60 tokens over 1 min, capped at max 2)
    vi.advanceTimersByTime(60_000);

    expect(check("10.0.0.2")).toBe(true);
    expect(check("10.0.0.2")).toBe(true);
  });

  it("treats different keys independently", async () => {
    const rateLimit = await freshRateLimit();
    const check = rateLimit(1, 60); // 1 token each

    expect(check("user-A")).toBe(true);
    expect(check("user-A")).toBe(false); // A exhausted

    // B is unaffected
    expect(check("user-B")).toBe(true);
    expect(check("user-B")).toBe(false); // B now exhausted
  });

  it("partial refill works correctly", async () => {
    const rateLimit = await freshRateLimit();
    // 2 tokens max, 2 per minute refill
    const check = rateLimit(2, 2);

    // Exhaust all tokens
    expect(check("partial")).toBe(true);
    expect(check("partial")).toBe(true);
    expect(check("partial")).toBe(false);

    // Advance 30 seconds — should refill 1 token (2/min * 0.5 min = 1)
    vi.advanceTimersByTime(30_000);

    expect(check("partial")).toBe(true); // the refilled token
    expect(check("partial")).toBe(false); // still short
  });
});

describe("getClientIp", () => {
  // getClientIp is a pure function, can be imported directly
  it("extracts IP from x-forwarded-for", async () => {
    const { getClientIp } = await import("./rate-limit");
    const req = new Request("http://localhost/", {
      headers: { "x-forwarded-for": "1.2.3.4, 5.6.7.8" },
    });
    expect(getClientIp(req)).toBe("1.2.3.4");
  });

  it("falls back to x-real-ip", async () => {
    const { getClientIp } = await import("./rate-limit");
    const req = new Request("http://localhost/", {
      headers: { "x-real-ip": "9.8.7.6" },
    });
    expect(getClientIp(req)).toBe("9.8.7.6");
  });

  it("returns 'unknown' when no proxy headers", async () => {
    const { getClientIp } = await import("./rate-limit");
    const req = new Request("http://localhost/");
    expect(getClientIp(req)).toBe("unknown");
  });
});
