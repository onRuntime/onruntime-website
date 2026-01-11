---
"@onruntime/next-sitemap": patch
---

Fix Turbopack static analysis warning for dynamic path construction

Use indirect function reference for `path.join` to prevent Turbopack from matching overly broad file patterns during static analysis.
