---
layout: ../../../layouts/PostLayout.astro
title: "Building a Home Weather App using AngularJS"
description: "How I used an old iPad as an always-on home display for weather and more."
pubDate: '2016-01-04 12:17:42'
---
Living in Minnesota, you become very dependent on weather apps to help you survive the unpredictable conditions. I always found myself studying [Dark Sky](https://darksky.net/) to make an informed decision about what to put on my son before we headed out for the day. It seemed like a waste of time to always be pulling out my phone and sifting through all of the available weather data, especially if I was trying to do this while carrying a crying toddler. After pondering this problem for a while, I decided to make a solution for my family and learn something in the process.

After some research, I came to the conclusion that AngularJS would work quite well for my application due to its ability to easily integrate third party APIs. In terms of data, I choose to use the [Forecast API](https://developer.forecast.io/) because it is the same data as the 'Dark Sky' app which I have come to trust more than other sources. I started to develop locally, but eventually I needed a more permanent host for my application. Again, in the name of learning, I decided to try out a Raspberry Pi for a low-powered local hosting solution. I was impressed how easy it was to get Apache and a custom local domain working on the Pi. Finally, the last piece to the puzzle would be the display unit, which I decided to use my old iPad.

## Up and Running
I'm no product designer, but I was very happy with the simplicity of my design for the application. I chose to use very simple colors and icons to represent an hourly forecast for the day. The application runs day and night in our kitchen and it has proven to be very helpful in our daily lives!

![DunkStation Runnning](/images/notes/2016-weather-app-running.jpg)

![Raspberry Pi for Apache](/images/notes/2016-weather-app-raspberry-pi.jpg)

## Next Steps
The plan is to keep making this better and help organize our lives. I called it the "DunkStation" because I have bigger plans for it. The next thing on the agenda is getting our recipes stored for easy access. I'm planning on storing these in a Wordpress detached back-end and use the WP REST API to access this info using AngularJS. I'll update when that is complete!
