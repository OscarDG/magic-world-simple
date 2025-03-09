// @ts-check
import { defineConfig } from 'astro/config';
import alias from '@rollup/plugin-alias'

// https://astro.build/config
export default defineConfig({
        experimental:{
            svg: true,
        },
        vite: {
            plugins: [
                alias({
                    entries: [
                        { find: '@', replacement: new URL('./src', import.meta.url).pathname }
                    ]
                })
            ]
        },

        site: "https://OscarDG.github.io",
        base: "/magic-world-simple",
});
