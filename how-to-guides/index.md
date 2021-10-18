---
layout: default
title: How-to guides for using TinyMCE
title_nav: How-to guides
description_short: This section will help you configure and extend your editor instance.
description: TinyMCE is an incredibly powerful, flexible and customizable rich text editor. This section will help you configure and extend your editor instance.
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "how-to-guides" %}
    {% assign links = entry.pages %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
