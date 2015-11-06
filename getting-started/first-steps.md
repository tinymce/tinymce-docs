---
layout: default
title: First Steps with TinyMCE
description: This Quick Start Tutorial will help you download and install TinyMCE using our content delivery network (the easiest and quickest way to get up and running.)
---

If you're familiar with this step move on to the [Developer Guide](../developer-guide) where you'll find additional [installation options](../developer-guide/installing-tinymce/), a [Configuration Quick Start](../developer-guide/configuration-quick-start/), the advanced [Configuration Reference](../developer-guide/configuration-reference/) and [Plugin & Toolbar/Menu Control](../developer-guide/plugins-toolbar-menu-controls/) options.


## Step 1: Include the TinyMCE Script

Include this line of code in the `<head>` of your HTML page:

```html
<script src="//tinymce.cachefly.net/4.2/tinymce.min.js"></script>
```


## Step 2: Initialize TinyMCE as Part of a Web Form

With the script included, initialize TinyMCE on any element (or elements) in your web page.

Since TinyMCE lets you identify replaceable elements via a CSS selector, all you need do is pass an object that contains a **selector** to `tinymce.init()`.

In this example, let's replace `<textarea id="mytextarea">` with a TinyMCE editor instance by passing the selector `'#mytextarea'` to `tinymce.init()`.

```html
<!DOCTYPE html>
<html>
<head>
  <script src="//tinymce.cachefly.net/4.2/tinymce.min.js"></script>
  <script type="text/javascript">
    tinymce.init({
      selector: "#mytextarea"
    });
  </script>
</head>

<body>
<h1>TinyMCE Quick Start Guide</h1>
  <form method="post">
    <textarea id="mytextarea">Hello, World!</textarea>
  </form>
</body>
</html>
```

And that's all there is to it! Read on as we have two more tips for you.


## Step 3: Saving Content with a `<form>` POST

When the `<form>` is submitted the TinyMCE editor mimics the behavior of a normal HTML `<textarea>` during a form `POST`. In your form handler you can process the content submited as if it had come from a regular `<textarea>`.


## Step 4: Editor Configuration

For first time TinyMCE developers we strongly encourage you to read our [Configuration Quick Start](../developer-guide/configuration-quick-start/), where we introduce selector, toolbar and plugin configuration options. There is also an "advanced" example of a TinyMCE instance and we explain TinyMCE's inline mode.


## Next Steps for Advanced TinyMCE Developers

If you are familiar with integrating TinyMCE and don't need a [configuration refresher](../developer-guide/configuration-quick-start/), move on to the [Developer Guide](../developer-guide) where you'll find additional [installation options](../developer-guide/install/), the advanced [configuration reference](../developer-guide/configuration-reference/) and [plugin & toolbar/menu control](../developer-guide/plugins-toolbar-menu-controls/) options.

`*` If you are using our CDN see the [detailed installation page](../developer-guide/install/) for information about using external plugins, custom languages and the TinyMCE versions available via the CDN.
