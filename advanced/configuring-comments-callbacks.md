---
layout: default
title: Configuring the Comments plugin in callback mode
title_nav: Callback mode
description: Information on configuring the Comments plugin in callback mode
keywords: comments commenting tinycomments callback
---

{% assign pluginname = "Comments" %}
{% assign plugincode = "comments" %}

**Callback mode** is the default mode for [the Comments plugin]({{site.baseurl}}/plugins/premium/comments/). In the callback mode, callback functions are required to save user comments on a server. The Comments functions (create, reply, edit, delete comment, delete all conversations, resolve, and lookup) are configured differently depending upon the server-side storage configuration.

## Interactive example

The following example uses a simulated server (provided by [Polly.js](https://netflix.github.io/pollyjs/)) which has been hidden from the example javascript to keep the example code concise. The interactions between TinyMCE and Polly.js are visible in the browser console.

{% include live-demo.html id="comments-callback" %}

### How the comments plugin works in callback mode

All options accept functions incorporating `done` and `fail` callbacks as parameters. The function return type is not important, but all functions must call exactly one of these two callbacks: `fail` or `done`.

* The `fail` callback takes either a string or a JavaScript Error type.

* The `done` callback takes an argument specific to each function.

Most (create, reply, and edit) functions require an `id` identifying the **current author**.

Current author
: The Comments plugin does not know the name of the current user. Determining the current user and storing the comment related to that user, has to be configured by the user.

After a user comments (triggering `tinycomments_create` for the first comment, or `tinycomments_reply` for subsequent comments), the Comments plugin requests the updated conversation using `tinycomments_lookup`, which should now contain the additional comment with the proper author.

## Configuration options - callback mode

### Required options

When using callback mode, the Comments plugin requires callback functions for the following options:

* [`tinycomments_create`](#tinycomments_create)
* [`tinycomments_reply`](#tinycomments_reply)
* [`tinycomments_edit_comment`](#tinycomments_edit_comment)
* [`tinycomments_delete_comment`](#tinycomments_delete_comment)
* [`tinycomments_delete`](#tinycomments_delete)
* [`tinycomments_delete_all`](#tinycomments_delete_all)
* [`tinycomments_lookup`](#tinycomments_lookup)

The [`tinycomments_resolve`](#tinycomments_resolve) option is _optional_.

### `tinycomments_create`

The Comments plugin uses the conversation `tinycomments_create` function to create a comment.

The `tinycomments_create` function saves the comment as a new conversation and returns a unique conversation ID via the `done` callback. If an unrecoverable error occurs, it should indicate this with the fail callback.

The `tinycomments_create` function is given a request (req) object as the first parameter, which has these fields:

`content`
: The content of the comment to create.

`createdAt`
: The date the comment was created.

The `done` callback should accept the following object:

```js
{
  conversationUid: string, // the new conversation uid
  // Optional error callback which will be run if the new conversation could not be created
  onError: function (err) { ... },
  // Optional success callback which will be run when the new conversation is successfully created
  onSuccess: function (uid) { ... }
}
```

For example:

```js
function create_comment(_ref, done, fail) {
  var content = _ref.content;
  var createdAt = _ref.createdAt;

  fetch('https://api.example/conversations/', {
    method: 'POST',
    body: JSON.stringify({ content: content, createdAt: createdAt }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Failed to create comment');
      }
      return response.json();
    })
    .then(function (_ref2) {
      var conversationUid = _ref2.conversationUid;
      done({ conversationUid: conversationUid });
    })
    .catch(function (e) {
      fail(e);
    });
}

tinymce.init({
  selector: '#editor',
  plugins: 'tinycomments',
  tinycomments_mode: 'callback',
  tinycomments_create: create_comment, // Add the callback to TinyMCE
  tinycomments_reply: reply_comment,
  tinycomments_edit_comment: edit_comment,
  tinycomments_delete: delete_comment_thread,
  tinycomments_delete_all: delete_all_comment_threads,
  tinycomments_delete_comment: delete_comment,
  tinycomments_lookup: lookup_comment
});
```

### `tinycomments_reply`

The Comments plugin uses the conversation `tinycomments_reply` function to reply to a comment.

The `tinycomments_reply` function saves the comment as a reply to an existing conversation and returns via the `done` callback once successful. Unrecoverable errors are communicated to {{site.productname}} by calling the `fail` callback instead.

The `tinycomments_reply` function is given a request (req) object as the first parameter, which has these fields:

`conversationUid`
: The uid of the conversation the reply is targeting.

`content`
: The content of the comment to create.

`createdAt`
: The date the comment was created.

The `done` callback should accept the following object:

```js
{
  commentUid: string // the value of the new comment uid
}
```

For example:

```js
function reply_comment(_ref, done, fail) {
  var conversationUid = _ref.conversationUid;
  var content = _ref.content;
  var createdAt = _ref.createdAt;

  fetch('https://api.example/conversations/' + conversationUid, {
    method: 'POST',
    body: JSON.stringify({ content: content, createdAt: createdAt }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Failed to reply to comment');
      }
      return response.json();
    })
    .then(function (_ref2) {
      var commentUid = _ref2.commentUid;
      done({ commentUid: commentUid });
    })
    .catch(function (e) {
      fail(e);
    });
}

tinymce.init({
  selector: '#editor',
  plugins: 'tinycomments',
  tinycomments_mode: 'callback',
  tinycomments_create: create_comment,
  tinycomments_reply: reply_comment, // Add the callback to TinyMCE
  tinycomments_edit_comment: edit_comment,
  tinycomments_delete: delete_comment_thread,
  tinycomments_delete_all: delete_all_comment_threads,
  tinycomments_delete_comment: delete_comment,
  tinycomments_lookup: lookup_comment
});
```

### `tinycomments_edit_comment`

The Comments plugin uses the conversation `tinycomments_edit_comment` function to edit a comment.

The `tinycomments_edit_comment` function allows updating or changing original comments and returns via the `done` callback once successful. Unrecoverable errors are communicated to {{site.productname}} by calling the `fail` callback instead.

The `tinycomments_edit_comment` function is given a request (req) object as the first parameter, which has these fields:

`conversationUid`
: The uid of the conversation the reply is targeting.

`commentUid`
: The uid of the comment to edit (it can be the same as `conversationUid` if editing the first comment in a conversation)

`content`
: The content of the comment to create.

`modifiedAt`
: The date the comment was modified.

The `done` callback should accept the following object:

```js
{
  canEdit: boolean, // whether or not the Edit succeeded
  reason: string? // an optional string explaining why the edit was not allowed (if canEdit is false)
}
```

For example:

```js
function edit_comment(_ref, done, fail) {
  var conversationUid = _ref.conversationUid;
  var commentUid = _ref.commentUid;
  var content = _ref.content;
  var modifiedAt = _ref.modifiedAt;

  fetch(
    'https://api.example/conversations/' + conversationUid + '/' + commentUid,
    {
      method: 'PUT',
      body: JSON.stringify({ content: content, modifiedAt: modifiedAt }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Failed to edit comment');
      }
      return response.json();
    })
    .then(function (_ref2) {
      var canEdit = _ref2.canEdit;
      done({ canEdit: canEdit });
    })
    .catch(function (e) {
      fail(e);
    });
}

tinymce.init({
  selector: '#editor',
  plugins: 'tinycomments',
  tinycomments_mode: 'callback',
  tinycomments_create: create_comment,
  tinycomments_reply: reply_comment,
  tinycomments_edit_comment: edit_comment, // Add the callback to TinyMCE
  tinycomments_delete: delete_comment_thread,
  tinycomments_delete_all: delete_all_comment_threads,
  tinycomments_delete_comment: delete_comment,
  tinycomments_lookup: lookup_comment
});
```


### `tinycomments_resolve`

{{site.requires_5_8v}}

This option adds a _Resolve Conversation_ item to the dropdown menu of the first comment in a conversation.

The `tinycomments_resolve` function should asynchronously return a flag indicating whether the comment thread was resolved using the `done` callback. Unrecoverable errors are communicated to {{site.productname}} by calling the `fail` callback instead.

The `tinycomments_resolve` function is passed a (`req`) object as the first parameter, which contains the following key-value pair:

`conversationUid`
: The uid of the conversation the reply is targeting.

The `done` callback should accept the following object:

```js
{
  canResolve: boolean // whether or not the conversation can be resolved
  reason?: string // an optional string explaining why resolving was not allowed (if canResolve is false)
}
```

> **Note**: Failure to resolve due to permissions or business rules should be indicated by `canResolve: false`, while unexpected errors should be indicated using the `fail` callback.

For example:

```js
function resolve_comment_thread(_ref, done, fail) {
  var conversationUid = _ref.conversationUid;
  fetch('https://api.example/conversations/' + conversationUid, {
    method: 'PUT',
  }).then(function (response) {
    if (response.ok) {
      done({ canResolve: true });
    } else if (response.status === 403) {
      done({ canResolve: false });
    } else {
      fail(new Error('Something has gone wrong...'));
    }
  });
}

tinymce.init({
  selector: '#editor',
  plugins: 'tinycomments',
  tinycomments_mode: 'callback',
  tinycomments_create: create_comment,
  tinycomments_reply: reply_comment,
  tinycomments_edit_comment: edit_comment,
  tinycomments_resolve: resolve_comment_thread, // Add the callback to TinyMCE
  tinycomments_delete: delete_comment_thread,
  tinycomments_delete_all: delete_all_comment_threads,
  tinycomments_delete_comment: delete_comment,
  tinycomments_lookup: lookup_comment
});
```

### `tinycomments_delete_comment`

The `tinycomments_delete_comment` function should asynchronously return a flag indicating whether the comment or comment thread was removed using the `done` callback. Unrecoverable errors are communicated to {{site.productname}} by calling the `fail` callback instead.

The `tinycomments_delete_comment` function is given a request (req) object as the first parameter, which has these fields:

`conversationUid`
: The uid of the conversation the reply is targeting.

`commentUid`
: The uid of the comment to delete (cannot be the same as `conversationUid`).

The `done` callback should accept the following object:

```js
{
  canDelete: boolean, // whether or not an individual comment can be deleted
  reason: string? // an optional reason explaining why the delete was not allowed (if canDelete is false)
}
```

> **Note**: Failure to delete due to permissions or business rules is indicated by "false", while unexpected errors should be indicated using the "fail" callback.

For example:

```js
function delete_comment(_ref, done, fail) {
  var conversationUid = _ref.conversationUid;
  var commentUid = _ref.commentUid;

  fetch(
    'https://api.example/conversations/' + conversationUid + '/' + commentUid,
    {
      method: 'DELETE',
    }
  ).then(function (response) {
    if (response.ok) {
      done({ canDelete: true });
    } else if (response.status === 403) {
      done({ canDelete: false });
    } else {
      fail(new Error('Something has gone wrong...'));
    }
  });
}

tinymce.init({
  selector: '#editor',
  plugins: 'tinycomments',
  tinycomments_mode: 'callback',
  tinycomments_create: create_comment,
  tinycomments_reply: reply_comment,
  tinycomments_edit_comment: edit_comment,
  tinycomments_delete: delete_comment_thread, // Add the callback to TinyMCE
  tinycomments_delete_all: delete_all_comment_threads,
  tinycomments_delete_comment: delete_comment,
  tinycomments_lookup: lookup_comment
});
```

### `tinycomments_delete`

The `tinycomments_delete` function should asynchronously return a flag indicating whether the comment or comment thread was removed using the `done` callback. Unrecoverable errors are communicated to {{site.productname}} by calling the `fail` callback instead.

The `tinycomments_delete` function is passed a (`req`) object as the first parameter, which contains the following key-value pair:

`conversationUid`
: The uid of the conversation the reply is targeting.

The `done` callback should accept the following object:

```js
{
  canDelete: boolean // whether or not the conversation can be deleted
  reason: string? // an optional string explaining why the delete was not allowed (if canDelete is false)
}
```

> **Note**: Failure to delete due to permissions or business rules is indicated by "false", while unexpected errors should be indicated using the "fail" callback.

For example:

```js
function delete_comment_thread(_ref, done, fail) {
  var conversationUid = _ref.conversationUid;
  fetch('https://api.example/conversations/' + conversationUid, {
    method: 'DELETE',
  }).then(function (response) {
    if (response.ok) {
      done({ canDelete: true });
    } else if (response.status === 403) {
      done({ canDelete: false });
    } else {
      fail(new Error('Something has gone wrong...'));
    }
  });
}

tinymce.init({
  selector: '#editor',
  plugins: 'tinycomments',
  tinycomments_mode: 'callback',
  tinycomments_create: create_comment,
  tinycomments_reply: reply_comment,
  tinycomments_edit_comment: edit_comment,
  tinycomments_delete: delete_comment_thread, // Add the callback to TinyMCE
  tinycomments_delete_all: delete_all_comment_threads,
  tinycomments_delete_comment: delete_comment,
  tinycomments_lookup: lookup_comment
});
```

### `tinycomments_delete_all`

The `tinycomments_delete_all` function should asynchronously return a flag indicating whether all the comments in a conversation were removed using the `done` callback. Unrecoverable errors are communicated to {{site.productname}} by calling the `fail` callback instead.

The `tinycomments_delete_all` function is given a request (req) object as the first parameter with no fields.

The `done` callback should accept the following object:

```js
{
  canDelete: boolean, // whether or not all conversations can be deleted
  reason: string? // an optional string explaining why the deleteAll was not allowed (if canDelete is false)
}
```

> **Note**: Failure to delete due to permissions or business rules should be indicated by `canDelete: false`, while unexpected errors should be indicated using the `fail` callback.

For example:

```js
function delete_all_comment_threads(_req, done, fail) {
  fetch('https://api.example/conversations', {
    method: 'DELETE',
  }).then(function (response) {
    if (response.ok) {
      done({ canDelete: true });
    } else if (response.status === 403) {
      done({ canDelete: false });
    } else {
      fail(new Error('Something has gone wrong...'));
    }
  });
}

tinymce.init({
  selector: '#editor',
  plugins: 'tinycomments',
  tinycomments_mode: 'callback',
  tinycomments_create: create_comment,
  tinycomments_reply: reply_comment,
  tinycomments_edit_comment: edit_comment,
  tinycomments_delete: delete_comment_thread,
  tinycomments_delete_all: delete_all_comment_threads, // Add the callback to TinyMCE
  tinycomments_delete_comment: delete_comment,
  tinycomments_lookup: lookup_comment
});
```


### `tinycomments_lookup`

The Comments plugin uses the Conversation `tinycomments_lookup` function to retrieve an existing conversation via a conversation unique ID.

The **Display names** configuration must be considered for the `tinycomments_lookup` function:

Display names
: The Comments plugin uses a simple string for the display name. For the `lookup` function, Comments expects each comment to contain the author's display name, not a user ID, as Comments does not know the user identities. The `lookup` function should be implemented considering this and resolve user identifiers to an appropriate display name.

The conventional conversation object structure that should be returned via the `done` callback is as follows:

The `tinycomments_lookup` function is passed a (`req`) object as the first parameter, which contains the following key-value pair:

`conversationUid`
: The uid of the conversation the reply is targeting.

The `done` callback should accept the following object:

```js
{
 conversation: {
   uid: string, // the uid of the conversation,
   comments: [
    {
      author: string, // author of first comment
      authorName: string, // optional - Display name to use instead of author. Defaults to using `author` if not specified
      createdAt: date, // when the first comment was created
      content: string, // content of first comment
      modifiedAt: date, // when the first comment was created/last updated
      uid: string // the uid of the first comment in the conversation
    },
    {
      author: string, // author of second comment
      authorName: string, // optional - Display name to use instead of author. Defaults to using `author` if not specified
      createdAt: date, // when the second comment was created
      content: string, // content of second comment
      modifiedAt: date, // when the second comment was created/last updated
      uid: string // the uid of the second comment in the conversation
    }
  ]
 }
}
```

> **Note**: The dates should use [ISO 8601 format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString). This can be generated in JavaScript with: `new Date().toISOString()`.

For example:

```js
function lookup_comment({ conversationUid }, done, fail) {
  var lookup = async function () {
    var convResp = await fetch(
      'https://api.example/conversations/' + conversationUid
    );
    if (!convResp.ok) {
      throw new Error('Failed to get conversation');
    }
    var comments = await convResp.json();
    var usersResp = await fetch('https://api.example/users/');
    if (!usersResp.ok) {
      throw new Error('Failed to get users');
    }
    var { users } = await usersResp.json();
    var getUser = function (userId) {
      return users.find(function (u) {
        return u.id === userId;
      });
    };
    return {
      conversation: {
        uid: conversationUid,
        comments: comments.map(function (comment) {
          return {
            ...comment,
            content: comment.content,
            authorName: getUser(comment.author)?.displayName,
          };
        }),
      },
    };
  };
  lookup()
    .then(function (data) {
      console.log('Lookup success ' + conversationUid, data);
      done(data);
    })
    .catch(function (err) {
      console.error('Lookup failure ' + conversationUid, err);
      fail(err);
    });
}

tinymce.init({
  selector: '#editor',
  plugins: 'tinycomments',
  tinycomments_mode: 'callback',
  tinycomments_create: create_comment,
  tinycomments_reply: reply_comment,
  tinycomments_edit_comment: edit_comment,
  tinycomments_delete: delete_comment_thread,
  tinycomments_delete_all: delete_all_comment_threads,
  tinycomments_delete_comment: delete_comment,
  tinycomments_lookup: lookup_comment // Add the callback to TinyMCE
});
```

{% include plugins/comments_open_sidebar.md %}

{% include plugins/comments_highlighting_css.md %}
