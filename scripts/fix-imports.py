#!/usr/bin/env python3
"""
Fix misplaced withErrorHandler imports that got inserted inside string literals.
Strategy:
1. Find all route.ts files that have the import
2. For each: check if the import appears where a TypeScript import should be (at the top level)
3. If not, remove it from the wrong location and ensure it's in the right place
"""
import os
import re

API_DIR = os.path.join(os.path.dirname(__file__), "..", "src", "app", "api")
IMPORT_LINE = 'import { withErrorHandler } from "@/lib/api/error-handler";'

def find_routes():
    results = []
    for root, dirs, files in os.walk(API_DIR):
        for f in files:
            if f == "route.ts":
                results.append(os.path.join(root, f))
    return results

def fix_file(path):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    if IMPORT_LINE not in content:
        return False, "no import found"

    lines = content.split("\n")

    # Find lines with the import
    import_positions = [i for i, line in enumerate(lines) if IMPORT_LINE in line]

    if not import_positions:
        return False, "no import found"

    changed = False
    # Check each import position
    for pos in list(import_positions):
        # Check if this is inside a string (look backwards for template literal or regular string)
        # Heuristic: the import should appear in the first 30% of the file, and not after a backtick-started line
        is_inside_string = False

        # Look backwards to see if we're inside a template literal
        # Count backticks before this line
        content_before = "\n".join(lines[:pos])
        backtick_count = content_before.count("`")
        if backtick_count % 2 == 1:  # Odd = we're inside a template literal
            is_inside_string = True

        if is_inside_string:
            # Remove this misplaced import
            lines[pos] = lines[pos].replace(IMPORT_LINE, "").rstrip()
            changed = True

    if not changed:
        return False, "import is in correct position"

    # Ensure the import exists at the top level (after other imports)
    new_content = "\n".join(lines)

    if IMPORT_LINE not in new_content:
        # Need to add the import at the top
        # Find the last proper import statement at the top
        top_lines = new_content.split("\n")
        last_import_idx = -1
        for i, line in enumerate(top_lines):
            stripped = line.strip()
            if stripped.startswith("import ") and not stripped.startswith("import {"):
                last_import_idx = i
            elif stripped.startswith("import {") or stripped.startswith("import type {"):
                # Multi-line import: find the closing }
                j = i
                while j < len(top_lines) and "} from" not in top_lines[j]:
                    j += 1
                last_import_idx = j

        if last_import_idx >= 0:
            top_lines.insert(last_import_idx + 1, IMPORT_LINE)
        else:
            top_lines.insert(0, IMPORT_LINE)

        new_content = "\n".join(top_lines)

    # Clean up any empty lines that were left
    new_content = re.sub(r"\n{3,}", "\n\n", new_content)

    with open(path, "w", encoding="utf-8") as f:
        f.write(new_content)

    return True, "fixed"

routes = find_routes()
fixed = 0
for route in routes:
    rel = route[len(API_DIR):]
    changed, reason = fix_file(route)
    if changed:
        print(f"FIXED {rel}: {reason}")
        fixed += 1

print(f"\nFixed {fixed} files")
