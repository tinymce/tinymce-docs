---
layout: default
title: Migrate from version 3 of TinyMCE
title_nav: Migrate from V3
description_short: Everything you need to start migrating from 3.x to 4 and beyond.
description: Everything you need to start migrating from 3.x to 4 and beyond.
keywords: migrate migration 3x themes event handling new removed
---


* [File structure](#filestructure)
* [Removed plugins](#removedplugins)
* [New plugins](#newplugins)
* [Removed themes](#removedthemes)
* [New themes](#newthemes)
* [Event handling](#eventhandling)
* [User interface](#userinterface)
* [Control states](#controlstates)
* [Dialogs/Windows](#dialogswindows)
* [HTML5 output](#html5output)
* [Using the compat3x plugin](#usingthecompat3xplugin)


## File structure

The file structure was changed in the 4.0 release to more closely match other JavaScript projects. All minified files are suffixed with `.min.js` and `editor_plugin` and `editor_theme` was replaced with `plugin` and `theme`.

```
/tiny_mce/tiny_mce.js -> /tinymce/tinymce.min.js
/tiny_mce/tiny_mce_src.js -> /tinymce/tinymce.js
/tiny_mce/plugins/<plugin>/editor_plugin.js -> /tinymce/plugins/<plugin>/plugin.min.js
/tiny_mce/plugins/<plugin>/editor_plugin_src.js -> /tinymce/plugins/<plugin>/plugin.js
/tiny_mce/theme/<plugin>/editor_template.js -> /tinymce/plugins/<plugin>/theme.min.js
/tiny_mce/theme/<plugin>/editor_template_src.js -> /tinymce/plugins/<plugin>/theme.js
```

## Removed plugins

These plugins where removed in 4.0: [advhr](http://archive.tinymce.com/wiki.php/Plugin3x:advhr), [advimage](http://archive.tinymce.com/wiki.php/Plugin3x:advimage), [advlink](http://archive.tinymce.com/wiki.php/Plugin3x:advlink), [iespell](http://archive.tinymce.com/wiki.php/Plugin3x:iespell), [inlinepopups](http://archive.tinymce.com/wiki.php/Plugin3x:inlinepopups), [style](http://archive.tinymce.com/wiki.php/Plugin3x:style), [emotions](http://archive.tinymce.com/wiki.php/Plugin3x:emotions) and [xhtmlxtras](http://archive.tinymce.com/wiki.php/Plugin3x:xhtmlxtras).

## New plugins

These are the new plugins in 4.0: [anchor]({{ site.baseurl }}/plugins/anchor), [charmap]({{ site.baseurl }}/plugins/charmap), [compat3x]({{ site.baseurl }}/plugins/compat3x), [hr]({{ site.baseurl }}/plugins/hr), [image]({{ site.baseurl }}/plugins/image), [link]({{ site.baseurl }}/plugins/link), [emoticons]({{ site.baseurl }}/plugins/emoticons), [code]({{ site.baseurl }}/plugins/code) and [textcolor]({{ site.baseurl }}/plugins/textcolor).

## Removed themes

The "simple" and "advanced" themes were removed in 4.0.

## New themes

The new "modern" theme was introduced in 4.0. More themes will be added in the future.

## Event handling

TinyMCE 4.0 has a new way of binding events. Instead of the old dispatcher method, it uses the more common "on" and "off" like for example jQuery. It also allows you to bind multiple events and cancel events using the more common preventDefault and stopPropagation. Check the [API documentation]({{ site.baseurl }}/api/tinymce/tinymce.editor/) for a full list of events.

```js
// Old event
editor.onInit(editor, args) {
    // Custom logic
});

// New event
editor.on('init', function(args) {
    // Custom logic
});
```

## User interface

The user interface logic has been changed entirely in 4.0. Though the more straightforward methods of adding buttons and windows are the same, more complex controls or dialogs needs to be written in the new API style.

## Control states

Each control in TinyMCE 4 is supposed to be a self-contained unit. This enables controls to be created at multiple locations in the UI. So the old controlManager with fixed names has been removed.

```js
// This is how control states used to function in the 3.x UI API
editor.onNodeChange.add(function(editor, controlManager, node) {
    controlManager.setActive('SomeButton', node.nodeName == 'A');
});
```
```js
// In TinyMCE 4 you can use the simpler stateSelector setting
editor.addButton('SomeButton', {
    text: 'My button',
    stateSelector: 'a'
});

// Or you can use custom logic using the "nodechange" event
editor.addButton('SomeButton', {
    text: 'My button',
    onPostRender: function() {
        var ctrl = this;

        ed.on('NodeChange', function(e) {
            ctrl.active(e.element.nodeName == 'A');
        });
    }
});
```

## Dialogs/Windows

In TinyMCE 3.x all dialogs where HTML files loaded in iframes or separate windows. In 4.x all windows are DIV elements placed onto the same page as the editor. You can however still load pages into iframe based windows.

```js
// Open URL based window
editor.windowManager.open({
    title: 'My dialog',
    width: 500,
    height: 400,
    url: 'somepage.html'
}, {
    someArg: 'someValue'
});
```

Here are some examples on how to extract parameters passed to windows and closing windows inside your "somepage.html" code.

```js
// Get someArg value inside iframe dialog
var someArg = top.tinymce.activeEditor.windowManager.getParams().someArg;

// Close the top most window
top.tinymce.activeEditor.windowManager.close();
```

## HTML5 output

TinyMCE produces HTML5 loose output as of 4.0. This means it can handle all new HTML5 elements and also allow the deprecated HTML4 attributes and elements. If you want to use html4 or html5-strict output check the [schema]({{ site.baseurl }}/configure/content-filtering/#schema) option for details.

## Using the compat3x plugin

As a last resort one can use the [compat3x plugin]({{ site.baseurl }}/plugins/compat3x) it mimics parts of the 3.x API contains a few files removed from 4.x. We only recommend this as a last resort, and it won't work for all plugins. But most plugins should work right out of the box we tested it with some of our old 3.x plugins.
