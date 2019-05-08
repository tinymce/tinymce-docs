---
layout: default
title: Getting started
title_nav: Getting started
description: Guide on how to get started with Tiny Drive
type: folder
keywords: tinydrive jwt json web token authentication security starter
---
{% assign navigaton = site.data.nav %}
{% for entry in navigaton %}
  {% if entry.url == "tinydrive" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "getting-started" %}
        {% assign links = subentry.pages %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
