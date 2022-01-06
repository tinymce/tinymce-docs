---
layout: default
title: TinyMCE for touch-enabled and mobile devices
title_nav: TinyMCE for mobile
description: The TinyMCE rich text editing experience for mobile devices.
keywords: mobile tablet
---

The mobile experience for {{site.productname}} is enabled by default and has the following differences when compared to the "desktop" experience:

* Horizontal contextual menus on mobile.
* Side-scrolling toolbars  and contextual menus on mobile.
* Contextual keyboard settings for dialogs using [`inputMode`]({{site.baseurl}}/how-to-guides/creating-custom-ui-components/dialogs/dialog-components/#inputmode).
* [Mobile defaults for selected settings](#mobiledefaultsforselectedsettings).

The mobile experience allows most of the {{site.productname}} plugins to work on mobile devices, except for:

* [Comments]({{site.baseurl}}/plugins-ref/premium/comments/).
* [Image tools]({{site.baseurl}}/plugins-ref/opensource/imagetools/).
* [MoxieManager]({{site.baseurl}}/plugins-ref/premium/moxiemanager/).
* [Permanent Pen]({{site.baseurl}}/plugins-ref/premium/permanentpen/).

{{site.productname}} will detect the platform and show an optimal UI experience based on the device type and screen size.

> **Note**: iPads do not use the `mobile` part of the {{site.productname}} init configuration. This is due to a constraint added by Apple to return the environment as a "desktop environment" for iPads. iPad users will receive the other changes to touch functionality, such as context toolbars and context menus.

{% include misc/mobile_platform_compatibility.md %}

## Configuring mobile

Add the following `meta` tag to the `head` of pages using {{site.productname}} to ensure the mobile user interface functions as intended.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

To set mobile specific options, add the option to [the `mobile` option](#themobileoption) configuration, such as:

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

* [`menubar`]({{site.baseurl}}/interface/menus/menus-configuration-options/#menubar) - defaults to `false` on mobile phones.
* [`toolbar_mode`]({{site.baseurl}}/interface/toolbars/toolbar-configuration-options/#toolbar_mode) - defaults to `scrolling` on mobile devices. The toolbar will side-scroll by default.
* [`toolbar_sticky`]({{site.baseurl}}/interface/toolbars/toolbar-configuration-options/#toolbar_sticky) - Sticky Toolbar is not supported on mobile devices and defaults to `false`.
* [`table_grid`]({{site.baseurl}}/plugins-ref/opensource/table/#table_grid) - Table grid is not supported on mobile devices and defaults to `false`. When creating tables on mobile, a dialog is shown instead of the table grid.
* [`resize`]({{site.baseurl}}/initial-configuration/editor-size-options/#resize) - Resizing is not supported on mobile devices and defaults to `false`.
* [`object_resizing`]({{site.baseurl}}/content/content-behavior-options/#object_resizing) - Object resizing is not supported on mobile devices and defaults to `false`.

### Unsupported settings for mobile

The following settings are not supported on mobile devices:

* [Inline editing mode]({{site.baseurl}}/interface/editor-mode/use-tinymce-inline/).
* [Distraction-free editing mode]({{site.baseurl}}/interface/editor-mode/use-tinymce-distraction-free/).
* [`inline`]({{site.baseurl}}/interface/editor-mode/inline-editor-options/#inline).
* [`toolbar_sticky`]({{site.baseurl}}/interface/toolbars/toolbar-configuration-options/#toolbar_sticky).
* [`table_grid`]({{site.baseurl}}/plugins-ref/opensource/table/#table_grid).
* [`resize`]({{site.baseurl}}/initial-configuration/editor-size-options/#resize).
* [`object_resizing`]({{site.baseurl}}/content/content-behavior-options/#object_resizing).

{% include configuration/mobile.md %}
