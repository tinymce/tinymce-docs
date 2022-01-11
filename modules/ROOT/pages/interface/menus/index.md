---
layout: default
title: Customizing the editor's menus
title_nav: Menus
description: Information on customizing TinyMCE's menubar and contextual (right-click) menus
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "interface" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "menus" %}
        {% assign links = subentry.pages %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
