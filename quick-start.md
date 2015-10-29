---
layout: default
title: Quick Start
---

This Quick Start will help you download and install TinyMCE using the CDN (the easiest and quickest way to get up and running).

If you're familiar with this step move on to the [Developer Guide](../developer-guide) where you'll find additional [installation options](../developer-guide/install/), a [Configuration Quick Start](../developer-guide/configuration-quick-start/), the advanced [Configuration Reference](../developer-guide/configuration-reference/) and [Plugin & Toolbar/Menu Control](../developer-guide/plugin-toolbar-menu-controls/) options.



# Step 1: Include the TinyMCE Script

Include this line of code in the `<head>` of your page:

```html
<script src="//tinymce.cachefly.net/4.3/tinymce.min.js"></script>
```



# Step 2: Initialize TinyMCE as Part of a Web Form

With the script included, initialize TinyMCE on any element (or elements) in your webpage.

Since TinyMCE lets you identify replaceable elements via a CSS selector, all you need do is pass an object that contains a selector to `tinymce.init()`.

In this example, let's replace `<textarea id="mytextarea">` with a TinyMCE editor instance by passing the selector `'#mytextarea'` to `tinymce.init()`.

```html
<!DOCTYPE html>
<html>
<head>
  <script src="//tinymce.cachefly.net/4.3/tinymce.min.js"></script>
  <script type="text/javascript">
    tinymce.init({
      selector: "#mytextarea"
    });
  </script>
</head>

<body>
<h1>TinyMCE Quick Start Guide</h1>
  <form method="post">
    <textarea id="mytextarea"></textarea>
  </form>
</body>
</html>
```

And that's all there is to it! Read on as we have two more tips for you.



# Step 3: Saving Content with a `<form>` `post`

When the `form` is submitted the TinyMCE editor mimics the behavior of a normal HTML `<textarea>` during a form `post`. No additional configuration is required.



# Step 4: Editor Configuration

For first time TinyMCE developers we strongly encourage you to read our [Configuration Quick Start](../developer-guide/configuration-quick-start/), where we introduce Selector, Plugin and Toolbar configuration options. There also an "advanced" example of a TinyMCE instance and we explain TinyMCE's inline configuration.



# Next Steps for TinyMCE Pros

If you are a TinyMCE pro and don't need a [configuration refresher](../developer-guide/configuration-quick-start/), move on to the [Developer Guide](../developer-guide) where you'll find additional [install options](../developer-guide/install/), the advanced [Configuration Reference](../developer-guide/configuration-reference/) and [Plugin & Toolbar/Menu Control](../developer-guide/plugin-toolbar-menu-controls/) options.

`*` If you are using our CDN see the [detailed install page](../developer-guide/install/) for information about using external plugins, custom languages and the TinyMCE versions available via the CDN.
