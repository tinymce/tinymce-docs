---
layout: default
title: Release information for TinyMCE 6
title_nav: Release information
description: This section contains the Release notes and changelog for TinyMCE 6.
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "release-information" %}
    {% assign links = entry.pages %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
