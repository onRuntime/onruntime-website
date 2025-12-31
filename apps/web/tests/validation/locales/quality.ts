import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import test, { describe } from "node:test";
import {
  getAllJsonFiles,
  getKeys,
  LOCALES_DIR,
  SOURCE_LOCALE,
  targetLocales,
} from ".";

// Extracts variables like {name}, {count}, etc.
function extractVariables(text: string): string[] {
  const matches = text.match(/\{[^}]+\}/g);
  return matches ? matches.sort() : [];
}

// Extracts HTML-like tags
function extractTags(text: string): string[] {
  const matches = text.match(/<[^>]+>/g);
  return matches ? matches.sort() : [];
}

// Gets a nested value from an object using dot notation
function getNestedValue(
  obj: Record<string, unknown>,
  key: string
): string | undefined {
  const parts = key.split(".");
  let current: unknown = obj;

  for (const part of parts) {
    if (current === null || typeof current !== "object") {
      return undefined;
    }
    current = (current as Record<string, unknown>)[part];
  }

  return typeof current === "string" ? current : undefined;
}

export function qualityTests() {
  const sourceLocaleDir = path.join(LOCALES_DIR, SOURCE_LOCALE);
  const sourceJsonFiles = getAllJsonFiles(sourceLocaleDir);

  describe("Locales quality", () => {
    test("variables are preserved in translations", () => {
      const issues: string[] = [];

      for (const file of sourceJsonFiles) {
        const sourcePath = path.join(sourceLocaleDir, file);
        const sourceData = JSON.parse(fs.readFileSync(sourcePath, "utf-8"));
        const sourceKeys = getKeys(sourceData);

        for (const locale of targetLocales) {
          const targetPath = path.join(LOCALES_DIR, locale, file);
          if (!fs.existsSync(targetPath)) continue;

          const targetData = JSON.parse(fs.readFileSync(targetPath, "utf-8"));

          for (const key of sourceKeys) {
            const sourceValue = getNestedValue(sourceData, key);
            const targetValue = getNestedValue(targetData, key);

            if (!sourceValue || !targetValue) continue;

            const sourceVars = extractVariables(sourceValue);
            const targetVars = extractVariables(targetValue);

            if (sourceVars.length > 0) {
              const missingVars = sourceVars.filter(
                (v) => !targetVars.includes(v)
              );
              const extraVars = targetVars.filter(
                (v) => !sourceVars.includes(v)
              );

              if (missingVars.length > 0) {
                issues.push(
                  `${locale}/${file}: "${key}" missing variables: ${missingVars.join(", ")}`
                );
              }
              if (extraVars.length > 0) {
                issues.push(
                  `${locale}/${file}: "${key}" extra variables: ${extraVars.join(", ")}`
                );
              }
            }
          }
        }
      }

      assert.strictEqual(
        issues.length,
        0,
        `Variable preservation issues:\n${issues.join("\n")}`
      );
    });

    test("HTML tags are preserved in translations", () => {
      const issues: string[] = [];

      for (const file of sourceJsonFiles) {
        const sourcePath = path.join(sourceLocaleDir, file);
        const sourceData = JSON.parse(fs.readFileSync(sourcePath, "utf-8"));
        const sourceKeys = getKeys(sourceData);

        for (const locale of targetLocales) {
          const targetPath = path.join(LOCALES_DIR, locale, file);
          if (!fs.existsSync(targetPath)) continue;

          const targetData = JSON.parse(fs.readFileSync(targetPath, "utf-8"));

          for (const key of sourceKeys) {
            const sourceValue = getNestedValue(sourceData, key);
            const targetValue = getNestedValue(targetData, key);

            if (!sourceValue || !targetValue) continue;

            const sourceTags = extractTags(sourceValue);
            const targetTags = extractTags(targetValue);

            if (sourceTags.length > 0) {
              const missingTags = sourceTags.filter(
                (t) => !targetTags.includes(t)
              );

              if (missingTags.length > 0) {
                issues.push(
                  `${locale}/${file}: "${key}" missing tags: ${missingTags.join(", ")}`
                );
              }
            }
          }
        }
      }

      assert.strictEqual(
        issues.length,
        0,
        `HTML tag preservation issues:\n${issues.join("\n")}`
      );
    });
  });
}
