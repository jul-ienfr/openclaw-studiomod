// @vitest-environment node

import { describe, expect, it, vi } from "vitest";
import { ZodError } from "zod";
import { AppError, withErrorHandler } from "./error-handler";

// Stable requestId for deterministic assertions
vi.stubGlobal("crypto", {
  ...globalThis.crypto,
  randomUUID: vi.fn(() => "aabbccdd-1234-5678-9abc-def012345678"),
});

function fakeRequest(method = "GET", path = "/test"): Request {
  return new Request(`http://localhost${path}`, { method });
}

describe("withErrorHandler", () => {
  it("passes through a successful handler response", async () => {
    const handler = withErrorHandler(async () => {
      return Response.json({ ok: true });
    });

    const res = await handler(fakeRequest(), {});
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toEqual({ ok: true });
  });

  it("catches ZodError and returns 400 with formatted issues", async () => {
    const zodError = new ZodError([
      {
        code: "invalid_type",
        expected: "string",
        received: "number",
        path: ["name"],
        message: "Expected string, received number",
      },
    ]);

    const handler = withErrorHandler(async () => {
      throw zodError;
    });

    const res = await handler(fakeRequest(), {});
    expect(res.status).toBe(400);

    const body = await res.json();
    expect(body.error).toBe("Validation failed");
    expect(body.requestId).toBe("aabbccdd");
    expect(body.details).toEqual(zodError.issues);
  });

  it("catches AppError and returns custom status", async () => {
    const handler = withErrorHandler(async () => {
      throw new AppError("Resource not found", 404, "NOT_FOUND");
    });

    const res = await handler(fakeRequest(), {});
    expect(res.status).toBe(404);

    const body = await res.json();
    expect(body.error).toBe("Resource not found");
    expect(body.code).toBe("NOT_FOUND");
    expect(body.requestId).toBe("aabbccdd");
  });

  it("catches unknown Error and returns 500 with requestId", async () => {
    // Suppress the expected console.error from the handler
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const handler = withErrorHandler(async () => {
      throw new TypeError("unexpected failure");
    });

    const res = await handler(fakeRequest("POST", "/api/things"), {});
    expect(res.status).toBe(500);

    const body = await res.json();
    expect(body.error).toBe("Internal server error");
    expect(body.requestId).toBe("aabbccdd");
    // Code should NOT be present for unknown errors
    expect(body.code).toBeUndefined();

    consoleSpy.mockRestore();
  });

  it("AppError without code omits code from response", async () => {
    const handler = withErrorHandler(async () => {
      throw new AppError("Forbidden", 403);
    });

    const res = await handler(fakeRequest(), {});
    expect(res.status).toBe(403);

    const body = await res.json();
    expect(body.error).toBe("Forbidden");
    expect(body.code).toBeUndefined();
  });
});
