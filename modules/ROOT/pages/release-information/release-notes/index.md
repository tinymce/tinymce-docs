---
layout: default
title: Release notes for TinyMCE 6
title_nav: Release notes for TinyMCE 6
description: Release notes for TinyMCE 6
keywords: releasenotes newfeatures deleted technologypreview bugfixes knownissues
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "release-information" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "release-notes" %}
        {% assign links = subentry.pages %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}