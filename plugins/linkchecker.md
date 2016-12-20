---
layout: default
title: Link Checker Plugin
title_nav: Link Checker
description: Validate links, as you type.
keywords: url urls link linkchecker_service_url linkchecker_api_key linkchecker_content_css
---

The `linkchecker` does what it says - validates links, as you type them. Links considered invalid will be highlighted with red and will have a dedicated context menu with options to edit the link, try and open it in a separate tab, remove the link or ignore it. 

Please note that Link Checker is a **premium** plugin.

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


### `linkchecker_service_url`

A URL of the server-side link validation service. This is required option, without it plugin will fail to operate and will throw a corresponding warning on the screen.

**Type:** `String`

##### Example

```js
tinymce.init({
    selector: "textarea",
    plugins: "linkchecker",
    linkchecker_service_url: "http://mydomain.com/navi"
});
```
