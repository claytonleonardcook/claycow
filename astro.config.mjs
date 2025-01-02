// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
    site: 'https://claycow.com',
    integrations: [mdx(), sitemap(), svelte()],
    image: {
        domains: ["cdn.bsky.app", "i.imgur.com"],
    }
});