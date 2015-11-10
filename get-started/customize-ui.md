---
layout: default
title: 6. Customize UI
description: Learn how to change to look of TinyMCE.
keywords: themes, skins, statusbar
---

By now it should be clear that TinyMCE is incredibly powerful and at the same time extremely flexible. This is also true for user interface customizations. In this section we will look at skinning the editor UI, adding a useful toolbar button not included in the default theme and hiding the status bar.

### Themes

TinyMCE comes with a beautiful, lightweight theme out of the box called "modern". Enabled by default there's nothing you need to do to enable it and since you can easily customize the menubar and toolbar there's usually no need to edit the theme either.

Although any developer can create their own themes it does require skill and a deeper knowledge of TinyMCE's API. It's beyond the scope of this Getting Started guide.

TinyMCE skins, on the other hand, are much easier to make thanks to the [TinyMCE Skin Creator](http://skin.tinymce.com/).

### Skins

Unlike TinyMCE themes, which affect much more than just the editor's user interface, skins only change the editor's appearance.

If you would like to create your own skins the best place to start is with the [TinyMCE Skin Creator](http://skin.tinymce.com/).

Once you've created your skin, download it, unzip the file, place it in the `js/skins `folder of your TinyMCE install and activate it using code similar to this:

```js
tinymce.init({
  selector: "textarea"  // change this value according to your HTML
  skin: "lightgray"  // use the name of your skin, not lightgray
});
```

If you are going to roll your own skins, the name of the skin should match the name of the folder within the skins directory (typically `tinymce/js/skins`). If the specified skin is not found, TinyMCE will not load.

> Pro tip. A lot of developers confuse the difference between TinyMCE themes and skins. You'll often see the term "theme" used when someone really means "skin".

### We all need code

There is one popular toolbar button not loaded with the default theme "modern" and that's the `code` button. Clicking it presents the user with a dialog box containing the raw html hidden by TinyMCE's interface.

It's also a good example for the Getting Started guide because it reminds us that some functionality requires the inclusion of a plugin.

```js
tinymce.init({
  selector: "textarea"  // change this value according to your HTML
  plugins: "code"
  toolbar: "code"
});
```

If you tried this snippet (see [this page](./first-steps/) if you need a basic html code block) you'll have noticed that although you added the `code` button to the toolbar and created a new menu called `Tools` with the menu item `Source code`, everything else on the toolbar disappeared.

If you wanted the default toolbar *plus* the `code` functionality you'd need this:

```js
tinymce.init({
  selector: "textarea",
  toolbar: "undo redo styleselect bold italic alignleft aligncenter alignright bullist numlist outdent indent code",
  plugins: "code"
  });
```

We realize we covered toolbars in an earlier step but they're such an integral part of the experience your users have with the TinyMCE editor that the more practice the better.

### Hiding the status bar

In the previous step we added new items to the toolbar, so in this step we're going to remove a UI element entirely. Say hello and goodby to the status bar.

The status bar is a gray bar stuck to the bottom of the editor's editable area containing the path information and the resize handle. Sometimes we don't want users to be able to change the size of the editable area (by dragging the resize handle*) and so removing the status bar achieves this objective.

```js
tinymce.init({
  selector: "textarea"  // change this value according to your HTML
  statusbar: false
});
```

> `*` There are ways to restrict whether the resize handle can be dragged and by how much, which you'll discover when deep diving into  plugins and advanced configuration options.


## Next steps

In the next step you'll learn how to [upload images](../image-uploading/) with TinyMCE.
