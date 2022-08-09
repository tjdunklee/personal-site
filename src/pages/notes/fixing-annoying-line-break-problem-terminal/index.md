---
layout: ../../../layouts/Layout.astro
title: "Fixing My Line Wrap Issue in iTerm 2"
date: 2015-12-14
---

Sometimes you have one of those workflow issues that isn't quite annoying enough for you to do anything about. I had one of those problems with iTerm 2 for the last year and just today I decided I had enough! The problem was that when text was supposed to wrap to a new line (e.g. writing a long commit message) it would instead start to wrap over itself which made it unreadable.

The fix was really simple and I'm kicking myself for not doing it sooner. It turns out the problem was actually with my .bash_profile and the way I customized the prompt. In the PS1 you must surround the non-printing chars with '\\[' and '\\]' which tells the shell it is a non-printing character. After this quick fix, here is what my current PS1 looks like:

``` bash
PS1='\[\e[01;32m\]\u\[\e[m\]:\[\e[01;34m\]\w\[\e[m\]$ '
```

I hope this helps somebody else! Big kudos to [this post](http://unix.stackexchange.com/questions/105958/terminal-prompt-not-wrapping-correctly) for getting me there.
