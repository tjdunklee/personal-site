import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/notes" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { notes };
