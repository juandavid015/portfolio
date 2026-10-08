# Portfolio

[![CI](https://github.com/juandavid015/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/juandavid015/portfolio/actions/workflows/ci.yml)

My portfolio, in English and Spanish: **[juandgr.vercel.app](https://juandgr.vercel.app)**

I redesign it once a year. Each design is an _edition_: this one repository holds them all, `main` is always the live one, and every past edition stays tagged in the history (see [Editions](#editions)).

## Stack

| Area      | Choice                                                                                  | Why                                                                                               |
| --------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, Cache Components, React Compiler)         | Static pages by default; dynamic only where needed                                                |
| Language  | TypeScript 6, strict                                                                    | Pinned to 6.x: TypeScript 7 lacks the compiler API that typescript-eslint needs until 7.1         |
| i18n      | [next-intl](https://next-intl.dev)                                                      | `/en` and `/es` routes, browser-language detection, a remembered choice and type-checked messages |
| Styling   | [Tailwind CSS 4](https://tailwindcss.com), [shadcn/ui](https://ui.shadcn.com) (Base UI) | A closed set of design tokens; shadcn components restyled to the edition                          |
| Quality   | ESLint 10, Prettier, Vitest, Playwright, axe-core                                       | Type-aware linting, unit tests, end-to-end and accessibility tests against a production build     |
| Hosting   | [Vercel](https://vercel.com)                                                            | First-party Next.js host; preview deployment per pull request                                     |

## Getting started

Requirements: Node.js 24 (see [`.nvmrc`](.nvmrc)) and pnpm 11 (pinned in `package.json`; `corepack enable` installs it).

```bash
pnpm install   # also installs the git hooks
pnpm dev       # http://localhost:3000
```

No environment variables are required. [`.env.example`](.env.example) documents the optional ones.

## Scripts

| Script           | What it does                                                        |
| ---------------- | ------------------------------------------------------------------- |
| `pnpm dev`       | Development server                                                  |
| `pnpm build`     | Production build                                                    |
| `pnpm start`     | Serve the production build                                          |
| `pnpm check`     | Everything CI's first job runs: format, lint, typecheck, unit tests |
| `pnpm lint`      | ESLint, zero warnings allowed                                       |
| `pnpm typecheck` | Generate route types, then `tsc`                                    |
| `pnpm format`    | Format every file with Prettier                                     |
| `pnpm test`      | Unit tests (Vitest)                                                 |
| `pnpm test:e2e`  | Build, serve and run the Playwright suite                           |

The end-to-end suite needs Chromium once: `pnpm exec playwright install chromium`.

## Project structure

```
src/
├── app/
│   ├── [locale]/              # Every page lives under /en or /es
│   │   ├── _components/       # Components used only by the home page
│   │   ├── layout.tsx         # Root layout: <html lang>, fonts, site metadata
│   │   ├── page.tsx           # Home page
│   │   └── opengraph-image.tsx
│   ├── global-not-found.tsx   # 404 for URLs outside any locale
│   ├── globals.css            # Design tokens and base styles
│   ├── icon.tsx, apple-icon.tsx
│   └── robots.ts, sitemap.ts
├── components/                # Components shared across routes
│   └── ui/                    # shadcn primitives, restyled
├── content/                   # What the site says: profile, experience, about, edition
├── i18n/                      # Routing, request config and message catalogs
├── lib/                       # Small shared utilities (fonts, site URL, cn)
└── proxy.ts                   # Locale detection and redirects
e2e/                           # Playwright end-to-end tests
assets/fonts/                  # Static fonts for generated images (SIL OFL)
```

## Deployment

[Vercel](https://vercel.com) builds every push: `main` deploys to production, and each pull request gets a preview URL. The project uses these environment variables:

| Variable                       | Value                        | Why                                                                                                       |
| ------------------------------ | ---------------------------- | --------------------------------------------------------------------------------------------------------- |
| `ENABLE_EXPERIMENTAL_COREPACK` | `1`                          | Vercel's default pnpm is 10; Corepack makes it use the version pinned in `package.json` (pnpm 11)         |
| `SITE_URL`                     | `https://juandgr.vercel.app` | Absolute URL for canonical links, the sitemap and share images (see [`site-url.ts`](src/lib/site-url.ts)) |
| `GOOGLE_SITE_VERIFICATION`     | Search Console token         | Proves site ownership to Google Search Console; production only                                           |

Node.js is pinned to `24.x` in `package.json`: Corepack ships with Node.js 24 but not with later versions, so an open range could silently move builds to a Node.js without it.

## Editions

| Edition | Status  | Source |
| ------- | ------- | ------ |
| 2026    | Current | `main` |

Retired editions are tagged `edition-<year>`.

How an edition is built and retired is described in [CONTRIBUTING.md](CONTRIBUTING.md#yearly-editions).

## Contributing

Conventions, the branch workflow and the yearly edition process are in [CONTRIBUTING.md](CONTRIBUTING.md).
