import { execSync } from "child_process";
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync } from "fs";
import { dirname, resolve, join } from "path";

const SCRIPT_DIR = dirname(new URL(import.meta.url).pathname);
const WEB_ROOT = resolve(SCRIPT_DIR, "..");

import { config } from "dotenv-flow";
config({ path: WEB_ROOT });

import { openai } from "@ai-sdk/openai";
import { generateObject, generateText } from "ai";
import { z } from "zod";
import matter from "gray-matter";
import { localeCodes, defaultLocale, type Locale } from "../src/lib/translations";

const LOCALES_DIR = "src/locales";
const CONTENT_DIR = "src/content";

const isInitMode = process.argv.includes("--init");

function getTargetLocales(source: Locale): Locale[] {
  if (source !== defaultLocale) return [];
  return localeCodes.filter((l) => l !== source) as Locale[];
}

type JsonValue = string | number | boolean | null | JsonObject | JsonValue[];
type JsonObject = { [key: string]: JsonValue };

interface ChangedFiles {
  json: string[];
  mdx: string[];
}

function getAllFiles(dir: string, ext: string): string[] {
  const results: string[] = [];
  if (!existsSync(dir)) return results;

  const items = readdirSync(dir);
  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      results.push(...getAllFiles(fullPath, ext));
    } else if (item.endsWith(ext)) {
      results.push(fullPath);
    }
  }
  return results;
}

function getFilesToProcess(): ChangedFiles {
  if (isInitMode) {
    // Init mode: get all files from default locale
    const jsonDir = resolve(WEB_ROOT, LOCALES_DIR, defaultLocale);
    const mdxDir = resolve(WEB_ROOT, CONTENT_DIR, defaultLocale);

    const jsonFiles = getAllFiles(jsonDir, ".json").map(
      (f) => `apps/web/${LOCALES_DIR}/${defaultLocale}/${f.replace(jsonDir + "/", "")}`
    );
    const mdxFiles = getAllFiles(mdxDir, ".mdx").map(
      (f) => `apps/web/${CONTENT_DIR}/${defaultLocale}/${f.replace(mdxDir + "/", "")}`
    );

    return { json: jsonFiles, mdx: mdxFiles };
  }

  // Normal mode: get changed files from git
  try {
    let output = execSync("git diff --name-only HEAD~1 HEAD", {
      encoding: "utf-8",
    });
    const uncommitted = execSync("git diff --name-only HEAD", {
      encoding: "utf-8",
    });
    output = output + "\n" + uncommitted;

    const files = [...new Set(output.split("\n").filter(Boolean))];

    return {
      json: files.filter(
        (f) => f.startsWith(`apps/web/${LOCALES_DIR}/`) && f.endsWith(".json")
      ),
      mdx: files.filter(
        (f) => f.startsWith(`apps/web/${CONTENT_DIR}/`) && f.endsWith(".mdx")
      ),
    };
  } catch {
    return { json: [], mdx: [] };
  }
}

function parseLocalePath(
  filePath: string
): { locale: Locale; namespace: string } | null {
  const match = filePath.match(
    new RegExp(`apps/web/${LOCALES_DIR}/(${localeCodes.join("|")})/(.+)\\.json$`)
  );
  if (!match) return null;
  return { locale: match[1] as Locale, namespace: match[2] };
}

function parseContentPath(
  filePath: string
): { locale: Locale; contentPath: string } | null {
  const match = filePath.match(
    new RegExp(`apps/web/${CONTENT_DIR}/(${localeCodes.join("|")})/(.+)\\.mdx$`)
  );
  if (!match) return null;
  return { locale: match[1] as Locale, contentPath: match[2] };
}

function toAbsolutePath(gitPath: string): string {
  return resolve(WEB_ROOT, gitPath.replace("apps/web/", ""));
}

function readFile(gitPath: string): string | null {
  try {
    return readFileSync(toAbsolutePath(gitPath), "utf-8");
  } catch {
    return null;
  }
}

function readJson(gitPath: string): JsonObject | null {
  const content = readFile(gitPath);
  if (!content) return null;
  try {
    return JSON.parse(content);
  } catch {
    return null;
  }
}

function flattenJson(obj: JsonObject, prefix = ""): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "string") {
      result[fullKey] = value;
    } else if (
      typeof value === "object" &&
      value !== null &&
      !Array.isArray(value)
    ) {
      Object.assign(result, flattenJson(value as JsonObject, fullKey));
    }
  }
  return result;
}

function mergeTranslations(
  source: JsonObject,
  target: JsonObject,
  translated: Record<string, string>,
  prefix = ""
): JsonObject {
  const result: JsonObject = {};

  for (const [key, value] of Object.entries(source)) {
    const flatKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      const targetChild = (target[key] as JsonObject) || {};
      result[key] = mergeTranslations(
        value as JsonObject,
        targetChild,
        translated,
        flatKey
      );
    } else {
      if (key in target) {
        result[key] = target[key];
      } else if (flatKey in translated) {
        result[key] = translated[flatKey];
      }
    }
  }
  return result;
}

