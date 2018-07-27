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
    tinymce.init({
       selector: 'textarea',
       toolbar: 'bold italic underline | tinycomments',
       plugins: 'tinycomments',
       content_style: '.mce-annotation { background: yellow; color: black; } .tc-active-annotation {background: lime; color: black; }',
       annotations_create: (author, content, done, fail) => { console.log("comment created"); done(); },
       annotations_reply: (uid, author, content, done, fail) => { console.log("comment reply"); done(); },
       annotations_get: (done, fail) => { console.log("comment get"); done(); },
       annotations_delete: (uid, done, fail) { console.log("comment del"); done(); },
       annotations_lookup: (uid, done, fail) { console.log("comment lookup"); done(); },
       annotations_username: 'Demo'
     });
```

[Tiny Comments]({{ site.baseurl }}/images/comments.png)
