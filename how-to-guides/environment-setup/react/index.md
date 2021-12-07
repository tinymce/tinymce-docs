---
layout: default
title: TinyMCE React framework integration guide
title_nav: React framework
description: The React framework integration guide for TinyMCE
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "how-to-guides" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "environment-setup" %}
        {% for sub2entry in subentry.pages %}
          {% if sub2entry.url == "react" %}
            {% assign links = sub2entry.pages %}
          {% endif %}
        {% endfor %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
