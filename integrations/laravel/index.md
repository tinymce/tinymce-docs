---
layout: default
title: Using TinyMCE with the Laravel framework
title_nav: Laravel
description_short: A guide to using TinyMCE with the PHP-based Laravel framework.
description: A guide to using TinyMCE with the PHP-based Laravel framework.
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "integrations" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "laravel" %}
        {% assign links = subentry.pages %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
