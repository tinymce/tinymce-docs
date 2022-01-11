---
layout: default
title: Bundling TinyMCE with Rollup.js
title_nav: Rollup.js
description_short: Bundling TinyMCE with Rollup.js
description: Guides for bundling TinyMCE with Rollup.js.
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "how-to-guides" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "usage-with-module-loaders" %}
        {% for subsubentry in subentry.pages %}
          {% if subsubentry.url == "rollup" %}
            {% assign links = subsubentry.pages %}
          {% endif %}
        {% endfor %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}