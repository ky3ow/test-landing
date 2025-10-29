import {
	type SchemaContext,
	defineCollection,
	reference,
	z,
} from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/pages/" }),
	schema: ({ image }: SchemaContext) => z.object({
		title: z.string(),
		description: z.string(),
		cover: image().optional()
	})
})

export const collections = { pages }
