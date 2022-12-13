import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.timdunklee.com',
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
