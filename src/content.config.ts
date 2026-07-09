import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const milestones = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/milestones' }),
	schema: z.object({
		title: z.string(),
		// Approximate milestone date (adjust it as you confirm real dates)
		date: z.coerce.date(),
		status: z.enum(['completed', 'in-progress', 'iterating']).default('completed'),
		// Short summary for the timeline card
		summary: z.string(),
		cover: z.string().default('/images/placeholder.svg'),
		images: z
			.array(
				z.object({
					src: z.string().default('/images/placeholder.svg'),
					alt: z.string(),
					caption: z.string().optional(),
				}),
			)
			.default([]),
		videos: z
			.array(
				z.object({
					// Leave src empty until you upload the video (e.g. to /videos/ or a YouTube embed URL)
					src: z.string().optional(),
					title: z.string(),
					caption: z.string().optional(),
				}),
			)
			.default([]),
		specs: z
			.array(
				z.object({
					label: z.string(),
					value: z.string(),
				}),
			)
			.default([]),
		tags: z.array(z.string()).default([]),
		// Manual order within the timeline when two milestones share an approximate date
		order: z.number().default(0),
	}),
});

export const collections = { milestones };
