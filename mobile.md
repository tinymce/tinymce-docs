---
layout: default
title: TinyMCE Mobile
title_nav: Mobile
description: A new mobile-first user experience for rich text editing.
keywords: mobile tablet
---

{{site.productname}} mobile is designed to run on iOS Safari and Android Chrome.

> Note: Please note that {{site.productname}} mobile will not work on non-mobile environments.

## Configuring mobile

Add the following `meta` tag to the `head` of pages using {{site.productname}} to ensure the mobile user interface functions as intended.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

> Note: iPads do not use the `mobile` part of the {{site.productname}} init configuration. This is due to a constraint added by Apple to return the environment as a "desktop environment" for iPads. iPads users will receive the other changes to touch functionality, such as context toolbars and context menus.

New to Tiny 5, the mobile experience is built in and does not require additional configuration.

Tinymce will detect the platform and will show an optimal UI experience given a device type and screen size.

### Configuration settings with mobile defaults
Some settings have been updated to include a default value for mobile devices:

* [`menubar`]({{site.baseurl}}/configure/editor-appearance/#menubar) - defaults to `false` on mobile phones.
* [`toolbar_drawer`]({{site.baseurl}}/configure/editor-appearance/#toolbar_drawer) - defaults to `false` on mobile devices.
* [`toolbar_sticky`]({{site.baseurl}}/configure/editor-appearance/#toolbar_sticky) - Sticky Toolbar is not supported on mobile devices and defaults to `false`.
* [`table_grid`]({{site.baseurl}}/plugins/table/#table_grid) - Table grid is not supported on mobile devices and defaults to `false`. When creating tables on mobile, a dialog is shown instead of the table grid.
* [`resize`]({{site.baseurl}}/configure/editor-appearance/#resize) - Resizing is not supported on mobile devices and defaults to `false`.
* [`object_resizing`]({{site.baseurl}}/configure/advanced-editing-behavior/#object_resizing) - Object resizing is not supported on mobile devices and defaults to `false`.

## The legacy mobile theme

The mobile experience provided for {{site.productname}} 4.7 through {{site.productname}} 5.0 has been deprecated in {{site.productname}} 5.1.

To revert to the legacy mobile theme, add the mobile theme to the {{site.productname}} configuration, such as:

```js
tinymce.init({
  mobile: {
    theme: 'mobile'
  }
});
```

### Legacy mobile theme - configuring the plugins

The plugins supported by legacy mobile theme are limited to the [autosave]({{site.baseurl}}/plugins/autosave/), [autolink]({{site.baseurl}}/plugins/autolink/), and [lists]({{site.baseurl}}/plugins/lists/) plugins.

To add these plugins to the legacy mobile theme, add a plugin entry to the mobile section. For example:

```js
tinymce.init({
  selector: 'textarea',
  theme: 'silver',
  mobile: {
    theme: 'mobile',
    plugins: 'autosave lists autolink'
  }
});
```

### Legacy mobile theme - configuring the Toolbar

The legacy TinyMCE theme mobile supports a subset of the toolbar items, which can configured using the `mobile: toolbar` setting, such as:

```js
tinymce.init({
  selector: 'textarea',
  theme: 'silver',
  mobile: {
    theme: 'mobile',
    plugins: [ 'autosave', 'lists', 'autolink' ],
    toolbar: [ 'undo', 'bold', 'italic', 'styleselect' ]
  }
});
```

Below are the toolbar items supported for the legacy mobile theme, and the plugins/configuration required.

> Note: The `list` functions require the [lists]({{site.baseurl}}/plugins/lists/) plugin and `styleselect` requires configuring [style_formats]({{site.baseurl}}/configure/editor-appearance/#style_formats).

| Name | Function | Plugins Required | Configuration |
|--------|----|-----|-------------|
| undo | Undo operation |
| redo | Redo operation |
| bold | Bold formatting operation |
| italic | Italic formatting operation |
| underline | Underline formatting operation |
| link | Insert / Edit a hyperlink |
| unlink | Remove an existing hyperlink |
| image | Insert an image |
| bullist | Insert an unordered list | [lists]({{ site.baseurl }}/plugins/lists) |
| numlist | Insert an ordered list | [lists]({{ site.baseurl }}/plugins/lists) |
| fontsizeselect | Change the font size
| forecolor | Apply a foreground color
| styleselect | Apply a custom style | | [style_formats]({{ site.baseurl }}/configure/editor-appearance/#style_formats) |
| removeformat | Removes any inline formatting |

{% include misc/mobile_platform_compatibility.md %}
