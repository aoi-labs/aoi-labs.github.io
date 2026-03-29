import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const logs = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdoc}', base: "./src/content/logs" }),
  schema: z.object({
    date: z.string(),
    project: z.string(),
    stage: z.string(),
    whatIDid: z.array(z.string()),
    whatAccomplished: z.array(z.string()),
    issues: z.array(z.string()),
    nextSteps: z.array(z.string()),
    notes: z.array(z.string()).optional(),
  }),
});

export const collections = { logs };
