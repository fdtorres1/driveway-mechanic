# Repository guidance

Driveway Mechanic is a public Astro and MDX site for practical automotive information. Keep work scoped to the reader need and preserve unrelated changes.

## Editorial work

- Check consequential vehicle, product, procedure, and safety claims against applicable primary sources. Keep a concise article-specific evidence record under `docs/research/` when the work needs one.
- Distinguish source research, manufacturer claims, owner reports, hands-on tests, and professional review. Do not invent testing, credentials, measurements, or product fit.
- Preserve existing publication status. Mark new or unreviewed articles `draft: true` explicitly. A schema or enum correction alone does not count as an article audit.
- Do not publish new drafts as part of the approved baseline cleanup. Keep material evidence or safety gaps visible without creating a routine daily article-approval queue.
- Treat affiliate enrollment, account ownership, and tracking as unverified until supported by authorized evidence. Do not enroll in programs, invent/change tracking, or put private account evidence in this public repository.

## Repository work

- Read `docs/ACTIVE_CONTEXT.md`, `docs/ROADMAP.md`, and relevant entries in `docs/DECISIONS.md` before substantial work. Update the affected handoff records; append to `docs/WORKLOG.md` rather than rewriting its history.
- Inspect source, routes, schema, and `package.json` before relying on examples or commands. Supported scripts are `dev`, `lint`, `typecheck`, `build`, `preview`, and `check:site`. Run `npm run check:site` after `npm run build`; it validates built routes, local links/anchors, canonical and Article JSON-LD URLs, RSS, and sitemap against source publication status.
- GitHub Actions runs lint, typecheck, build, and `check:site` on Node 22 for pull requests and pushes to `main`. Report only checks that actually ran and passed.
- Keep public documentation free of credentials, private account evidence, and unrelated business records. Use repository-relative links.

## Release boundary

The current approved baseline cleanup may proceed through its scoped pull request and merge after applicable checks, review, and repository protections pass. Merging deploys to the existing production domain. This authorization covers corrections to the four already-published articles; it does not authorize publishing any new draft, affiliate enrollment, or new tracking changes. Verify the resulting deployment before describing the changes as live.

See [current context](docs/ACTIVE_CONTEXT.md), [roadmap](docs/ROADMAP.md), [decisions](docs/DECISIONS.md), and [README](README.md) for the current handoff.
