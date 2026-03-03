import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["server/**/*.js", "scripts/**/*.js", "cli/**/*.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "no-unused-vars": "off",
    },
  },
  {
    rules: {
      "react-hooks/preserve-manual-memoization": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",

    // Vendored third-party code (kept as-is; linting it adds noise).
    "src/lib/avatars/vendor/**",

    // Build artifacts (bundled/minified SPAs).
    "public/ai-manager/**",

    // Mobile app (Capacitor — plain JS, not Next.js/React).
    "mobile/**",

    // Desktop app (Tauri — build output and Rust target).
    "desktop/dist/**",
    "desktop/src-tauri/target/**",
  ]),
  prettier,
]);

export default eslintConfig;
