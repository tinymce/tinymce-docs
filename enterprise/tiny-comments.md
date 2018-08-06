---
layout: default
title: Tiny Comments
description: Tiny Comments provides the ability to add comments to the content and collaborate with other users for content editing.
keywords: enterprise pricing comment commenting
---

The Tiny Comments plugin provides the user an ability to start or join a conversation by adding comments to the content within the TinyMCE editor.
Tiny Comments offers a user interface for adding and editing comments. Other users can collaborate by replying to these comments. You can delete the comment/comment thread if you want to remove it from your content.

The Tiny Comments plugin is built upon the new [Annotations API]({{ site.baseurl }}/plugins/annotations/) and uses annotations to create comment threads.

> Note: The Tiny Comments plugin in its current state does not save the comments anywhere. However, it gives the integrator callback APIs to create, search, and save comment threads.

Example:

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
```
> Note: The administrator can disable the delete function for some users by passing `false` to the `done` callback. In the following example we are configuring delete to be disabled for users other than the username `Author`:

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
