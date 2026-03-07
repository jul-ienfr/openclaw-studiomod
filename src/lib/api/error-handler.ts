import { NextResponse } from "next/server";
import { ZodError } from "zod";

// ─── AppError ─────────────────────────────────────────────────────────────────

export class AppError extends Error {
  public readonly status: number;
  public readonly code: string | undefined;

  constructor(message: string, status: number, code?: string) {
    super(message);
    this.name = "AppError";
    this.status = status;
    this.code = code;
  }
}

// ─── withErrorHandler ─────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RouteHandler = (req: any, ctx: any) => Promise<Response> | Response;

/**
 * Wraps a Next.js route handler with unified error handling.
 * - ZodError → 400 with validation details
 * - AppError → status from error with code
 * - Unexpected errors → 500 with requestId for correlation
 */
export function withErrorHandler(handler: RouteHandler): RouteHandler {
  return async (req: Request, ctx: unknown) => {
    const requestId = crypto.randomUUID().slice(0, 8);
    try {
      return await handler(req, ctx);
    } catch (err) {
      if (err instanceof ZodError) {
        return NextResponse.json(
          { error: "Validation failed", details: err.issues, requestId },
          { status: 400 },
        );
      }
      if (err instanceof AppError) {
        return NextResponse.json(
          { error: err.message, code: err.code, requestId },
          { status: err.status },
        );
      }
      // Log unexpected errors server-side
      const pathname = (() => {
        try {
          return new URL(req.url).pathname;
        } catch {
          return req.url;
        }
      })();
      console.error(
        `[${requestId}] Unhandled error in ${req.method} ${pathname}:`,
        err,
      );
      return NextResponse.json(
        { error: "Internal server error", requestId },
        { status: 500 },
      );
    }
  };
}
