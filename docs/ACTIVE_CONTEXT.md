# Active context

Updated 2026-10-22.

## Current state

- Repository: `fdtorres1/driveway-mechanic`; source baseline: `a9fa96d`.
- There are 23 article MDX files: four published articles and 19 drafts. The four published article URLs and publication dates are preserved.
- Astro now loads the article schema from `src/content.config.ts`. The schema defaults new or unspecified article status to draft, defaults ads and affiliate flags to false, requires `publishedAt` for published articles, and retains the `critical` safety level.
- Article routes, indexes, and feed use the shared section-selection helper in `src/lib/hubs.ts`; an article gets one section route, avoiding duplicate routes. The built-site check compares generated article routes with source publication status.
- The canonical URL is `https://www.drivewaymechanic.co`; the existing redirect to that host and Vercel deployment integration were verified. Merge to `main` triggers production deployment. Use [GitHub deployments](https://github.com/fdtorres1/driveway-mechanic/deployments) and live route reads to establish the released revision.

## Content and link status

- Four existing published articles were rewritten against primary sources and have article-specific records in `docs/research/`. Independent evidence review found no blocking issue, and root integration and rendered-page checks passed. No hands-on testing or professional credentials are claimed.
- The Camry guide now covers only the U.S. 2023 non-hybrid 2.5L A25A-FKS: verified specifications, preparation, and owner-manual oil-level checks. It is explicitly not a complete drain/filter replacement procedure; restoring that scope needs applicable service instructions.
- Four draft articles received enum-only schema corrections. They remain drafts and have not been content-audited or published. Nineteen drafts remain for individual evidence review; do not publish them as a batch.
- The scanner guide uses direct manufacturer links without tracking. The other three published guides contain source links, without affiliate cards or tracking. Affiliate enrollment and account ownership remain unverified; the links in the 19 drafts remain unreviewed. See [`AFFILIATE_LINKS.md`](AFFILIATE_LINKS.md).
- Privacy copy reflects current source: the site has no analytics or advertising tags added, and the theme preference is stored locally in the browser. Vercel hosts the site; optional hosting settings and retention details have not been verified.

## Checks and next action

Local lint, typecheck (zero errors, warnings, or hints), production build, and `check:site` passed on 2026-10-22. The output contains 14 HTML pages and four article routes; all 19 drafts are excluded. Local links/anchors, canonical URLs, Article structured-data URLs, RSS, and indexable sitemap entries pass. The 404 and three noindex policy pages are excluded from the sitemap.

Temporary probes confirmed the loaded schema rejects a numeric title and that an article omitting both `draft` and `publishedAt` stays out of routes and feeds. Probes were removed. Chromium checks covered 13 routes at 1440×900 and 390×844, with no browser warnings/errors or horizontal overflow. Section navigation, mobile menu, persisted theme, in-page links, and draft/unknown 404 responses passed. A dark-mode table contrast defect was corrected and rechecked.

The remaining release gates are the PR's live checks and resulting production deployment. See GitHub for current release state. After release, the next content work is the individual draft audit backlog; this baseline scope does not authorize new draft publication. Hosting retention/optional settings and affiliate enrollment remain unverified. The build emits a pre-existing outdated Browserslist-data advisory; dependencies were not upgraded in this repair.
