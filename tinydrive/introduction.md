---
layout: default
title: Tiny Drive Introduction
title_nav: Introduction
description: Introduction of what Tiny Drive is and its capabilities
keywords: tinydrive introduction overview
---

Tiny Drive is a premium TinyMCE plugin for cloud-based asset management and storage solution.

Tiny Drive allows trouble-free management of assets such as images and files in the cloud. Files can be dragged and dropped to be instantly uploaded to the cloud storage using a CDN to serve the required files and images.

User can manage file uploads, storage, processing, and delivery for your website or app. All components of Tiny Drive infrastructure seamlessly work as a whole, are easy to configure, and can be extremely flexible when needed.

Developers at Tiny build the upload UI, libs, and APIs for developers. Tiny Drive integrations are designed to be non-coder ready, easy to configure, and well-covered with documentation and guides.

## Tiny Drive features

Tiny Drive allows the following file formats, extensions, and storage options:

| Feature | Value |
| ------- | ----- |
| File upload | Upload files through drag & drop or via upload button. If integrated with TinyMCE, files added via drag & drop or copy & paste in TinyMCE will be uploaded using Tiny Drive |
| CDN | Files are stored in S3 and accessed through Amazons CDN for fast delivery anywhere in the world |
| File management | Move, copy, delete and organize your online file storage |
| Search | Search your library of files, star the ones you use often for quick access |
| Preview | Preview images (and video, coming soon) before you select what content to use |
| Integrations | Integrations with Google Drive and Dropbox allows you to import file from these systems through Tiny Drive |

The storage and bandwidth quota varies based upon the [Tiny Cloud Plan](https://www.tiny.cloud/pricing/) you are subscribed to.

## Demo

Here is a quick demo on how Tiny Drive integrates with TinyMCE.

{% include codepen.html id="drive-demo" %}

## Upload files URL

The URL format for each file is `https://drive.tiny.cloud/1/{your-api-key}/{uuid}` and gets generated when a file is uploaded.
If a file is moved or renamed, it will still have the same unique URL, so the restructuring of the files using Tiny Drive won't affect where they are being used. However, deleting a file will mark the URL as being unused, and the URL will not continue to work.

## User specific root

It is common to desire to be able to have user specific paths so that each user within a system gets its directory. This can be done by setting the `https://claims.tiny.cloud/drive/root` custom JWT claim to a path within Tiny Drive account. This path will automatically be constructed when the user is accessing Tiny Drive using a JWT key with that claim. The user can only see and manage files within that root.

## Security & performance

Tiny is aware that security is a primary concern when it comes to cloud storage. As a user's assets are passed back and forth between a TinyMCE editor instance and the S3 bucket, Tiny Drive uses the user's API key and a JSON Web Token (JWT) to authenticate each data transaction. Each Drive user will need to create their own JWT.

## JWT

Some cloud services for TinyMCE require setting up JWT authentication. This allows verifying that the end users are allowed to access a particular feature. JWT is a common authorization solution for web services and is documented in more detail at the https://jwt.io/ website. For more information, see the [JWT authentication]({{site.baseurl}}/tinydrive/jwt-authentication/) section.

## Starter projects

To get started quickly and understand how Tiny Drive works, Tiny highly recommends trying one of the starter projects on Github to set up a Tiny Drive instance by following a few simple steps.

The starter projects have their procedures to get Tiny Drive up and running. Choose a [starter project]({{site.baseurl}}/tinydrive/getting-started/#starterprojects) of a familiar language and follow the steps to set up Tiny Drive.
