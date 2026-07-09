import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const milestones = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/milestones' }),
	schema: z.object({
		title: z.string(),
		// Fecha aproximada del hito (podés ajustarla a medida que confirmes fechas reales)
		date: z.coerce.date(),
		category: z.enum(['hardware', 'electronica', 'firmware', 'software']),
		status: z.enum(['completado', 'en-progreso', 'iterando']).default('completado'),
		// Resumen corto para la tarjeta del timeline
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
					// Dejá src vacío hasta subir el video (ej: a /videos/ o YouTube embed URL)
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
		// Orden manual dentro del timeline cuando dos hitos comparten fecha aproximada
		order: z.number().default(0),
	}),
});

export const collections = { milestones };
