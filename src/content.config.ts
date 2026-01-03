import {
	type SchemaContext,
	defineCollection,
	reference,
	z,
} from "astro:content";
import { glob, file } from "astro/loaders";

const pages = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/pages/" }),
	schema: ({ image }: SchemaContext) => z.object({
		title: z.string(),
		description: z.string(),
		body: z.string().optional(),
		cover: image().optional(),
		members: z.array(z.object({
			name: z.string(),
			portrait: image()
		})).optional(),
		cta_text: z.string().optional(),
		cta_link: z.string().optional()
	})
})

const navigation = defineCollection({
	loader: file("src/content/navigation.yml"),
	schema: z.object({
		id: z.string().optional(),
		displayName: z.string().optional(),
		link: z.string().optional(),
		parent: z.string().optional()
	})
})

export const collections = { pages, navigation }
