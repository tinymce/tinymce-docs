---
layout: default
title: Customizing the editor appearance
title_nav: Customizing the editor appearance
description: A guide to customizing the appearance of TinyMCE using skins and icons.
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "initial-configuration" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "customizing-the-editor-appearance" %}
        {% assign links = subentry.pages %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}