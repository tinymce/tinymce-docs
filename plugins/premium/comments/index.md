---
layout: default
title: Tiny Comments
title_nav: Comments
description_short: The TinyMCE Comments plugin
description: This section lists the premium plugins provided by Tiny.
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "plugins" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "premium" %}
        {% for subsubentry in subentry.pages %}
          {% if subsubentry.url == "comments" %}
            {% assign links = subsubentry.pages %}
          {% endif %}
        {% endfor %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}