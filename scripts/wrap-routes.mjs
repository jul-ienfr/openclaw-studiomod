/**
 * Script to add withErrorHandler wrapper to all existing API routes.
 * Run once: node scripts/wrap-routes.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const API_DIR = path.join(__dirname, "..", "src", "app", "api");

// Routes to skip (already have withErrorHandler or are special)
const SKIP_PATHS = new Set([
  "/auth/login/route.ts",
  "/auth/logout/route.ts",
  "/auth/me/route.ts",
  "/auth/setup/route.ts",
  // Streaming routes can't be wrapped (ReadableStream)
  "/events/stream/route.ts",
]);

// Exported HTTP method names
const HTTP_METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"];

function findRoutes(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findRoutes(full));
    } else if (entry.name === "route.ts") {
      results.push(full);
    }
  }
  return results;
}

function getRelativePath(full) {
  return full.slice(API_DIR.length);
}

function shouldSkip(full) {
  const rel = getRelativePath(full);
  return SKIP_PATHS.has(rel);
}

function transformRoute(filePath) {
  const content = fs.readFileSync(filePath, "utf8");

  // Skip if already has withErrorHandler
  if (content.includes("withErrorHandler")) return { changed: false, reason: "already wrapped" };

  // Skip if no async function export matching HTTP methods
  const exportedMethods = HTTP_METHODS.filter((m) => {
    return (
      content.includes(`export async function ${m}(`) ||
      content.includes(`export async function ${m} (`) ||
      content.includes(`export const ${m} =`)
    );
  });

  if (exportedMethods.length === 0) {
    return { changed: false, reason: "no HTTP exports found" };
  }

  let newContent = content;

  // Add import for withErrorHandler (after existing imports)
  const importLine = `import { withErrorHandler } from "@/lib/api/error-handler";`;
  if (!newContent.includes("withErrorHandler")) {
    // Insert after last import statement
    const lastImportMatch = [...newContent.matchAll(/^import .+$/gm)].pop();
    if (lastImportMatch) {
      const insertPos = lastImportMatch.index + lastImportMatch[0].length;
      newContent =
        newContent.slice(0, insertPos) +
        "\n" +
        importLine +
        newContent.slice(insertPos);
    } else {
      newContent = importLine + "\n" + newContent;
    }
  }

  // For each exported HTTP method, rename to handler and re-export wrapped
  let wrapsAdded = 0;

  for (const method of exportedMethods) {
    // Pattern: "export async function GET(" → rename to "async function GET_handler("
    // Then add: "export const GET = withErrorHandler(GET_handler);"

    const handlerName = `${method.toLowerCase()}_handler`;

    // Transform "export async function METHOD(" to "async function handlerName("
    const asyncFnPattern = new RegExp(
      `export\\s+async\\s+function\\s+${method}\\s*\\(`,
      "g",
    );
    if (asyncFnPattern.test(newContent)) {
      newContent = newContent.replace(
        new RegExp(`export\\s+async\\s+function\\s+${method}\\s*\\(`, "g"),
        `async function ${handlerName}(`,
      );
      // Add export const at the end
      newContent += `\nexport const ${method} = withErrorHandler(${handlerName});`;
      wrapsAdded++;
    }

    // Pattern: "export const GET = async (" → harder to detect, skip
  }

  if (wrapsAdded === 0) {
    return { changed: false, reason: "pattern not matched (const arrow fn?)" };
  }

  fs.writeFileSync(filePath, newContent, "utf8");
  return { changed: true, methods: exportedMethods.filter((m) => newContent.includes(`withErrorHandler(${m.toLowerCase()}_handler)`)) };
}

const routes = findRoutes(API_DIR);
let transformed = 0;
let skipped = 0;
let failed = 0;

for (const route of routes) {
  const rel = getRelativePath(route);

  if (shouldSkip(route)) {
    console.log(`SKIP  ${rel}`);
    skipped++;
    continue;
  }

  try {
    const result = transformRoute(route);
    if (result.changed) {
      console.log(`WRAP  ${rel} [${result.methods?.join(", ")}]`);
      transformed++;
    } else {
      console.log(`SKIP  ${rel} (${result.reason})`);
      skipped++;
    }
  } catch (err) {
    console.error(`ERR   ${rel}: ${err.message}`);
    failed++;
  }
}

console.log(`\nDone: ${transformed} wrapped, ${skipped} skipped, ${failed} errors`);
