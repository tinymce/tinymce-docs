---
layout: default
title: Getting started with TinyMCE
title_nav: Installation
description: Faster development with integrations of TinyMCE into your favorite framework or CMS.
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "getting-started" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "install-setup" %}
        {% assign links = subentry.pages %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
