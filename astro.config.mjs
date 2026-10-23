import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://www.drivewaymechanic.co",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !["/404", "/affiliate-disclosure", "/privacy-policy", "/disclaimer"]
        .includes(new URL(page).pathname.replace(/\/$/, "")),
    }),
    tailwind(),
  ],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
