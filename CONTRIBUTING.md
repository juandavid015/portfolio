# Contributing

How this repository is worked on: the branch workflow, commit and code conventions, and the yearly edition process. Setup and scripts are in the [README](README.md).

## Workflow

`main` is the live site and is protected: changes reach it only through a pull request whose CI checks pass.

```bash
git switch -c feat/short-description   # 1. branch from an up-to-date main
# commit as usual; the git hooks lint, format and check each commit
git push -u origin feat/short-description
gh pr create --fill                    # 2. CI runs on the pull request
gh pr merge --rebase                   # 3. once CI is green
git switch main && git pull            # 4. continue from the new main
```

- **Branch names** use the commit type as a prefix: `feat/`, `fix/`, `content/`, `docs/`, `chore/`. The yearly redesign uses `edition/<year>`.
- **Merging** is rebase-only and history is linear: commits land on `main` exactly as written, so keep each one focused and well described. Merged branches are deleted automatically.
- **Required checks** are matched by CI job name (`Format, lint, types and unit tests` and `End-to-end tests` in [`ci.yml`](.github/workflows/ci.yml)). Renaming a job means updating the _Protect main_ ruleset in the repository settings; otherwise pull requests wait for a check that never reports.

## Commits

Messages follow [Conventional Commits](https://www.conventionalcommits.org), enforced by commitlint on every commit:

```
feat(i18n): add English and Spanish routing with next-intl

- Body explains what changed and why, as a short list
```

Common types: `feat`, `fix`, `refactor`, `docs`, `test`, `ci`, `chore`. The optional scope names the area: `i18n`, `ui`, `seo`, `security`, `content`. A content update is `feat(content)` when it adds something and `fix(content)` when it corrects something.

The [lefthook](lefthook.yml) hooks run automatically after `pnpm install`:

| Hook       | Runs                                                |
| ---------- | --------------------------------------------------- |
| pre-commit | ESLint `--fix`, then Prettier, on staged files only |
| commit-msg | commitlint                                          |
| pre-push   | Typecheck and unit tests                            |

## Code conventions

### Where code lives

Code lives as close as possible to where it is used, and moves up only when a second consumer appears:

- Used by one route: next to it, in that route's `_components/` folder (the `_` keeps Next.js from treating it as a route).
- Used by several routes: `src/components/`.
- Types: in the file that owns them; shared types in a `types.ts` next to their consumers. No global `types/` folder.
- Unit tests: next to the file they test (`period.test.ts` beside `period.ts`). End-to-end tests: `e2e/`.

### Content and interface copy

Two kinds of text, kept apart:

| Kind                                                                         | Lives in                   | Format                                                               |
| ---------------------------------------------------------------------------- | -------------------------- | -------------------------------------------------------------------- |
| **Content**: what the site says about its owner (profile, experience, about) | `src/content/*.ts`         | Typed records; translatable fields are `Localized<T>` (`{ en, es }`) |
| **Interface copy**: labels, section titles, buttons, metadata                | `src/i18n/messages/*.json` | next-intl catalogs                                                   |

Both are type-checked: a missing translation fails `pnpm typecheck` at the exact field or key, and a unit test fails if the two catalogs ever have different keys.

Catalog namespaces are PascalCase and named after the component that uses them (`Hero`, `Experience`); keys are camelCase.

Spanish copy is written in natural Spanish, not translated word for word, and never uses _ingeniero_: in Colombia it is a regulated title (Ley 842 de 2003). Use _desarrollador_.

### Styling

- Components use the **role tokens** from [`globals.css`](src/app/globals.css) (`bg-background`, `text-primary`, `text-muted-foreground`, …), never palette colors directly. A new edition restyles the site by remapping roles.
- Tailwind's default color and radius scales are disabled, so only design tokens exist. The Tailwind lint rules reject unknown classes.
- Composite text styles are `@utility type-*` (`type-label`, `type-display`). They are not named `text-*`, which `cn` would mistake for a font size or color.
- No inline `style` attributes: the Content-Security-Policy blocks them in production.
- shadcn components are added with `pnpm shadcn add <name>` and then restyled to the edition.

### Dependencies

- Versions are pinned exactly (`savePrefix: ''`). Upgrades arrive as Dependabot pull requests or as deliberate changes.
- pnpm refuses package versions younger than one day. When it offers to exempt one (it adds a `minimumReleaseAgeExclude` entry), don't accept it for a new package: install the latest version older than a day instead.
- `pnpm dlx` also writes exemptions to `pnpm-workspace.yaml`; revert them.

## Testing

| Layer         | Tool                 | Covers                                                                              |
| ------------- | -------------------- | ----------------------------------------------------------------------------------- |
| Unit          | Vitest               | Pure logic and content integrity: formatting, palette parity with CSS, catalog keys |
| End-to-end    | Playwright           | Language detection and switching, rendering, 404s, security headers, SEO endpoints  |
| Accessibility | axe-core, Playwright | WCAG 2.2 AA on every page, desktop and mobile                                       |

End-to-end tests run against a production build, not the dev server. With Cache Components, Next.js keeps the previous page mounted but hidden after a navigation, so locate elements by role or visibility (`getByRole`, `:visible`), not by raw selectors.

## Yearly editions

Each yearly redesign is an edition. One edition is live on `main`; the next one is built alongside it.

```
main            ──●────●────●──────────────────────●──▶  live edition
                   \  /  \  /                     /
feat/…, fix/…       ●      ●                     /
edition/2027    ─────────●────●────●────●───────●
```

1. **Start the next edition:** create `edition/<next-year>` from `main`. Vercel gives it a preview URL to review the redesign as it grows.
2. **Keep it current:** changes merged into `main` during the year (content updates, fixes) are rebased into the edition branch regularly.
3. **Retire the live edition**, just before launch:
   ```bash
   git switch main && git pull
   git tag -a edition-<year> -m "Edition <year>"
   git push origin edition-<year>
   git push origin main:archive/<year>   # only if the edition should stay online
   ```
   The tag is the permanent record of what was live. The `archive/<year>` branch exists only because Vercel deploys branches, not tags; assign it a domain to keep that edition online, then add it to `edition.past` in [`src/content/edition.ts`](src/content/edition.ts) so the site links to it.
4. **Launch:** open a pull request from `edition/<next-year>` into `main` and rebase-merge it once CI passes. Update `edition.year`, the palette and the `version` in `package.json` (`<year>.0.0`) as part of the edition.

## Known constraints

Each of these is deliberate and documented where it lives:

| Constraint                                  | Reason                                                                                     | Where                                    |
| ------------------------------------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------- |
| TypeScript stays on 6.x                     | TypeScript 7.0 has no compiler API until 7.1; typescript-eslint depends on it              | `package.json`, `.github/dependabot.yml` |
| ESLint 10 with peer-range overrides         | ESLint 9 reached end of life; some plugins bundled by Next.js haven't widened their ranges | `pnpm-workspace.yaml`                    |
| Imports are ordered by Prettier, not ESLint | `import/order` crashes on ESLint 10                                                        | `eslint.config.js`                       |
| The CSP allows inline scripts               | Next.js streams page data through inline scripts; nonces would disable static generation   | `next.config.ts`                         |
| `experimental.globalNotFound` is enabled    | The root layout sits under `[locale]`, so unmatched URLs need a standalone 404             | `next.config.ts`                         |
