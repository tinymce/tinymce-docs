---
layout: default
title: Plugins & Toolbar/Menu Controls
---


TinyMCE is an incredibly powerful, flexible and customizable rich text editor. This section will help you configure and extend your editor instance. We'll first look at the default core toolbar and menu controls before moving on to TinyMCE's real power: [**plugins**](#plugins).

# Core Controls

TinyMCE contains a set of core toolbar and menu controls; things such as bold, italic and text alignment. Basically, the type of settings you would expect to find in any WYSIWYG editor.

Here is the complete list of **core** **Menu Controls**, in space separated format.

```
newdocument undo redo visualaid cut copy paste selectall bold italic underline strikethrough subscript superscript removeformat formats
```

And here are the **core** **Toolbar Controls**, again in space separated format.

```
newdocument bold italic underline strikethrough alignleft aligncenter alignright alignjustify styleselect formatselect fontselect fontsizeselect cut copy paste bullist numlist outdent indent blockquote undo redo removeformat subscript superscript
```

To create groups of toolbar controls, add a `"|"` pipe character between the items you would like grouped together. For example:

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    menubar: "file edit view",
    toolbar: "bold italic | alignleft aligncenter alignright"
});
```

If you wish to exclude `menubar` and/or `toolbar` controls set their value to `"none"`. To remove the toolbar and menu completely you would do this:

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    menubar: "none",  // removes the menubar
    toolbar: "none"  // removes the toolbar
});
```

> Important! If a menu or toolbar control is associated with plugin functionality, we highlight that relationship under its respective plugin entry. Look for the icons.

Two notes for first time users:

1. If controls are not expressly declared, TinyMCE instantiates its default, **core** menu and toolbar controls. See the code example in the [Quick Start](/quick-start).
2. The `key` passed to the `.init` method for menu functionality is `menubar`, not menu.


# Plugins

The real power of TinyMCE's functionality is in its (so-called) plugins. Plugins typically extend the default editor functionality or add new functionality. For example, the Advanced List (advlist) plugin add extra options to the toolbar's existing list controls, while the Code plugin adds an entirely new control.

The plugins listed below are included in the standard TinyMCE package, such as the one served via the CDN, but they are not activated.

It's important to note that some plugins have advanced configuration requirements, in addition to including the plugin name as a value in the `plugins` key. A good example of this is the Advanced List plugin `advlist` below, so let's get to it.


{% include plugins/advlist.md %}
{% include plugins/anchor.md %}
{% include plugins/autolink.md %}
{% include plugins/autoresize.md %}
{% include plugins/autosave.md %}
{% include plugins/bbcode.md %}
{% include plugins/charmap.md %}
{% include plugins/code.md %}
{% include plugins/colorpicker.md %}
{% include plugins/compat3x.md %}
{% include plugins/contextmenu.md %}
{% include plugins/directionality.md %}
{% include plugins/emoticons.md %}
{% include plugins/example.md %}
{% include plugins/example_dependency.md %}
{% include plugins/fullpage.md %}
{% include plugins/fullscreen.md %}
{% include plugins/hr.md %}
{% include plugins/image.md %}
{% include plugins/imagetools.md %}
{% include plugins/importcss.md %}
{% include plugins/insertdatetime.md %}
{% include plugins/layer.md %}
{% include plugins/link.md %}
{% include plugins/media.md %}
{% include plugins/moxiemanager.md %}
{% include plugins/nonbreaking.md %}
{% include plugins/noneditable.md %}
{% include plugins/pagebreak.md %}
{% include plugins/paste.md %}
{% include plugins/preview.md %}
{% include plugins/print.md %}
{% include plugins/save.md %}
{% include plugins/searchreplace.md %}
{% include plugins/spellchecker.md %}
{% include plugins/tabfocus.md %}
{% include plugins/table.md %}
{% include plugins/template.md %}
{% include plugins/textcolor.md %}
{% include plugins/textpattern.md %}
{% include plugins/visualblocks.md %}
{% include plugins/visualchars.md %}
{% include plugins/wordcount.md %}


