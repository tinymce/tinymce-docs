---
layout: default
title: Tiny Drive configuration
title_nav: Configuration options
description: List of all available Tiny Drive configuration options.
keywords: tinydrive configuration
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "plugins" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "premium" %}
        {% for subsubentry in subentry.pages %}
          {% if subsubentry.url == "tinydrive" %}
            {% for sub3entry in subsubentry.pages %}
              {% if sub3entry.url == "configuration" %}
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
