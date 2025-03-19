import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { image } from './utils';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		date: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		image: z.object({
			src: z.string(),
			alt: z.string()
		}).optional(),
		isPublished: z.boolean().optional()
	}),
});

const gallery = defineCollection({
	loader: image('./src/content/gallery'),
	schema: ({ image }) => z.object({
		title: z.string(),
		artist: z.string(),
		alt: z.string(),
		path: z.string(),
		image: image(),
		width: z.number(),
		height: z.number()
	}),
});

export const collections = { blog, gallery };
