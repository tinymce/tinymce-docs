---
layout: default
title: Tiny Drive Overview
title_nav: Overview
description: Overview of what Tiny Drive is and it's capabilities
keywords: tinydrive overview
---

Tiny Drive allows you to manage your images and files in the cloud, when you are setup with your system, you will enjoy trouble free management of assets in the cloud.

Once Tiny Drive is setup, you will be able to drag and drop files to instantly upload them to cloud storage behind a blazing fast CDN helping you serve the files and images you need.

## Demo

Here is a quick demo on how Tiny Drive integrates with TinyMCE.

{% include codepen.html id="drive-demo" %}

## Restrictions and Quotas

Drive has restrictions on what files can be uploaded and how large these files can be:

* The maximum file size is 100MB
* Allowed image extensions: gif, jpeg, jpg, png, tif, tiff, bmp
* Allowed document extensions: doc, xls, ppt, pps, docx, xlsx, pptx, pdf, rtf, txt, keynote, pages, numbers
* Allowed audio extensions: wav, wave, mp3, ogg, ogv, oga, ogx, ogm, spx, opus
* Allowed video extensions: mp4, m4v, ogv, webm, mov
* Allowed archive extensions: zip
* The Copy operation is limited to single files due to technical reasons.

Your storage and bandwidth quota varies based upon the [Tiny Cloud Plan](https://www.tiny.cloud/pricing/) you are subscribed to.

## Upload Files URL

All files are uploaded to a central storage with a CDN endpoint that means that we are hosting your files and they are publicly available in read-only mode for anyone that has access to the URL of that file.
The URL format for each file is `https://drive.tiny.cloud/1/{your-api-key}/{uuid}` and gets generated when a file is uploaded.
If you move or rename a file, it will still have the same unique URL, so the restructuring of your files using Drive won't affect where they are being used. However, deleting a file will mark the URL as being unused, and the URL will not continue to work.

## User specific root

It's common that you want to be able to have user specific paths so that each user within your system gets it's own directory. This can be done by setting the `https://claims.tiny.cloud/drive/root` custom jwt claim to a path within your tiny drive account. This path will automatically be constructured when the user is accessing drive using a jwt key with that claim. The user only be able to see and manage files within that root.