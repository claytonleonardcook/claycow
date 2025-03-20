// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
    site: import.meta.env.ENVIRONMENT === 'production' ? 'https://claycow.com' : 'https://preview.claycow.com',
    integrations: [mdx(), sitemap(), svelte()],
    image: {
        domains: ["cdn.bsky.app", "i.imgur.com"],
    }
});