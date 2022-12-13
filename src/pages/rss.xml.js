import rss from '@astrojs/rss';

export const get = () => rss({
  title: 'Tim Dunklee',
  description: 'Thoughts and tips about web development, accessibilty, and tinkering.',
  site: import.meta.env.SITE,
  items: import.meta.glob('./notes/**/*.md')
});