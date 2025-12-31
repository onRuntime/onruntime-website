import fs from "node:fs";
import path from "node:path";
import { defaultLocale, localeCodes } from "../../../src/lib/translations";
import { completenessTests } from "./completeness";
import { namingTests } from "./naming";
import { qualityTests } from "./quality";
import { structureTests } from "./structure";
import { usageTests } from "./usage";

export const LOCALES_DIR = path.join(__dirname, "../../../src/locales");
export const CONTENT_DIR = path.join(__dirname, "../../../src/content");
export const SOURCE_LOCALE = defaultLocale;

export const targetLocales = localeCodes.filter((l) => l !== SOURCE_LOCALE);

export function getAllJsonFiles(dir: string, base = ""): string[] {
  const files: string[] = [];
  if (!fs.existsSync(dir)) return files;

  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const relativePath = path.join(base, entry);

    if (fs.statSync(fullPath).isDirectory()) {
      files.push(...getAllJsonFiles(fullPath, relativePath));
    } else if (entry.endsWith(".json")) {
      files.push(relativePath);
    }
  }
  return files;
}

export function getAllMdxFiles(dir: string, base = ""): string[] {
  const files: string[] = [];
  if (!fs.existsSync(dir)) return files;

  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const relativePath = path.join(base, entry);

    if (fs.statSync(fullPath).isDirectory()) {
      files.push(...getAllMdxFiles(fullPath, relativePath));
    } else if (entry.endsWith(".mdx")) {
      files.push(relativePath);
    }
  }
  return files;
}

export function getKeys(obj: Record<string, unknown>, prefix = ""): string[] {
  const keys: string[] = [];
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      keys.push(...getKeys(value as Record<string, unknown>, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

export function localesTests() {
  structureTests();
  completenessTests();
  namingTests();
  qualityTests();
  usageTests();
}
