---
layout: default
title: Quick start
title_nav: Quick start
description_short: Setup a basic TinyMCE 6 editor using the Tiny Cloud.
description: Get an instance of TinyMCE 6 up and running using the Tiny Cloud.
keywords: tinymce script textarea
---

{{site.productname}} {{site.productmajorversion}} is a powerful and flexible rich text editor that can be embedded in web applications. This quick start covers how to add a {{site.productname}} editor to a web page using the {{site.cloudname}}.

## Step 1: Include the TinyMCE script

Include the following line of code in the `<head>` of an HTML page.

```html
<script src="{{ site.cdnurl }}" referrerpolicy="origin"></script>
```

## Step 2: Initialize TinyMCE as part of a web form

Initialize {{site.productname}} {{site.productmajorversion}} on any element (or elements) on the web page by passing an object containing a `selector` value to `tinymce.init()`. The `selector` value can be any valid [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors).

For example: To replace `<textarea id="mytextarea">` with a {{site.productname}} {{site.productmajorversion}} editor instance, pass the selector `'#mytextarea'` to `tinymce.init()`.

For example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script src="{{ site.cdnurl }}" referrerpolicy="origin"></script>

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

Adding this content to an HTML file and opening it in a web browser will load a TinyMCE editor, such as:

{% include live-demo.html id="default" %}

## Step 3: Add your API key

To remove the notice:

<img alt="warning icon" src="{{ site.baseurl }}/images/icons/warning.svg" style="vertical-align:middle;"/>**This domain is not registered with {{site.cloudname}}. Please see the quick start guide or create an account.**

Replace `no-api-key` in the source script (`<script src=...`) with a {{site.cloudname}} API key, which is created when signing up to the [{{site.cloudname}}]({{site.accountsignup}}).

Signing up for a {{site.cloudname}} API key will also provide a trial of the [Premium Plugins]({{site.baseurl}}/plugins-ref/premium/).

## Step 4: Save the content with a form POST

Process the content with a form handler.

When the `<form>` is submitted, {{site.productname}} {{site.productmajorversion}} will `POST` the content in the same way as a normal HTML `<textarea>`, including the HTML elements and inline CSS of the editor content. The host's form handler can process the submitted content in the same way as content from a regular `<textarea>`.

{% include misc/quickstart-next-steps.md %}
* Self-hosting {{site.productname}}, see: [Getting started with {{ site.productname }} Self-hosted]({{site.baseurl}}/getting-started/install-setup/self-hosted/).
