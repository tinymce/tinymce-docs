---
layout: default
title: 05. Work With Plugins
description_short: Learn about TinyMCE's plugin functionality and discover our Top 10 plugins.
description: TinyMCE is an incredibly powerful, flexible and customizable rich text editor. In this section we will show you the power of plugins with several working examples.
keywords: plugin
---

For most developers, the real power of TinyMCE's functionality is found in its plugins. [Plugins]({{ site.baseurl }}/plugins/) either extend default editor functionality or add new functionality. For example, the [Advanced List]({{ site.baseurl }}/plugins/advlist/) plugin adds extra options to the toolbar's existing list controls, while the [Code]({{ site.baseurl }}/plugins/code/) plugin adds entirely new functionality.

Because most people install TinyMCE via the CDN or by downloading a package, they mistakenly think plugins are part of the TinyMCE "core". While all of the plugins, excluding the professional features, are included in those packages, each plugin is in a separate .js file. In fact, if you use the [custom package](http://archive.tinymce.com/download/custom_package.php) download option you're able to select only the plugins you want included or even exclude all of the plugins built by the TinyMCE team.

In this section of the Get Started guide we'll show you how easy it is to activate a plugin (assuming you included it in your download package) by highlighting two of the more popular plugins.

Let's start with a simple code snippet you can paste into an empty `html` file (call it whatever you like, `tinymce.html` works). Save the file locally, open it with your web browser and you'll have a basic, local TinyMCE instance up and running.

> Pro tip: we included the `https://` protocol in the example below because the file is running locally and not on a server. If you were running this example on a server the script would omit the protocol, like so: `<script src="//tinymce.cachefly.net/4.2/tinymce.min.js"></script>`.

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://tinymce.cachefly.net/4.2/tinymce.min.js"></script>
  <script>
    tinymce.init({
      selector: "textarea"
  });
  </script>
</head>

<body>
  <form method="post">
    <textarea>Hello, World!</textarea>
  </form>
</body>
</html>
```


## Let's play with plugins

The code we want to work with is in the second `<script>` element, specifically they `key` and its `value`, which we pass as `JSON` to the `tinymce` object `.init` method. In the example above `selector` is the key and `"textarea"` is its value.

### Code plugin

The [Code]({{ site.baseurl }}/plugins/code/) plugin is one of the more popular plugins because it can expose the editable area's raw `html` to the user. It also provides a great example because it adds a menu item and toolbar button as well as having advanced customization options.

Obviously the first thing we need to do is include the actual `plugins` key and assign it a value. Since we're starting with the `code` plugin that value is by happy coincidence `"code"`.

```js
tinymce.init({
  selector: "textarea",  // note the comma at the end of the line!
  plugins: "code"
});
```

Add `plugins: "code"` to your `tinymce.html` file, save the file, refresh your browser and you'll see some magic. A "Tools" menu will automatically appear in the menubar and it will have a "Source code" item in the dropdown. Click it and *voila*, you can now edit the html hidden by the WYSIWGY interface.

Let's also add a toolbar control so that our users can more easily activate this functionality.

```js
tinymce.init({
  selector: "textarea",  // note the comma at the end of the line!
  plugins: "code",  // note the comma at the end of the line!
  toolbar: "code"
});
```

Awesome, we now have a button on the toolbar users can click to get into source code mode. But we also lost our default toolbar controls ... We explained why this happens back in [Basic Configuration](../basic-setup/), so if this behavior surprises you re-read that section.

Let's quickly take our minimal design one step further by removing the menubar completely.

```js
tinymce.init({
  selector: "textarea",  // note the comma at the end of the line!
  plugins: "code",  // note the comma at the end of the line!
  toolbar: "code",  // last reminder, note the comma!
  menubar: false
});
```

### Plugin customization easy as 1-2 ...

Many plugins have customization options that give developers granular control of the editor. The `code` plugin is no exception and it has two options available to us, which respectively change the height and width of the dialog box's (internal) **editable area**. These are `code_dialog_height` and `code_dialog_width`.

Let's add them as values to our `tinymce.init()` object/method.

```js
tinymce.init({
  selector: "textarea",  // note the comma at the end of the line!
  plugins: "code",  // note the comma at the end of the line!
  toolbar: "code",  // last reminder, note the comma!
  menubar: false,
  code_dialog_height: 300,
  code_dialog_width: 350
});
```

Save the file, refresh your browser and when you next click the "Source code" toolbar button you'll have resized the dialog box.


## Time for one more example

Even if you found the above example quite easy, hang with us we'll show you how to extend TinyMCE's default ordered and unordered lists. (We'll keep the chatter to a minimum, promise.) If on the other hand that was all a bit new, read this example to help your understanding.

### Advanced Lists

The [Advanced List]({{ site.baseurl }}/plugins/advlist/) plugin extends the default unordered and ordered list toolbar controls by adding CSS `list-style-type` styled number formats and bullet types to the controls.

As before, let's start by adding the `plugins` key and giving it the Advanced List value of `"advlist"`.

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "advlist"
});
```

Take a look at your TinyMCE toolbar and you'll see the list controls now have down arrows attached (to the right of the icon). Click them and you've now got extra list options.

But what if we don't want all of those list options available to the user? Options is the answer.

### More options for customization

The `advlist` plugin has two options which provide more granular control of list styles. These are `advlist_bullet_styles` and `advlist_number_styles`.

Many plugin options have more than one possible value. The `advlist_bullet_styles` option has possible values of `circle`, `disc` and `square` and `advlist_number_styles` has possible values of `lower-alpha`, `lower-greek`, `lower-roman`, `upper-alpha` and `upper-roman`.

Don't worry if you can't remember all these values. You don't need to. The [plugins section]({{ site.baseurl }}/plugins/) goes into great detail explaining all the plugins, their options and toolbar and menu controls.

Let's add the Advanced List options and give them some of the available options (but not all).

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  menubar: false,
  toolbar: "bullist, numlist",
  plugins: "advlist",
  advlist_bullet_styles: "square",
  advlist_number_styles: "lower-alpha,lower-roman,upper-alpha,upper-roman"
});
```

So, in the above example we learned how to remove the menubar, add specific list controls to the toolbar while removing others, activate a plugin and customize the plugin's behavior by controlling which options we wanted activated. In 5 lines of code (excluding the `selector` key, which has to be included for TinyMCE to work).

As we noted at the start, TinyMCE is an incredibly powerful, flexible and customizable rich text editor. Once you've finished the Get Started guide, deep dive into the [plugins]({{ site.baseurl }}/plugins/) and [configuration options]({{ site.baseurl }}/configure/).


## Top 10 plugins

Customizing TinyMCE with the default plugins is that easy. And there are 40 of them available to developers. Let's take a look at the 10 most popular plugins (by documentation page views).

| Position | Plugin Name   | Plugin Value |
|----------|---------------|--------------|
| **1**    | Image         | [image](/plugins/image/) |
| **2**    | Image Tools   | [imagetools](/plugins/image-tools/) |
| **3**    | Advanced List | [advlist](/plugins/advanced-list/) |
| **4**    | Code          | [code](/plugins/code/) |
| **5**    | Media         | [media](/plugins/media/) |
| **6**    | Link          | [link](/plugins/link) |
| **7**    | Color Picker  | [colorpicker](/plugins/color-picker/) |
| **8**    | Paste         | [paste](/plugins/paste/) |
| **9**    | Table         | [table](/plugins/table/) |
| **10**   | Text Color    | [textcolor](/plugins/text-color) |

{% assign_page next_page = "/get-started/customize-ui/index.html" %}
{% include next-step.html next=next_page %}
