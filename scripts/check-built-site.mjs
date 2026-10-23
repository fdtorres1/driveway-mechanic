import assert from "node:assert/strict";
import { readFile, readdir, access } from "node:fs/promises";
import path from "node:path";

const site = "https://www.drivewaymechanic.co";
const dist = path.resolve("dist");
const contents = path.resolve("src/content/articles");
const normalize = (pathname) => pathname.replace(/\/$/, "") || "/";

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(entry => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? filesUnder(file) : [file];
  }));
  return files.flat();
}

const htmlFiles = (await filesUnder(dist)).filter(file => file.endsWith(".html"));
const pages = new Map();
for (const file of htmlFiles) {
  const route = "/" + path.relative(dist, file).replace(/index\.html$/, "").replace(/\.html$/, "");
  pages.set(normalize(route), await readFile(file, "utf8"));
}

const articleRoutes = [...pages.keys()].filter(route => /^\/(fix|maintain|buy)\/.+/.test(route));
const expectedArticles = new Set();
let draftCount = 0;
for (const file of (await filesUnder(contents)).filter(file => file.endsWith(".mdx"))) {
  const source = await readFile(file, "utf8");
  const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1];
  assert.ok(frontmatter, `Missing frontmatter: ${file}`);
  const slug = path.relative(contents, file).replace(/\.mdx$/, "");
  const routes = articleRoutes.filter(route => route.slice(route.indexOf("/", 1) + 1) === slug);
  // Omitted publication status must be treated as draft, just like the schema.
  if (/^draft:\s*false\s*$/m.test(frontmatter)) {
    assert.equal(routes.length, 1, `Published article needs exactly one route: ${slug}`);
    expectedArticles.add(routes[0]);
  } else {
    draftCount++;
    assert.equal(routes.length, 0, `Draft leaked into the build: ${slug}`);
  }
}
assert.equal(articleRoutes.length, expectedArticles.size, "Unexpected article route");

for (const [route, html] of pages) {
  const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/)?.[1];
  assert.ok(canonical, `Missing canonical: ${route}`);
  const canonicalUrl = new URL(canonical);
  assert.equal(canonicalUrl.origin, site, `Wrong canonical host: ${route}`);
  assert.equal(normalize(canonicalUrl.pathname), route, `Wrong canonical path: ${route}`);
  assert.equal(canonicalUrl.search + canonicalUrl.hash, "", `Noncanonical URL: ${route}`);

  for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    const data = JSON.parse(match[1]);
    if (data["@type"] === "Article") {
      assert.equal(data.mainEntityOfPage["@id"], canonical, `Article schema URL mismatch: ${route}`);
      assert.ok(data.datePublished, `Missing original publication date: ${route}`);
    }
  }

  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const href = match[1].replaceAll("&amp;", "&");
    const url = new URL(href, canonical);
    if (url.origin !== site) continue;
    const target = normalize(decodeURIComponent(url.pathname));
    if (pages.has(target)) {
      if (url.hash) {
        const id = decodeURIComponent(url.hash.slice(1));
        assert.ok(pages.get(target).includes(`id="${id}"`), `Broken anchor: ${route} -> ${href}`);
      }
    } else {
      await assert.doesNotReject(access(path.join(dist, target)), `Missing local target: ${route} -> ${href}`);
    }
  }
}

const rss = await readFile(path.join(dist, "rss.xml"), "utf8");
const feedRoutes = [...rss.matchAll(/<item>[\s\S]*?<link>([^<]+)<\/link>/g)].map(match => {
  const url = new URL(match[1]);
  assert.equal(url.origin, site, "RSS host mismatch");
  return normalize(url.pathname);
});
assert.equal(feedRoutes.length, expectedArticles.size, "RSS has missing or duplicate articles");
assert.deepEqual(new Set(feedRoutes), expectedArticles, "RSS article routes differ from the build");

const sitemapFiles = (await filesUnder(dist)).filter(file => /sitemap-\d+\.xml$/.test(file));
assert.ok(sitemapFiles.length, "Missing sitemap");
const sitemapRoutes = [];
for (const file of sitemapFiles) {
  for (const match of (await readFile(file, "utf8")).matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const url = new URL(match[1]);
    assert.equal(url.origin, site, "Sitemap host mismatch");
    sitemapRoutes.push(normalize(url.pathname));
  }
}
const indexablePages = new Set([...pages].filter(([, html]) =>
  !/<meta\s+name="robots"\s+content="[^"]*noindex/.test(html)).map(([route]) => route));
assert.equal(sitemapRoutes.length, indexablePages.size, "Sitemap has missing or duplicate pages");
assert.deepEqual(new Set(sitemapRoutes), indexablePages, "Sitemap routes differ from indexable pages");
console.log(`Verified ${pages.size} pages, ${expectedArticles.size} published articles, ${draftCount} excluded drafts, local links, RSS, sitemap, and canonicals.`);
