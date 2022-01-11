---
layout: default
title: Creating custom UI components
title_nav: Creating custom UI components
description: How-to create custom toolbar buttons, menu items, dialogs, notifications, sidebars, and autocompleters.
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "how-to-guides" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "creating-custom-ui-components" %}
        {% assign links = subentry.pages %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}