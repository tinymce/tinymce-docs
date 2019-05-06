---
layout: default
title: Tiny Drive Overview
title_nav: Overview
description: Overview of what Tiny Drive is and its capabilities
keywords: tinydrive overview
---

Tiny Drive is a premium TinyMCE plugin for cloud-based asset management and storage solution.

Tiny Drive allows trouble-free management of assets such as images and files in the cloud. Files can be dragged and dropped to be instantly uploaded to the cloud storage using a **CDN or Content Delivery Network** to serve the required files and images.

User can manage file uploads, storage, processing, and delivery for your website or app. All components of Tiny Drive infrastructure seamlessly work as a whole, are easy to configure, and can be extremely flexible when needed.

Developers at Tiny build the upload UI, libs, and APIs for developers. Tiny Drive integrations are designed to be non-coder ready, easy to configure, and well-covered with documentation and guides.

## Tiny Drive inclusions

Tiny Drive allows the following file formats, extensions, and storage options:

| Feature | Value |
| ------- | ----- |
| Image extensions | GIF, JPEG, JPG, PNG, TIF, TIFF, BMP |
| Document extensions | DOC, XLS, PPT, PPS, DOCX, XLSX, PPTX, PDF, RTF, TXT, Keynote, Pages, Numbers |
| Audio extensions | WAV, WAVE, MP3, OGG, OGV, OGA, OGX, OGM, SPX, OPUS |
| Video extensions | MP4, M4V, OGV, WEBM, MOV |
| Archive extensions | ZIP |
| File size | Up to 100MB |
| [^1]Storage | 100 MB of storage and up to 1 GB of bandwidth per month. |

[^1]: This information is based on the **Starter** package. The storage and bandwidth quota varies based upon the [Tiny Cloud Plan](https://www.tiny.cloud/pricing/) users are subscribed to.

## CDN

CDN or Content Delivery Network is a system of servers deployed in multiple data centers across the world. When a file is pulled from CDN, it is transferred to a client device via a server closest to the client's location.  This is way faster than using a route to a remote machine. Also, the file is cached on multiple servers. Hence, the user always gets a better uptime.

Tiny Drive uploads all files to central storage with a CDN endpoint to make sure that the user assets are delivered as fast as possible. This means that Tiny is hosting the user's files and they are publicly available in read-only mode for anyone that has access to the URL of that file.

## Upload files URL

The URL format for each file is `https://drive.tiny.cloud/1/{your-api-key}/{uuid}` and gets generated when a file is uploaded.
If a file is moved or renamed, it will still have the same unique URL, so the restructuring of the files using Tiny Drive won't affect where they are being used. However, deleting a file will mark the URL as being unused, and the URL will not continue to work.

## User specific root

It is common to desire to be able to have user specific paths so that each user within a system gets its directory. This can be done by setting the `https://claims.tiny.cloud/drive/root` custom JWT claim to a path within Tiny Drive account. This path will automatically be constructed when the user is accessing Tiny Drive using a JWT key with that claim. The user can only see and manage files within that root.

## Storage

Tiny Drive uses an [Amazon Web Services S3](https://aws.amazon.com/s3/) bucket, the same storage solution used by companies like Netflix, Thomson Reuters, and Zillow. (For more information on Amazon's comprehensive security approach refer to the [Amozon security](https://aws.amazon.com/security/) docs.)
Tiny Drive can also be configured to use Google Drive or Dropbox storage. For more information on integrating Google Drive or Dropbox refer to the [Integrations]({{site.baseurl}}/tinydrive/integrations) section.

## Security & performance

Tiny is aware that security is a primary concern when it comes to cloud storage. As a user's assets are passed back and forth between a TinyMCE editor instance and the S3 bucket, Tiny Drive uses the user's API key and a JSON Web Token (JWT) to authenticate each data transaction. Each Drive user will need to create their own JWT.

## JWT

Some cloud services for TinyMCE require setting up JWT authentication. This allows verifying that the end users are allowed to access a particular feature. JWT is a common authorization solution for web services and is documented in more detail at the https://jwt.io/ website. For more information, see the [JWT authentication]({{site.baseurl}}/tinydrive/introduction/jwt-authentication/) section.

## Starter projects

To get started quickly and understand how Tiny Drive works, Tiny highly recommends trying one of the starter projects on Github to set up a Tiny Drive instance by following a few simple steps.

The starter projects have their procedures to get Tiny Drive up and running. Choose a starter project of a familiar language and follow the steps to set up Tiny Drive. Refer to the [User Guide]({{site.baseurl}}/tinydrive/getting-started/user-guide/) for more information.

## Demo

Try out the Tiny Drive [demo]({{site.baseurl}}/tinydrive/introduction/demo) to understand its architecture and requirements.
