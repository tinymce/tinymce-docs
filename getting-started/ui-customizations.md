---
layout: default
title: 6. UI Customizations
description: // coming soon
---

By now it should be clear that TinyMCE is incredibly powerful and at the same time extremely flexible. This is also true for user interface customizations. In this section we will look at skinning the editor UI, diving a little deeper in to the [`statusbar`](/editor-configuration-settings/editor-appearance/#statusbar), [`toolbar`](/editor-configuration-settings/editor-appearance/#toolbar), [`menu`](/editor-configuration-settings/editor-appearance/#menu) and [`menubar`](/editor-configuration-settings/editor-appearance/#menubar) controls, as well as provide a snippet for making a [custom toolbar button](#customtoolbarbutton).

### Themes

TinyMCE comes with a beautiful theme out of the box called "modern". Enabled by default there's nothing you need to do to enable it and since you can easily customize the menubar and toolbar there's usually no need to edit the theme either.

Although any developer can create their own themes it does require skill and a deeper knowledge of TinyMCE's API. It's beyond the scope of this Getting Started guide.

TinyMCE skins, on the other hand, are much easier to make thanks to the [TinyMCE Skin Creator](http://skin.tinymce.com/).

### Skins

Unlike TinyMCE themes, which affect much more than just the editor's user interface, skins only change the editor's appearance.

If you are going to roll your own skins, the name of the skin should match the name of the folder within the skins directory (typically `tinymce/js/skins`). If the specified skin is not found, TinyMCE will not load.

If you would like to create your own skins the best place to start is with the [TinyMCE Skin Creator](http://skin.tinymce.com/).

Once you've created your skin, download it, unzip the file and place it in the `js/skins `folder of your TinyMCE install and activate it using code similar to this:

```js
tinymce.init({
  selector: "textarea"  // change this value according to your HTML
  skin: "lightgray"
});
```

In the example above we used the name of the default TinyMCE 4 skin, `lightgray`.

### All sorts of bars

statusbar

toolbar

menu

menubar

### Another UI tweak


## Next Steps

In the next step you'll learn how to [upload images](../image-uploading/) with TinyMCE.
