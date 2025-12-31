import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import test, { describe } from "node:test";
import {
  getAllJsonFiles,
  getKeys,
  LOCALES_DIR,
  SOURCE_LOCALE,
} from ".";

// Matches lowercase, numbers, and hyphens only
const VALID_FILENAME_PATTERN = /^[a-z0-9-]+\.json$/;

export function namingTests() {
  const sourceLocaleDir = path.join(LOCALES_DIR, SOURCE_LOCALE);
  const sourceJsonFiles = getAllJsonFiles(sourceLocaleDir);

  describe("Locales naming conventions", () => {
    test("file names are lowercase/kebab-case", () => {
      const invalid: string[] = [];

      for (const file of sourceJsonFiles) {
        const filename = path.basename(file);
        if (!VALID_FILENAME_PATTERN.test(filename)) {
          invalid.push(file);
        }
      }

      assert.strictEqual(
        invalid.length,
        0,
        `Invalid file names (should be lowercase/kebab-case):\n${invalid.join("\n")}`
      );
    });

    test("keys are lowercase/kebab-case", () => {
      const invalid: string[] = [];

      for (const file of sourceJsonFiles) {
        const filePath = path.join(sourceLocaleDir, file);
        const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        const keys = getKeys(data);

        for (const key of keys) {
          // Split by dots and check each segment
          const segments = key.split(".");
          for (const segment of segments) {
            if (!/^[a-z0-9-]+$/.test(segment)) {
              invalid.push(`${file}: "${key}"`);
              break;
            }
          }
        }
      }

      assert.strictEqual(
        invalid.length,
        0,
        `Invalid keys (should be lowercase/kebab-case):\n${invalid.join("\n")}`
      );
    });

    test("keys use English characters only (ASCII)", () => {
      const invalid: string[] = [];

      for (const file of sourceJsonFiles) {
        const filePath = path.join(sourceLocaleDir, file);
        const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        const keys = getKeys(data);

        for (const key of keys) {
          // Check if key contains non-ASCII characters
          if (!/^[\x00-\x7F]+$/.test(key)) {
            invalid.push(`${file}: "${key}"`);
          }
        }
      }

      assert.strictEqual(
        invalid.length,
        0,
        `Keys with non-ASCII characters:\n${invalid.join("\n")}`
      );
    });
  });
}
