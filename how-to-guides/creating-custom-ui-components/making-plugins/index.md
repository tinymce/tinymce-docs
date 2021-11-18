---
layout: default
title: Creating custom plugins
title_nav: Plugins
description: How-to create custom plugins for TinyMCE
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "how-to-guides" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "creating-custom-ui-components" %}
        {% for sub2entry in subentry.pages %}
          {% if sub2entry.url == "making-plugins" %}
            {% assign links = sub2entry.pages %}
          {% endif %}
        {% endfor %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}