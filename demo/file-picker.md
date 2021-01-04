---
layout: default
title: Basic local file picker
title_nav: Basic local file picker
description: This example shows how to add a local file picker to the Image dialog.
keywords: example demo image local-file-picker file_picker_callback
---

While we demonstrate how you can add local file picker to the *Image* dialog, in order for it to be useful in the real-world scenario, you should also enable [image uploading functionality]({{ site.baseurl }}/general-configuration-guide/upload-images) - as a way to transport those local images to a server.

{% include live-demo.html id="file-picker" height="950" %}

You might also consider our [MoxieManager]({{site.baseurl}}/plugins/premium/moxiemanager/) module, which can hook onto `file_picker_callback` and provide feature-rich file manager UI right in the popup (check a demo [here](http://www.moxiemanager.com/demos/tinymce.php)). With accompanying plugins it is possible to pick files from Dropbox, Google Drive [and much more](http://www.moxiemanager.com/documentation/index.php/Plugins).
