---
layout: default
title: Comments plugin
title_nav: Comments
description: Tiny Comments provides the ability to add comments to the content and collaborate with other users for content editing.
keywords: comments commenting tinycomments
---

## Introduction

The Tiny Comments plugin provides the user an ability to start or join a conversation by adding comments to the content within the TinyMCE editor. The Comments plugin is built upon the new [Annotations API]({{ site.baseurl }}/advanced/annotations/) and uses annotations to create comment threads (conversations).

This section describes the various configuration options for the Comments plugin.

## Storage

Like TinyMCE, the Comments plugin does not directly provide the user an ability to save the comments. You need to configure storage at your end to be able to save comments on your server. You can choose to configure your storage settings to either persist them immediately or save them at the same time as the content.

How you store those comments affects when other users see new comments. The Comments functions (create, reply, delete, and lookup) are configured differently depending upon the server-side storage configuration.

In this chapter, we have provided examples of both ways of configuring Comments storage.

### Storage - persist in real-time

The following demo showcases the Comments functionality using storage configured to persist in real-time:

{% include codepen.html id="tinycomments-realtime" %}

### Storage - persist on content-save

The following demo showcases the Comments functionality using storage configured to persist on content-save.

{% include codepen.html id="tinycomments-save" %}

#### Helper Functions

We have used the following helper functions in our demo above:

* **setConversation(uid, conversation)**
`setConversation` is a function written to synchronously write a conversation to a form field for submission to the server later.

* **randomString()**
`randomString()` is a function used in the `create` function to return a 62-bits random strings to provision a large number of UIDs.

* **getConversation(uid)**
`getConversation` is a function written to synchronously retrieve an existing conversation from a form field populated by the server.

* **deleteConversation(uid)**
`deleteConversation(uid)` is a function to allow only the first commenter to delete a comment.

* **getAuthorDisplayName(uid)**
`getAuthorDisplayName(authorID)` is a function to retrieve an existing conversation via a conversation UID (`authorID` in our example).

## Comments Implementation Functions

Comments requires four functions to be defined:

```js
tinymce.init({
  ...
  tinycomments_create: create,
  tinycomments_reply: reply,
  tinycomments_delete: del,
  tinycomments_lookup: lookup
});
```

All functions incorporate `done` and `fail` callbacks as parameters. The function return type is not important, but all functions must call one of these two callbacks.

If you are persisting the comments to a form field to be persisted on document save, you likely would call the appropriate callback prior to the function returning.

However, if you are persisting comments directly back to a server as they are made, you would call them asynchronously after the network call to do so had completed.

### Considerations

#### Display Names

Comments expects each comment to contain the author's _display name_, not a user ID, as Comments does not know the user identities. Your implementation of `lookup` will most likely need to consider this and resolve user identifiers to an appropriate display name.

#### Current Author

Comments does not know the name of the current user. After a user comments (triggering `create` for the first comment, or `reply` for subsequent comments) Comments requests the updated conversation via `lookup`, which should now contain the additional comment with the proper author. Determining the current user, and storing the comment related to that user, has to be done by the user.

### Create

Comments uses the Conversation `create` function to create a comment.

The `create` function saves the comment as a new conversation and returns a unique conversation ID via the `done` callback. If an unrecoverable error occurs, it should indicate this with the `fail` callback.

The following are examples of how `create` can be implemented if you choose to configure your storage settings to be either persistent in real time or on content-save.

#### Example - Storage - persist in real-time

Here is an example of how `create` can be implemented using storage configured to persist in real-time:

```js
function create(content, done, fail) {
    fetch(
      'https://api.example/conversations/',
      { method: 'POST', body: content }
    ).then(function(response) {
      return response.json();
    }).then(function(json) {
      done(json.uid);
    }).catch(function() {
      fail(new Error('Something has gone wrong...'));
    });
  }
```

#### Example - Storage - persist on content-save

Here is an example of how `create` can be implemented using storage configured to persist on content-save:

```js
var currentAuthorId = ...
function create(content, done, fail) {
  // `randomString` should be written to produce random strings with a very low
  // chance of collisions.
  var uid = 'annotation-' + randomString();
  try {
    // `setConversation` here is a function written to synchronously persist
    // the new conversation to a form field for later submission to the server
    setConversation(
      uid,
      [ { user: currentAuthorId, comment: content } ]
     );
     done(uid);
   } catch {
    fail(new Error('Error creating conversation...'));
  }
}
```

### Reply

Comments uses the Conversation `reply` function to reply to a comment.

The `reply` function saves the comment as a reply to an existing conversation and returns via the `done` callback once successful. Unrecoverable errors are communicated to TinyMCE by calling the `fail` callback instead.

The following are examples of how `reply` can be implemented if you choose to configure your storage settings to be either persistent in real time or on content-save.

#### Example - Storage - persist in real-time

Here is an example of how `reply` can be implemented using storage configured to persist in real-time:

```js
function reply(uid, content, done, fail) {
    fetch(
      'https://api.example/conversations/'+uid,
      { method: 'PATCH', body: content }
    ).then(function(response) {
      if (response.ok) {
        done();
      } else {
        fail(new Error('Something has gone wrong...'));
      }
    });
  }
```

#### Example - Storage - persist on content-save

Here is an example of how `reply` can be implemented using storage configured to persist on content-save:

```js
var currentAuthorId = ...
function reply(uid, content, done, fail) {
  try {
    // "getConversation" here is a function written to synchronously retrieve an
    // existing conversation from a form field populated by the server.
    var comments = getConversation(uid);
    // Add comment to the conversation
    comments.push({
      user: currentAuthorId,
      comment: content
    });
    // Synchronously write the comment back to the form field, awaiting persist
    // on document save.
    setConversation(uid, comments);
    done();
  } catch {
     fail(new Error('Error replying to conversation...'));
   }
}

```

### Delete

Comments uses the Conversation `delete` function to delete an entire conversation.

The `delete` function should asynchronously return a flag indicating whether the comment/comment thread was removed using the `done` callback. Unrecoverable errors are communicated to TinyMCE by calling the `fail` callback instead.

The following are examples of how `delete` can be implemented if you choose to configure your storage settings to be either persistent in real time or on content-save.

#### Example - Storage - persist in real-time

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
```

#### Example - Storage - persist on content-save

Here is an example of how `delete` can be implemented using storage configured to persist on content-save:

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
