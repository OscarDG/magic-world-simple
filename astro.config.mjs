// @ts-check
import { defineConfig } from 'astro/config';
import { sharpImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
        experimental:{
            svg: true,
        },

        site: "https://OscarDG.github.io",
        base: "magic-world-simple",

        image: {
            service: sharpImageService(),
        },
});
