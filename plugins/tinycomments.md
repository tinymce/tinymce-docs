---
layout: default
title: Tiny Comments
description: Tiny Comments provides the ability to add comments to the content and collaborate with other users for content editing.
keywords: comments commenting tinycomments
---

## Introduction

The Tiny Comments plugin provides the user an ability to start or join a conversation by adding comments to the content within the TinyMCE editor. The Tiny Comments plugin is built upon the new [Annotations API]({{ site.baseurl }}/plugins/annotations/) and uses annotations to create comment threads.

This section describes the various configuration options for the Tiny Comments plugin.

## Considerations

The Tiny Comments plugin does not provide the user an ability to save the comments. You need to configure storage at your end to be able to store your comments. Later in the **5. Store the Comments** section, we provide you one way of setting comments storage.

## Prerequisite for Implementing the Tiny Comments Plugin

The Tiny Comments plugin does not automatically associate a currently logged in user to a comment. It is up to the server implementation to associate the comment with the current user. This example returns `Promises` to allow for asynchronous behavior, as any server-side implementation would do.

> Caution: This action is implemented on the server-side only. Please do not use this configuration on your browser. See [Configure TinyMCE]({{ site.baseurl }}/configure/) for more information on how to configure TinyMCE core.

### Example

```js
function MockConversationServer() {
  const authorId = 'demo';
  const store = { };
  function randomString() {
    return Math.random().toString(36).substring(2, 14);
  }

  this.createNew = function(commentText) {
    return new Promise(function(resolve, reject) {
      if (commentText === 'fail') {
        reject('Server error!!!');
      } else {
        // Generated unique ID for conversation
        const conversationUid = 'annotation-' + randomString();
        // Store the comment details
        store[conversationUid] = [
          { authorId, commentText }
        ];
        resolve(conversationUid);
      }
    });
  };

  this.replyTo = function(conversationUid, commentText) {
    return new Promise(function(resolve, reject) {
      if (commentText === 'fail') {
        reject('Server error!!!');
      } else {
        store[conversationUid].push({ authorId, commentText });
        resolve();
      }
    });
  };

  this.purge = function(conversationUid) {
    return new Promise(function(resolve) {
      delete store[conversationUid];
      resolve(true);
    });
  };

  this.retreive = function(conversationUid) {
    return new Promise(function(resolve, reject) {
      if (conversationUid in store) {
        resolve(store[conversationUid]);
      } else {
        reject('Unable to retreive conversation');
      }
    });
  };
}

```

[Tiny Comments]({{ site.baseurl }}/images/comments.png)

## 1. Create a Comment

Tiny Comments uses the Conversation "create" function to create a comment. This function saves the comment as a new conversation and asynchronously returns a unique conversation ID via the "done" callback.

Here is an example of how to create a comment:

```js
const create = function(commentText, done, fail) {
  server.createNew(commentText)
    .then(function(conversationUid) {
      done(conversationUid);
    })
    .catch(function() {
      fail(new Error('Something has gone wrong creating comment...'));
    });
};

```

## 2. Reply to a Comment

Tiny Comments uses the Conversation "reply" function to reply to a comment. It saves the comment as a reply to an existing conversation and asynchronously returns via the "done" callback when finished.

Here is an example of how to reply to a comment:

```js
const reply = function(conversationUid, commentText, done, fail) {
  server.replyTo(conversationUid, commentText)
    .then(function() { done(); })
    .catch(function() {
      fail(new Error('Something has gone wrong replying to comment...'));
    });
};

```

## 3. Delete the Comments

Tiny Comments uses the Conversation "delete" function. Applying this function deletes an entire conversation and returns asynchronously whether the comment/comment thread was removed.

Here is an example of how to delete a comment:

```js
const del = function(conversationUid, done, fail) {
  server.purge(conversationUid)
    .then(function(wasDeleted) { done(wasDeleted); })
    .catch(function() {
      fail(new Error('Something has gone wrong while deleting...'));
    });
};

```

> Note: Failure to delete due to permissions or business rules is indicated by "false", while unexpected errors should be indicated using the "fail" callback.

> Note: An user with administrative privileges can disable the delete function for some users by setting the value of the `done` callback to  `false`. In the following example we are configuring delete to be disabled for users other than the username `Author`:

