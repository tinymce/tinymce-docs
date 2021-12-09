---
layout: default
title: TinyMCE Angular framework integration guide
title_nav: Angular framework
description: The Angular framework integration guide for TinyMCE
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "how-to-guides" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "environment-setup" %}
        {% for sub2entry in subentry.pages %}
          {% if sub2entry.url == "angular" %}
            {% assign links = sub2entry.pages %}
          {% endif %}
        {% endfor %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}