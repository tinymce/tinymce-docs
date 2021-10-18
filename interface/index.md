---
layout: default
title: Customizing the TinyMCE User Interface
title_nav: Interface
description: Information on customizing the TinyMCE user interface
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "interface" %}
    {% assign links = entry.pages %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
