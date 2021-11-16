---
layout: default
title: Initial configuration
title_nav: Initial configuration
description: Documentation on the integration options for TinyMCE.
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "initial-configuration" %}
    {% assign links = entry.pages %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
