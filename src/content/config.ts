        import { defineCollection, z } from 'astro:content';

        const productsCollection = defineCollection({
          type: 'content',
          schema: z.object({
            title: z.string(),
            slug: z.string(),
            image: z.string().optional(),
            description: z.string(),
            price_rub: z.number(),
            price_usd: z.number().optional(),
            category: z.string(),
            published: z.boolean().default(true),
            date: z.date().optional(),
          }),
        });

        export const collections = {
          'products': productsCollection,
        };
