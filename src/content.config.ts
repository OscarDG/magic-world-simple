import { defineCollection, z } from "astro:content";

const activitiesCollection = defineCollection({
    schema: ({ image }) => z.object({
        activity_name: z.string(),
        date: z.string(),
        hour: z.string(),
        place: z.string(),
        excerpt: z.string(),
        description: z.string(),
        thumb: image()
    }),
});

export const collections = {
    activities: activitiesCollection,
}