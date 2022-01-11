---
layout: default
title: Using TinyMCE with the Ruby on Rails framework
title_nav: Ruby on Rails
description: A guide to using TinyMCE with the Ruby on Rails framework.
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "getting-started" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "install-setup" %}
        {% for subsubentry in subentry.pages %}
          {% if subsubentry.url == "self-hosted" %}
            {% for sub3entry in subsubentry.pages %}
              {% if sub3entry.url == "rails" %}
                {% assign links = sub3entry.pages %}
              {% endif %}
            {% endfor %}
          {% endif %}
        {% endfor %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
