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
  "electric"
]);

// Diagnostic flow steps schema
const diagnosticStepSchema = z.object({
  stepNumber: z.number().optional(),
  title: z.string(),
  details: z.string().optional(),
  outcome: z.string().optional(),
  nextIfPass: z.string().optional(),
  nextIfFail: z.string().optional(),
  safetyNote: z.string().optional(),
});

const diagnosticFlowSchema = z
  .object({
    title: z.string().optional(),
    intro: z.string().optional(),
    steps: z.array(diagnosticStepSchema),
    whenToCallPro: z.string().optional(),
  })
  .optional();

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
    pillar: z.enum(["fix", "maintain", "buy", "learn", "seasonal"]),
    hub: z.string().optional(),
    category: z.string().optional(),
    topics: z.array(z.string()).default([]),
    relatedArticles: z.array(z.string()).default([]),
    
    // Automotive-specific fields
    vehicles: z.array(z.string()).default([]), // ["toyota-camry-2018-2023", "honda-civic-2016-2023"]
    vehicleTypes: z.array(vehicleTypeSchema).default([]), // ["car", "suv"]
    difficulty: difficultySchema,
    timeCostSkill: timeCostSkillSchema,
    safetyLevel: safetyLevelSchema.default("low"),
    
    // Parts and tools for affiliate linking
    partsNeeded: z.array(z.string()).default([]),
    toolsNeeded: z.array(z.string()).default([]),
    
    // OBD codes for diagnostic articles
    obdCodes: z.array(z.string()).default([]), // ["P0300", "P0171"]
    
    // Mileage/maintenance intervals
    maintenanceInterval: z.string().optional(), // "30,000 miles"
    
    // Article type for content organization
    articleType: z.enum([
      "troubleshooting",
      "how-to", 
      "buyer-guide",
      "comparison",
      "cost-guide",
      "maintenance-schedule"
    ]).optional(),
    
    seo: seoSchema,
    adsEnabled: z.boolean().default(true),
    affiliateEnabled: z.boolean().default(true),
    
    // Safety callouts for high-risk content
    stopHere: z.array(z.string()).default([]),
  }),
});

const hubs = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/hubs" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    icon: z.string().optional(),
    pillar: z.enum(["fix", "maintain", "buy", "learn", "seasonal"]),
    featuredArticles: z.array(z.string()).default([]),
    order: z.number().default(0),
    seo: seoSchema,
    
    // For sub-hubs (e.g., fix/brakes)
    parentHub: z.string().optional(),
    
    // Featured content sections for hub pages
    featured: z
      .object({
        troubleshooting: z.array(z.string()).default([]),
        howTos: z.array(z.string()).default([]),
        buyerGuides: z.array(z.string()).default([]),
        costGuides: z.array(z.string()).default([]),
        comparisons: z.array(z.string()).default([]),
        subHubs: z.array(z.string()).default([]),
      })
      .optional(),
  }),
});

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
    specialties: z.array(z.string()).default([]), // ["brakes", "engine", "electrical"]
  }),
});

const categories = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "./src/data/categories" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    icon: z.string().optional(),
    parent: z.string().optional(),
    pillar: z.enum(["fix", "maintain", "buy", "learn", "seasonal"]),
  }),
});

const topics = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "./src/data/topics" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

// Vehicle data for make/model specific content
const vehicles = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "./src/data/vehicles" }),
  schema: z.object({
    make: z.string(),
    model: z.string(),
    yearRange: z.string(), // "2018-2023"
    slug: z.string(), // "toyota-camry-2018-2023"
    engines: z.array(z.string()).default([]), // ["2.5L I4", "3.5L V6"]
    type: vehicleTypeSchema,
    commonIssues: z.array(z.string()).default([]),
    maintenanceNotes: z.string().optional(),
  }),
});

// ============================================
// EXPORT COLLECTIONS
// ============================================

export const collections = {
  articles,
  hubs,
  authors,
  categories,
  topics,
  vehicles,
};