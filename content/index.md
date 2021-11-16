---
layout: default
title: Customizing TinyMCE Content
title_nav: Content
description: Information on customizing the TinyMCE Content area and behavior.
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "content" %}
    {% assign links = entry.pages %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
