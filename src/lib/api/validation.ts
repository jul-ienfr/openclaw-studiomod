/**
 * Zod validation helpers for Next.js API routes.
 */
import { z } from "zod";
import { NextResponse } from "next/server";

/**
 * Parse and validate a JSON request body against a Zod schema.
 * Returns the parsed data on success, or a 400 NextResponse on failure.
 */
export async function parseBody<T>(
  request: Request,
  schema: z.ZodType<T>,
): Promise<T | NextResponse> {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const result = schema.safeParse(raw);
  if (!result.success) {
    return NextResponse.json(
      {
        error: "Validation failed",
        details: result.error.issues,
      },
      { status: 400 },
    );
  }
  return result.data;
}

/**
 * Parse and validate URL search params against a Zod schema.
 * Converts URLSearchParams to a plain object first.
 * Returns the parsed data on success, or a 400 NextResponse on failure.
 */
export function parseQuery<T>(
  url: URL,
  schema: z.ZodType<T>,
): T | NextResponse {
  const params: Record<string, string> = {};
  url.searchParams.forEach((value, key) => {
    params[key] = value;
  });

  const result = schema.safeParse(params);
  if (!result.success) {
    return NextResponse.json(
      {
        error: "Validation failed",
        details: result.error.issues,
      },
      { status: 400 },
    );
  }
  return result.data;
}

/**
 * Higher-order wrapper for route handlers with Zod body validation.
 * Parses the request body, returning 400 on failure or delegating to the handler on success.
 */
export function withValidation<T>(
  schema: z.ZodType<T>,
  handler: (data: T, request: Request) => Promise<NextResponse>,
): (request: Request) => Promise<NextResponse> {
  return async (request: Request) => {
    const result = await parseBody(request, schema);
    if (result instanceof NextResponse) return result;
    return handler(result, request);
  };
}

/**
 * Type guard: check if a value is a NextResponse (validation failure).
 */
export function isValidationError(value: unknown): value is NextResponse {
  return value instanceof NextResponse;
}
