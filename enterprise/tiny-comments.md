---
layout: default
title: Tiny Comments
description: Tiny Comments provides the ability to add comments to the content and collaborate with other users for content editing.
keywords: enterprise pricing comment commenting
---

The [Tiny Comments]({{ site.baseurl }}/plugins/tiny-comment/) plugin provides the user an ability to start or join a conversation by adding comments to the content within the TinyMCE editor.
Tiny Comments offers a user interface for adding and editing comments. Other users can collaborate by replying to these comments. You can delete the comment/comment thread if you want to remove it from your content.

The Tiny Comments plugin is built upon the new [Annotations API]({{ site.baseurl }}/plugins/annotations/) and uses annotations to create comment threads.

> Note: The Tiny Comments plugin in its current state does not save the comments anywhere. However, it gives the integrator callback APIs to create, search, and save comment threads.

Example:

```js
   <script type="text/javascript">
          const store = { };

          let counter = 0;

          const create = function(author, content, done, fail) {
            if (content === 'fail') {
              fail(new Error('Something has gone wrong...'));
            } else {
              const uid = 'annotation-' + counter;
              counter++;
              store[uid] = {
                uid,
                comments: [
                  {
                    author: author,
                    content: content
                   }
                 ]
              };
              done(uid);
            }
          };

          const reply = function(uid, author, content, done, fail) {
            const current = store[uid];
            current.comments = current.comments.concat([
              {
               author: author,
               content: content
              }
            ]);
            done();
          };

          const get = function(done, fail) {
            const annotations = Object.keys(store).map(function(s) {
              return store[s];
            });

            done(annotations);
          };

          const del = function(uid, done, fail) {
            delete store[uid];
            done(true);
          };

          const lookup = function(uid, done, fail) {
            done(store[uid]);
          };

          tinymce.init({
            selector: "#textarea",
            toolbar: 'bold italic underline | tinycomments',
            plugins: "tinycomments",
            content_style: '.mce-annotation { background: yellow; color: black; } .tc-active-annotation {background: lime; color: black; }',
            annotations_create: create,
            annotations_reply: reply,
            annotations_get: get,
            annotations_delete: del,
            annotations_lookup: lookup,
            annotations_username: 'Author'
          });
        </script>
```
> Note: An author of a comment can disable the delete function for the other users by setting the value of `done` to `done(false)`. In the following example we are configuring delete to be disabled for users other than the username `Author`:
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

[Tiny Comments]({{ site.baseurl }}/images/comments.png)