async function translateBatch(
  texts: Record<string, string>,
  sourceLang: Locale,
  targetLang: Locale
): Promise<Record<string, string>> {
  if (Object.keys(texts).length === 0) return {};

  const entries = Object.entries(texts);
  const schema = z.object({
    items: z.array(
      z.object({
        key: z.string(),
        value: z.string(),
      })
    ),
  });

  const { object } = await generateObject({
    model: openai.chat("gpt-4o-mini"),
    schema,
    prompt: `Translate from ${sourceLang} to ${targetLang}.

Rules:
- Keep HTML tags and {variables} intact
- Start sentences with a capital letter (like the source text)
- Do NOT use title case (e.g., "Our services" not "Our Services")
- Use casual tone (no em-dashes or semicolons)

${JSON.stringify(entries.map(([key, value]) => ({ key, value })))}`,
  });

  return Object.fromEntries(object.items.map((item) => [item.key, item.value]));
}

async function translateMarkdown(
  content: string,
  sourceLang: Locale,
  targetLang: Locale
): Promise<string> {
  if (!content.trim()) return content;

  const { text } = await generateText({
    model: openai.chat("gpt-4o-mini"),
    prompt: `Translate the following Markdown content from ${sourceLang} to ${targetLang}.

Rules:
- Keep all Markdown formatting intact (headers, lists, bold, italic, links, code blocks)
- Keep all URLs, email addresses, and code unchanged
- Preserve capitalization style
- Use casual tone (no em-dashes or semicolons)
- Keep brand names and technical terms unchanged (onRuntime, API, REST, GraphQL, etc.)
- Output ONLY the translated Markdown, no explanations

Content to translate:
${content}`,
  });

  return text;
}

// ============ JSON Processing ============

async function processJsonFile(
  changedFile: string,
  allChangedFiles: Set<string>
): Promise<{ targetPath: string; content: string }[]> {
  const parsed = parseLocalePath(changedFile);
  if (!parsed) return [];

  const { locale: sourceLocale, namespace } = parsed;
  const targetLocales = getTargetLocales(sourceLocale);
  if (targetLocales.length === 0) return [];

  const sourcePath = `apps/web/${LOCALES_DIR}/${sourceLocale}/${namespace}.json`;
  const sourceJson = readJson(sourcePath);
  if (!sourceJson) return [];

  const sourceFlat = flattenJson(sourceJson);
  const results: { targetPath: string; content: string }[] = [];

  for (const targetLocale of targetLocales) {
    const targetPath = `apps/web/${LOCALES_DIR}/${targetLocale}/${namespace}.json`;

    if (!isInitMode && allChangedFiles.has(targetPath)) {
      console.log(
        `⚠️  Conflict detected, skipping: ${namespace} (${targetLocale})`
      );
      continue;
    }

    const targetJson = readJson(targetPath) || {};
    const targetFlat = flattenJson(targetJson);

    const missingKeys: Record<string, string> = {};
    for (const [key, value] of Object.entries(sourceFlat)) {
      if (!(key in targetFlat)) {
        missingKeys[key] = value;
      }
    }

    if (Object.keys(missingKeys).length === 0) continue;

    console.log(
      `🔄 Translating ${Object.keys(missingKeys).length} keys: ${namespace} (${sourceLocale} → ${targetLocale})`
    );

    const translated = await translateBatch(
      missingKeys,
      sourceLocale,
      targetLocale
    );
    const newTargetJson = mergeTranslations(sourceJson, targetJson, translated);

    results.push({
      targetPath,
      content: JSON.stringify(newTargetJson, null, 2) + "\n",
    });
  }

  return results;
}

// ============ MDX Processing ============

