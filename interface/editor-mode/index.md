---
layout: default
title: Changing the editor mode
title_nav: Editor modes
description: Information on choosing and changing the editor mode.
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "interface" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "editor-mode" %}
        {% assign links = subentry.pages %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
