---
layout: ../../../layouts/Layout.astro
title: 'How to Make Shopify External Links Open in a New Window'
date: '2019-02-12 12:17:42'
---
Recently I ran into an issue building out the navigation for a custom Shopify theme. I was suprised to find out that the Shopify navigation editing interface doesn't allow you to set a specific link to open in a new window. Internally, I had a little debate with myself like always when I am asked for this functionality. I personally feel that all links should open normally so the user can choose to open in a new window/tab if they so desire, and apparently other developers [share my opinion](https://css-tricks.com/use-target_blank/). That being said, sometimes there are bigger fish to fry.

After all the internal debate was over in my head, it was time to figure out a solution. A quick search revealed an [official Shopify article](https://help.shopify.com/en/themes/customization/navigation/open-external-links-in-new-browser) documenting a possible solve. Although, to me it seemed like resorting to JavaScript for this was a bit heavy handed. Instead I turned to liquid templating and figured out I could basically do the same thing without the extra weight of the client-side JavaScript. Here is what I came up with.

```
{% assign externalLink = false %}

{% if link.url contains 'https' or link.url contains 'http' %}
  {% unless link.url contains shop.url or link.url contains shop.secure_url %}
    {% assign externalLink = true %}
  {% endunless %}
{% endif %}

<a href="{{ link.url }}" {% if externalLink %}target="_blank" rel="noopener"{% endif %}>
  {{ link.title }}
</a>
```

I hope this helps somebody out that ends up in the same dilemma.
