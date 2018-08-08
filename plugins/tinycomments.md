---
layout: default
title: Tiny Comments
description: Tiny Comments provides the ability to add comments to the content and collaborate with other users for content editing.
keywords: comments commenting tinycomments
---

## Introduction

<Text>

## Using the Tiny Comments Plugin

To set up the Tiny Comments, perform the following procedure:

### 1. Configure the Tiny Comments Button

To configure the Tiny Comments button on your toolbar, make the following changes:


 ```js

```

> Note: <...Text>

See [Configure TinyMCE]({{ site.baseurl }}/configure/) for more information on how to configure TinyMCE core.

### 2. Registering the Tiny Comments Plugin

The Tiny Comments plugin supports multiple commenting functions. Each comment function must be registered with <...Text>.

```js

```

This will register a comment with the name `X`. In our example, when an `X` is being added to the document, a span marker will be created with class `X` and a data attribute for the author.

> Note: <...Text>

### 3. Making the Tiny Comments Plugin Available

For adding the Tiny Comments tool to the toolbar that is registered with `X` set the value of the toolbar to:

```js
  toolbar: "tinycomments-X"

 ```
> Note:

### 4. Applying Tiny Comments

After registering the Tiny Comments, we can use it by applying it to the current selection.

> Note:

```js

```

<Text>

Example :

```js

```

### 4. Create Tiny Comments

Create Tiny Comments, we can use it by applying it to the current selection.

> Note:

```js

```

<Text>

Example :

```js

```

### 4. Reply to Tiny Comments

Reply to Tiny Comments, we can use it by applying it to the current selection.

> Note:

```js

```

<Text>

Example :

```js

```

### 4. Delete Tiny Comments

To delete a particular comment at the cursor, use the `delete` API. It will remove the closest comment that matches the name. For example,

```js

```
> Note:

The full API is:

```js
/**
* Removes any comments from the current selection that match
* the name
*
* @param remove
* @param {String} name the name of the comment to remove
*/
remove: (name)
```


### 4. Lookup Tiny Comments

Lookup Tiny Comments, we can use it by applying the `get` API it to the current selection.

> Note:

```js

```

<Text>

Example :

```js

```




### 5. Listening to Selection Events

The Tiny Comments plugin can notify the user when the selection cursor moves in or out of a specified comment. For example, for our `X` scenario:

```js

```

The `obj` parameter is only set if the `state` is true. `obj` has two fields when set:

* `uid`, which is the uid of the comments currently nearest (in the DOM hierarchy) to the selection cursor.
* `nodes`, which is an array of DOM nodes which make up this comment. `nodes` are made available to users in case the user might want to tag these nodes with a class to say that they are the **active comments**.

The `commentChanged` listeners should only fire when the state or the uid changes. The full API is:

```js
/**
* Executes the specified callback when the current selection matches the comment or not.
*
* @method commentChanged
* @param {String} name Name of comment to listen for
* @param {function} callback Calback with (state, name, and data) fired when the comment
* at the cursor changes. If state if false, data will not be provided.
*/
commentChanged: (name: string, callback): void
```

## Example

To create the Tiny Comments plugin, use the following example:

```js
   <script type="text/javascript">
          const store = { };

            function randomString() {
              return Math.random().toString(36).substring(2, 14);
            }

            const author = 'Author';

            const create = function(content, done, fail) {
              if (content === 'fail') {
                fail(new Error('Something has gone wrong...'));
              } else {
                const conversationId = 'annotation-' + randomString();
                store[conversationId] = {
                  uid,
                  comments: [ { author, content } ]
                };
                done(conversationId);
              }
            };

            const reply = function(conversationId, content, done, fail) {
              const current = store[conversationId];
              current.comments = current.comments.concat([
                { author, content }
              ]);
              done();
            };

            const del = function(conversationId, done, fail) {
              delete store[conversationId];
              done(true);
            };

            const lookup = function(conversationId, done, fail) {
              done(store[conversationId]);
            };

// TinyMCE

          tinymce.init({
            selector: "#textarea",
            toolbar: 'bold italic underline | tinycomments',
            plugins: "tinycomments",
            content_style: '.mce-annotation { background: yellow; color: black; } .tc-active-annotation {background: lime; color: black; }',
// `content_style` is defined to highlight the commented text in the editor. You can choose a different color as per your preference.
            tinycomments_create: create,
            tinycomments_reply: reply,
            tinycomments_delete: del,
            tinycomments_lookup: lookup,
          });
        </script>

<form method="post" action="dump.php">
    <textarea name="content"></textarea>
</form>
```

[Example]({{ site.baseurl }}/images/comments.png)

## Storing All Tiny Comments for a Particular Comment

The Tiny Comments plugin allows you to retrieve an object of all of the uids for a particular comment type (e.g. X), and the nodes associated with those uids. For example, to retrieve all `X` comments, we would use this code:

```js
            const reply = function(conversationId, content, done, fail) {
              const current = store[conversationId];
              current.comments = current.comments.concat([
                { author, content }
              ]);
              done();
            };

```

<Text> The full API is:

```js
/**
* Retrieve all the comments for a given name
*
* @method getAll
* @param {String} name the name of the comments to retrieve
* @return {Object} an index of comments from uid => DOM nodes
*/
getAll: (name)
```

## Retrieving All Tiny Comments for a Particular Comment

The Tiny Comments plugin allows you to retrieve an object of all of the uids for a particular comment type (e.g. X), and the nodes associated with those uids. For example, to retrieve all `X` comments, we would use this code:

```js

```

<Text> The full API is:

```js
/**
* Retrieve all the comments for a given name
*
* @method getAll
* @param {String} name the name of the comments to retrieve
* @return {Object} an index of comments from uid => DOM nodes
*/
getAll: (name)
```

