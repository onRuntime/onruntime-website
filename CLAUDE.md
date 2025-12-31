# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
pnpm dev          # Start dev server with Turbopack
pnpm build        # Build all packages
pnpm type-check   # Run TypeScript checks

# Run commands for specific app
pnpm --filter @onruntime/web dev
pnpm --filter @onruntime/web build
```

## Architecture

### Monorepo Structure (Turborepo + pnpm workspaces)

```
/
├── apps/
│   └── web/              # Next.js 16 website (@onruntime/web)
├── packages/             # Shared packages (future)
├── turbo.json            # Turborepo configuration
└── pnpm-workspace.yaml   # pnpm workspace config
```

### Web App Structure (`apps/web/src/`)

- **app/**: Next.js App Router pages and API routes (under `[locale]/`)
- **components/**: React components (ui/, layout/, marketing/)
- **services/**: External API clients with lazy initialization
- **constants/**: Static data (projects, agencies, services, team members)
- **content/**: MDX content (glossary, legal pages)
- **lib/**: Utilities and helpers
- **locales/**: Translation files (see `locales/README.md` for conventions)
- **types/**: TypeScript type definitions

### Key Patterns

**Services**: Use lazy initialization for external API clients to avoid build failures when env vars are missing in CI:
```typescript
// services/email.ts - Proxy pattern for lazy init
export const resend = new Proxy({} as Resend, {
  get(_, prop) {
    if (!instance) {
      instance = new Resend(env.RESEND_API_KEY);
    }
    return instance[prop as keyof Resend];
  },
});

// services/join.ts - Client pattern
export const joinClient = {
  async jobs() { ... },
  async job(id) { ... },
};
```

**Environment Variables**: Managed via `@t3-oss/env-nextjs` in `env.ts`. Validation is skipped in CI (`skipValidation: !!process.env.CI`).

**API Routes**: Use `unstable_cache` from Next.js for caching external API responses.

**Translations**: Uses `@onruntime/translations` package. See `apps/web/src/locales/README.md` for full conventions.
```typescript
// Server Components
import { getTranslation } from "@/lib/translations.server";
const { t } = await getTranslation("layout/footer");

// Client Components
import { useTranslation } from "@onruntime/translations/react";
const { t } = useTranslation("layout/footer");
```

## Environment Variables

Required for runtime (optional for build):
- `RESEND_API_KEY`: Email sending via Resend
- `JOIN_API_KEY`: Job listings from join.com API
