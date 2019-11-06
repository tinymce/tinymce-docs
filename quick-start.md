---
layout: default
title: Quick start
title_nav: Quick start
description_short: Setup TinyMCE 5 in less than 5 minutes.
description: Get an instance of TinyMCE up and running in less than 5 minutes.
keywords: tinymce script textarea
---

{{site.productname}} {{site.productmajorversion}} is a powerful and flexible rich text editor that can be embedded in web applications. This quick start covers how to add a {{site.productname}} editor to a web page using the {{site.cloudname}}.

## Step 1: Include the TinyMCE script

Include the following line of code in the `<head>` of a HTML page.

```html
<script src="{{ site.cdnurl }}" referrerpolicy="origin"></script>
```

## Step 2: Initialize TinyMCE as part of a web form

Initialize {{site.productname}} {{site.productmajorversion}} on any element (or elements) on the web page.

{{site.productname}} enables identifying replaceable elements using a [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors). Specify the element by passing an object that contains a `selector` to `tinymce.init()`, such as:

```html
<script>
  tinymce.init({
    selector: '#mytextarea'
  });
</script>
```

**For example**:

To replace `<textarea id='mytextarea'>` with a {{site.productname}} {{site.productmajorversion}} editor instance, pass the selector `'#mytextarea'` to `tinymce.init()`.

```html
<!DOCTYPE html>
<html>
  <head>
    <script src='{{ site.cdnurl }}' referrerpolicy="origin"></script>
    <script>
      tinymce.init({
        selector: '#mytextarea'
      });
    </script>
  </head>

  <body>
  <h1>{{site.productname}} Quick Start Guide</h1>
    <form method="post">
      <textarea id="mytextarea">Hello, World!</textarea>
    </form>
  </body>
</html>
```

Adding this content to a HTML file and opening it in a web browser will load a TinyMCE editor, such as:

{% include codepen.html id="default" %}

To remove the notice:

<img alt="warning icon" src="{{ site.baseurl }}/images/icons/warning.svg" style="vertical-align:middle;"/>**_This domain is not registered with {{site.cloudname}}..._**

Replace `no-api-key` in the source script (`<script src=...`) with a [{{site.cloudname}} API key]({{site.accountsignup}}).

Signing up for a {{site.cloudname}} API key will also provide a trial of the [Premium Plugins]({{site.baseurl}}/enterprise/).

## Step 3: Saving content with a form POST
Process the content with a form handler.

When the `<form>` is submitted, the {{site.productname}} {{site.productmajorversion}} editor mimics the behavior of a normal HTML `<textarea>` during the `POST`. The host's form handler can process the submitted content in the same way as content from a regular `<textarea>`.

The HTML elements and inline CSS are also submitted, along with pasted media such as images. Images are submitted as inline content with base64 encoding.

## Next Steps
For information on:

  * Customizing {{site.productname}}, see: [Basic Setup]({{site.baseurl}}/general-configuration-guide/basic-setup/).
  * The three editor modes:
    * [{{site.productname}} classic editing mode]({{site.baseurl}}/general-configuration-guide/use-tinymce-classic/).
    * [{{site.productname}} inline editing mode]({{site.baseurl}}/general-configuration-guide/use-tinymce-inline/).
    * [{{site.productname}} distraction-free editing mode]({{site.baseurl}}/general-configuration-guide/use-tinymce-distraction-free/).
  * Adding {{site.productname}} plugins, see: [Work with plugins to extend TinyMCE]({{site.baseurl}}/general-configuration-guide/work-with-plugins/).
  * Localizing the {{site.productname}} editor, see: [Localize {{site.productname}}]({{site.baseurl}}/general-configuration-guide/localize-your-language/).
  * Self-hosting {{site.productname}}, see: [Advanced installation choices]({{site.baseurl}}/general-configuration-guide/advanced-install/).
