---
layout: default
title: Checking links as-you-type
title_nav: Hyperlink checking
description: Check for valid hyperlinks inside the editor
keywords: enterprise pricing video youtube vimeo mp3 mp4 mov movie clip film link linkchecking linkchecker mediaembed media
---

The [Link Checker plugin]({{site.baseurl}}/plugins/premium/linkchecker/) provides a link checking service right within the {{site.productname}} editor.

Think of Link Checker as "spell-checking for URLs". But instead of checking spelling, it will let you know if a URL in the editor is valid, invalid or questionable. This is a huge time-saver for anyone who creates content — no more having to double-check URLs, especially in imported content. Not to mention the benefit of no longer frustrating readers with broken hyperlinks.

Your have two deployment options. One is super easy with {{site.cloudname}}, the other is to go the more traditional Self-hosted route, requiring an additional [server-side component]({{ site.baseurl }}/enterprise/server/) to be installed and configured.

## Link Checker self-hosted setup

Once you have the server-side component installed, additional configuration to your `application.conf` file is required. (Don't forget to restart the Java application server after updating the configuration.)

For information on configuring the server-side component, see: [Configure server-side components]({{ site.baseurl }}/enterprise/server/).

You will also find more Self-hosted setup information on the [Link Checker plugin page]({{site.baseurl}}/plugins/premium/linkchecker/).

## Link Checker cloud setup

[{{site.cloudname}}]({{ site.baseurl }}/cloud-deployment-guide/editor-and-features/) makes setting up Link Checker a breeze. Simply include the `linkchecker` parameter in your `tinymce.init` and have the {{site.cloudname}} services do the work for you.

{% assign pluginname = 'Link Checker' %}
{% assign pluginminimumplan = 'tierthree' %}
{% assign plugindocspage = 'linkchecker' %}
{% include misc/purchase-premium-plugins.md %}