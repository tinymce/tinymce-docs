---
layout: default
title: Configuring callbacks for the Comments plugin
title_nav: Configuring callbacks for the Comments plugin
description: Instructions for configuring callbacks for the Comments plugin
keywords: comments commenting tinycomments callback
---

**Callback mode** is the default mode for [the Comments plugin]({{site.baseurl}}/plugins/comments/). In the callback mode, the user needs to configure storage to be able to save comments on the server. The Comments functions (create, reply, edit, delete comment, delete all conversations, and lookup) are configured differently depending upon the server-side storage configuration.

### Required settings

The Comments plugin requires the following functions to be defined:

```js
tinymce.init({
  ...
  tinycomments_create: function (req, done, fail) { ... },
  tinycomments_reply: function (req, done, fail) { ... },
  tinycomments_delete: function (req, done, fail) { ... },
  tinycomments_delete_all: function (req, done, fail) { ... },
  tinycomments_delete_comment: function (req, done, fail) { ... },
  tinycomments_lookup: function (req, done, fail) { ... },
  tinycomments_edit_comment: function (req, done, fail) { ... }
});

```

All functions incorporate `done` and `fail` callbacks as parameters. The function return type is not important, but all functions must call exactly one of these two callbacks: `fail` or `done`.

* The `fail` callback takes either a string or a JavaScript Error type.

* The `done` callback takes an argument specific to each function.

Most (create, reply, and edit) functions require configuring the **current author**:

* **Current author** - the Comments plugin does not know the name of the current user. After a user comments (triggering `tinycomments_create` for the first comment, or `tinycomments_reply` for subsequent comments), Comments requests the updated conversation via `tinycomments_lookup`, which should now contain the additional comment with the proper author. Determining the current user and storing the comment related to that user, has to be configured by the user.

### `tinycomments_create`

The Comments plugin uses the conversation `tinycomments_create` function to create a comment.

The `tinycomments_create` function saves the comment as a new conversation and returns a unique conversation ID via the `done` callback. If an unrecoverable error occurs, it should indicate this with the fail callback.

The `tinycomments_create` function is given a request (req) object as the first parameter, which has these fields:

* **content**: The content of the comment to create.

* **createdAt**: The date the comment was created.

The done callback needs to take an object of the form:

```js
{
  conversationUid: string // the new conversation uid
}
```

### `tinycomments_reply`

The Comments plugin uses the conversation `tinycomments_reply` function to reply to a comment.

The `tinycomments_reply` function saves the comment as a reply to an existing conversation and returns via the `done` callback once successful. Unrecoverable errors are communicated to {{site.productname}} by calling the `fail` callback instead.

The `tinycomments_reply` function is given a request (req) object as the first parameter, which has these fields:

* **conversationUid**: The uid of the conversation the reply is a part of.

* **content**: The content of the comment to create.

* **createdAt**: The date the comment was created.

The done callback needs to take an object of the form:

```js
{
  commentUid: string // the value of the new comment uid
}
```

### `tinycomments_edit_comment`

The Comments plugin uses the conversation `tinycomments_edit_comment` function to edit a comment.

The `tinycomments_edit_comment` function allows updating or changing original comments and returns via the `done` callback once successful. Unrecoverable errors are communicated to {{site.productname}} by calling the `fail` callback instead.

The `tinycomments_edit_comment` function is given a request (req) object as the first parameter, which has these fields:

* **conversationUid**: The uid of the conversation the reply is a part of.

* **commentUid**: The uid of the comment to edit (it can be the same as `conversationUid` if editing the first comment in a conversation)

* **content**: The content of the comment to create.

* **modifiedAt**: The date the comment was modified.

The done callback needs to take an object of the form:

```js
{
  canEdit: boolean, // whether or not the Edit succeeded
  reason: string? // an optional string explaining why the edit was not allowed (if canEdit is false)
}
```

### `tinycomments_delete`

The `tinycomments_delete` function should asynchronously return a flag indicating whether the comment/comment thread was removed using the `done` callback. Unrecoverable errors are communicated to {{site.productname}} by calling the `fail` callback instead.

The `tinycomments_delete` function is given a request (req) object as the first parameter, which has this field:

* **conversationUid**: The uid of the conversation the reply is a part of.

The done callback needs to take an object of the form:

```js
{
  canDelete: boolean // whether or not the conversation can be deleted
  reason: string? // an optional string explaining why the delete was not allowed (if canDelete is false)
}
```

> **Note**: Failure to delete due to permissions or business rules is indicated by "false", while unexpected errors should be indicated using the "fail" callback.

### `tinycomments_delete_all`

The `tinycomments_delete_all` function should asynchronously return a flag indicating whether all the comments in a conversation were removed using the `done` callback. Unrecoverable errors are communicated to {{site.productname}} by calling the `fail` callback instead.

The `tinycomments_delete_all` function is given a request (req) object as the first parameter with no fields.

The done callback needs to take an object of the form:

```js
{
  canDelete: boolean, // whether or not all conversations can be deleted
  reason: string? // an optional string explaining why the deleteAll was not allowed (if canDelete is false)
}
```

> **Note**: Failure to delete due to permissions or business rules is indicated by "false", while unexpected errors should be indicated using the "fail" callback.

### `tinycomments_delete_comment`

The `tinycomments_delete_comment` function should asynchronously return a flag indicating whether the comment/comment thread was removed using the `done` callback. Unrecoverable errors are communicated to {{site.productname}} by calling the `fail` callback instead.

The `tinycomments_delete_comment` function is given a request (req) object as the first parameter, which has these fields:

* **conversationUid**: The uid of the conversation the reply is a part of.
* **commentUid**: The uid of the comment to delete (cannot be the same as conversationUid)

The done callback needs to take an object of the form:

```js
{
  canDelete: boolean, // whether or not an individual comment can be deleted
  reason: string? // an optional reason explaining why the delete was not allowed (if canDelete is false)
}
```

> **Note**: Failure to delete due to permissions or business rules is indicated by "false", while unexpected errors should be indicated using the "fail" callback.

### `tinycomments_lookup`

The Comments plugin uses the Conversation `tinycomments_lookup` function to retrieve an existing conversation via a conversation unique ID.

The **Display names** configuration must be considered for the `tinycomments_lookup` function:

* **Display names** - The Comments plugin uses a simple string for the display name. For the `lookup` function, Comments expects each comment to contain the author's display name, not a user ID, as Comments does not know the user identities. The `lookup` function should be implemented considering this and resolve user identifiers to an appropriate display name.

The conventional conversation object structure that should be returned via the `done` callback is as follows:

The `tinycomments_lookup` function is given a request (req) object as the first parameter, which has this field:

* **conversationUid**: The uid of the conversation the reply is a part of.

The done callback needs to take an object of the form:

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

For more information on the Comments commercial feature, visit our [Premium Features]({{ site.baseurl }}/enterprise/tiny-comments/) page.
