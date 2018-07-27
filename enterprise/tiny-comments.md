---
layout: default
title: Tiny Comments
description: Tiny Comments provides the ability to add comments to the content and collaborate with other users for content editing.
keywords: enterprise pricing video youtube vimeo mp3 mp4 mov movie clip film comment commenting mediaembed media
---

The [Tiny Comment]({{ site.baseurl }}/plugins/tiny-comment/) plugin provides the ability to add comments to the content and collaborate with other users for content editing within the TinyMCE editor.
The primary value that TinyComments offer is a user interface to create, reply, and delete comments. TinyComments is a plugin that builds upon the the new Annotator API and uses annotations to create comment threads. The TinyComments plugin in its current state does not store the comments anywhere. However, it gives the integrator callback APIs to create, search, and store comment threads. 

Example:

```js
   ('tinycomments','The tinycomments enterprise plugin is not enabled on your API key. Please contact <a target="_blank" href="https://ephoxcommerce.staging.wpengine.com/product-category/tinymce/">Ephox</a> to upgrade your key.');
(function (pluginName,message) {
    tinymce.PluginManager.add(pluginName, function(editor) {
        editor.on( "skinLoaded", function() {
            editor.notificationManager.open({
                text: message,
                type: 'warning'
            });
        });
    });
});
```

[Tiny Comments]({{ site.baseurl }}/images/comments.png)
