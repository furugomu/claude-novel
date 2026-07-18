import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const chapters = defineCollection({
  loader: glob({ pattern: 'ch*.md', base: '../chapters' }),
});

export const collections = { chapters };
