---
layout: default
title: 6. UI Customizations
description: // coming soon
---

By now it should be clear that TinyMCE is incredibly powerful and at the same time extremely flexible. This is also true for user interface customizations. In this section we will look at skinning the editor UI, diving a little deeper in to the [`statusbar`](/editor-configuration-settings/editor-appearance/#statusbar), [`toolbar`](/editor-configuration-settings/editor-appearance/#toolbar), [`menu`](/editor-configuration-settings/editor-appearance/#menu) and [`menubar`](/editor-configuration-settings/editor-appearance/#menubar) controls, as well as provide a snippet for making a [custom toolbar button](#customtoolbarbutton).

### Themes

TinyMCE comes with a beautiful theme out of the box called "modern". Enabled by default there's nothing you need to do to enable it and since you can easily customize the menubar and toolbar there's usually no need to edit it either.

Although any developer can create their own themes it does require skill and a deeper knowledge of TinyMCE's API. It's beyond the scope of this Getting Started guide.

TinyMCE skins, on the other hand, are much easier to make thanks to the [TinyMCE Skin Creator](http://skin.tinymce.com/).

### Skins



### All sorts of bars

statusbar

toolbar

menu

menubar


### Custom Toolbar Button

http://www.tinymce.com/tryit/button.php

```js
<script src="//tinymce.cachefly.net/4.2/tinymce.min.js"></script>
<script>
tinymce.init({
  selector: "textarea",
  toolbar: "mybutton",
  setup: function(editor) {
    editor.addButton('mybutton', {
      text: 'My button',
      icon: false,
      onclick: function() {
        editor.insertContent('Main button');
      }
    });
  }
});
</script>
```
And add this code to your HTML.

```html
<form method="post" action="somepage">
  <textarea name="content" style="width:100%"></textarea>
</form>
```

## Next Steps

In the next step you'll learn how to [upload images](../image-uploading/) with TinyMCE.
