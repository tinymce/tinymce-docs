---
layout: default
title: Tiny Skins and Icon Packs
title_nav: Tiny Skins and Icon Packs
description: Quickly give TinyMCE a new look.
keywords: skin skins icon icons material bootstrap customize theme
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "demos" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "premium-skins-and-icon-packs" %}
        {% assign links = subentry.pages %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
