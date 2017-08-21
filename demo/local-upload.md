---
layout: default
title: Local Upload
title_nav: Local Upload
description: This example demonstrates local file upload feature.
keywords: example demo image local-upload
---

We've supported [local file picking]({{ site.baseurl }}/demo/file-picker) and [image uploading]({{ site.baseurl }}/get-started/upload-images) for quite some time already. However making these features functional required some effort on the user's side, while not being immediately obvious, at the same time. Some effort is still required, but we decided to supplement the feature with an intuitive UI.

Once `images_upload_url` is defined in the config, an Upload tab will appear in the Image Dialog. 

![Upload tab]({{ site.baseurl }}/images/demo_local-upload_01.png)

So a setup like this, will display a friendly UI simplifying image upload either by picking it up or by dropping it in, directly from the desktop:

{% include codepen.html id="xLPoeV" tab="result" height="400" %}

All [image uploading options]({{ site.baseurl }}/get-started/upload-images/#imageuploaderoptions) are supported, including `images_upload_handler` (a way to define custom file uploader) and `images_upload_credentials`.

For more details check [Upload Images]({{ site.baseurl }}/get-started/upload-images/) tutorial from Getting Started series.
