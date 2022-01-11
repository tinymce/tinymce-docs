---
layout: default
title: Add plugins to TinyMCE
title_nav: Plugins
description_short: This section will help you configure and extend your editor instance.
description: TinyMCE is an incredibly powerful, flexible and customizable rich text editor. This section will help you configure and extend your editor instance.
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "plugins-ref" %}
    {% assign links = entry.pages %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
