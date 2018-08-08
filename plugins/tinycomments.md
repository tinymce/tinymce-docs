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

> Note:

See [Configure TinyMCE]({{ site.baseurl }}/configure/) for more information on how to configure TinyMCE core.

### 2. Registering the Tiny Comments Plugin

The Tiny Comments API supports multiple commenting functions. Each comment function must be registered with.

```js

```

This will register a comment with the name `X`. In our example, when an `X` is being added to the document, a span marker will be created with class `X` and a data attribute for the author.

> Note: The data passed through here is the same as the data specified when calling the annotate API. `decorate` is used to turn the commenting data into a document object model (DOM) representation.
The uid passed through to `decorate` is either the uid field in the data object (if it exists), or a randomly generated uid if it doesn't. Commenting will be responsible for putting the uid on the span. The user does not need to do that part.

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

### 5. Listening to Selection Events

The Tiny Comments API can notify the user when the selection cursor moves in or out of a specified annotation. For example, for our `X` scenario:

```js

```

The `obj` parameter is only set if the `state` is true. `obj` has two fields when set:

* `uid`, which is the uid of the annotation currently nearest (in the DOM hierarchy) to the selection cursor.
* `nodes`, which is an array of DOM nodes which make up this annotation. `nodes` are made available to users in case the user might want to tag these nodes with a class to say that they are the **active annotations**.

The `annotationChanged` listeners should only fire when the state or the uid changes. The full API is:

```js
/**
* Executes the specified callback when the current selection matches the annotation or not.
*
* @method annotationChanged
* @param {String} name Name of annotation to listen for
* @param {function} callback Calback with (state, name, and data) fired when the annotation
* at the cursor changes. If state if false, data will not be provided.
*/
annotationChanged: (name: string, callback): void
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
            tinycomments_username: 'Author'
          });
        </script>

<form method="post" action="dump.php">
    <textarea name="content"></textarea>
</form>
```

[Example]({{ site.baseurl }}/images/comments.png)

## Retrieving All Tiny Comments for a Particular Comment

The Tiny Comments plugin allows you to retrieve an object of all of the uids for a particular annotation type (e.g. X), and the nodes associated with those uids. For example, to retrieve all `X` comments, we would use this code:

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

## Deleting a Tiny Comment

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

