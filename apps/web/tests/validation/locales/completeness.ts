import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import test, { describe } from "node:test";
import {
  CONTENT_DIR,
  getAllJsonFiles,
  getAllMdxFiles,
  getKeys,
  LOCALES_DIR,
  SOURCE_LOCALE,
  targetLocales,
} from ".";

export function completenessTests() {
  const sourceLocaleDir = path.join(LOCALES_DIR, SOURCE_LOCALE);
  const sourceJsonFiles = getAllJsonFiles(sourceLocaleDir);

  describe("Locales completeness", () => {
    test("all JSON files from en/ exist in other locales", () => {
      const missing: string[] = [];

      for (const locale of targetLocales) {
        for (const file of sourceJsonFiles) {
          const targetPath = path.join(LOCALES_DIR, locale, file);
          if (!fs.existsSync(targetPath)) {
            missing.push(`locales/${locale}/${file}`);
          }
        }
      }

      assert.strictEqual(
        missing.length,
        0,
        `Missing JSON files:\n${missing.join("\n")}`
      );
    });

    test("all keys from en/ exist in other locales", () => {
      const missing: string[] = [];

      for (const file of sourceJsonFiles) {
        const sourcePath = path.join(sourceLocaleDir, file);
        const sourceData = JSON.parse(fs.readFileSync(sourcePath, "utf-8"));
        const sourceKeys = getKeys(sourceData);

        for (const locale of targetLocales) {
          const targetPath = path.join(LOCALES_DIR, locale, file);
          if (!fs.existsSync(targetPath)) continue;

          const targetData = JSON.parse(fs.readFileSync(targetPath, "utf-8"));
          const targetKeys = getKeys(targetData);

          for (const key of sourceKeys) {
            if (!targetKeys.includes(key)) {
              missing.push(`${locale}/${file}: "${key}"`);
            }
          }
        }
      }

      assert.strictEqual(
        missing.length,
        0,
        `Missing keys:\n${missing.join("\n")}`
      );
    });

    test("no extra keys in other locales", () => {
      const extra: string[] = [];

      for (const file of sourceJsonFiles) {
        const sourcePath = path.join(sourceLocaleDir, file);
        const sourceData = JSON.parse(fs.readFileSync(sourcePath, "utf-8"));
        const sourceKeys = getKeys(sourceData);

        for (const locale of targetLocales) {
          const targetPath = path.join(LOCALES_DIR, locale, file);
          if (!fs.existsSync(targetPath)) continue;

          const targetData = JSON.parse(fs.readFileSync(targetPath, "utf-8"));
          const targetKeys = getKeys(targetData);

          for (const key of targetKeys) {
            if (!sourceKeys.includes(key)) {
              extra.push(`${locale}/${file}: "${key}"`);
            }
          }
        }
      }

      assert.strictEqual(
        extra.length,
        0,
        `Extra keys not in en/:\n${extra.join("\n")}`
      );
    });

    test("all MDX files from content/en/ exist in other locales", () => {
      const sourceContentDir = path.join(CONTENT_DIR, SOURCE_LOCALE);
      const sourceMdxFiles = getAllMdxFiles(sourceContentDir);
      const missing: string[] = [];

      for (const locale of targetLocales) {
        for (const file of sourceMdxFiles) {
          const targetPath = path.join(CONTENT_DIR, locale, file);
          if (!fs.existsSync(targetPath)) {
            missing.push(`content/${locale}/${file}`);
          }
        }
      }

      assert.strictEqual(
        missing.length,
        0,
        `Missing MDX files:\n${missing.join("\n")}`
      );
    });
  });
}