async function processMdxFile(
  changedFile: string,
  allChangedFiles: Set<string>
): Promise<{ targetPath: string; content: string }[]> {
  const parsed = parseContentPath(changedFile);
  if (!parsed) return [];

  const { locale: sourceLocale, contentPath } = parsed;
  const targetLocales = getTargetLocales(sourceLocale);
  if (targetLocales.length === 0) return [];

  const sourcePath = `apps/web/${CONTENT_DIR}/${sourceLocale}/${contentPath}.mdx`;
  const sourceContent = readFile(sourcePath);
  if (!sourceContent) return [];

  const { data: sourceFrontmatter, content: sourceMarkdown } =
    matter(sourceContent);

  const results: { targetPath: string; content: string }[] = [];

  for (const targetLocale of targetLocales) {
    const targetPath = `apps/web/${CONTENT_DIR}/${targetLocale}/${contentPath}.mdx`;

    if (!isInitMode && allChangedFiles.has(targetPath)) {
      console.log(
        `⚠️  Conflict detected, skipping: ${contentPath} (${targetLocale})`
      );
      continue;
    }

    const targetContent = readFile(targetPath);
    let targetFrontmatter: Record<string, unknown> = {};

    if (targetContent) {
      const parsed = matter(targetContent);
      targetFrontmatter = parsed.data;
    }

    // Check if frontmatter has changed or file doesn't exist
    const frontmatterToTranslate: Record<string, string> = {};
    for (const [key, value] of Object.entries(sourceFrontmatter)) {
      if (typeof value === "string" && !(key in targetFrontmatter)) {
        frontmatterToTranslate[key] = value;
      }
    }

    // If target doesn't exist, we need to translate everything
    if (!targetContent) {
      console.log(
        `🔄 Translating MDX: ${contentPath} (${sourceLocale} → ${targetLocale})`
      );

      // Translate frontmatter strings
      const translatedFrontmatter =
        Object.keys(frontmatterToTranslate).length > 0
          ? await translateBatch(
              frontmatterToTranslate,
              sourceLocale,
              targetLocale
            )
          : {};

      // Merge frontmatter (keep non-string values from source)
      const newFrontmatter: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(sourceFrontmatter)) {
        if (typeof value === "string" && key in translatedFrontmatter) {
          newFrontmatter[key] = translatedFrontmatter[key];
        } else {
          newFrontmatter[key] = value;
        }
      }

      // Translate markdown content
      const translatedMarkdown = await translateMarkdown(
        sourceMarkdown,
        sourceLocale,
        targetLocale
      );

      // Reconstruct MDX file
      const newContent = matter.stringify(translatedMarkdown, newFrontmatter);

      results.push({ targetPath, content: newContent });
    } else if (Object.keys(frontmatterToTranslate).length > 0) {
      // Target exists but has missing frontmatter keys
      console.log(
        `🔄 Updating frontmatter: ${contentPath} (${sourceLocale} → ${targetLocale})`
      );

      const translatedFrontmatter = await translateBatch(
        frontmatterToTranslate,
        sourceLocale,
        targetLocale
      );

      // Merge with existing target frontmatter
      const existingParsed = matter(targetContent);
      const newFrontmatter = { ...existingParsed.data };

      for (const [key, value] of Object.entries(sourceFrontmatter)) {
        if (!(key in newFrontmatter)) {
          if (typeof value === "string" && key in translatedFrontmatter) {
            newFrontmatter[key] = translatedFrontmatter[key];
          } else {
            newFrontmatter[key] = value;
          }
        }
      }

      const newContent = matter.stringify(
        existingParsed.content,
        newFrontmatter
      );
      results.push({ targetPath, content: newContent });
    }
  }

  return results;
}

// ============ Parallel Processing ============

const CONCURRENCY = 20;

async function runWithConcurrency<T, R>(
  items: T[],
  fn: (item: T) => Promise<R>,
  concurrency: number
): Promise<R[]> {
  const results: R[] = [];
  let index = 0;

  async function worker(): Promise<void> {
    while (index < items.length) {
      const currentIndex = index++;
      const item = items[currentIndex];
      results[currentIndex] = await fn(item);
    }
  }

  const workers = Array.from(
    { length: Math.min(concurrency, items.length) },
    () => worker()
  );
  await Promise.all(workers);

  return results;
}

// ============ Main ============

async function main() {
  if (isInitMode) {
    console.log("🚀 Running in init mode - generating all missing translations...\n");
  }

  const { json: jsonFiles, mdx: mdxFiles } = getFilesToProcess();

  if (jsonFiles.length === 0 && mdxFiles.length === 0) {
    console.log("No locale/content files found.");
    return;
  }

  console.log(
    `📁 Files to process: ${jsonFiles.length} JSON, ${mdxFiles.length} MDX`
  );
  console.log(`⚡ Processing with concurrency: ${CONCURRENCY}\n`);

  const allChangedFiles = new Set([...jsonFiles, ...mdxFiles]);

  // Process JSON and MDX files in parallel
  const [jsonResults, mdxResults] = await Promise.all([
    runWithConcurrency(
      jsonFiles,
      (file) => processJsonFile(file, allChangedFiles),
      CONCURRENCY
    ),
    runWithConcurrency(
      mdxFiles,
      (file) => processMdxFile(file, allChangedFiles),
      CONCURRENCY
    ),
  ]);

  const results = [...jsonResults.flat(), ...mdxResults.flat()];

  if (results.length === 0) {
    console.log("No translations needed.");
    return;
  }

  for (const { targetPath, content } of results) {
    const absPath = toAbsolutePath(targetPath);
    mkdirSync(dirname(absPath), { recursive: true });
    writeFileSync(absPath, content);
    console.log(`✅ Updated: ${targetPath}`);
  }

  console.log(`\n🎉 Generated ${results.length} translation file(s).`);
}

main().catch(console.error);
