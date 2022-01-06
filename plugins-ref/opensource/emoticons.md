---
layout: default
title: Emoticons plugin
title_nav: Emoticons
description: Bring a smiley to your content.
keywords: smiley happy smiling emoji
controls: toolbar button
---

{% assign pluginname = "Emoticons" %}
{% assign plugincode = "emoticons" %}

This plugin adds a dialog to the editor lets users insert emoji into {{site.productname}}'s editable area. The dialog can be invoked via a toolbar button - `emoticons` - or a dedicated menu item added as `Insert > Emoticons`.

The emoticons plugin provides an autocompleter for adding emoji without using the toolbar button or menu item. Adding a colon `:`, followed by at least two characters will open the emoticon picker showing matching emoji.

> **Note**: The emoticons plugin does not automatically convert text emoticons into graphical emoji.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'emoticons',
  toolbar: 'emoticons'
});
```

## Browser emoji support

By default, the emoticon plugin inserts Unicode character codes, such as `\ud83d\ude03` for the smiley emoji. How emoji are rendered is dependent on the web browser and operating system of the user. As a result of this, some emoji may be rendered in black and white, or may not render.
To ensure emoji render consistently across browsers and operating systems, {{site.companyname}} recommends adding an emoji-compatible web font to the default font-family using [`content_css`]({{site.baseurl}}/content/add-css-options/#content_css).

{% include live-demo.html id="emoticons" %}

## Options

The default database of emoji can be overridden or extended through the options below.

Internally, emoticons is defined by an object mapping emoticon names to additional details, whereby each entry represents a single emoji. The additional details should contain a unicode character representing the emoji, any keywords that can be used to search for the emoji and a category to place the emoji in. Options are expected to be provided in the same format.

```js
{
  robot: {
    keywords: ['computer', 'machine', 'bot'],
    char: '🤖',
    category: 'people'
  },
  dog: {
    keywords: ['animal', 'friend', 'nature', 'woof', 'puppy', 'pet', 'faithful'],
    char: '🐶',
    category: 'animals_and_nature'
  }
}
```

{% include configuration/emoticons_append.md %}

{% include configuration/emoticons_database.md %}

{% include configuration/emoticons_database_url.md %}

{% include configuration/emoticons_images_url.md %}

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The {{pluginname}} plugin provides the following {{site.productname}} command.

{% include commands/{{plugincode}}-cmds.md %}
