import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.timdunklee.com',
  trailingSlash: 'always',
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  },
  integrations: [sitemap()]
});
