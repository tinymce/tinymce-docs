---
layout: default
title: Containerized server-side services - Individually licensed plugins
title_nav: Individually licensed plugin services
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
            {% for sub3entry in subsubentry.pages %}
              {% if sub3entry.url == "individual" %}
                {% assign links = sub3entry.pages %}
              {% endif %}
            {% endfor %}
          {% endif %}
        {% endfor %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
