---
"@onruntime/next-sitemap": patch
---

- Add `normalizePath` function to ensure consistent URLs without trailing slashes
- Round priority values to 2 decimal places to avoid floating point precision issues
- Add unit tests for core utilities and XML generation
