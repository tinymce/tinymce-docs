---
layout: default
title: Release notes for TinyMCE 6
title_nav: Release notes for TinyMCE 6
description: Release notes for TinyMCE 6
keywords: releasenotes newfeatures deleted technologypreview bugfixes knownissues
type: folder
---
{% assign navigaton = site.data.nav %}
{% for entry in navigaton %}
  {% if entry.url == "release-notes" %}
    {% assign links = entry.pages %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}