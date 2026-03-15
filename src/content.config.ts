import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const travels = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/travels",
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    months: z.array(z.string()),
    days: z.number(),
    countries: z.array(z.string()),
    cities: z
      .array(
        z.object({
          name: z.string(),
        }),
      )
      .default([]),
    categories: z.array(z.string()).default([]),
    rating: z.number().min(1).max(5).optional(),
    coverImage: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    regionSvg: z.string().optional(),
    regionPoints: z
      .array(
        z.object({
          name: z.string(),
          x: z.number(),
          y: z.number(),
        }),
      )
      .default([]),
    regionRoutes: z
      .array(
        z.object({
          from: z.number(),
          to: z.number(),
        }),
      )
      .default([]),
  }),
});

const thoughts = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/thoughts",
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    date: z.string().date(),
    categories: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { travels, thoughts };
