---
layout: default
title: Quick Start
---

This Quick Start will help you download and install TinyMCE using the CDN (the easiest and quickest way to get a TinyMCE instance up and running).

If you're familiar with this step move on to the [Developer Guide](../developer-guide/), which will help you [install*](../developer-guide/install/), [configure](../developer-guide/configure/) and [customize](../developer-guide/customize/) your editor instance/s. You'll also find information on [Plugin & Toolbar/Menu Control](../developer-guide/customize/plugins/) options.

`*` The [install](../developer-guide/install/) section of the [Developer Guide](../developer-guide/) can help you if you'd rather install using package manager, SDK, jQuery and custom options.  



# Step 1: Include the TinyMCE Script

Include this line of code in the `<head>` of your page:

```html
<script src="//tinymce.cachefly.net/4.3/tinymce.min.js"></script>
```



# Step 2: Initialize TinyMCE as Part of a Web Form

With the script included, initialize TinyMCE on any element (or elements) in your webpage.

Since TinyMCE lets you identify replaceable elements via a CSS selector all you need do is pass an object that contains a selector to `tinymce.init()`.

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
  <h1>TinyMCE Getting Started Guide</h1>
  <form method="post">
    <textarea id="mytextarea"></textarea>
  </form>
</body>
</html>
```



# Step 3: Saving Content with a `<form>` `post`

When the `form` is submitted the TinyMCE editor mimics the behavior of a normal HTML `<textarea>` during a form `post`. No additional configuration is required.

And that's all there is to it!

`*` If you are using our CDN install [see these notes] about using external plugins, custom languages and TinyMCE versions available via the CDN.



# Next Steps

It's now time to move on to the [Developer Guide](../developer-guide) where you'll find more information on  [installation](../developer-guide/install/) options, our [Configuration Quick Start](../developer-guide/configure/) and [Advanced Configuration](../developer-guide/customize/) guides. You'll also find information on [Plugin & Toolbar/Menu Control](../developer-guide/customize/plugins/) options.
