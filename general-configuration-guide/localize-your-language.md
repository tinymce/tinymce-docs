---
layout: default
title: Localize TinyMCE
title_nav: Localization
description: Localize TinyMCE with global language capabilities.
keywords: internationalization localization languages
---

As developers, we all hope our projects reach the wider audience, and for many of us, they do. This is why it is vital that TinyMCE is easy to localize its language.

In this section, we show you how to change TinyMCE's user interface to suit your users' preferred language. The settings discussed in this section change the language that toolbar and menubar items, along with tooltips, are rendered in.


> Pro tip: Language settings can be controlled in these configuration options: [directionality]({{ site.baseurl }}/configure/localization/#directionality), [language]({{ site.baseurl }}/configure/localization/#language) and  [language_url]({{ site.baseurl }}/configure/localization/#language_url). There is also a [Directionality Plugin]({{ site.baseurl }}/plugins/directionality/) that adds a toolbar button to control `ltr-rtl` behavior.

### Step 1

Go to our [language download page](https://www.tinymce.com/download/language-packages/) (i18n), where you'll see a list of language packs for TinyMCE.

If you want to use one language only, click the download link on the far right of the table. However, if you want to download multiple language packs, first check the box beside each language you need and then click the download button at the bottom of the table.

> Important: The TinyMCE community translates the language packs provided on our language download page. We much appreciate their contribution!

### Step 2

Unpack the language `js` file(s) into your `path/to/tinymce/langs/` folder. 

> Important: If you don't put the language pack in `langs/`, the language settings will not work unless you use the [language_url]({{ site.baseurl }}/configure/localization/#language_url) configuration option.

### Step 3

Set the language option in your TinyMCE configuration to the language code in the list on [this page]({{ site.baseurl }}/configure/localization/#language).

### Step 4

Confirm that the language has been set successfully by loading TinyMCE.


## A working example

We have prepared a code snippet below that would set TinyMCE's language to Chinese and text directionality right-to-left.

If you want to try it for yourself, [download the Chinese language](https://www.tinymce.com/download/language-packages/) pack. You'll also need a *local instance* of TinyMCE, which you can grab from our [downloads page](https://www.tinymce.com/download/). Follow the [Self-hosted install instructions]({{ site.baseurl }}/general-configuration-guide/advanced-install/#sdkinstall) if you're not familiar with setting up TinyMCE locally.

```html
<!DOCTYPE html>
<html>
<head>
  <script src="js/tinymce.min.js"></script>
  <script type="text/javascript">
  tinymce.init({
    selector: 'textarea',
    language: 'zh_CN',
    directionality: 'rtl'
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

{% assign_page next_page = "/general-configuration-guide/system-requirements/index.html" %}
{% include next-step.html next=next_page %}
