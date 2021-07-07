---
layout: default
title: Mentions plugin
title_nav: Mentions
description: Enables @mention functionality.
keywords: mentions atmentions
---

{{site.premiumplugin}}

The mentions plugin will present a list of users when a user types the "@" symbol followed by the beginnings of a username after it. It will then query your server using the `mentions_fetch` callback.

## Interactive example

{% include live-demo.html id="mentions" height="400" %}

## Options

These configuration options affect the execution of the `mentions` plugin. The main option that needs to be implemented is the `mentions_fetch` callback.

### `mentions_fetch`

This option lets you request a list of users from your server that match a search query. The callback gets passed two parameters: one is the search query object, the other is the success callback to execute with the results. The query object has a term property that contains what the user has typed after the "@" sign. The success call should contain an array of users. For information on the user properties to pass the success callback for the available mentions item types (`mentions_item_type`), see: [User properties](#userproperties).

**Type:** `Function`

**Default Value:** `none`

#### Example: Using `mentions_fetch`

```js
var usersRequest = null;
tinymce.init({
  selector: 'textarea',
  plugins: 'mentions',
  mentions_fetch: function (query, success) {
    // Fetch your full user list from the server and cache locally
    if (usersRequest === null) {
      usersRequest = fetch('/users');
    }
    usersRequest.then(function(users) {
      // query.term is the text the user typed after the '@'
      users = users.filter(function (user) {
        return user.name.indexOf(query.term.toLowerCase()) !== -1;
      });

      users = users.slice(0, 10);

      // Where the user object must contain the properties `id` and `name`
      // but you could additionally include anything else you deem useful.
      success(users);
    });
  }
});
```

The `success` callback can be passed an optional array of extra items. When clicked, the menu reloads and passes additional query parameters to the fetch function. The extra items can be used to search with different queries or show additional results, such as a full text search (which is slower to fetch). Each extra item should contain:

* A "text" property for the content to be displayed in the menu.
* A "meta" property for that will be passed using the fetch query parameter.

#### Example with extras

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'mentions',
  mentions_fetch: function (query, success) {
    // query.term is the text the user typed after the '@'
    var url = '/users?query=' + query.term;
    var isFullTextSearch = query.meta && query.meta.fullTextSearch;
    if (isFullTextSearch) {
      url += '&full=true'
    }

    // Extras are shown at the end of the list and will reload the menu
    // by passing the meta to the fetch function
    var extras = isFullTextSearch ? [ ] : [
      {
        text: 'Full user search...',
        meta: { fullTextSearch: true }
      }
    ];

    fetch(url).then(function(users) {
      // Where the user object must contain the properties `id` and `name`
      // but you could additionally include anything else you deem useful.
      success(users, extras);
    });
  }
});
```

### `mentions_item_type`

{{site.requires_5_6v}}

This option sets which user interface item type to use when displaying the list of users.

- The `name` item will only display the user's name.
- The `profile` item will display the user's name and can display an optional image and description.

For information on the properties required for the user object provided to [`mentions_fetch`](#mentions_fetch), see: [User properties](#userproperties).

**Type:** `String`

**Default Value:** `name`

**Possible Values:** `name`, `profile`

#### Example: Using `mentions_item_type`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'mentions',
  mentions_item_type: 'name'
});
```

##### User properties

The following table describes the properties available for user objects provided to the [`mentions_fetch` callback](#mentions_fetch). Properties may be required, optional, or not available; depending on the [`mentions_item_type`](#mentions_item_type) and [`mentions_select`](#mentions_select) options.

| Name | Value | `name` | `profile` | Description |
| ---- | ----- | ----------- | ----------- | ----------- |
| id | string | required | required | Used to identify the user mention in different callbacks |
| name | string | required | required |  Name to display and highlight matches |
| image | string | not available | optional | Image source for user avatar |
| description | string | not available | optional | Description to display |

### `mentions_min_chars`

{{site.requires_5_6v}}

This option specifies the number of characters a user needs to type after the "@" symbol before the list of users will be displayed.

**Type:** `Number`

**Default Value:** 1

#### Example: Using `mentions_min_chars`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'mentions',
  mentions_min_chars: 1
});
```

### `mentions_menu_complete`

This option overrides the default logic for inserting the mention into the editor. The callback should return an element created using the editor's document.

**Type:** `Function`

**Default Value:** `none`

#### Example: Using `mentions_menu_complete`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'mentions',
  mentions_selector: 'span.mymention',
  mentions_menu_complete: function (editor, userInfo) {
    var span = editor.getDoc().createElement('span');
    span.className = 'mymention';
    // store the user id in the mention so it can be identified later
    span.setAttribute('data-mention-id', userInfo.id);
    span.appendChild(editor.getDoc().createTextNode('@' + userInfo.name));
    return span;
  }
});
```

### `mentions_menu_hover`

