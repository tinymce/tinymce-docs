---
layout: default
title: Introduction & getting started
title_nav: Introduction &amp; getting started
description: New to self-hosting TinyMCE? Start here.
type: folder
---

{% assign links = site.data | where_exp:"nav", "nav.url == 'general-configuration-guide'" | first | map: "pages" %}
{% include index.html links=links %}
