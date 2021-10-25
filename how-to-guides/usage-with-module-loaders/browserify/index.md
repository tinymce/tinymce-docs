---
layout: default
title: Bundling TinyMCE with Browserify
title_nav: Browserify
description_short: Bundling TinyMCE with Browserify
description: Guides for bundling TinyMCE with Browserify.
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "how-to-guides" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "usage-with-module-loaders" %}
        {% for subsubentry in subentry.pages %}
          {% if subsubentry.url == "browserify" %}
            {% assign links = subsubentry.pages %}
          {% endif %}
        {% endfor %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}