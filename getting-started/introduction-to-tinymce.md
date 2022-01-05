---
layout: default
title: What is TinyMCE?
description: What is TinyMCE and how do I add it to my project.
keywords: tinymce script textarea
---

{% include what-is-tinymce.md %}

## Getting started guides

Select from one of the following frameworks, CMSs, or package managers for a guide to getting start with {{site.productname}}. If you are not sure which guide to select, or your framework is not listed, try [Adding {{site.productname}} to a webpage using {{site.cloudname}}]({{site.baseurl}}/getting-started/install-setup/cloud/cloud-quick-start/).

{% assign navigation = site.data.nav %}

## {{site.productname}} from the {{site.cloudname}}

{% for entry in navigation %}
  {% if entry.url == "getting-started" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "install-setup" %}
        {% for subsubentry in subentry.pages %}
          {% if subsubentry.url == "cloud" %}
            {% assign links = subsubentry.pages %}
          {% endif %}
        {% endfor %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include sub-level-toc.html links=links urlPrefix="install-setup/cloud/" %}

## Using {{site.productname}} from a package manager or a .zip archive

{% for entry in navigation %}
  {% if entry.url == "getting-started" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "install-setup" %}
        {% for subsubentry in subentry.pages %}
          {% if subsubentry.url == "self-hosted" %}
            {% assign links = subsubentry.pages %}
          {% endif %}
        {% endfor %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include sub-level-toc.html links=links urlPrefix="install-setup/self-hosted/" %}