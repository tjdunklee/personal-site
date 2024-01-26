import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Tim Dunklee',
    description: 'Thoughts and tips about web development, accessibilty, and tinkering.',
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./notes/**/*.{md,mdx}'),
    ),
  });
}