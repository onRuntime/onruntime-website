---
"@onruntime/next-sitemap": patch
---

Add tsconfig path alias support and .js/.jsx file scanning

- Add automatic tsconfig.json path alias resolution (`@/*` -> `./src/*`)
- Add `strip-json-comments` for robust JSONC parsing
- Support `.js` and `.jsx` files in addition to `.ts` and `.tsx`
- Improve jiti configuration with `interopDefault` and per-project caching
