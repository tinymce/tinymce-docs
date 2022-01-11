---
layout: default
title: Premium server-side services guide
title_nav: Premium server-side services guide
description_short: Server-side components for premium plugins.
description: Server-side components for premium plugins like spelling as-you-type.
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "how-to-guides" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "premium-server-side-guide" %}
        {% assign links = subentry.pages %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
