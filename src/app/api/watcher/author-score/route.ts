import { NextResponse } from "next/server";
import { getDb } from "@/lib/watcher/db";

export const runtime = "nodejs";

// Mainteneurs connus
const KNOWN_MAINTAINERS = new Set([
  "grp06", "garrettmichaelgeorge", "vincekoc", "vincent koc",
  "dependabot[bot]", "dependabot", "jo98000",
]);

const KNOWN_BOTS = new Set([
  "dependabot[bot]", "dependabot", "github-actions[bot]",
  "renovate[bot]", "renovate", "snyk-bot",
]);

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const author = searchParams.get("author");

    if (!author) {
      return NextResponse.json({ error: "Paramètre 'author' requis" }, { status: 400 });
    }

    const db = getDb();
    const authorLower = author.toLowerCase().trim();

    // Stats auteur
    const total = (db.prepare("SELECT COUNT(*) AS c FROM items WHERE LOWER(author) = ?").get(authorLower) as { c: number }).c;
    const autoCount = (db.prepare(
      "SELECT COUNT(*) AS c FROM items i JOIN scores s ON i.id = s.item_id WHERE LOWER(i.author) = ? AND s.decision = 'AUTO'"
    ).get(authorLower) as { c: number }).c;
    const blockCount = (db.prepare(
      "SELECT COUNT(*) AS c FROM items i JOIN scores s ON i.id = s.item_id WHERE LOWER(i.author) = ? AND s.decision = 'BLOCK'"
    ).get(authorLower) as { c: number }).c;
    const implementedCount = (db.prepare(
      "SELECT COUNT(*) AS c FROM items WHERE LOWER(author) = ? AND status = 'implemented'"
    ).get(authorLower) as { c: number }).c;

    // Déterminer le rôle
    let role = "inconnu";
    let score = 45;
    let details = "Première contribution détectée";

    if ([...KNOWN_MAINTAINERS].some(m => m.toLowerCase() === authorLower)) {
      role = "mainteneur";
      score = 95;
      details = "Mainteneur officiel du projet";
    } else if ([...KNOWN_BOTS].some(b => b.toLowerCase() === authorLower) || authorLower.endsWith("[bot]")) {
      role = "bot";
      score = 80;
      details = "Bot automatisé (dépendances, CI)";
    } else if (total > 0) {
      let base = 50;
      base += Math.min(20, total);
      base += Math.min(15, autoCount * 5);
      base -= blockCount * 10;
      if (blockCount === 0 && total > 3) base += 5;
      score = Math.max(10, Math.min(90, base));
      role = total >= 3 ? "contributeur" : "inconnu";
      details = `${total} contributions, ${autoCount} AUTO, ${blockCount} BLOCK, ${implementedCount} implémentés`;
    }

    return NextResponse.json({
      author,
      score,
      role,
      contributions: total,
      auto_count: autoCount,
      block_count: blockCount,
      implemented_count: implementedCount,
      details,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Erreur";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
