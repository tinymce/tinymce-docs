---
layout: default
title: Getting started with TinyMCE
title_nav: Getting started
description: Faster development with integrations of TinyMCE into your favorite framework or CMS.
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "getting-started" %}
    {% assign links = entry.pages %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
