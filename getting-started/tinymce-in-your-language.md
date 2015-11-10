---
layout: default
title: 10. Localization
description: Localize TinyMCE with global language capabilities.
---

As developers we all hope our projects reach a wide audience, and for many of us they do. Which is why it is important that TinyMCE is easy to localize.

In this section of the Getting Started guide we will show you how to change TinyMCE's user interface to suit your users' preferred language. The settings discussed in this section change the language that toolbar and menubar items, along with tooltips, are rendered in.


> Pro tip: language settings can be controlled in these configuration options: [directionality](/editor-configuration-settings/internationalization/#directionality), [language](/editor-configuration-settings/internationalization/#language) and  [language_url](/editor-configuration-settings/internationalization/#language_url).

### Step 1

Go to our [language download page](http://www.tinymce.com/i18n/index.php) (i18n), where you'll see a list of language packs for TinyMCE 4. *

If you want to use one language only, click the download link on the far right of the table and you're done. If however you want to download multiple language packs, first check the box beside each language you need and then click the download button at the bottom of the table.

> `*` Important note: the language packs provided via our language download page are translated by the TinyMCE community. We greatly appreciate their contribution! If your product requires professionally translated and supported language localization, this is available as part of [TinyMCE Enterprise](http://www.tinymce.com/enterprise).

### Step 2

Unpack the language `js` file(s) into your `path/to/tinymce/js/langs/` folder. Important: if you don't put the language pack in `js/langs/` the language settings will not work, unless you use the [language_url](/editor-configuration-settings/internationalization/#language_url) configuration option.

### Step 3

Set the language option in your TinyMCE configuration to the language code in the list on [this page](/editor-configuration-settings/internationalization/#language).

### Step 4

Confirm that the language has been set successfully by loading TinyMCE.



## A working example

We have prepared a code snippet below that would set TinyMCE's language to Chinese and text directionality right-to-left. If you want to try it for yourself, [click here to directly download](http://www.tinymce.com/i18n/download.php?download=zh_CN) the Chinese language pack. You'll also need a *local instance* of TinyMCE, which you can grab from our [downloads page](http://www.tinymce.com/download/). Follow the [SDK install instructions]({{ site.baseurl }}/getting-started/advanced-installation-options/#sdkdownloadinstallation) if you're not familiar with setting up TinyMCE locally.

```html
<!DOCTYPE html>
<html>
<head>
  <script src="js/tinymce.min.js"></script>
  <script>
    tinymce.init({
    selector: "textarea",
    language: "zh_CN",
    directionality: "rtl"
  });
  </script>
</head>

<body>
  <form method="post">
    <textarea>你好，世界!</textarea>
  </form>
</body>
</html>
```



## Next Steps

By now you'll have a good idea that TinyMCE is an incredibly powerful, rich text editor. It's also compliant with a wide range of web browsers. Let's check out TinyMCE's [system requirements](../system-requirements/).
