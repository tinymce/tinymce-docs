---
layout: default
title: Release notes for TinyMCE vnumtxt
title_nav: TinyMCE vnumtxt
description: Release notes for TinyMCE vnumtxt
keywords: releasenotes newfeatures deleted technologypreview bugfixes knownissues
type: folder
---

{% comment %}
Replace vnumtxt with the version number such as: X.Y.Z
Replace vnumsnake with the version number such as: X_Y_Z
{% endcomment %}

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "release-notes" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "vnumsnake" %}
        {% assign links = subentry.pages %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
