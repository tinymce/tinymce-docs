---
layout: default
title: Howto create custom toolbar button
title_nav: Custom Toolbar Button
description_short: Add a custom button to the toolbar.
description: This example shows you how to add a custom button to the toolbar.
keywords: example demo custom toolbar button
---

First question to answer is probably - how do you create a button in TinyMCE? And the answer is - of course there’s a special method for that in the editor - `addButton()`. It should be called with button identifier and configuration object. Here’s an example:

```javascript
editor.addButton('mybutton', {
  text: "My Button",
  onclick: function () {
     alert("My Button clicked!");
  }
});
``` 

In fact identifier is the only required argument, but if you want to be able to find your button on the toolbar you better provide an `icon` option or a `text` option too (or both). Identifier will let us reference this button later in the code. Another important option is `onclick` - we want our button to do something when we click it, right?

But let's do something more useful, than simply alerting a message. Let's insert something into the editor - the current date, for example. 

> Now, you might know that TinyMCE already ships with nice [Insert date/time plugin](https://www.tinymce.com/docs/plugins/insertdatetime/) (it is hard to find a text editing feature that is not implemented in TinyMCE), but it does whole lot of complementary things - adds some commands and shortcuts, inserts **"Insert date/time"** menu, adds support for fancy date formats, i18n and some more. We won’t go in all of that in this tutorial and make our button much simpler - we will insert the current date in the editor at the cursors position. That’s it. However `insertdatetime` plugin is a good read if mentioned stuff is something that you would like to familiarise yourself with. Its source code can be found on [github](https://github.com/tinymce/tinymce/blob/master/js/tinymce/plugins/insertdatetime/plugin.js).

For our purpose we will use [`<time>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time) tag. `<time>` tag should have an attribute `datetime` - valid date with an optional time string. And as MDN states:

> This attribute indicates the time and date of the element. If the value cannot be parsed as a date with an optional time string, the element does not have an associated time stamp.

Here's the simple function, that converts a `Date` object into such tag with populated timestamp in `datetime` attribute and readable date string inside.

```javascript
function toTimeHtml(date) {
    return '<time datetime="' + date.toString() + '">' + date.toDateString() + '</time>';
}
```

So it will produce something like this:

```html
<time datetime="Mon Sep 26 2016 08:42:22 GMT+0400 (GET)">Mon Sep 26 2016</time>
```

All we need now is to call this function when our custom button is clicked and insert whatever we get from it into the editor. 

```javascript
function toTimeHtml(date) {
    return '<time datetime="' + date.toString() + '">' + date.toDateString() + '</time>';
}

editor.addButton('currentdate', {
  icon: 'insertdatetime',
  //image: 'http://p.yusukekamiyamane.com/icons/search/fugue/icons/calendar-blue.png',
  tooltip: "Insert Current Date",
  onclick: function () {
     var html = toTimeHtml(new Date());
     editor.insertContent(html);
  }
});
``` 

We've borrowed an icon from the above mentioned *Insert date/time* plugin here, but you can use any icon class that you have currently defined in your stylesheets. If you do not have any icon classes, you can supply direct image URL via `image` option (`image` option has priority over `icon`, so if you uncomment corresponding line above, for example, icon will get superseded by the calendar image from beautiful [Fugue iconset](http://p.yusukekamiyamane.com/)).

We also replaced `text` with `tooltip` option, which fits the toolbar concept much better.

Done. That's it. Seriously. 

Here is the full code (you can experiment on it by clicking *Edit on Codepen* in the top right corner)..

{% include codepen.html id="XjRWZj" tab="js" height="550" %}


As you see we've supplied identifier of our button - `currentdate` in the `toolbar` option. Along with `undo` and `redo`. So whenever user clicks *Insert Current Date*, the date is inserted at the current cursor position in the editor. Notice how `undo` button gets enabled after insertion, that's because we handle modification history for you. `code` plugin is also included - so that you could see HTML code that gets generated.
  
Another point is `setup` callback - see how we've put all of our code into it? It is the callback that TinyMCE will automatically invoke for every initialised editor instance. It will receive reference to the instance as the first argument. We can use `setup` callback to customise editor to our taste - here we are adding a button, but we could also add custom keyboard shortcuts, menus and everything that has to be added *before* editor is ready.

Button configuration properties:

* **text** - *the text that will show up on the button*
* **icon** - *CSS icon class from loaded stylesheet*
* **image** - *image URL to use as an icon (16x16); if defined, overrides `icon` option*
* **tooltip** - *tooltip to pop up on hover*
* **onclick** - *callback to call when button is clicked*
* **cmd** - *editor command to invoke when button is clicked (command should be registered prior to this, either by editor or by you)*

`cmd` is kind of advanced topic and we will cover it in the next section.
