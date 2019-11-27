---
layout: default
title: Emoticons plugin
title_nav: Emoticons
description: Bring a smiley to your content.
keywords: smiley happy smiling emoji
controls: toolbar button
---

This plugin adds a dialog to the editor lets users insert emojis into {{site.productname}}'s editable area. The dialog can be invoked via a toolbar button - `emoticons` - or a dedicated menu item added as `Insert > Emoticons`.

> Note: it doesn't automatically convert text emoticons into graphical smilies.

**Type:** `String`

##### Example: Adding the Emoticons plugin

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "emoticons",
  toolbar: "emoticons"
});
```

### Options

The default database of emojis can be overridden or extended through the options below.

Internally, emoticons is defined by an object mapping emoticon names to additional details, whereby each entry represents a single emoji. The additional details should contain a unicode character representing the emoji, any keywords that can be used to search for the emoji and a category to place the emoji in. Options are expected to be provided in the same format.

```js
{
  robot: {
    keywords: ["computer", "machine", "bot"],
    char: "🤖",
    category: "people"
  },
  dog: {
    keywords: ["animal", "friend", "nature", "woof", "puppy", "pet", "faithful"],
    char: "🐶",
    category: "animals_and_nature"
  }
}
```

### `emoticons_append`

This option provides a way to append some additional emojis to the default emoji database. This should be an object in the above mentioned format.

**Type:** `Object`

##### Example: emoticons_append

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "emoticons",
  toolbar: "emoticons",
  emoticons_append: {
    custom_mind_explode: {
      keywords: ["brain", "mind", "explode", "blown"],
      char: "🤯"
    }
  }
});
```

### `emoticons_database_url`

This option provides the default location to load the emoji database from. The database should be an external JavaScript file, that assigns an object in the above format, to the `window.tinymce.emoticons_plugin_database` variable.

**Type:** `String`

**Default:** `${pluginUrl}/js/emojis.js`

```js
window.tinymce.emoticons_plugin_database = {
  robot: {
    keywords: ["computer", "machine", "bot"],
    char: "🤖",
    category: "people"
  }
}
```

##### Example: emoticons_database_url

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "emoticons",
  toolbar: "emoticons",
  emoticons_database_url: '/emojis.js'
});
```
