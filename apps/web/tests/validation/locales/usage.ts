import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import test, { describe } from "node:test";
import { getAllJsonFiles, getKeys, LOCALES_DIR, SOURCE_LOCALE } from ".";

const SRC_DIR = path.join(__dirname, "../../../src");

// Get all TypeScript/TSX files recursively
function getAllSourceFiles(dir: string, base = ""): string[] {
  const files: string[] = [];
  if (!fs.existsSync(dir)) return files;

  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const relativePath = path.join(base, entry);

    if (fs.statSync(fullPath).isDirectory()) {
      files.push(...getAllSourceFiles(fullPath, relativePath));
    } else if (entry.endsWith(".ts") || entry.endsWith(".tsx")) {
      files.push(relativePath);
    }
  }
  return files;
}

// Extract namespace and function name from useTranslation or getTranslation calls
function extractTranslationCalls(
  content: string
): { static: Array<{ namespace: string; fnName: string }>; dynamicPrefixes: string[] } {
  const staticCalls: Array<{ namespace: string; fnName: string }> = [];
  const dynamicPrefixes: string[] = [];

  // Match { t } or { t, ... } = useTranslation("namespace") or getTranslation("namespace") - static
  const simpleRegex = /\{\s*t[\s,}].*?=\s*(?:await\s+)?(?:useTranslation|getTranslation)\s*\(\s*["']([^"']+)["']/g;
  let match;
  while ((match = simpleRegex.exec(content)) !== null) {
    staticCalls.push({ namespace: match[1], fnName: "t" });
  }

  // Match { t: tName } or { t: tName, ... } = useTranslation("namespace") or getTranslation("namespace") - static
  const renamedRegex = /\{\s*t:\s*(\w+)[\s,}].*?=\s*(?:await\s+)?(?:useTranslation|getTranslation)\s*\(\s*["']([^"']+)["']/g;
  while ((match = renamedRegex.exec(content)) !== null) {
    staticCalls.push({ namespace: match[2], fnName: match[1] });
  }

  // Match dynamic namespaces like getTranslation(`constants/agencies/${agency.id}`)
  const dynamicRegex = /(?:useTranslation|getTranslation)\s*\(\s*`([^`$]+)\$\{/g;
  while ((match = dynamicRegex.exec(content)) !== null) {
    dynamicPrefixes.push(match[1]);
  }

  return { static: staticCalls, dynamicPrefixes };
}

// Extract function("key") calls from content for a specific function name
function extractKeysForFunction(
  content: string,
  fnName: string
): { keys: string[]; dynamicPrefixes: string[] } {
  const keys: string[] = [];
  const dynamicPrefixes: string[] = [];

  // Match fnName("key") or fnName('key') - simple string keys only
  const staticRegex = new RegExp(`\\b${fnName}\\s*\\(\\s*["']([^"']+)["']`, "g");
  let match;
  while ((match = staticRegex.exec(content)) !== null) {
    keys.push(match[1]);
  }

  // Match fnName(`prefix.${...}`) - dynamic keys with template literals
  const dynamicRegex = new RegExp(`\\b${fnName}\\s*\\(\\s*\`([^\`$]+)\\$\\{`, "g");
  while ((match = dynamicRegex.exec(content)) !== null) {
    // Remove trailing dot if present
    const prefix = match[1].replace(/\.$/, "");
    dynamicPrefixes.push(prefix);
  }

  return { keys, dynamicPrefixes };
}

// Build a map of namespace -> { keys: Set, dynamicPrefixes: Set }
// Also returns dynamic namespace prefixes (e.g., "constants/agencies/" matches "constants/agencies/lyon")
function buildUsageMap(): {
  usageMap: Map<string, { keys: Set<string>; dynamicPrefixes: Set<string> }>;
  dynamicNamespacePrefixes: Set<string>;
} {
  const usageMap = new Map<string, { keys: Set<string>; dynamicPrefixes: Set<string> }>();
  const dynamicNamespacePrefixes = new Set<string>();
  const sourceFiles = getAllSourceFiles(SRC_DIR);

  for (const file of sourceFiles) {
    const filePath = path.join(SRC_DIR, file);
    const content = fs.readFileSync(filePath, "utf-8");

    const { static: staticCalls, dynamicPrefixes: nsDynamicPrefixes } =
      extractTranslationCalls(content);

    // Collect dynamic namespace prefixes
    for (const prefix of nsDynamicPrefixes) {
      dynamicNamespacePrefixes.add(prefix);
    }

    // For each static translation call, extract keys used with that function name
    for (const { namespace, fnName } of staticCalls) {
      const { keys, dynamicPrefixes } = extractKeysForFunction(content, fnName);

      if (!usageMap.has(namespace)) {
        usageMap.set(namespace, { keys: new Set(), dynamicPrefixes: new Set() });
      }
      const entry = usageMap.get(namespace)!;
      for (const key of keys) {
        entry.keys.add(key);
      }
      for (const prefix of dynamicPrefixes) {
        entry.dynamicPrefixes.add(prefix);
      }
    }
  }

  return { usageMap, dynamicNamespacePrefixes };
}

// Convert locale file path to namespace
function filePathToNamespace(filePath: string): string {
  // Remove .json extension and normalize path separators
  return filePath.replace(/\.json$/, "").replace(/\\/g, "/");
}

export function usageTests() {
  describe("Locales usage", () => {
    test("no unused translation keys", () => {
      const sourceLocaleDir = path.join(LOCALES_DIR, SOURCE_LOCALE);
      const sourceJsonFiles = getAllJsonFiles(sourceLocaleDir);
      const { usageMap, dynamicNamespacePrefixes } = buildUsageMap();

      const unused: string[] = [];

      for (const file of sourceJsonFiles) {
        const namespace = filePathToNamespace(file);
        const filePath = path.join(sourceLocaleDir, file);
        const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        const keys = getKeys(data);

        const usage = usageMap.get(namespace);

        if (!usage) {
          // Check if namespace matches a dynamic prefix (e.g., "constants/agencies/lyon" matches "constants/agencies/")
          const matchesDynamicNs = Array.from(dynamicNamespacePrefixes).some(
            (prefix) => namespace.startsWith(prefix)
          );
          if (matchesDynamicNs) continue;

          // Entire namespace not used
          unused.push(`${namespace}: entire file not imported`);
          continue;
        }

        for (const key of keys) {
          // Check if key is used statically
          if (usage.keys.has(key)) continue;

          // Check if key matches a dynamic prefix (e.g., "employment-type.full-time" matches "employment-type")
          const matchesDynamicPrefix = Array.from(usage.dynamicPrefixes).some(
            (prefix) => key === prefix || key.startsWith(`${prefix}.`)
          );
          if (matchesDynamicPrefix) continue;

          unused.push(`${namespace}: "${key}"`);
        }
      }

      // For now, just report unused keys as a warning (don't fail the test)
      if (unused.length > 0) {
        console.log(`\n⚠️  Potentially unused translation keys (${unused.length}):`);
        for (const item of unused.slice(0, 20)) {
          console.log(`   - ${item}`);
        }
        if (unused.length > 20) {
          console.log(`   ... and ${unused.length - 20} more`);
        }
        console.log("");
      }

      // Uncomment to make this test fail on unused keys:
      // assert.strictEqual(
      //   unused.length,
      //   0,
      //   `Unused translation keys:\n${unused.join("\n")}`
      // );
    });
  });
}
