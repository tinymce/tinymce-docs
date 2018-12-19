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

All functions incorporate done and fail callbacks as parameters. The function return type is not important, but all functions must call one of these two callbacks.

If the comments are configured to be persistent to a form field to be persisted on document save, the appropriate callback should be called prior to the function returning.

However, if comments are persisted directly back to a server as they are made, they are called asynchronously after the designated network call has completed.


### Considerations

#### Display Names

Comments expects each comment to contain the author's display name, not a user ID, as Comments does not know the user identities. The `lookup` function should be implemented  considering this and resolve user identifiers to an appropriate display name.

#### Current Author

Comments does not know the name of the current user. After a user comments (triggering create for the first comment, or reply for subsequent comments) Comments requests the updated conversation via `lookup`, which should now contain the additional comment with the proper author. Determining the current user, and storing the comment related to that user, has to be done by the user.

### Create

Comments uses the Conversation create function to create a comment.

The create function saves the comment as a new conversation and returns a unique conversation ID via the done callback. If an unrecoverable error occurs, it should indicate this with the fail callback.

The following are examples of how `create` can be implemented depending on whether storage settings are configured to be persistent in real time or on content-save.

#### Example - Storage - persist in real-time

Here is an example of how `create` can be implemented using storage configured to persist in real-time:

```js
function create(req, done, fail) {
    fetch(
      'https://api.example/conversations/',
      { method: 'POST', body: req }
    ).then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log('here', json.uid);
      done({ conversationUid: json.uid });
    }).catch(function() {
      fail(new Error('Something has gone wrong...'));
    });
  }
```

#### Example - Storage - persist on content-save

Here is an example of how `create` can be implemented using storage configured to persist on content-save:

```js
function create (req, done, fail) {
    if (req.content === 'fail') {
      fail(new Error('Something has gone wrong...'));
    } else {
      var uid = 'annotation-' + randomString();
      setConversation(
        uid,
        // [ { uid, author, content: req.content, createdAt: ts, modifiedAt: ts } ]
        [ { author: authorId, content: req.content, createdAt: req.createdAt, modifiedAt: req.createdAt } ]
      );
      done({
        conversationUid: uid
      });
    }
  }
```

### Reply

Comments uses the conversation `reply` function to reply to a comment.

The `reply` function saves the comment as a reply to an existing conversation and returns via the `done` callback once successful. Unrecoverable errors are communicated to TinyMCE by calling the `fail` callback instead.

#### Example - Storage - persist on content-save

Here is an example of how `reply` can be implemented using storage configured to persist on content-save:

```js
function reply(req, done, fail) {
    var comments = getConversation(req.conversationUid);
    var replyUid = 'annotation-' + randomString();
    comments.push({
      uid: replyUid,
      author: authorId,
      content: req.content,
      createdAt: req.createdAt,
      modifiedAt: req.modifiedAt
    });
    setConversation(req.conversationUid, comments);
    done({ commentUid: replyUid });
  }
```

### Delete

The `delete` function should asynchronously return a flag indicating whether the comment/comment thread was removed using the done callback. Unrecoverable errors are communicated to TinyMCE by calling the fail callback instead.

The following are examples of how `delete` can be implemented depending on whether storage settings are configured to be persistent in real time or on content-save.

<!--#### Example - Storage - persist in real-time

Here is an example of how `delete` can be implemented using storage configured to persist in real-time:

```js
function del(uid, done, fail) {
    fetch(
      'https://api.example/conversations/'+uid,
      { method: 'DELETE' }
    ).then(function(response) {
      if (response.ok) {
        done(true);
      } else if (response.status == 403) {
        done(false)
      } else {
        fail(new Error('Something has gone wrong...'));
      }
    });
  }
```-->

#### Example - Storage - persist on content-save

Here is an example of how `delete` can be implemented using storage configured to persist on content-save:

```js
  function del(req, done, fail) {
      // only allow first commenter to delete
      if (getConversation(req.conversationUid)[0].author === authorId) {
        deleteConversation(req.conversationUid);
        done({ canDelete: true });
      } else {
        done({ canDelete: false });
      }
    }
```

> Note: Failure to delete due to permissions or business rules is indicated by "false", while unexpected errors should be indicated using the "fail" callback.

### Lookup

Comments uses the Conversation `lookup` function to retrieve an existing conversation via a conversation unique ID.

The conventional conversation object structure that should be returned via the `done` callback is as follows:

#### Conversation object

```js
{
 "comments": [
  <comment1>,
  <comment2>,
  ...
 ]
}

```
#### Comment object

```js
{
  "author": "Author Display Name",
  "content": "This is the text of the comment"
}

```

The following are examples of how `lookup` can be implemented if you choose to configure your storage settings to be either persistent in real time or on content-save.

#### Example - Storage - persist in real-time

Here is an example of how `lookup` can be implemented using storage configured to persist in real-time:

```js
  function lookup(uid, done, fail) {
    fetch('https://api.example/conversations/'+uid)
      .then(function(response) { return response.json(); })
      .then(function(json) {
        var conversation = json.comments;
        return fetch('https://api.example/users/')
          .then(function(response) { return response.json(); })
          .then(function(json) {
            var users = json.users;
            var unknown = { displayName: 'Unknown' };
            return conversation.map(function(item) {
              var user = users.find(function(v) { return v.id == item.user; });
              return {
                author: (user || unknown).displayName,
                content: item.comment
              };
            });
          });
      })
      .then(function(comments) {
        done({ comments: comments });
      })
      .catch(function() {
        fail(new Error('Something has gone wrong...'));
      })
  }
```

#### Example - Storage - persist on content-save

Here is an example of how `lookup` can be implemented using storage configured to persist on content-save, utilizing an in-memory lookup function to resolve author display names:

```js
function lookup(uid, done, fail) {
  try {
    var comments = getConversation(uid).map(function(item) {
      return {
        author: getAuthorDisplayName(item.user),
        content: item.comment
      };
    });
    done({ comments: comments });
  } catch {
    fail(new Error('Error looking up conversation...'));
  }
}
```

For more information on Comments commercial feature, visit our [Premium Features]({{ site.baseurl }}/enterprise/tiny-comments/) page.
