---
layout: default
title: 07. Customize UI
description: Learn how to change the appearance of the editor.
keywords: themes skins statusbar
---

By now it should be clear that TinyMCE is incredibly powerful and at the same time extremely flexible. This is also true for user interface customizations. In this section we will look at skinning the editor UI, adding a useful toolbar button not included in the default theme and hiding the status bar.

### Themes

TinyMCE comes with a beautiful, lightweight theme out of the box called "modern". This theme is enabled by default and you can easily customize the menubar or toolbar without having to edit the theme.

Although any developer can create their own themes it does require a deeper knowledge of TinyMCE's API and is beyond the scope of this Get Started guide.

However, TinyMCE skins are much easier to make thanks to the TinyMCE Skin Creator.

### Skins

Unlike TinyMCE themes, which affect much more than just the editor's user interface, skins only change the editor's appearance.

If you would like to create your own skins the best (and easiest) place to start is the [TinyMCE Skin Creator](http://skin.tinymce.com/).

Once you've created your skin, download it, unzip the file, and place it in the `js/skins `folder of your TinyMCE install. Then activate it using code similar to this:

```js
tinymce.init({
  selector: 'textarea'  // change this value according to your HTML
  skin: 'lightgray'  // use the name of your skin, not lightgray
});
```

If you are going to roll your own skins, the name of the skin should match the name of the folder within the skins directory (typically `tinymce/js/skins`). If the specified skin is not found, TinyMCE will not load.

> Pro tip. A lot of developers confuse the difference between TinyMCE themes and skins. You'll often see the term "theme" used by developers when they really mean "skin". In the wild some TinyMCE themes are really skins.

### Changing editor height and width

One of the most frequent UI customizations is changing the height and width of the editable area. Let's quickly look at how you can do this with some code snippets.

> We have included links to the source documentation if you want to get into the specific details of these customization options.

##### Set the editable area height

> Reminder, the "editable area" is the box users type into. Which is different from the "editor".

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  height : 300
});
```

See the [height option]({{ site.baseurl }}/configure/editor-appearance/#height) for customization details.

##### Set the editable area width

> Note that the editable area width is (almost) effectively the width of the editor itself. This is **not** the case for height.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  width : 300
});
```

See the [width option]({{ site.baseurl }}/configure/editor-appearance/#width) for customization details.


##### Set maximum and minimum heights and widths

By now you're fast becoming a TinyMCE pro, so we're going to include several options in this snippet to set the maximum and minimum values for heights and widths of the editable area. See if you can work out what's going on.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  max_height: 500,
  max_width: 500,
  min_height: 100,
  min_width: 400
});
```

To learn more about these customization options please see the [max_height]({{ site.baseurl }}/configure/editor-appearance/#max_height), [max_width]({{ site.baseurl }}/configure/editor-appearance/#max_width), [min_height]({{ site.baseurl }}/configure/editor-appearance/#min_height), [min_width]({{ site.baseurl }}/configure/editor-appearance/#min_width) documentation pages.

But that's not the end of your options when it comes to customizing TinyMCE's height and width behavior. You can also automatically resize the editable area as the user types into the iframe with the [Autoresize Plugin]({{ site.baseurl }}/plugins/autoresize/), and you can enable the user to resize the editor on horizontal and vertical axis by dragging the status bar handle with the [resize]({{ site.baseurl }}/configure/editor-appearance/#resize) configuration option.

### Customizing the editable area with content_css

It is usually desirable that TinyMCE's editable area has the same styling as the surrounding content. This can be achieved with the [`content_css`]({{ site.baseurl }}/configure/content-appearance/#content_css) customization option.

The `css` file used in this setting should be the same `css` file that controls the look/style of all your pages. Let's say you include a file `myLayout.css` in all your pages to control your site's global appearance, then this file must be set as your `content_css` value. Doing this will ensure the content in the editable area will also have your site's style.

##### Example using an absolute path

```js
// File: http://domain.mine/mysite/index.html

tinyMCE.init({
  selector: 'textarea',  // change this value according to your HTML
  content_css : '/mycontent.css'  // resolved to http://domain.mine/mycontent.css
});
```

Refer to the [content_css]({{ site.baseurl }}/configure/content-appearance/#content_css) customization page if you want to learn more about the use of absolute and relative paths and multiple stylesheets.

### Hiding the status bar

In this step we're going to remove a UI element entirely and for this example we will be saying hello and goodbye to the status bar.

The status bar is a gray bar stuck to the bottom of the editor's editable area containing the path information and the resize handle. Sometimes we don't want users to be able to change the size of the editable area (by dragging the resize handle*) and so removing the status bar achieves this objective.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  statusbar: false
});
```


### We all need code

If you're struggling with menus, menu items and toolbars from the previous sections, we'll quickly revisit this for you with another example.

There is one popular toolbar button not loaded with the default theme "modern" and that's the `code` button. Clicking it presents the user with a dialog box containing the raw HTML hidden by TinyMCE's interface.

It's also a good example for the Get Started guide because it reminds us that some functionality requires the inclusion of a plugin.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'code',
  toolbar: 'code'
});
```

If you tried this snippet you'll have noticed that although you added the `code` button to the toolbar and created a new menu called `Tools` with the menu item `Source code`, everything else on the toolbar disappeared. (See [this page](../first-steps/) if you need a basic HTML code block.)

If you wanted the default toolbar *plus* the `code` functionality you'd need this:

```js
tinymce.init({
  selector: 'textarea',
  toolbar: 'undo redo styleselect bold italic alignleft aligncenter alignright bullist numlist outdent indent code',
  plugins: 'code'
  });
```

We realize we covered toolbars in an earlier step but they're such an integral part of the experience your users have with the TinyMCE editor that the more practice the better.

> `*` There are ways to restrict whether the resize handle can be dragged, which you'll discover when deep diving into plugins and advanced configuration options.

{% assign_page next_page = "/get-started/upload-images/index.html" %}
{% include next-step.html next=next_page %}
