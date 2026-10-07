<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project guide

Read [CONTRIBUTING.md](CONTRIBUTING.md) before changing code; it is the source of truth for conventions. The rules agents most often get wrong here:

- **Verify before using an API.** Next.js 16, React 19, Tailwind CSS 4, next-intl 4 and ESLint 10 differ from older versions. Check the docs in `node_modules` or the official site instead of relying on memory.
- **Content vs. interface copy.** Text about the site's owner goes in `src/content/*.ts` as `Localized<T>`; labels and UI strings go in `src/i18n/messages/*.json`. Every string exists in English and Spanish.
- **Spanish copy** is natural Spanish, never a literal translation, and never uses "ingeniero" (a regulated title in Colombia).
- **Styling** uses role tokens only (`bg-background`, `text-primary`, …), `type-*` utilities for composite text styles, and no inline `style` attributes (the CSP blocks them).
- **Colocation.** Code used by one route lives in that route's `_components/`; shared code in `src/components/`.
- **Dependencies** are pinned to exact versions. Never accept a `minimumReleaseAgeExclude` entry for a newly added package.
- **Verify changes** with `pnpm check`, and with `pnpm test:e2e` for anything that renders.
- **Never commit or push.** The repository owner reviews and commits every change.
