---
"@onruntime/next-sitemap": minor
---

Refactor to use isolated child process worker for executing `generateStaticParams` and `getStaticPaths`

- Add worker process isolation using `child_process.spawn` with jiti for TypeScript support
- Add ESM loader hook to mock non-JS imports (CSS, images, etc.) in worker context
- Execute dynamic routes in parallel for improved performance
- Add dev mode logging with timing information
- Consolidate shared utilities into `src/shared.ts`
- Add worker tests
