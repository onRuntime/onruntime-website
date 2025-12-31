import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import test, { describe } from "node:test";
import { localeCodes } from "../../../src/lib/translations";
import { CONTENT_DIR, LOCALES_DIR } from ".";

export function structureTests() {
  describe("Locales structure", () => {
    test("all locale folders exist in locales/", () => {
      for (const locale of localeCodes) {
        const localePath = path.join(LOCALES_DIR, locale);
        assert.ok(
          fs.existsSync(localePath),
          `Missing locale folder: locales/${locale}/`
        );
      }
    });

    test("all locale folders exist in content/", () => {
      for (const locale of localeCodes) {
        const contentPath = path.join(CONTENT_DIR, locale);
        assert.ok(
          fs.existsSync(contentPath),
          `Missing content folder: content/${locale}/`
        );
      }
    });

    test("no extra locale folders in locales/", () => {
      const folders = fs
        .readdirSync(LOCALES_DIR)
        .filter((f) => fs.statSync(path.join(LOCALES_DIR, f)).isDirectory());

      for (const folder of folders) {
        assert.ok(
          localeCodes.includes(folder as (typeof localeCodes)[number]),
          `Extra locale folder not in config: locales/${folder}/`
        );
      }
    });

    test("no extra locale folders in content/", () => {
      const folders = fs
        .readdirSync(CONTENT_DIR)
        .filter((f) => fs.statSync(path.join(CONTENT_DIR, f)).isDirectory());

      for (const folder of folders) {
        assert.ok(
          localeCodes.includes(folder as (typeof localeCodes)[number]),
          `Extra content folder not in config: content/${folder}/`
        );
      }
    });
  });
}
