---
layout: default
title: Link Checker plugin
title_nav: Link Checker
description: Validate links, as you type.
keywords: url urls link linkchecker_service_url linkchecker_content_css
---

{{site.premiumplugin}}

The `linkchecker` plugin does what it says &ndash; validates URLs, as you type them. URLs considered invalid will be highlighted with red and will have a dedicated context menu with options to either edit the link, try and open it in a separate tab, remove the link, or ignore it.

The Link Checker plugin relies on HTTP response status codes to determine if a link is valid. Web pages that return incorrect or invalid HTTP responses are highlighted as invalid or "broken". For information on valid HTTP response status codes, see: [MDN Web Docs - HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

## Cloud Instructions

If you are using [{{site.cloudname}}]({{ site.baseurl }}/cloud-deployment-guide/editor-and-features/), simply add `"linkchecker"` to your plugins list, and the service will be automatically configured.

### Basic setup using Tiny Cloud

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'linkchecker'
});
```

## Self-hosted Instructions

Customers using a Self-hosted environment will need to provide a URL to their deployment of the link checking service via the `linkchecker_service_url` parameter

### Basic self-hosted setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'linkchecker',
  linkchecker_service_url: 'http://mydomain.com/linkchecker'
});
```

## Options

Link Checker has the following settings.

{% include configuration/linkchecker_content_css.md %}

{% include configuration/linkchecker_preprocess.md %}

{% include configuration/linkchecker_service_url.md %}
