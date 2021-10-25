---
layout: default
title: Customizing the editor's toolbars
title_nav: Toolbars
description: Information on customizing TinyMCE's toolbars
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "interface" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "toolbars" %}
        {% assign links = subentry.pages %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
