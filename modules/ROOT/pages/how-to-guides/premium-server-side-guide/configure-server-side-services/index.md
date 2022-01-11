---
layout: default
title: Configure the server-side components
description: Configuration options for premium server-side components.
keywords: enterprise tinymcespellchecker spell check checker pro pricing imagetools server configuration configure
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "how-to-guides" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "premium-server-side-guide" %}
        {% for subsubentry in subentry.pages %}
          {% if subsubentry.url == "configure-server-side-services" %}
            {% assign links = subsubentry.pages %}
          {% endif %}
        {% endfor %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
