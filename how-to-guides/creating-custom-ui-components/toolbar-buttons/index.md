---
layout: default
title: Creating custom Toolbar Buttons
title_nav: Creating custom Toolbar Buttons
description: How-to create custom toolbar buttons for TinyMCE
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "how-to-guides" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "creating-custom-ui-components" %}
        {% for sub2entry in subentry.pages %}
          {% if sub2entry.url == "toolbar-buttons" %}
            {% assign links = sub2entry.pages %}
          {% endif %}
        {% endfor %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}