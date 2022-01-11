---
layout: default
title: Tiny Drive plugin APIs
title_nav: APIs
description: Description of the Tiny Drive plugin APIs
type: folder
keywords: tinydrive api
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "plugins-ref" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "premium" %}
        {% for subsubentry in subentry.pages %}
          {% if subsubentry.url == "tinydrive" %}
            {% for sub3entry in subsubentry.pages %}
              {% if sub3entry.url == "apis" %}
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