```js
const del = function(uid, done, fail) {
   const data = store[uid];
   if (data && data.comments.length > 0 && data.comments[0].author !== 'Author') {
      done(false);
   } else {
      delete store[uid];
      done(true);
   }
  };
```

## 4. Lookup Username for the Comments

Tiny Comments uses the Conversation "lookup" function to retrieve an existing conversation via a conversation unique ID. Applying this function to a comment asynchronously returns the conversation via the "done" callback.

### Prerequisite for display name lookup from user ID

You need to set a username for the comments to be able to perform the Lookup function. Please see the Prerequisite section above for more information.

To set a username for a user, perform the following procedure:

> Caution: This action is implemented on the server-side only. Please do not use this configuration on your browser. See [Configure TinyMCE]({{ site.baseurl }}/configure/) for more information on how to configure TinyMCE core.

```js
function getDisplayName(authorId) {
  if (authorId === 'demo') {
    return 'Demo User';
  } else {
    return 'Unknown';
  }
}

const server = new MockConversationServer();
```

### Conversation object structure:

```js
{
 "comments": [
  <comment1>,
  <comment2>,
  ...
 ]
}
```
### Comment object structure:

```js
{
  "author": "Author Display Name",
  "content": "This is the text of the comment"
}
```
## 5. Store the Comments

> Note: The Tiny Comments plugin in its current state does not save the comments anywhere. However, it gives the developer callback APIs to create, search, and save comment threads.

A proper implementation should store comments authors using an author ID, and converts this to a display name as part of "lookup". Storing is done entirely server-side, by using client requests or by referring to an in-memory data structure. The comments plugin will only display the author based on the text provided.

### Example

Here is a complete example of creating the Tiny Comments plugin along with server configuration for storing comments:

```js
  function example(contentSelector, commentSelector) {

    function getConversation(uid) {
      var el = document.querySelector(commentSelector);
      return JSON.parse(el.value)[uid];
    }

    function setConversation(uid, conversation) {
      var el = document.querySelector(commentSelector);
      var store = JSON.parse(el.value);
      store[uid] = conversation;
      el.value = JSON.stringify(store, null, 2);
    }

    function deleteConversation(uid) {
      var el = document.querySelector(commentSelector);
      var store = JSON.parse(el.value);
      delete store[uid];
      el.value = JSON.stringify(store, null, 2);
    }

    function getAuthorDisplayName(authorId) {
      var authors = {
        'other': 'A Prior User',
        'demo': 'Demo User'
      };
      return authors[authorId] || 'Unknown';
    }

    function randomString() {
      return Math.random().toString(36).substring(2, 14);
    }

    var authorId = 'demo';

    function create(content, done, fail) {
      if (content === 'fail') {
        fail(new Error('Something has gone wrong...'));
      } else {
        var uid = 'annotation-' + randomString();
        setConversation(
          uid,
          [ { user: authorId, comment: content } ]
        );
        done(uid);
      }
    }

    var reply = function(uid, content, done, fail) {
      var comments = getConversation(uid);
      comments.push({
        user: authorId,
        comment: content
      });
      setConversation(uid, comments);
      done();
    }

    function del(uid, done, fail) {
      // only allow first commenter to delete
      if (getConversation(uid)[0].user === authorId) {
        deleteConversation(uid);
        done(true);
      } else {
        done(false);
      }
    }

    function lookup(uid, done, fail) {
      var comments = getConversation(uid).map(function(item) {
        return {
          author: getAuthorDisplayName(item.user),
          content: item.comment
        };
      });
      done({ comments: comments });
    };

    tinymce.init({
      selector: contentSelector,
      toolbar: 'bold italic underline | tinycomments',
      plugins: 'tinycomments',
      tinycomments_css_url: '../../../dist/tinycomments/css/tinycomments.css',
      content_style: '.mce-annotation { background: yellow; color: black; } .tc-active-annotation {background: lime; color: black; }',
      tinycomments_create: create,
      tinycomments_reply: reply,
      tinycomments_delete: del,
      tinycomments_lookup: lookup
    });
  };
```

We also have a [demo]({{ site.baseurl }}enterprise/tiny-comments/#tinycommentsdemo) to showcase the Tiny Comments functionality.

For more information on Tiny Comments commercial feature, visit our [Premium Features]({{ site.baseurl }}enterprise/tiny-comments/) page.


