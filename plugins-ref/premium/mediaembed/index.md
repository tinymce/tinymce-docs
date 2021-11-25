---
layout: default
title: Enhanced Media Embed plugin
title_nav: Enhanced Media Embed
description: Add rich media previews inside TinyMCE.
keywords: video youtube vimeo mp3 mp4 mov movie clip film spotify
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "plugins-ref" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "premium" %}
        {% for subsubentry in subentry.pages %}
          {% if subsubentry.url == "mediaembed" %}
            {% assign links = subsubentry.pages %}
          {% endif %}
        {% endfor %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}