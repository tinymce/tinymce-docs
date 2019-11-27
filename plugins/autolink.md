---
layout: default
title: Autolink plugin
title_nav: Autolink
description: Automatically create hyperlinks.
keywords: link url urls
---


The Autolink plugin automatically creates hyperlinks when a user types a valid, complete URL. For example `www.example.com` is converted to `http://www.example.com`.

Note that this option won't convert incomplete URLs. For example `example.com` would remain as unlinked text and URLs must include `www` to be automatically converted.

> Note: Pasted URLs are automatically converted to `a` elements by {{site.productname}}'s core code, not by the autolink plugin. Therefore, behaviour and settings described here do not apply to pasted links.

##### Autolink plugin example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "autolink"
});
```

## Options

### `default_link_target`

This option allows you to specify a default `target` value for links inserted by the autolink plugin.

> Note: This setting also applies to the [link]({{ site.baseurl }}/plugins/link) plugin.

**Type:** `String`

##### Example: default_link_target

```js
tinymce.init({
    selector: "textarea",  // change this value according to your HTML
    plugins: "link",
    menubar: "insert",
    toolbar: "link",
    default_link_target: "_blank"
});
```