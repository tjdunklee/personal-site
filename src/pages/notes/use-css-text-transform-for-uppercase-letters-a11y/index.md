---
layout: ../../../layouts/PostLayout.astro
title: 'Use CSS Text Transform for Better Accessibility'
date: '2022-08-31 12:17:42'
---

A large part of my work in the last few years has been improving the accessibilty of several different website frameworks. This involves a process we have been calling "Real-Time Accessibility Remediation" where our development and design teams attend a live session with an accessibility expert that navigates our work using a screen reader. I've learned so much from these sessions and I'm confident it has made me a much better developer. During these sessions I often pick up very small tips that can go a long way towards making the user experience better. Today I wanted to share one of those tips.

During one of our remediation sessions, I noticed an interesting thing that happened. Our accessibility expert was navigating through items on the page, when he landed on a heading that was typed manually in all capital letters. The heading read "SEE HOW IT WORKS." When he focused on this heading it read out the word "IT" as "I.T." because it thought it was an acronym. As a test, we quickly updated the heading to be title cased and used CSS text transform to make the text simply be styled as all uppercase. The result was that the heading was properly read out. I've always felt odd about data being in all uppercase letters, but now I have a very good reason for it.

## Don't Do This
``` html
<h1>SEE HOW IT WORKS</h1>
```

## Do This Instead
``` html
<style>
.your-heading-class {
  text-transform: uppercase;
}
</style>

<h1 class="your-heading-class">See How It Works</h1>
```









