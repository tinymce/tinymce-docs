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

### `linkchecker_content_css`

After a link is checked for validity, a result of the validation is added to it via `data-mce-linkchecker-status` attribute. There are three possible outcomes of the validation: `valid`, `invalid` and `unknown`. Link Checker visually reflects `invalid` outcome by injecting the following CSS styles into the editor:

```css
a[data-mce-linkchecker-status="invalid"] {
    outline-color: rgba(231, 76, 60, 0.25);
    background-color: rgba(231, 76, 60, 0.25)
}

a[data-mce-linkchecker-focus="true"] {
    outline: 1px solid rgba(231, 76, 60, 0.75)
}
```

`data-mce-linkchecker-focus` attribute is set to *true* every time a dedicated context menu is shown on a link. This only happens for `invalid` links.

It is possible to replace or extend those styles, by providing a URL to custom stylesheet via `linkchecker_content_css` option.

### `linkchecker_preprocess`

The `linkchecker_preprocess` function is used for adjusting links before performing a link check.

**Type:** `Function`

#### Example: Using `linkchecker_preprocess`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'linkchecker',
  linkchecker_preprocess: function (data) {
    /* This example will encode or double encode the url */
    var newUrl = encodeURIComponent(data.url);
    return { url: newUrl };
  }
});
```

### `linkchecker_service_url`

A URL of the server-side link validation service. This is required option, without it plugin will fail to operate and will throw a corresponding warning on the screen.

**Type:** `String`

#### Example: Using `linkchecker_service_url`

```js
tinymce.init({
    selector: 'textarea',
    plugins: 'linkchecker',
    linkchecker_service_url: 'http://mydomain.com/linkchecker'
});
```
