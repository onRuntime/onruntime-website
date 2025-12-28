# Locales

Translation files for the onRuntime website.

## Structure

The translation files mirror the `app/` and `components/` structure:

```
locales/
├── en/
│   ├── common.json                    # Shared (buttons, errors, forms)
│   ├── layout/
│   │   ├── footer.json
│   │   └── navbar.json
│   ├── app/
│   │   └── landing/
│   │       ├── page.json              # → app/[locale]/(landing)/page.ts
│   │       └── customer/
│   │           └── page.json          # → app/[locale]/(landing)/customer/page.ts
│   └── components/
│       └── marketing/
│           └── landing/
│               ├── page-switcher.json
│               ├── visitor/
│               │   ├── featured.json
│               │   ├── team.json
│               │   └── projects.json
│               └── customer/
│                   └── featured.json
└── fr/
    └── ...
```

## Usage

### Server Components

```tsx
import { getTranslation } from "@/lib/translations.server";

export default async function Page() {
  const { t } = await getTranslation("layout/footer");
  return <p>{t("tagline")}</p>;
}
```

### Client Components

```tsx
"use client";

import { useTranslation } from "@onruntime/translations/react";

export const Component = () => {
  const { t } = useTranslation("layout/footer");
  return <p>{t("tagline")}</p>;
};
```

### Dynamic Pages

```tsx
import { getTranslation } from "@/lib/translations.server";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { t } = await getTranslation(`marketing/projects/${id}`);
  return <h1>{t("title")}</h1>;
}
```

## Adding a new namespace

1. Create `en/<path>/<namespace>.json` and `fr/<path>/<namespace>.json`
2. Use `getTranslation("<path>/<namespace>")` or `useTranslation("<path>/<namespace>")`

## Conventions

- File names must be lowercase or kebab-case: `footer.json`, `privacy-policy.json`
- Never use kebab-case as prefix for grouping files: `hero.json` (not `hero-section.json`, `hero-modal.json`)
- Keys must be lowercase or kebab-case: `nav.home`, `privacy-policy`
- Never use kebab-case as prefix for grouping keys: `hero.title`, `hero.description` (not `hero-title`, `hero-description`)
- Use nested keys for grouping: `nav.home`, `links.contact`
- Keep keys in English: `greeting`, not `salutation`
- Use interpolation for dynamic values: `"Hello, {name}!"`
- HTML is supported with `dangerouslySetInnerHTML`: `"Visit <strong>Paris</strong>"`
- Avoid title case in translations: `"Our services"` (not `"Our Services"`)
