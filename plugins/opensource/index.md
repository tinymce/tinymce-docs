---
layout: default
title: Open source for TinyMCE
title_nav: Open source plugins
description_short: TinyMCE open source plugins
description: This section lists the open source plugins provided with TinyMCE.
type: folder
---

{% assign navigaton = site.data.nav %}
{% for entry in navigaton %}
  {% if entry.url == "plugins" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "opensource" %}
        {% assign links = subentry.pages %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
