---
layout: default
title: Customizing the editor's appearance
title_nav: Editor appearance
description: Information on customizing TinyMCE's &quot;skin&quot; and icons
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "interface" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "editor-appearance" %}
        {% assign links = subentry.pages %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
