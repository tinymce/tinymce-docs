---
layout: default
title: TinyMCE mobile beta
description: Introducing the first true mobile rich-text editor.
keywords: mobile tablet beta
---

If everything is "mobile first", why do rich-text editor developers still expect authors to interact on mobile as if it were a desktop? Why has no-one redesigned for mobile? We decided to fix it.

We're pleased to introduce TinyMCE mobile in beta.

TinyMCE mobile is a mode of TinyMCE designed to run on mobile devices. The interface is slimmed down and supports various touch interactions.

The mobile beta is designed and optimized for touch devices and will not work on other environments. But we made configuration relatively easy, so let’s get started.

## How to get mobile beta

Please visit our [mobile beta page](https://www.tinymce.com/mobile-beta) to download the self-hosted package, and get instructions for our TinyMCE Cloud deployment.

## How to setup mobile beta

To use mobile mode on touch-only devices, add a `mobile` section to the `tinymce` settings, specifying the `theme` as `mobile`:

```
tinymce.init({
  selector: ‘textarea’,
  theme: ‘modern’,
  mobile: {
    theme: ‘mobile’
  },
});
```

This will load `tinymce` using the new mobile beta on a mobile device, and the `modern` theme for other devices (such as desktops). The example loads the default settings. To configure the mobile experience, continue to the section [Configuring the mobile beta](#) below.

> Important: DO NOT set `theme` to `mobile` in the top-level of your `init` settings. That will attempt to load the mobile theme on desktop environments as well.

Configuring the mobile beta
One way to think about configuring TinyMCE mobile, is that it is a subset of config options within your standard `tinymce` init. When on a mobile device, anything included in the `mobile` section will be used instead of the equivalent values in the top-level of settings of your config.

Therefore, the mobile section allows you to have completely different settings for mobile than for non-mobile devices. The main configuration options you can change are `plugins` and `toolbar`.
Configuring the Plugins
The plugins supported by mobile are currently limited to the most used core editor capabilities, and the [autosave](#), [autolink](#) and [lists](#) plugins. This is by design. We are in beta and want to hear from our developer community about which plugins should be mobile optimized. Please [complete our survey] to have your say.

Specify which of these plugins you want by adding a plugin entry to the mobile section:

```
tinymce.init({
  selector: ‘textarea’,
  theme: ‘modern’,
  mobile: {
    theme: ‘mobile’,
    plugins: [ ‘autosave’ ]
  },
});
```

## Configuring the Toolbar

TinyMCE mobile beta supports a small subset of the toolbar items supported by the main mode. The toolbar is specified in the mobile section also.

```
tinymce.init({
  selector: ‘textarea’,
  theme: ‘modern’,
  mobile: {
    theme: ‘mobile’,
    plugins: [ ‘autosave’ ],
    toolbar: [ ‘undo’, ‘bold’, ‘italic’, ‘styleselect’ ]
  },
});
```

Below are the toolbar items supported in the beta, with any plugins/configuration required. Note, that the `list` functions require the [lists](#) plugin and [styleselect](#) requires configuring [style_formats](#).

Name
Function
Plugins Required
Configuration
undo
Undo operation




redo
Redo operation




bold
Bold formatting operation




italic
Italic formatting operation




underline
Underline formatting operation




link
Insert / Edit a hyperlink




unlink
Remove an existing hyperlink




image
Insert an image




bullist
Insert an unordered list
lists


numlist
Insert an ordered list
lists


fontsizeselect
Change the font size




forecolor
Apply a foreground color




styleselect
Apply a custom style


[style_formats](https://www.tinymce.com/docs/configure/content-formatting/#style_formats)
removeformat
Removes any inline formatting
