---
layout: default
title: Work with plugins to extend TinyMCE
title_nav: Using plugins to extend TinyMCE
description_short: Learn about TinyMCE's plugin functionality and discover our Top 10 plugins.
description: TinyMCE is an incredibly powerful, flexible and customizable rich text editor. In this section, we show you the power of plugins with several working examples.
keywords: plugin
---

For most developers, the real power of TinyMCE's functionality is found in its plugins. [Plugins]({{ site.baseurl }}/plugins/) either extend default editor functionality or add new functionality. For example, the [Advanced List]({{ site.baseurl }}/plugins/advlist/) plugin adds extra options to the toolbar's existing list controls, while the [Code]({{ site.baseurl }}/plugins/code/) plugin adds entirely new functionality.

Because most people install TinyMCE via TinyMCE Cloud or by downloading a package, they mistakenly think plugins are part of the TinyMCE "core". While all of the plugins (excluding the professional features) are included in those packages, each plugin is in a separate .js file. In fact, if you use the [custom package](https://www.tinymce.com/download/custom-builds/) download option, you're able to select only the plugins you want to be included, or you can exclude all of the plugins built by the TinyMCE team.

In this section, we'll show you how easy it is to activate a plugin by highlighting two of the more popular plugins. 

> Note: You must include the plugin in your download options to activate it.

Let's start with a simple code snippet you can paste into an empty `html` file (call it whatever you like, `tinymce.html` works). Save the file locally, open it with your web browser and you'll have a basic, local TinyMCE instance up and running.

```html
<!DOCTYPE html>
<html>
<head>
  <script src="{{ site.cdnurl }}"></script>
  <script type="text/javascript">
  tinymce.init({
    selector: 'textarea'
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

The code we want to work with is in the second `<script>` element. Specifically the `key` and its `value`, which we pass as `JSON` to the `tinymce` object `.init` method. In the example above `selector` is the key and `'textarea'` is its value.

### Code plugin

The [Code]({{ site.baseurl }}/plugins/code/) plugin is one of the more popular plugins because it can expose the editable area's raw `html` to the user. It also provides an excellent example because it adds a menu item and toolbar button as well as having advanced customization options.

The first thing we need to do is include the actual `plugins` key and assign it a value. Since we're starting with the `code` plugin that value is going to be `'code'`for this example.

```js
tinymce.init({
  selector: 'textarea',  // note the comma at the end of the line!
  plugins: 'code'
});
```

Add `plugins: 'code'` to your `tinymce.html` file, save the file, refresh your browser and you'll see some magic. A "Tools" menu automatically appears in the menubar, and it has a "Source code" item in the drop-down. Click it and *voila*, you can now edit the HTML hidden by the WYSIWYG interface.

Let's also add a toolbar control so that our users can more easily activate this functionality.

```js
tinymce.init({
  selector: 'textarea',  // note the comma at the end of the line!
  plugins: 'code',  // note the comma at the end of the line!
  toolbar: 'code'
});
```

Impressive! We now have a button on the toolbar users can click to get into source code mode, but we lost our default toolbar controls. We explained why this happens back in the [Basic Setup](../basic-setup/), so if this behavior surprises you, please re-read that section.

Let's quickly take our minimal design one step further by deleting the menubar entirely.

```js
tinymce.init({
  selector: 'textarea',  // note the comma at the end of the line!
  plugins: 'code',  // note the comma at the end of the line!
  toolbar: 'code',  // last reminder, note the comma!
  menubar: false
});
```

## Time for one more example

Even if you found the above example quite easy, hang with us we'll show you how to extend TinyMCE's default ordered and unordered lists. If on the other hand that was all a bit new, read this example to help your understanding.

### Advanced Lists

The [Advanced List]({{ site.baseurl }}/plugins/advlist/) plugin extends the default unordered and ordered list toolbar controls by adding CSS `list-style-type` styled number formats and bullet types to the controls.

As before, let's start by adding the `plugins` key and giving it the Advanced List value of `'advlist'`.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'advlist'
});
```

Take a look at your TinyMCE toolbar, and you'll see the list controls now have down arrows attached (to the right of the icon). Click them, and you've now got extra list options.

There are more customization options if we don't want all of those list options available to the user.

### More options for customization

The `advlist` plugin has two options which provide more granular control of list styles. These are `advlist_bullet_styles` and `advlist_number_styles`.

Many plugin options have more than one possible value. The `advlist_bullet_styles` option has possible values of `circle`, `disc`, and `square`. While the `advlist_number_styles` has possible values of `lower-alpha`, `lower-greek`, `lower-roman`, `upper-alpha`, and `upper-roman`.

Don't worry if you can't remember all these values. The [plugins section]({{ site.baseurl }}/plugins/) goes into great detail explaining all the plugins options, toolbars, and menu controls.

Let's add the Advanced List options and give them some of the available options.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  menubar: false,
  toolbar: 'bullist, numlist',
  plugins: 'advlist',
  advlist_bullet_styles: 'square',
  advlist_number_styles: 'lower-alpha,lower-roman,upper-alpha,upper-roman'
});
```

In the above example, we learned how to remove the menubar, add specific list controls to the toolbar while removing others, activate a plugin, and customize the plugin's behavior by controlling which options we wanted to be activated. In 5 lines of code (excluding the `selector` key, which has to be included for TinyMCE to work).

As we noted at the start TinyMCE is an incredibly powerful, flexible, and customizable rich text editor. Once you've finished the Get Started guide, deep dive into the [plugins]({{ site.baseurl }}/plugins/) and [configuration options]({{ site.baseurl }}/configure/).


## Top 10 plugins

Customizing TinyMCE with the default plugins is that easy. There are 40 default plugins available to developers. Let's take a look at the 10 most popular plugins (by documentation page views).

| Position | Plugin Name   | Plugin Value |
|----------|---------------|--------------|
| **1**    | Image         | [image]({{ site.baseurl }}/plugins/image/) |
| **2**    | Image Tools   | [imagetools]({{ site.baseurl }}/plugins/imagetools/) |
| **3**    | Advanced List | [advlist]({{ site.baseurl }}/plugins/advlist/) |
| **4**    | Code          | [code]({{ site.baseurl }}/plugins/code/) |
| **5**    | Media         | [media]({{ site.baseurl }}/plugins/media/) |
| **6**    | Link          | [link]({{ site.baseurl }}/plugins/link) |
| **7**    | Color Picker  | [colorpicker]({{ site.baseurl }}/plugins/colorpicker/) |
| **8**    | Paste         | [paste]({{ site.baseurl }}/plugins/paste/) |
| **9**    | Table         | [table]({{ site.baseurl }}/plugins/table/) |
| **10**   | Text Color    | [textcolor]({{ site.baseurl }}/plugins/textcolor) |

{% assign_page next_page = "/general-configuration-guide/customize-ui/index.html" %}
{% include next-step.html next=next_page %}
