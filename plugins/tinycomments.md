---
layout: default
title: Tiny Comments
description: Tiny Comments provides the ability to add comments to the content and collaborate with other users for content editing.
keywords: comments commenting tinycomments
---

## Introduction

This section describes the various configuration options for the Tiny Comments plugin.

## Prerequisite for Implementing the Tiny Comments Plugin

The comments plugin does not know the user which is currently logged in. It is up to the server implementation to associate the comment with the current user. This example returns `Promises` to allow for asynchronous behaviour, as any server-side implementation would do.


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

## 1. Create a Comment

Conversation "create" function. Saves the comment as a new conversation, and asynchronously returns a conversation unique ID via the "done" callback.

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

This will create a comment <..Text>

> Note: <...Text>

## 2. Reply to a Comment

Conversation "reply" function. Saves the comment as a reply to the Conversation "reply" function. Saves the comment as a reply to the callback when finished.

```js
const reply = function(conversationUid, commentText, done, fail) {
  server.replyTo(conversationUid, commentText)
    .then(function() { done(); })
    .catch(function() {
      fail(new Error('Something has gone wrong replying to comment...'));
    });
};

```

This will let the user reply to a comment <..Text>

> Note: <...Text>

## 3. Delete the Comments

Conversation "delete" function. Deletes an entire conversation. Returns asynchronously whether the conversation was deleted.

```js
const del = function(conversationUid, done, fail) {
  server.purge(conversationUid)
    .then(function(wasDeleted) { done(wasDeleted); })
    .catch(function() {
      fail(new Error('Something has gone wrong while deleting...'));
    });
};

```

This will let the user delete a comment <..Text>

## 4. Lookup Username for the Comments

Conversation "lookup" function. Retrieves an existing conversation via a conversation unique ID. Asynchronously returns the conversation via the "done" callback.

### Prerequisite for display name lookup from user ID

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

### Example

```js
const lookup = function(conversationUid, done, fail) {
  server.retreive(conversationUid)
    .then(function(comments) {
      const authorName = getDisplayName(comment.authorId);
      done({
        comments: comments.map(function(comment) {
          return {
            author: authorName,
            content: comment.commentText
          };
        })
      });
    })
    .catch(function() {
      fail('Unable to retreive conversation');
    });
};

tinymce.init({
  selector: 'textarea',
  toolbar: 'bold italic underline | tinycomments',
  plugins: 'tinycomments',
  tinycomments_css_url: '../../../dist/tinycomments/css/tinycomments.css',
  content_style: '.mce-annotation { background: yellow; color: black; } .tc-active-annotation {background: lime; color: black; }',
  tinycomments_create: create,
  tinycomments_reply: reply,
  tinycomments_delete: del,
  tinycomments_lookup: lookup
});

```

## Store the Comments

A good implementation should store comments authors using an author ID, and converts this to a display name as part of "lookup". This can be done entirely server-side, by using client requests or by referring to an in-memory data structure. The comments plugin will simply display the author based on the text provided.

