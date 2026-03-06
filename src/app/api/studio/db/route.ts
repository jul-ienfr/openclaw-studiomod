import { NextResponse } from "next/server";
import { runMigrations } from "@/lib/db/migrations";
import { getDbStats } from "@/lib/db/studio-db";
import { withErrorHandler } from "@/lib/api/error-handler";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function get_handler() {
  try {
    const { applied, current_version } = runMigrations();
    const { size_bytes, migration_version, table_counts } = getDbStats();

    return NextResponse.json({
      ok: true,
      size_bytes,
      migration_version: migration_version || current_version,
      table_counts,
      migrations_applied_now: applied,
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to initialize studio DB";
    console.error("[studio-db]", message);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

export const GET = withErrorHandler(get_handler);