import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishedAt: z.date(),
    author: z.string(),
    hubs: z.array(z.string()),
    category: z.string(),
    articleType: z.string(),
    vehicles: z.array(z.string()),
    difficulty: z.string(),
    timeCostSkill: z.object({
      time: z.string(),
      diyCost: z.string(),
      shopCost: z.string(),
      skill: z.string(),
      notes: z.string().optional(),
    }),
    safetyLevel: z.string(),
    partsNeeded: z.array(z.string()),
    toolsNeeded: z.array(z.string()),
    maintenanceInterval: z.string().optional(),
    obdCodes: z.array(z.string()).optional(),
    topics: z.array(z.string()),
    seo: z.object({
      description: z.string(),
    }),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  articles,
};
