---
layout: default
title: Bundling TinyMCE with a module loader
title_nav: Bundling TinyMCE
description_short: Bundling TinyMCE with Webpack, rollup.js, or Browserify.
description: A series of guides for bundling TinyMCE with Webpack, rollup.js, or Browserify.
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "advanced" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "usage-with-module-loaders" %}
        {% assign links = subentry.pages %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
