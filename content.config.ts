import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// ============================================
// REUSABLE SCHEMA FRAGMENTS
// ============================================

const seoSchema = z
  .object({
    title: z.string().optional(),
    description: z.string().optional(),
    canonicalUrl: z.string().url().optional(),
    noIndex: z.boolean().default(false),
  })
  .optional();

const timeCostSkillSchema = z
  .object({
    time: z.string(),
    diyCost: z.string(),
    shopCost: z.string(),
    skill: z.enum(["beginner", "intermediate", "advanced"]),
    notes: z.string().optional(),
  })
  .optional();

// Automotive-specific enums and schemas
const difficultySchema = z.enum(["beginner", "intermediate", "advanced"]);

const safetyLevelSchema = z.enum(["low", "medium", "high"]);

const vehicleTypeSchema = z.enum([
  "car",
  "truck",
  "suv",
  "minivan",
  "hybrid",
  "electric",
]);

// ============================================
// MDX CONTENT COLLECTIONS
// ============================================

const articles = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    draft: z.boolean().default(false),
    publishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    coverImage: z.string().optional(),
    author: z.string().optional(),
    category: z.string().optional(),
    hubs: z.array(z.string()).default([]),
    topics: z.array(z.string()).default([]),
    relatedArticles: z.array(z.string()).default([]),

    // Automotive-specific fields
    vehicles: z.array(z.string()).default([]),
    vehicleTypes: z.array(vehicleTypeSchema).default([]),
    articleType: z
      .enum([
        "troubleshooting",
        "how-to",
        "buyer-guide",
        "comparison",
        "cost-guide",
        "maintenance-schedule",
      ])
      .optional(),
    difficulty: difficultySchema.optional(),
    timeCostSkill: timeCostSkillSchema,
    safetyLevel: safetyLevelSchema.default("low"),

    // Parts and tools for affiliate linking
    partsNeeded: z.array(z.string()).default([]),
    toolsNeeded: z.array(z.string()).default([]),

    // OBD codes for diagnostic articles
    obdCodes: z.array(z.string()).default([]),

    // Mileage/maintenance intervals
    maintenanceInterval: z.string().optional(),

    seo: seoSchema,
    adsEnabled: z.boolean().default(true),
    affiliateEnabled: z.boolean().default(true),

    // Safety callouts for high-risk content
    stopHere: z.array(z.string()).default([]),
  }),
});

// Hubs collection — re-enable when hub content is added to src/content/hubs/
// const hubs = defineCollection({
//   loader: glob({ pattern: "**/*.mdx", base: "./src/content/hubs" }),
//   schema: z.object({ ... }),
// });

// ============================================
// YAML DATA COLLECTIONS
// ============================================

const authors = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "./src/data/authors" }),
  schema: z.object({
    name: z.string(),
    bio: z.string().optional(),
    avatar: z.string().optional(),
    credentials: z.string().optional(),
    specialties: z.array(z.string()).default([]),
  }),
});

const categories = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "./src/data/categories" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    icon: z.string().optional(),
    parent: z.string().optional(),
  }),
});

// Topics and vehicles collections — re-enable when data files are added
// to src/data/topics/ and src/data/vehicles/ respectively

// ============================================
// EXPORT COLLECTIONS
// ============================================

export const collections = {
  articles,
  authors,
  categories,
};
