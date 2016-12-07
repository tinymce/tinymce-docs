---
layout: default
title: Link Checker Plugin
title_nav: Link Checker
description: Validate links, as you type.
keywords: url urls link linkchecker_service_url linkchecker_api_key
---

The `linkchecker` does what it says - validates links, as you type. Please note that it is a **premium** plugin.

*Important:* for the functionality it relies on server-side service, which comes as a part of a paid subscription plan, that includes [TinyMCE Enterprise]({{ site.baseurl }}/enterprise).

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "linkchecker"
});
```

## Options

Link Checker has the following settings.

### `linkchecker_service_url`

A URL of the server-side link validation service. This is required option, without it plugin will fail to operate.

**Type:** `String`

##### Example

```js
tinymce.init({
    selector: "textarea",
    plugins: "linkchecker",
    linkchecker_service_url: "http://mydomain.com/navi"
});
```

### `linkchecker_api_key`

If the link validation service requires API key, you can provide it here.

**Type:** `String`

##### Example

```js
tinymce.init({
    selector: "textarea",
    plugins: "linkchecker",
    linkchecker_service_url: "http://mydomain.com/navi",
    linkchecker_api_key: "this_is_my_api_key"
});
```
