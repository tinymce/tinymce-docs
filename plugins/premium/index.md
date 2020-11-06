---
layout: default
title: Premium plugins for TinyMCE
title_nav: Premium plugins
description_short: This section will help you configure and extend your editor instance.
description: TinyMCE is an incredibly powerful, flexible and customizable rich text editor. This section will help you configure and extend your editor instance.
type: folder
---

{% assign navigaton = site.data.nav %}
{% for entry in navigaton %}
  {% if entry.url == "plugins" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "premium" %}
        {% assign links = subentry.pages %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