This option enables you to provide an element to present next to the menu item being hovered. This lets you do custom UIs for presenting user information.

**Type:** `Function`

**Default Value:** `none`

#### Example: Using `mentions_menu_hover`

```js
var userRequest = {};
tinymce.init({
  selector: 'textarea',
  plugins: 'mentions',
  mentions_menu_hover: function (userInfo, success) {
    // request more information about the user from the server and cache it locally
    if (!userRequest[userInfo.id]) {
      userRequest[userInfo.id] = fetch('/user?id=' + userInfo.id);
    }
    userRequest[userInfo.id].then(function(userDetail) {
      var div = document.createElement('div');

      div.innerHTML = (
      '<div>' +
        '<h1>' + userDetail.fullName + '</h1>' +
        '<img src="' + userDetail.image + '" ' +
            'style="width: 50px; height: 50px; float: left;"/>' +
        '<p>' + userDetail.description + '</p>' +
      '</div>'
      );

      success(div);
    });
  }
});
```

### `mentions_selector`

This option enables you to provide a custom CSS selector that should match the element created using `mentions_menu_complete`. This enables the plugin to find existing mentions. The callback takes two parameters: the editor instance and the userInfo object.

**Type:** `Function`

**Default Value:** `none`

#### Example: Using `mentions_selector`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'mentions',
  mentions_selector: 'span.mymention',
  mentions_menu_complete: function (editor, userInfo) {
    var span = editor.getDoc().createElement('span');
    span.className = 'mymention';
    span.setAttribute('data-mention-id', userInfo.id);
    span.appendChild(editor.getDoc().createTextNode('@' + userInfo.name));
    return span;
  }
});
```

### `mentions_select`

This option enables a hover card to be presented when a user hovers over a mention in {{site.productname}}. This could include details about the user. A custom hover card HTML element can be provided or a predefined template can be specified.

**Type:** `Function`

**Default Value:** `none`

#### Example: Using `mentions_select`

```js
var userRequest = {};
tinymce.init({
  selector: 'textarea',
  plugins: 'mentions',
  mentions_selector: 'span.mymention',
  mentions_menu_complete: function (editor, userInfo) {
    var span = editor.getDoc().createElement('span');
    span.className = 'mymention';
    span.setAttribute('data-mention-id', userInfo.id);
    span.appendChild(editor.getDoc().createTextNode('@' + userInfo.name));
    return span;
  },
  mentions_select: function (mention, success) {
    // `mention` is the element we previously created with `mentions_menu_complete`
    // in this case we have chosen to store the id as an attribute
    var id = mention.getAttribute('data-mention-id');
    // request more information about the user from the server and cache locally
    if (!userRequest[id]) {
      userRequest[id] = fetch('/user?id=' + id);
    }
    userRequest[id].then(function(userDetail) {
      var div = document.createElement('div');
      div.innerHTML = (
        '<div>' +
        '<h1>' + userDetail.fullName + '</h1>' +
        '<img src="' + userDetail.image + '" ' +
            'style="width: 50px; height: 50px; float: left;"/>' +
        '<p>' + userDetail.description + '</p>' +
        '</div>'
      );
      success(div);
    });
  }
});
```

#### `mentions_select` with predefined templates

{{site.requires_5_6v}}

If `mentions_select` is resolved with an object specifying the type and user details, a predefined hover card template will be used. To use the predefined template, set `type` to `'profile'`. For details on the user properties required for the `profile` template, see: [User properties](#userproperties).

#### Example: Using the `'profile'` template with `mentions_select`

```js
var userRequest = {};
tinymce.init({
  selector: 'textarea',
  plugins: 'mentions',
  mentions_selector: 'span.mymention',
  mentions_menu_complete: function (editor, userInfo) {
    var span = editor.getDoc().createElement('span');
    span.className = 'mymention';
    span.setAttribute('data-mention-id', userInfo.id);
    span.appendChild(editor.getDoc().createTextNode('@' + userInfo.name));
    return span;
  },
  mentions_select: function (mention, success) {
    // `mention` is the element we previously created with `mentions_menu_complete`
    // in this case we have chosen to store the id as an attribute
    var id = mention.getAttribute('data-mention-id');
    // request more information about the user from the server and cache locally
    if (!userRequest[id]) {
      userRequest[id] = fetch('/user?id=' + id);
    }
    userRequest[id].then(function(userDetail) {
      success({ type: 'profile', user: userDetail });
    });
  }
});

## API

### `getUsers`

You can retrieve the inserted users by calling `getUsers` on the plugin instance object of an editor. This will return an array of users that the author `@mentioned` in the content, but only the ones currently present in the content and will exclude any existing before the content was created. It will also exclude duplicate inserts by using the `userInfo` objects id property.

#### Example: Using the `getUsers` API

```js
var users = tinymce.activeEditor.plugins.mentions.getUsers();
console.log(users);
```
