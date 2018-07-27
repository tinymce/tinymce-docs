---
layout: default
title: Tiny Comments
description: Tiny Comments provides the ability to add comments to the content and collaborate with other users for content editing.
keywords: enterprise pricing video youtube vimeo mp3 mp4 mov movie clip film comment commenting mediaembed media
---

The [Tiny Comment]({{ site.baseurl }}/plugins/tiny-comment/) plugin provides the ability to add comments to the content and collaborate with other users for content editing within the TinyMCE editor.
The primary value that TinyComments offer is a user interface to create, reply, and delete comments. The TinyComments plugin is built upon the the new [Annotations API]({{ site.baseurl }}/plugins/annotations/) and uses annotations to create comment threads.

> Note: The TinyComments plugin in its current state does not store the comments anywhere. However, it gives the integrator callback APIs to create, search, and store comment threads.

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
                comments: [ { author, content } ]
              };
              done(uid);
            }
          };

          const reply = function(uid, author, content, done, fail) {
            const current = store[uid];
            current.comments = current.comments.concat([
              { author, content }
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
            annotations_username: 'Some Guy'
          });
        </script>
```

[Tiny Comments]({{ site.baseurl }}/images/comments.png)
