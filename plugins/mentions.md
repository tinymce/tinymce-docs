---
layout: default
title: Mentions Plugin
title_nav: Mentions
description: Enables @mention functionality.
keywords: mentions atmentions
---

The mentions plugin will present a list of users when you type a "@" and beginnings of a user name after it. It will then query the backend using the `mentions_fetch` callback.

##### Example
```javascript
tinymce.init({
  ...
  plugins: "mentions",
  mentions_fetch: function (query, success) {
    // Fake a server call by using a setTimeout
    setTimeout(function() {
      console.log('Search query:', query.term);

      success([
        {id: 'johndoe', name: 'johndoe', fullName: 'John Doe'},
        {id: 'janedoe', name: 'janedoe', fullName: 'Jane Doe'}
      ]);
    }, 0);
  }
});
```

## Options

These configuration options affect the execution of the `mentions` plugin. The main option that needs to be implemented is the `mentions_fetch` callback.

### `mentions_fetch`

This option lets you do request the backend for a list of uses matching the search query. The callback gets passed two parameters one is the
search query object the other one is the success callback to execute with the results. The query object has a term property that contains what the user has typed
after the "@" sign. The success call should contain an array of users with the required properties "id", "name" and "fullName".

**Type:** `function`

**Default Value:** `none`

##### Example

```js
tinymce.init({
  selector: "textarea",
  plugins: "mentions",
  mentions_fetch: function (query, success) {
    // Fake a server call by using a setTimeout
    setTimeout(function() {
      console.log('Search query:', query.term);

      success([
        {id: 'johndoe', name: 'johndoe', fullName: 'John Doe'},
        {id: 'janedoe', name: 'janedoe', fullName: 'Jane Doe'}
      ]);
    }, 0);
  }
});
```

### `mentions_menu_complete`

This option enables you to provide override the default logic for inserting the at mention into the editor. The callback should return an editor created
using the editors document.

**Type:** `function`

**Default Value:** `none`

##### Example

```js
tinymce.init({
  selector: "textarea",
  plugins: "mentions",
  mentions_selector: 'span.mymention',
  mentions_menu_complete: function (editor, userinfo) {
    var span = editor.getDoc().createElement('span');
    span.className = 'mymention';
    span.appendChild(editor.getDoc().createTextNode('@' + userinfo.name));
    return span;
  }
});
```

### `mentions_menu_hover`

This option enables you to provide an element to be presented next to the menu item being hovered. This lets you do custom UI:s for presenting user information.

**Type:** `function`

**Default Value:** `none`

##### Example

```js
tinymce.init({
  selector: "textarea",
  plugins: "mentions",
  mentions_menu_hover: function (userinfo, success) {
    // Fake a server call by using a setTimeout
    setTimeout(function() {
      var div = document.createElement('div');

      div.innerHTML = (
        '<div>' +
          '<h1>' + userinfo.fullName + '</h1>' +
        '</div>'
      );

      success(div);
    }, 0);
  }
});
```

### `mentions_selector`

This option enables you to provide a custom css selector that should match the element created using `mentions_menu_complete` a warning will be logged to console unless they match. This enables the plugin to find existing mentions. The callback takes two parameters the editor instance and the userinfo object.

**Type:** `function`

**Default Value:** `none`

##### Example

```js
tinymce.init({
  selector: "textarea",
  plugins: "mentions",
  mentions_selector: 'span.mymention',
  mentions_menu_complete: function (editor, userinfo) {
    var span = editor.getDoc().createElement('span');
    span.className = 'mymention';
    span.appendChild(editor.getDoc().createTextNode('@' + userinfo.name));
    return span;
  }
});
```

### `mentions_select`

This option enables you to provide a element to be presented next to a selected mention on page. This can include more details about the user.

**Type:** `function`

**Default Value:** `none`

##### Example

```js
tinymce.init({
  selector: "textarea",
  plugins: "mentions",
  mentions_selector: 'span.mymention',
  mentions_select: function (mention, success) {
    var div = document.createElement('div');

    div.innerHTML = (
      '<div>' +
        '<h1>Some more info about the user</h1>' +
      '</div>'
    );

    success(div);
  }
});
```

## API

### `getUsers`

You can retrieve the inserted users by calling getUsers on the plugin instance object of an editor. This will return an array of users inserted by the user but only the ones currently present in the content. It will also exclude duplicate inserts by using the userinfo objects id property.

##### Example

```js
var users = tinymce.activeEditor.plugins.metions.getUsers();
console.log(users);
```

## Downloading Mentions Plugin

A [TinyMCE Enterprise](http://www.tinymce.com/pricing/) subscription includes the ability to download and install the mentions feature for the editor.
