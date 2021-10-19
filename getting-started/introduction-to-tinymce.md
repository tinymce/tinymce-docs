---
layout: default
title: What is TinyMCE?
description: What is TinyMCE and how do I add it to my project.
keywords: tinymce script textarea
---

{% include what-is-tinymce.md %}

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "getting-started" %}
    {% assign links = entry.pages %}
  {% endif %}
{% endfor %}

## Getting started guides

Select from one of the following frameworks, CMSs, or package managers for a guide to getting start with {{site.productname}}. If you are not sure which guide to select, or your framework is not listed, try [Adding {{site.productname}} to a webpage using {{site.cloudname}}]({{site.baseurl}}/getting-started/cloud-quick-start/).

{% include sub-level-toc.html links=links %}
