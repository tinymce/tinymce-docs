---
layout: default
title: Configuring callbacks for comments
title_nav: Configuring callbacks for comments
description: Instructions for configuring callbacks for Comments
keywords: comments commenting tinycomments callback
---

## Introduction

Callback mode is the default mode for [Tiny Comments]({{site.baseurl}}/plugins/comments/). In the callback mode the user needs to configure storage to be able to save comments on the server. The storage settings can be configured to either persist the comments immediately or save them at the same time as the content.
How the comments are stored effects when other users see new comments. The Comments functions (create, reply, edit, delete comment, delete all conversations, and lookup) are configured differently depending upon the server-side storage configuration.

In this chapter, we have provided examples of both ways of configuring Comments storage.

#### Helper Functions

We have used the following helper functions in our demo above:

* **setConversation(uid, conversation)** `setConversation` is a function written to synchronously write a conversation to a form field for submission to the server later.

* **randomString()** `randomString()` is a function used in the `create` function to return a 62-bits random strings to provision a large number of UIDs.

* **getConversation(uid)** `getConversation` is a function written to synchronously retrieve an existing conversation from a form field populated by the server.

* **deleteConversation(uid)** `deleteConversation(uid)` is a function to allow only the first commenter to delete a comment.

* **deleteAllConversations()** `deleteAllConversations()` is a function to delete all the conversations in a document.

* **getAuthorDisplayName(uid)** `getAuthorDisplayName(authorID)` is a function to retrieve an existing conversation via a conversation UID (`authorID` in our example).


## Comments Implementation Functions

Comments requires the following functions to be defined:

```js
tinymce.init({
  ...
   tinycomments_create: create,
   tinycomments_reply: reply,
   tinycomments_delete: del,
   tinycomments_delete_all: deleteAll,
   tinycomments_delete_comment: deleteComment,
   tinycomments_lookup: lookup,
   tinycomments_edit_comment: editComment
});
```

All functions incorporate `done` and `fail` callbacks as parameters. The function return type is not important, but all functions must call exactly one of these two callbacks: `fail` or `done`.

* The `fail` callback takes either a string or a JavaScript Error type.

* The `done` callback takes an argument specific to each function.

### Considerations

#### Display Names

Comments expects each comment to contain the author's display name, not a user ID, as Comments does not know the user identities. The `lookup` function should be implemented  considering this and resolve user identifiers to an appropriate display name.

#### Current Author

Comments does not know the name of the current user. After a user comments (triggering create for the first comment, or reply for subsequent comments) Comments requests the updated conversation via `lookup`, which should now contain the additional comment with the proper author. Determining the current user, and storing the comment related to that user, has to be done by the user.

### Create

Comments uses the Conversation create function to create a comment.

The create function saves the comment as a new conversation and returns a unique conversation ID via the `done` callback. If an unrecoverable error occurs, it should indicate this with the fail callback.

The create function is given a request object as the first parameter, which has these fields:

* **content**: the content of the comment to create.

* **createdAt**: the date the comment was created.

The done callback needs to take an object of the form:

```js
{
  conversationUid: whatever the new conversation uid is
}
```

### Reply

Comments uses the conversation `reply` function to reply to a comment.

The `reply` function saves the comment as a reply to an existing conversation and returns via the `done` callback once successful. Unrecoverable errors are communicated to TinyMCE by calling the `fail` callback instead.

The `reply` function is given a request object as the first parameter, which has these fields:

* **conversationUid**: the uid of the conversation the reply is a part of.

* **content**: the content of the comment to create.

* **createdAt**: the date the comment was created.

The done callback needs to take an object of the form:

```js
{
  commentUid: whatever the new comment uid is
}
```

### Edit

Comments uses the conversation `edit` function to edit a comment.

The `edit` function allows updating or changing an original comments and returns via the `done` callback once successful. Unrecoverable errors are communicated to TinyMCE by calling the `fail` callback instead.

The `edit` function is given a request object as the first parameter, which has these fields:

* **conversationUid**: the uid of the conversation the reply is a part of.

* **content**: the content of the comment to create.

* **createdAt**: the date the comment was created.

The done callback needs to take an object of the form:

```js
{
  commentUid: whatever the new comment uid is
}

### Delete

The `delete` function should asynchronously return a flag indicating whether the comment/comment thread was removed using the `done` callback. Unrecoverable errors are communicated to TinyMCE by calling the `fail` callback instead.

The `delete` function is given a request object as the first parameter, which has these fields:

* **conversationUid**: the uid of the conversation the reply is a part of.

The done callback needs to take an object of the form:

```js
{
  canDelete:boolean
}
```

> Note: Failure to delete due to permissions or business rules is indicated by "false", while unexpected errors should be indicated using the "fail" callback.

### DeleteAll

The `deleteAll` function should asynchronously return a flag indicating whether all the comments in a conversation were removed using the `done` callback. Unrecoverable errors are communicated to TinyMCE by calling the `fail` callback instead.

The `deleteAll` function is given a request object as the first parameter, which has these fields:

* **conversationUid**: the uid of the conversation the reply is a part of.

The done callback needs to take an object of the form:

```js
{
  canDelete:boolean
}
```
> Note: Failure to delete due to permissions or business rules is indicated by "false", while unexpected errors should be indicated using the "fail" callback.

### DeleteComments

The `deleteComments` function should asynchronously return a flag indicating whether the comment/comment thread was removed using the `done` callback. Unrecoverable errors are communicated to TinyMCE by calling the `fail` callback instead.

The `deleteComments` function is given a request object as the first parameter, which has these fields:

* **conversationUid**: the uid of the conversation the reply is a part of.

The done callback needs to take an object of the form:

```js
{
  canDelete:boolean
}
```
> Note: Failure to delete due to permissions or business rules is indicated by "false", while unexpected errors should be indicated using the "fail" callback.


### Lookup

Comments uses the Conversation `lookup` function to retrieve an existing conversation via a conversation unique ID.

The conventional conversation object structure that should be returned via the `done` callback is as follows:

The `lookup` function is given a request object as the first parameter, which has these fields:

* **conversationUid**: the uid of the conversation the reply is a part of.

The done callback needs to take an object of the form:

#### Comment object

```js
{
 comments: [
   {
     author: 'Demouser1',
     createdAt: 'date',
     content: 'Starter',
     modifiedAt: 'date',
     uid: 'asfasdf87dfas08asd0fsadflsadf'
   },
 ]
}

```

For more information on Comments commercial feature, visit our [Premium Features]({{ site.baseurl }}/enterprise/tiny-comments/) page.
