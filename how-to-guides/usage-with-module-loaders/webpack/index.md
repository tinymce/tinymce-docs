---
layout: default
title: Bundling TinyMCE with Webpack
title_nav: Webpack
description_short: Bundling TinyMCE with Webpack
description: Guides for bundling TinyMCE with Webpack.
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "how-to-guides" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "usage-with-module-loaders" %}
        {% for subsubentry in subentry.pages %}
          {% if subsubentry.url == "webpack" %}
            {% assign links = subsubentry.pages %}
          {% endif %}
        {% endfor %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}