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

This option lets you request a list of uses from your server that match a search query. The callback gets passed two parameters: one is the search query object, the other is the success callback to execute with the results. The query object has a term property that contains what the user has typed after the "@" sign. The success call should contain an array of users with the required properties "id" and "name".

**Type:** `function`

**Default Value:** `none`

#### Example: Using`mentions_fetch`

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

> **Important:**  The values returned in the users array for "id" and "name" all need to be `String` values.

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

### `mentions_menu_complete`

This option overrides the default logic for inserting the mention into the editor. The callback should return an element created using the editor's document.

**Type:** `function`

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

**Type:** `function`

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

**Type:** `function`

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

This option enables you to provide an element to be presented below a hovered mention on the page. This could include more details about the user.

**Type:** `function`

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

## API

### `getUsers`

You can retrieve the inserted users by calling `getUsers` on the plugin instance object of an editor. This will return an array of users that the author `@mentioned` in the content, but only the ones currently present in the content and will exclude any existing before the content was created. It will also exclude duplicate inserts by using the `userInfo` objects id property.

#### Example: Using the `getUsers` API

```js
var users = tinymce.activeEditor.plugins.mentions.getUsers();
console.log(users);
```