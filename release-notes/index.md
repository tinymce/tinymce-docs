---
layout: default
title: Release notes for TinyMCE 5
title_nav: Release notes for TinyMCE 5
keywords: releasenotes newfeatures deleted technologypreview bugfixes knownissues
type: folder
---

{% assign links = site.data | where_exp:"nav", "nav.url == 'release-notes'" | first | map: "pages" %}
{% include index.html links=links %}