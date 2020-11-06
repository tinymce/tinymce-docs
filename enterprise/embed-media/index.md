---
layout: default
title: Embed rich media
title_nav: Media embedding
description: Add rich media previews inside TinyMCE.
keywords: enterprise pricing video youtube vimeo mp3 mp4 mov movie clip film link linkchecking linkchecker mediaembed media
---

The [Enhanced Media Embed plugin]({{site.baseurl}}/plugins/premium/mediaembed/) makes it easy to add an enhanced content creation experience in your website or app with enriched media previews from the most popular web sources. Facebook, YouTube, Flickr, NY Times, Vimeo, Hulu, Tumblr, CodePen, SlideShare, TechCrunch, WordPress, Twitch, Spotify … and many more!

By easy, we mean easy. The service automatically “looks behind the link” to see whether a URL in the {{site.productname}} editor points to a rich media source. That URL will resolve into an enhanced media thumbnail whenever possible.

It is now as simple as adding a plugin to deliver a modern, content creation experience that everyone takes for granted.

Your have two deployment options. One is super easy with {{site.cloudname}}, the other is to go the more traditional Self-hosted route, requiring an additional [server-side component]({{ site.baseurl }}/enterprise/server/) to be installed and configured.

## Enhanced Media Embed self-hosted setup

Once you have the [server-side component]({{ site.baseurl }}/enterprise/server/) installed, additional configuration to your `application.conf` file is required. (Don't forget to restart the Java application server after updating the configuration.)

You also need to [integrate]({{ site.baseurl }}/enterprise/embed-media/mediaembed-server-integration/) and [configure]({{ site.baseurl }}/enterprise/embed-media/mediaembed-server-config/) the Enhanced Media Embed server.

## Enhanced Media Embed cloud setup

[{{site.cloudname}}]({{ site.baseurl }}/cloud-deployment-guide/editor-and-features/) makes setting up Enhanced Media Embed a breeze. Simply include the `mediaembed` parameter in your `tinymce.init` and have the {{site.cloudname}} services do the work for you.

{% assign pluginname = 'Enhanced Media Embed' %}
{% assign pluginminimumplan = 'tiertwo' %}
{% assign plugindocspage = 'mediaembed' %}
{% include misc/purchase-premium-plugins.md %}