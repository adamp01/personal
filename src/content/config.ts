import { defineCollection, z } from "astro:content";

const travels = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    dateStart: z.string().date(),
    dateEnd: z.string().date(),
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

export const collections = { travels };
