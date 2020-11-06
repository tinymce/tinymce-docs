---
layout: default
title: TinyMCE Mobile
title_nav: Mobile
description: The TinyMCE rich text editing experience for mobile devices.
keywords: mobile tablet
---

{{site.productname}} {{site.productminorversion}} provides an improved mobile editor, replacing the existing mobile editor with a touch friendly version on the silver theme.


The new mobile experience comes with a number of user interface changes in addition to the {{site.productname}} "desktop" experience:

* Mobile devices now use the `silver` theme.
* Horizontal contextual menus on mobile.
* Side-scrolling toolbars  and contextual menus on mobile.
* Contextual keyboard settings for dialogs using [`inputMode`]({{site.baseurl}}/ui-components/dialogcomponents/#inputmode).
* [Mobile defaults for selected settings](#mobiledefaultsforselectedsettings).
* Table cell selection on mobile.

The new mobile experience allows most of the {{site.productname}} plugins to work on mobile devices, except for:

* [Comments]({{site.baseurl}}/plugins/premium/comments/).
* [Image tools]({{site.baseurl}}/plugins/opensource/imagetools/).
* [MoxieManager]({{site.baseurl}}/plugins/premium/moxiemanager/).
* [Permanent Pen]({{site.baseurl}}/plugins/premium/permanentpen/).

{{site.productname}} will detect the platform and show an optimal UI experience based on the device type and screen size.

> Note: iPads do not use the `mobile` part of the {{site.productname}} init configuration. This is due to a constraint added by Apple to return the environment as a "desktop environment" for iPads. iPads users will receive the other changes to touch functionality, such as context toolbars and context menus.

{% include misc/mobile_platform_compatibility.md %}

## Configuring mobile

Add the following `meta` tag to the `head` of pages using {{site.productname}} to ensure the mobile user interface functions as intended.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

To set mobile specific settings, add the setting to the [`mobile`]({{site.baseurl}}/docs/configure/editor-appearance/#mobile) configuration, such as:

```js
tinymce.init({
  selector: 'textarea',
  mobile: {
    menubar: true
  }
});
```

### Mobile defaults for selected settings
These mobile-specific default values have been set to disable unsupported settings for mobile devices or to provide the best experience without configuration from developers.

The following settings have mobile-specific default values:

* [`menubar`]({{site.baseurl}}/configure/editor-appearance/#menubar) - defaults to `false` on mobile phones.
* [`toolbar_mode`]({{site.baseurl}}/configure/editor-appearance/#toolbar_mode) - defaults to `scrolling` on mobile devices. The toolbar will [side-scroll by default](#sidescrollingtoolbarsonmobile).
* [`toolbar_sticky`]({{site.baseurl}}/configure/editor-appearance/#toolbar_sticky) - Sticky Toolbar is not supported on mobile devices and defaults to `false`.
* [`table_grid`]({{site.baseurl}}/plugins/opensource/table/#table_grid) - Table grid is not supported on mobile devices and defaults to `false`. When creating tables on mobile, a dialog is shown instead of the table grid.
* [`resize`]({{site.baseurl}}/configure/editor-appearance/#resize) - Resizing is not supported on mobile devices and defaults to `false`.
* [`object_resizing`]({{site.baseurl}}/configure/advanced-editing-behavior/#object_resizing) - Object resizing is not supported on mobile devices and defaults to `false`.

### Unsupported settings for mobile

The following settings are not supported on mobile devices:

* [Inline editing mode]({{site.baseurl}}/general-configuration-guide/use-tinymce-inline/).
* [Distraction-free editing mode]({{site.baseurl}}/general-configuration-guide/use-tinymce-distraction-free/).
* [`inline`]({{site.baseurl}}/configure/editor-appearance/#inline).
* [`toolbar_sticky`]({{site.baseurl}}/configure/editor-appearance/#toolbar_sticky).
* [`table_grid`]({{site.baseurl}}/plugins/opensource/table/#table_grid).
* [`resize`]({{site.baseurl}}/configure/editor-appearance/#resize).
* [`object_resizing`]({{site.baseurl}}/configure/advanced-editing-behavior/#object_resizing).


## The legacy mobile theme

The mobile experience provided for {{site.productname}} 4.7 through {{site.productname}} 5.0 has been deprecated as of {{site.productname}} 5.1.

To revert to the legacy mobile theme, add the mobile theme to the {{site.productname}} configuration, such as:

```js
tinymce.init({
  mobile: {
    theme: 'mobile'
  }
});
```

### Legacy mobile theme - configuring the plugins

The plugins supported by legacy mobile theme are limited to the [autosave]({{site.baseurl}}/plugins/opensource/autosave/), [autolink]({{site.baseurl}}/plugins/opensource/autolink/), and [lists]({{site.baseurl}}/plugins/opensource/lists/) plugins.

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
    plugins: 'autosave lists autolink',
    toolbar: 'undo bold italic styleselect'
  }
});
```

Below are the toolbar items supported for the legacy mobile theme, and the plugins/configuration required.

> **Note**: The `list` functions require the [lists]({{site.baseurl}}/plugins/opensource/lists/) plugin and `styleselect` requires configuring [style_formats]({{site.baseurl}}/configure/editor-appearance/#style_formats).

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
| bullist | Insert an unordered list | [lists]({{site.baseurl}}/plugins/opensource/lists) |
| numlist | Insert an ordered list | [lists]({{site.baseurl}}/plugins/opensource/lists) |
| fontsizeselect | Change the font size
| forecolor | Apply a foreground color
| styleselect | Apply a custom style | | [style_formats]({{ site.baseurl }}/configure/editor-appearance/#style_formats) |
| removeformat | Removes any inline formatting |
