---
layout: default
title: Release notes for TinyMCE 6.0
title_nav: TinyMCE 6.0
description: Release notes for TinyMCE 6.0
keywords: releasenotes newfeatures deleted technologypreview bugfixes knownissues
type: folder
---

{% comment %}
Replace 6.0 with the version number such as: X.Y.Z
Replace 6_0_0 with the version number such as: X_Y_Z
{% endcomment %}

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "release-notes" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "6_0_0" %}
        {% assign links = subentry.pages %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
