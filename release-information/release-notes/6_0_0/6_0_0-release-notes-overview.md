---
layout: default
title: Overview
title_nav: Overview
description: Release notes overview for TinyMCE 6.0
keywords: releasenotes new changes bugfixes
---

{{site.releasenotes_for_stable}}

## Overview

{{site.productname}} 6.0 was released for {{site.enterpriseversion}} and {{site.cloudname}} on <<`WEEKDAY`, `MMM` `D`<sup>`st|nd|th`</sup>, `YYYY`>>. It includes {{site.productname}} 6.0 and additional changes to premium plugins. These release notes provide an overview of the changes for {{site.productname}} 6.0, including:

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

{% include sub-level-toc.html links=links %}
