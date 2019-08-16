---
layout: default
title: TinyMCE Mobile
title_nav: Mobile
description: A new mobile-first user experience for rich text editing.
keywords: mobile tablet
---

Why make TinyMCE mobile friendly? Simple. We live in a "mobile-first" world and expect a seamless experience between desktop and mobile. Our goal is to help you achieve this with as little effort as possible.

We're pleased to introduce TinyMCE mobile, available in version 4.7 and later.

TinyMCE mobile is designed to run on iOS Safari and Android Chrome. You'll find a streamlined interface while keeping the most common touch interactions easily to hand.

Configuration is relatively easy, so let's get started.

> Note: Please note that TinyMCE mobile will not work on non-mobile environments.

## Configuring mobile

New to Tiny 5, the mobile experience is built in and does not require additional configuration.

Tinymce will detect the platform and will show an optimal UI experience given a device type and screensize.

## Configuring the Plugins

The plugins supported by mobile are currently limited to the [autosave]({{site.baseurl}}/plugins/autosave/), [autolink]({{site.baseurl}}/plugins/autolink/), and [lists]({{site.baseurl}}/plugins/lists/) plugins. This is by design. TinyMCE Mobile is in the early release cycle and does not include all the plugins available in the desktop version. The developer community is encouraged to provide suggestions about which plugins should be mobile optimized. Please complete this [survey](https://docs.google.com/forms/d/e/1FAIpQLSdWamU5HsZtv-SPqGRyu6Ql1zLqlrCQFP1vSrzx1oHikMFvlw/viewform) to provide feedback.

Specify which of the plugins should be added by adding a plugin entry to the mobile section as shown in the following example:

```js
tinymce.init({
  selector: 'textarea',
  theme: 'silver',
  mobile: {
    theme: 'mobile',
    plugins: [ 'autosave', 'lists', 'autolink' ]
  }
});
```

## Configuring the Toolbar

TinyMCE mobile supports a small subset of the toolbar items supported by the main mode.

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

Below are the toolbar items currently supported, with any plugins/configuration required.

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

## Browser compatibility

During our initial QA, we tested mobile on the following platforms. If you use other platforms and encounter bugs, please let us know in the [TinyMCE issue tracker](https://github.com/tinymce/tinymce/issues).

{% include misc/mobile_platform_compatibility.md %}

