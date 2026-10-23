# Worklog

Append-only record of repository changes and validation.

## 2026-10-22 — Establish repository handoff

- Added repository guidance, README, active context, roadmap, decisions, and affiliate-link status records for the baseline cleanup.
- Inspected source baseline `a9fa96d`, `package.json`, the root `content.config.ts`, article route filters, and article counts: 23 MDX files, 19 explicit drafts, and four route-eligible articles.
- Inspected the public homepage in the baseline review; it linked to four article routes. This is a dated observation, not a current deployment check.
- Validation recorded: source and documentation inspection only. Lint, typecheck, production build, rendered-route review, pull request, and merge are pending; no pass is claimed here.

## 2026-10-22 — Integrate schema, routing, checks, and published-article corrections

- Moved Astro's active content configuration to `src/content.config.ts`. Article status defaults to draft, ads and affiliate flags default to false, published articles require `publishedAt`, and the `critical` safety level is preserved.
- Centralized article section selection in `src/lib/hubs.ts` for article routes, indexes, and the feed. Added `npm run check:site` to compare built article routes with source publication status and check local links/anchors, canonical and Article JSON-LD URLs, RSS, and sitemap. Added GitHub Actions checks on Node 22 for pull requests and pushes to `main`.
- Rewrote the four existing published articles against primary sources and recorded evidence in `docs/research/`. Their publication status, URLs, and dates are preserved. Root and rendered-page review remain in progress. Four draft enum-only corrections remain drafts and are not counted as content audits; 19 drafts remain.
- The four published articles no longer use affiliate cards or tracking. The scanner guide links directly to manufacturer pages; the other three retain source links. Program enrollment and account ownership remain unverified, and draft links have not been reviewed.
- Validation status: baseline lint, typecheck, and build commands completed, but Astro warned that the root-level schema was ignored. After the schema move, typecheck passed with zero warnings. Final lint, typecheck, build, `check:site`, browser review, and independent review are pending; no final integration pass is claimed.
- Deployment status: production deployment of baseline commit `a9fa96d` on Vercel and the canonical `www` redirect were verified before these changes. The current branch is not deployed. Merge to `main` deploys to the existing domain; verify the resulting deployment and live routes after merge.

## 2026-10-22 — Complete local validation and independent review

- Independent agent review checked the four articles and source applicability against Toyota primary PDFs and live government, manufacturer, tool, and disclosure sources. It found no blocking issue. This is evidence review, not a mechanic's inspection or a physical vehicle/product test.
- Final local lint, typecheck (zero errors/warnings/hints), production build, and `check:site` passed. The build contains 14 HTML pages, four published articles, and 19 excluded drafts; local targets/anchors, canonical and Article schema URLs, RSS, and indexable sitemap entries pass.
- Temporary schema probes verified rejection of an invalid numeric title and exclusion of an article without a publication flag/date from routes and feeds. The probes were removed before commit.
- Browser plugin was unavailable; used installed Playwright with existing Chromium. Checked 13 routes at 1440×900 and 390×844, meaningful content and one main heading, no framework overlays, no console/page warnings or errors, no horizontal overflow, section navigation, mobile menu, theme persistence, in-page jumps, and 404 responses for a draft and unknown route. Fixed unreadable dark-mode table headings and verified contrast above 4.5:1. Screenshots and temporary browser scripts are kept outside the repository.
- Removed universal vehicle-compatibility badges and unsupported team/credential implications from the four published bylines. The Camry scope badge names its verified engine and market.
- No dependency upgrade was made; the pre-existing Browserslist-data age advisory remains. Hosting retention/optional settings and affiliate account status remain unverified.
- Release checks and deployment verification are tracked by the baseline pull request and GitHub deployment records; local validation alone is not a production claim.
