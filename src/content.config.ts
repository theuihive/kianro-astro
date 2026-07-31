import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string(),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    category: z.object({
      name: z.string(),
      slug: z.string(),
      image: z.string().optional(),
    }),
  }),
});

export const collections = {
  blog,
};
