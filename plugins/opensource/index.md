---
layout: default
title: Open source for TinyMCE
title_nav: Open source plugins
description_short: This section will help you configure and extend your editor instance.
description: TinyMCE is an incredibly powerful, flexible and customizable rich text editor. This section will help you configure and extend your editor instance.
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
