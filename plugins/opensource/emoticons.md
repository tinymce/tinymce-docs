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

**Type:** `String`

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
To ensure emoji render consistently across browsers and operating systems, {{site.companyname}} recommends adding an emoji-compatible web font to the default font-family using [`content_css`]({{site.baseurl}}/configure/content-appearance/#content_css).

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

### `emoticons_append`

This option provides a way to append some additional emoji to the default emoji database. This should be an object in the above mentioned format.

**Type:** `Object`

#### Example: Using `emoticons_append`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'emoticons',
  toolbar: 'emoticons',
  emoticons_append: {
    custom_mind_explode: {
      keywords: ['brain', 'mind', 'explode', 'blown'],
      char: '🤯'
    }
  }
});
```

### `emoticons_database`

{{ site.requires_5_6v }}

This option provides the ability to specify which built-in emoji database to use when rendering emojis in the editor. The following built-in emoji databases are available:
* `emojis` - This database uses Unicode characters to represent emoji in the editor content.
* `emojiimages` - This database uses images provided by the Twitter Emoji (twemoji) project to represent emoji in the editor content.

{% assign feature = "`emojiimages` database" %}
{% assign third_party_product = "Twitter Emoji (twemoji) graphics" %}
{% assign license_agreement_name = "CC-BY 4.0" %}
{% include misc/under-license.md %}

**Type:** `String`

**Default:** `emojis`

#### Example: Using `emoticons_database`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'emoticons',
  toolbar: 'emoticons',
  emoticons_database: 'emojis'
});
```

### `emoticons_database_url`

This option provides the default location to load the emoji database from. The database should be an external JavaScript file, that registers a `tinymce.plugins.emoticons` resource.

**Type:** `String`

**Default:** `${pluginUrl}/js/emojis.js`

```js
tinymce.Resource.add('tinymce.plugins.emoticons', {
  robot: {
    keywords: ['computer', 'machine', 'bot'],
    char: '🤖',
    category: 'people'
  }
});
```

#### Example: Using `emoticons_database_url`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'emoticons',
  toolbar: 'emoticons',
  emoticons_database_url: '/emojis.js'
});
```

### `emoticons_images_url`

{{ site.requires_5_6v }}

This option sets the base URL for the images used to represent emojis when using the `emojiimages` database.

By default, this option loads the required image _assets_ from the Twemoji CDN. To use self-hosted emoji images, download the image _assets_ from the [Twitter Emoji (twemoji) GitHub repository](https://github.com/twitter/twemoji/#download).

**Type:** `String`

**Default:** `https://twemoji.maxcdn.com/v/13.0.1/72x72/`

#### Example: Using `emoticons_images_url`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'emoticons',
  toolbar: 'emoticons',
  emoticons_images_url: 'http://my.server/images/emoticons/'
});
```

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}
