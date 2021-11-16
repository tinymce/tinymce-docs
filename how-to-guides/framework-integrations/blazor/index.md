---
layout: default
title: TinyMCE Blazor framework integration guide
title_nav: Blazor framework
description: The Blazor framework integration guide for TinyMCE
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "initial-configuration" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "framework-integrations" %}
        {% for sub2entry in subentry.pages %}
          {% if sub2entry.url == "blazor" %}
            {% assign links = sub2entry.pages %}
          {% endif %}
        {% endfor %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}