import { NextResponse } from "next/server";
import { withErrorHandler } from "@/lib/api/error-handler";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { importFromEnvContent } = require("../../../../../server/env-importer");

export const runtime = "nodejs";

type EnvImportBody = {
  content: string;
};

const isValidBody = (body: unknown): body is EnvImportBody =>
  Boolean(
    body &&
    typeof body === "object" &&
    typeof (body as EnvImportBody).content === "string",
  );

async function post_handler(request: Request) {
  try {
    const body = (await request.json()) as unknown;
    if (!isValidBody(body)) {
      return NextResponse.json(
        { error: "Expected { content: string } with .env file content." },
        { status: 400 },
      );
    }
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