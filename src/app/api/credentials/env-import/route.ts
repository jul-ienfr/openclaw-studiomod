import { NextResponse } from "next/server";
import { withErrorHandler } from "@/lib/api/error-handler";
import { EnvImportSchema } from "@/lib/api/schemas/config";
import { parseBody, isValidationError } from "@/lib/api/validation";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { importFromEnvContent } = require("../../../../../server/env-importer");

export const runtime = "nodejs";

async function post_handler(request: Request) {
  try {
    const body = await parseBody(request, EnvImportSchema);
    if (isValidationError(body)) return body;

    const result = importFromEnvContent(body.content);
    return NextResponse.json(result);
  } catch (err) {
    const message =
      err instanceof Error
        ? err.message
        : "Failed to import from .env content.";
    console.error(message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export const POST = withErrorHandler(post_handler);
