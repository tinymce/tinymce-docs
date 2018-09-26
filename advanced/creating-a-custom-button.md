---
layout: default
title: Create a Custom Toolbar Button
title_nav: Custom Toolbar Button
description_short: Add a custom button to the toolbar.
description: This example shows you how to add a custom button to the toolbar.
keywords: example demo custom toolbar button
---

* [Basic button](#basicbutton)
* [Button options](#buttonoptions)
* [Conditionally disable button](#conditionallydisablebutton)
* [Toggle button](#togglebutton)


## Basic button

The first question to answer is probably - how do you create a button in TinyMCE? And the answer is - of course, there’s a special method for that - `addButton()`. It should be called with button identifier and configuration object. Here’s an example:

```js
editor.addButton('mybutton', {
  text: "My Button",
  onclick: function () {
     alert("My Button clicked!");
  }
});
``` 

In fact, the `identifier`  is the only required argument, but if you want to be able to find your button on the toolbar,  you need to provide either an `icon` option or a `text` option (or both). The identifier will let us reference this button later in the code. Another important option is `onclick` - we want our button to do something when we click it, right?

But let's do something more useful than merely alerting a message. Let's insert something into the editor - a current date, for example. 

>  Note:  TinyMCE already ships with **nice** [Insert date/time plugin](https://www.tinymce.com/docs/plugins/insertdatetime/) (it is hard to find a text editing feature that is not implemented in TinyMCE), but it does a whole lot of complimentary things - adds some commands and shortcuts, inserts **"Insert date/time"** menu, adds support for fancy date formats, i18n, and some more. We won’t go into all of that in this tutorial and make our button much simpler. However, `insertdatetime` plugin is a good read if mentioned stuff is something that you would like to familiarise yourself with. Its source code can be found on [github](https://github.com/tinymce/tinymce/blob/master/js/tinymce/plugins/insertdatetime/plugin.js).

For our purpose, we will use [`<time>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time) tag. `<time>` tag should have an attribute `datetime` - valid date with an optional time string. And as [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time) states:

> This attribute indicates the time and date of the element. If the value cannot be parsed as a date with an optional time string, the element does not have an associated time stamp.

Here's a simple function, that will convert a `Date` object into such tag with the populated timestamp in the `datetime` attribute and readable date string inside.

```js
function toTimeHtml(date) {
    return '<time datetime="' + date.toString() + '">' + date.toDateString() + '</time>';
}
```

So it will produce something like this:

```html
<time datetime="Mon Sep 26 2016 08:42:22 GMT+0400 (GET)">Mon Sep 26 2016</time>
```

All we need now is to call this function when our custom button is clicked and insert whatever we get from it into the editor. 

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

We've borrowed an icon from the above mentioned *Insert date/time* plugin, but you can use any icon class that you have currently defined in your stylesheets. If you do not have any icon classes, you can supply direct image URL via `image` option. 

`image` option has priority over `icon`, so if you uncomment corresponding line above, the icon will get superseded, with the calendar image from the beautiful [Fugue iconset](http://p.yusukekamiyamane.com/).

We've also replaced `text` with `tooltip` option, which fits the toolbar concept much better.

Done. That's it. 
Seriously. 

Here is the full code (you can experiment on it by clicking *Edit on Codepen* in the top right corner).

{% include codepen.html id="creating-a-custom-button-1" tab="js" height="550" %}


As you see we've supplied identifier of our button in the `toolbar` property, along with `undo` and `redo` (`code` plugin is also included - so that you could see HTML code that gets generated). So whenever the user clicks *Insert Current Date*, the date will be inserted into the editor at the current cursor position. Notice how `undo` button gets enabled after insertion, that's because we handle modification history for you.
  
Another point is `setup` callback - see how we put all of our code into it? It is the callback that TinyMCE will [automatically invoke]({{ site.baseurl }}/configure/integration-and-setup/#setup) for every initialised editor instance. It will receive a reference to the instance as the first argument. We can use `setup` callback to customize editor to our taste - here we are adding a button, but we could also add custom keyboard shortcuts, menus and everything that has to be added *before* the editor is ready.


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

You probably do not want your button to be enabled at all times since sometimes it might fall out of context. For example, it would be awkward if we could insert `<time>` tag into another `<time>` tag, right? And you can see in the example above, that it *is* possible.

So basically we need a way to monitor the cursor position and disable our button when it's inappropriate. For this purpose, we can hook onto a [NodeChange event]({{ site.baseurl }}/advanced/events/#nodechange), that gets fired when cursor jumps from one node to another.

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
We made use of `postrender` option here and attached the callback that will be called after the button gets rendered. That's where we start our monitoring. See how we toggle buttons state, depending on whether the node under the cursor is `time` tag or not.

Here's updated demo. Try to click inside and outside the date string:

{% include codepen.html id="creating-a-custom-button-2" tab="run" height="300" %}

> Note:  In reality, it would have been more practical to simply set `contenteditable` attribute to **false** on the `time` tag. But I wanted to demonstrate how you can toggle the button state, depending on various logical conditions.

By the way, notice how the code for our example gets bigger and bigger. It has almost reached the boundaries of simplicity already. This is the moment when you should ask yourself whether it's better to [bundle this feature as a plugin]({{ site.baseurl }}/advanced/creating-a-plugin/) instead.

## Toggle button

Sometimes we need a button to act as the on/off switcher, like in the case of basic emphasizing formatting (e.g.,**bold**, *italic*). We've seen how we can [conditionally disable button](#conditionallydisablebutton), now let's look at how we can conditionally make button either active (depressed) or inactive (unpressed). 

Let's add a basic button first that will strike out a currently selected text.

```js
editor.addButton('strikeout', {
  icon: 'strikethrough',
  onclick: function() {
    editor.execCommand('mceToggleFormat', false, 'strikethrough');
  }
});
```

`mceToggleFormat` is an internal command, which when executed, toggles the specified format on and off. The format should also be registered, and in this case, `strikethrough` happens to be such, internally registered format. But notice that we named our button `strikeout`. We did it to differentiate from internal `strikethrough` button and make sure that we are indeed creating the functionality ourselves.

If you try the code at this stage, you will see that it works perfectly - striking out the plain text, and removing the *striked* formatting if it was already stricken out. However, the button visually doesn't reflect the operation that will be applied at that particular moment and place. Let's address this:

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

Again we are using `onpostrender` to invoke our code after the button is rendered. But at that moment `editor.formatter` might not be initialized yet, so we hook onto `init` event first. Then there's that internal TinyMCE method `editor.formatter.formatChanged()` that will register a callback to be called when current selection is of the specified format. The callback will take in a state as the argument, and we will use it to depress or unpress our button visually.

Here's a full example:

{% include codepen.html id="creating-a-custom-button-3" tab="js" height="550" %}

