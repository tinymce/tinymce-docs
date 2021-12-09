---
layout: default
title: TinyMCE Laravel framework integration guide
title_nav: Laravel framework
description: The Laravel framework integration guide for TinyMCE
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "initial-configuration" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "environment-setup" %}
        {% for sub2entry in subentry.pages %}
          {% if sub2entry.url == "laravel" %}
            {% assign links = sub2entry.pages %}
          {% endif %}
        {% endfor %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
