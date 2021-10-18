---
layout: default
title: Configuration options reference
title_nav: Configuration reference
description_short: The most customizable rich text editor.
description: TinyMCE is not only the most advanced rich text editor it's also the most customizable.
type: folder
---
{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "configure" %}
    {% assign links = entry.pages %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}