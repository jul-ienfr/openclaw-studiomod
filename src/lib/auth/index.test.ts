// @vitest-environment node

import { afterEach, describe, expect, it, vi } from "vitest";

// ─── Mock DB repository ──────────────────────────────────────────────────────

const mockCreateSession = vi.fn();
const mockUpdateLastLogin = vi.fn();
const mockFindSessionByTokenHash = vi.fn();
const mockDeleteSessionByTokenHash = vi.fn();
const mockFindUserById = vi.fn();

vi.mock("@/lib/db/repositories/auth-repo", () => ({
  createSession: (...args: unknown[]) => mockCreateSession(...args),
  createUser: vi.fn(),
  deleteSessionByTokenHash: (...args: unknown[]) =>
    mockDeleteSessionByTokenHash(...args),
  findSessionByTokenHash: (...args: unknown[]) =>
    mockFindSessionByTokenHash(...args),
  findUserById: (...args: unknown[]) => mockFindUserById(...args),
  updateLastLogin: (...args: unknown[]) => mockUpdateLastLogin(...args),
}));

// ─── Mock Bun.password (not available in vitest/node) ────────────────────────

const bcryptHashes = new Map<string, string>();
let hashCounter = 0;

const mockBunPassword = {
  hash: vi.fn(async (password: string) => {
    const fakeHash = `$bcrypt$cost12$salt${hashCounter++}$${password}`;
    bcryptHashes.set(fakeHash, password);
    return fakeHash;
  }),
  verify: vi.fn(async (password: string, hash: string) => {
    return bcryptHashes.get(hash) === password;
  }),
};

// Provide global Bun shim for the module under test
vi.stubGlobal("Bun", { password: mockBunPassword });

// ─── Import after mocks ──────────────────────────────────────────────────────

const { hashPassword, verifyPassword, createAuthSession } =
  await import("./index");

// ─── Tests ───────────────────────────────────────────────────────────────────

afterEach(() => {
  vi.clearAllMocks();
});

describe("hashPassword", () => {
  it("returns a different hash each time (salt)", async () => {
    const hash1 = await hashPassword("secret");
    const hash2 = await hashPassword("secret");
    expect(hash1).not.toBe(hash2);
    expect(typeof hash1).toBe("string");
    expect(hash1.length).toBeGreaterThan(0);
  });
});

describe("verifyPassword", () => {
  it("matches the correct password", async () => {
    const hash = await hashPassword("correct-horse");
    const result = await verifyPassword("correct-horse", hash);
    expect(result).toBe(true);
  });

  it("rejects a wrong password", async () => {
    const hash = await hashPassword("correct-horse");
    const result = await verifyPassword("wrong-password", hash);
    expect(result).toBe(false);
  });
});

describe("createAuthSession", () => {
  it("returns a token and stores a session in the DB", async () => {
    mockUpdateLastLogin.mockResolvedValue(undefined);

    const { token, expiresAt } = await createAuthSession("user-123");

    expect(typeof token).toBe("string");
    expect(token.length).toBe(64); // 32 random bytes → 64 hex chars
    expect(expiresAt).toBeGreaterThan(Date.now());

    // DB createSession was called with correct shape
    expect(mockCreateSession).toHaveBeenCalledTimes(1);
    const call = mockCreateSession.mock.calls[0][0];
    expect(call.user_id).toBe("user-123");
    expect(typeof call.id).toBe("string");
    expect(typeof call.token_hash).toBe("string");
    expect(call.token_hash).not.toBe(token); // stored hash, not raw token
    expect(call.expires_at).toBe(expiresAt);

    // updateLastLogin was called
    expect(mockUpdateLastLogin).toHaveBeenCalledWith("user-123");
  });

  it("uses rememberMe TTL when opted in", async () => {
    mockUpdateLastLogin.mockResolvedValue(undefined);

    const before = Date.now();
    const { expiresAt } = await createAuthSession("user-456", {
      rememberMe: true,
    });

    const thirtyDaysMs = 30 * 24 * 60 * 60 * 1000;
    expect(expiresAt).toBeGreaterThanOrEqual(before + thirtyDaysMs - 100);
    expect(expiresAt).toBeLessThanOrEqual(before + thirtyDaysMs + 1000);
  });
});
