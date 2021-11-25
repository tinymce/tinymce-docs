---
layout: default
title: Premium plugins for TinyMCE
title_nav: Premium plugins
description_short: TinyMCE premium plugins
description: This section lists the premium plugins provided by Tiny.
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "plugins-ref" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "premium" %}
        {% assign links = subentry.pages %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
