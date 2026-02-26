# AGENTS.md

## Cursor Cloud specific instructions

This is a static Astro 5.0 + MDX + Tailwind CSS site ("The Driveway Mechanic"). No backend, database, or Docker needed.

### Key commands

See `package.json` `scripts` for the full list. Highlights:

- `npm run dev` — Astro dev server on `localhost:4321` (add `-- --host 0.0.0.0` for remote access)
- `npm run build` — static production build to `dist/`
- `npm run preview` — preview the production build
- `npm run typecheck` — runs `astro check`
- `npm run lint` — ESLint (currently non-functional: ESLint v9 is installed but no `eslint.config.js` exists in the repo)

### Known issues

- **ESLint config missing**: The `lint` script fails because the repo ships ESLint v9 but has no `eslint.config.js`. This is a pre-existing repo gap.
- **TypeScript errors**: `astro check` reports 6 pre-existing TS errors (`'entry' is of type 'unknown'`) in the `[...slug].astro` route files. These do not block the build or dev server.
- **Content collections auto-generation warning**: Astro emits a deprecation warning about auto-generating collections for `src/content/` folders not defined in `src/content.config.ts`. Build and dev still work.

### Article URL routing

Article routes include the `.mdx` extension in the URL path. For example:
- `/fix/car-wont-start-clicks.mdx` (not `/fix/car-wont-start-clicks`)
- `/maintain/how-to-change-oil-toyota-camry.mdx`
- `/buy/best-obd2-scanners-2026.mdx`

This is the expected behavior based on how `getStaticPaths` resolves content slugs.
