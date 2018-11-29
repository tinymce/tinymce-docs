---
layout: default
title: Create a custom toolbar button
title_nav: Custom toolbar button
description_short: Add a custom button to the toolbar.
description: This example shows you how to add a custom button to the toolbar.
keywords: example demo custom toolbar button
---

* [Basic button](#basicbutton)
* [Button options](#buttonoptions)
* [Conditionally disable button](#conditionallydisablebutton)
* [Toggle button](#togglebutton)


## Basic button

To create a button in TinyMCE use the method `addButton()`. Call `addButton()` with button identifier and configuration object. Here is an example:

```js
editor.addButton('mybutton', {
  text: "My Button",
  onclick: function () {
     alert("My Button clicked!");
  }
});
``` 

The `identifier` is the only required argument. To find your button on the toolbar provide either an `icon` option or a `text` option (or both). The identifier allows the reference to this button later in the code. Another important option is `onclick`.

For example, to insert the current date into the editor:

>  Note:  TinyMCE already ships with **nice** [Insert date/time plugin](https://www.tinymce.com/docs/plugins/insertdatetime/) (it is hard to find a text editing feature that is not implemented in TinyMCE), but it does many complimentary things - adds some commands and shortcuts, inserts **"Insert date/time"** menu, adds support for additional date formats, internationalization, and  more. This tutorial does not explore those complex topics. However, `insertdatetime` plugin is a good starting point to learn more. Its source code can be found on [github](https://github.com/tinymce/tinymce/blob/master/js/tinymce/plugins/insertdatetime/plugin.js).

For this example, use [`<time>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time) tag. `<time>` tag should have an attribute `datetime` - valid date with an optional time string. And as [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time) states:

> This attribute indicates the time and date of the element. If the value cannot be parsed as a date with an optional time string, the element does not have an associated time stamp.

Here is a simple function that converts a `Date` object into such tag with the populated timestamp in the `datetime` attribute and readable date string inside.

```js
function toTimeHtml(date) {
    return '<time datetime="' + date.toString() + '">' + date.toDateString() + '</time>';
}
```

It outputs this:

```html
<time datetime="Mon Sep 26 2016 08:42:22 GMT+0400 (GET)">Mon Sep 26 2016</time>
```

Call this function when the custom button is clicked and insert the return string into the editor. 

```js
function toTimeHtml(date) {
    return '<time datetime="' + date.toString() + '">' + date.toDateString() + '</time>';
}

editor.addButton('currentdate', {
  icon: 'insertdatetime',
  tooltip: "Insert Current Date",
  onclick: function () {
     var html = toTimeHtml(new Date());
     editor.insertContent(html);
  }
});
``` 

This example borrowed an icon from the *Insert date/time* plugin. You can use any icon class that you have currently defined in your stylesheets. You can supply direct image URL via `image` option ff you do not have any icon classes. 

`image` option has priority over `icon`, if the line above is uncommented the icon is then superseded with the calendar image from [Fugue iconset](http://p.yusukekamiyamane.com/).

We have also replaced `text` with `tooltip` option, to fit the toolbar concept much better.

Here is the full code (experiment on it by clicking *Edit on Codepen* in the top right corner).

{% include codepen.html id="creating-a-custom-button-1" tab="js" height="550" %}


The identifier is supplied to the button in the `toolbar` property, along with `undo` and `redo` (`code` plugin is also included to review the HTML code that gets generated). When the user clicks *Insert Current Date*, the date is inserted into the editor at the current cursor position. The `undo` button is enabled after insertion due to the automated handling of modification history.
  
Another point is `setup` callback. It is the callback that TinyMCE will [automatically invoke]({{ site.baseurl }}/configure/integration-and-setup/#setup) for every initialised editor instance. It will receive a reference to the instance as the first argument. This `setup` callback is used to customize the editor - in this case a button was added, but keyboard shortcuts and menus could be also be added and has to be added *before* the editor is ready.


## Button options

Button configuration properties:

* **text** - *the text that will show up on the button*
* **icon** - *CSS class for the icon (from one of the loaded stylesheets)*
* **image** - *URL of the image (16x16 recommended) to use as an icon (overrides `icon` option if defined)*
* **tooltip** - *tooltip to pop up on hover*
* **onclick** - *callback to call when button is clicked*
* **onpostrender** - *callback to call when button is rendered*
* **cmd** - *editor command to invoke, when button is clicked (command [should be registered]({{ site.baseurl }}/api/tinymce/tinymce.editorcommands/#addcommands) prior to this, either by editor or by you)*

## Conditionally disable button

TinyMCE gives you the choice to conditionally disable a button. Users may need this ability to ensure the context is appropriate for the use case. For example, it would be awkward if users could insert `<time>` tag into another `<time>` tag. Although, technically, it *is* possible.

TinyMCE is designed in a way to monitor the cursor position and disable buttons when it is inappropriate. Hooking into a [NodeChange event]({{ site.baseurl }}/advanced/events/#nodechange), that is initiated when the cursor jumps from one node to another.

```js
function monitorNodeChange() {
  var btn = this;
  editor.on('NodeChange', function(e) {
    btn.disabled(e.element.nodeName.toLowerCase() === 'time');
  });
}

editor.addButton('currentdate', {
  icon: 'insertdatetime',
  tooltip: "Insert Current Date",
  onclick: insertDate,
  onpostrender: monitorNodeChange
});
```
The `postrender` option is used here and attached the callback that will be called after the button is rendered. That is where we start our monitoring. Note how the buttons toggle their state depending on whether the node under the cursor is `time` tag or not.

The demo has been updated using the above knowledge. Try to click inside and outside the date string:

{% include codepen.html id="creating-a-custom-button-2" tab="run" height="300" %}

> Note:  It is more practical to simply set `contenteditable` attribute to **false** on the `time` tag. This is a demonstration on how the button can toggle different states depending on various logical conditions.

Note how the code for the example gets bigger. It has nearly reached the boundaries of simplicity. At this point, consider whether it is better to [bundle this feature as a plugin]({{ site.baseurl }}/advanced/creating-a-plugin/) instead.

## Toggle button

It may be useful for a button to act as the on/off switcher. For example in the case of basic emphasizing formatting (e.g.,**bold**, *italic*). Please review [conditionally disable button](#conditionallydisablebutton) before n looking at how to conditionally make a button either active (depressed) or inactive (unpressed). 

To add a basic button first that will strike out currently selected text.

```js
editor.addButton('strikeout', {
  icon: 'strikethrough',
  onclick: function() {
    editor.execCommand('mceToggleFormat', false, 'strikethrough');
  }
});
```

`mceToggleFormat` is an internal command, that when executed, toggles the specified format on and off. Ensure the format is registered. In the example above, `strikethrough` is an internally registered format. Note that the name of the button is `strikeout` to differentiate the button from the internal `strikethrough` button. This ensures that the functionality is defined independantly of either button.

The code works as expected - striking out the plain text or removing the *striked* formatting if it was already stricken out. However, the button visually doesn't reflect the operation that will be applied. To address this:

```js
editor.addButton('strikeout', {
  icon: 'strikethrough',
  onclick: function() {
    editor.execCommand('mceToggleFormat', false, 'strikethrough');
  },

  onpostrender: function() {
    var btn = this;
    editor.on('init', function() {
      editor.formatter.formatChanged('strikethrough', function(state) {
        btn.active(state);
      });
    });
  }
});
```

`onpostrender` is used to invoke the code after the button is rendered. At this moment `editor.formatter` might not be initialized yet, so first hook onto `init` event. Then there is the internal TinyMCE method `editor.formatter.formatChanged()` that registers a callback to be called when the current selection is of the specified format. The callback takes in a state as the argument, and that is used to depress or unpress our button visually.

Here is the full example:

{% include codepen.html id="creating-a-custom-button-3" tab="js" height="550" %}

