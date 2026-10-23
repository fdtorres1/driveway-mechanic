# Decisions

## 2026-10-22 — Preserve explicit publication and monetization boundaries

- Astro's active article schema lives at `src/content.config.ts`. `draft` defaults to `true`; `adsEnabled` and `affiliateEnabled` default to `false`; an article marked published must have `publishedAt`. Preserve the `critical` safety enum value rather than lowering risk to fit a schema.
- A shared `getSectionKey` helper chooses one section route from article hubs and type. Routes, indexes, and the feed use the same selection so a mixed-topic article cannot create competing section URLs.
- Preserve the four existing published articles' URLs, publication dates, and `draft: false` status while correcting them. Their source reviews are recorded in `docs/research/`; integration results belong in the worklog. Four enum-only corrections among drafts do not constitute audits and do not change publication status.
- Keep all 19 remaining drafts unpublished until each receives its own evidence and safety review. The approved baseline cleanup does not authorize publishing any new draft.
- No affiliate program enrollment, account ownership, or tracking is verified. Current published guides use direct manufacturer/source links without affiliate tracking; do not add or claim paid links without authorized account evidence. Keep private account evidence out of this public repository.
- The current cleanup may proceed through its scoped pull request and merge after applicable checks, review, and repository protections pass. Merge deploys to the existing production domain; verify the deployed commit and live routes afterward.
