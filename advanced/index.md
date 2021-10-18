---
layout: default
title: Explore advanced topics
title_nav: Advanced topics
description: Information and guides for developers wanting to build advanced capabilities into TinyMCE.
type: folder
---
{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "advanced" %}
    {% assign links = entry.pages %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
