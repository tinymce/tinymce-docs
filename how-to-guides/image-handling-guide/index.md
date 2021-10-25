---
layout: default
title: Handling user images
title_nav: Images Guide
description: How-to handle images with TinyMCE.
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "how-to-guides" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "image-handling-guide" %}
        {% assign links = subentry.pages %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
