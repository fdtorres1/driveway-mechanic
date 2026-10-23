# Driveway Mechanic

An automotive troubleshooting and maintenance site built with Astro and MDX.

## Site sections

- `/fix/` contains troubleshooting guides.
- `/maintain/` contains maintenance instructions.
- `/buy/` contains product guides and comparisons.
- `/learn/` and `/seasonal/` provide educational and seasonal pages.

## Project layout

- `src/content/articles/` contains article MDX.
- `src/data/authors/` and `src/data/categories/` contain YAML collection data.
- `src/content.config.ts` defines the Astro content collections and article schema.
- `src/components/mdx/` contains components used in articles.
- `src/layouts/` contains shared site and article layouts.
- `src/pages/` contains routes, feeds, and section indexes; `src/lib/hubs.ts` selects one article section route.
- `astro.config.mjs` sets the canonical URL to `https://www.drivewaymechanic.co`.

## Local development and checks

Install the locked dependencies and start the development server:

```bash
npm ci
npm run dev
```

Available package scripts:

```bash
npm run lint
npm run typecheck
npm run build
npm run check:site
npm run preview
```

Run `check:site` after `build`. It checks generated article routes against source draft status, local page links and anchors, canonical and Article JSON-LD URLs, RSS, and the sitemap. GitHub Actions runs lint, typecheck, build, and this built-site check with Node 22 for pull requests and pushes to `main`. The package does not define a separate test script.

## Article status

The schema defaults `draft` to `true`, and `adsEnabled` and `affiliateEnabled` to `false`; published articles require `publishedAt`. Set publication flags explicitly in article frontmatter and preserve existing status unless the requested work includes an evidence-based decision. A route-eligible article is not automatically reviewed for claims, links, or safety.

Before changing substantive article claims, consult [repository guidance](AGENTS.md) and [current context](docs/ACTIVE_CONTEXT.md). Keep material claim research in a compact article-specific record under `docs/research/` when needed, and update the relevant handoff documents.

## Deployment

The existing production site is hosted on Vercel and uses the canonical `www` domain. Merging to `main` triggers the existing deployment integration. Check the [GitHub deployment records](https://github.com/fdtorres1/driveway-mechanic/deployments) and affected live routes after every release; a merge alone does not establish deployment success.
