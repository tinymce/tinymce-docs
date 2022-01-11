---
layout: default
title: Containerized server-side services
title_nav: Docker containers
description: The containerized server-side components for premium plugins.
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "how-to-guides" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "premium-server-side-guide" %}
        {% for subsubentry in subentry.pages %}
          {% if subsubentry.url == "docker" %}
            {% assign links = subsubentry.pages %}
          {% endif %}
        {% endfor %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
