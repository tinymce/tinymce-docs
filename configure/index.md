---
layout: default
title: Configuration options reference
title_nav: Configuration reference
description_short: The most customizable rich text editor.
description: TinyMCE is not only the most advanced rich text editor it's also the most customizable.
type: folder
---
{% assign navigaton = site.data.nav %}
{% for entry in navigaton %}
  {% if entry.url == "configure" %}
    {% assign links = entry.pages %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}