---
layout: default
title: Release notes for TinyMCE 6.0
title_nav: TinyMCE 6.0
description: Release notes for TinyMCE 6.0
keywords: releasenotes newfeatures deleted technologypreview bugfixes knownissues
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "release-information" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "release-notes" %}
        {% for sub2entry in subentry.pages %}
          {% if sub2entry.url == "6_0_0" %}
            {% assign links = sub2entry.pages %}
          {% endif %}
        {% endfor %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}
{% include index.html links=links %}
