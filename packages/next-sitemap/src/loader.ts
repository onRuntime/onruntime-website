/**
 * Node.js ESM loader hook to handle non-JS file imports.
 * Returns empty modules for any file that isn't a JavaScript/TypeScript file.
 *
 * Uses whitelist approach: only JS extensions are processed normally,
 * everything else gets mocked as an empty module.
 */

import { JS_EXTENSIONS } from "./shared";

interface ResolveContext {
  conditions: string[];
  importAttributes: Record<string, string>;
  parentURL?: string;
}

interface ResolveResult {
  shortCircuit?: boolean;
  url: string;
}

interface LoadContext {
  conditions: string[];
  format?: string;
  importAttributes: Record<string, string>;
}

interface LoadResult {
  shortCircuit?: boolean;
  format: string;
  source?: string | ArrayBuffer | Uint8Array;
}

type NextResolve = (specifier: string, context: ResolveContext) => ResolveResult | Promise<ResolveResult>;
type NextLoad = (url: string, context: LoadContext) => LoadResult | Promise<LoadResult>;

export function resolve(
  specifier: string,
  context: ResolveContext,
  nextResolve: NextResolve
): ResolveResult | Promise<ResolveResult> {
  const ext = specifier.match(/\.[a-z0-9]+$/i)?.[0]?.toLowerCase();

  // If it has an extension and it's NOT a JS extension, mock it
  if (ext && !JS_EXTENSIONS.has(ext)) {
    return { shortCircuit: true, url: `mock:${specifier}` };
  }

  return nextResolve(specifier, context);
}

export function load(
  url: string,
  context: LoadContext,
  nextLoad: NextLoad
): LoadResult | Promise<LoadResult> {
  if (url.startsWith("mock:")) {
    return { shortCircuit: true, format: "module", source: "export default {};" };
  }

  return nextLoad(url, context);
}
