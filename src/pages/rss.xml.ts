import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { getSectionKey } from "../lib/hubs";

export async function GET(context: APIContext) {
  const articles = await getCollection("articles", ({ data }) => !data.draft);

  return rss({
    title: "The Driveway Mechanic",
    description:
      "DIY automotive guides, troubleshooting tips, and money-saving advice for home mechanics.",
    site: context.site!.toString(),
    items: articles.map((article) => {
      const section = getSectionKey(article.data.hubs);
      const slug = article.id.replace(/\.mdx?$/, "");
      return {
        title: article.data.title,
        pubDate: article.data.publishedAt ?? new Date(),
        description: article.data.excerpt ?? "",
        link: `/${section}/${slug}`,
      };
    }),
    customData: "<language>en-us</language>",
  });
}
