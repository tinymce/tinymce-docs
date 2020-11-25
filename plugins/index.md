---
layout: default
title: Add plugins to TinyMCE
title_nav: Plugins
description_short: This section will help you configure and extend your editor instance.
description: TinyMCE is an incredibly powerful, flexible and customizable rich text editor. This section will help you configure and extend your editor instance.
type: folder
---

{% assign navigaton = site.data.nav %}
{% for entry in navigaton %}
  {% if entry.url == "plugins" %}
    {% assign links = entry.pages %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
