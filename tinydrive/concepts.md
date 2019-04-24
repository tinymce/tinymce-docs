---
layout: default
title: Tiny Drive Concepts
title_nav: Concepts
description: Tiny Drive concepts
keywords: tinydrive concepts
---

## Tiny Drive inclusions

Tiny Drive provides the following inclusions:

| Feature | Value |
| ------- | ----- |
| Image extensions | GIF, JPEG, JPG, PNG, TIF, TIFF, BMP |
| Document extensions | DOC, XLS, PPT, PPS, DOCX, XLSX, PPTX, PDF, RTF, TXT, Keynote, Pages, Numbers |
| Audio extensions | WAV, WAVE, MP3, OGG, OGV, OGA, OGX, OGM, SPX, OPUS |
| Video extensions | MP4, M4V, OGV, WEBM, MOV |
| Archive extensions | ZIP |
| Copy operation | Limited to single files |
| File size | Upto 100MB |
| [^1]Storage | 100 MB of storage and up to 1 GB of bandwidth per month. |

[^1]: Your storage and bandwidth quota varies based upon the [Tiny Cloud Plan](https://www.tiny.cloud/pricing/) you are subscribed to.

## CDN

CDN or Content Delivery Network is a system of servers deployed in multiple data centers across the world. When someone pulls a file from CDN, that file is transferred to a client device via a server closest to the location of that client, which is way faster than using a route to some remote machine. Also, your file is cached on multiple servers. Hence you always get a better uptime.

Tiny Drive uploads all files to a central storage with a CDN endpoint. This means that we are hosting your files and they are publicly available in read-only mode for anyone that has access to the URL of that file. And to make sure your assets are delivered as fast as possible, we utilize the CloudFront CDN, which is Amazon’s global content delivery network, known for its low latency and high data transfer speeds.

## Upload files URL

The URL format for each file is `https://drive.tiny.cloud/1/{your-api-key}/{uuid}` and gets generated when a file is uploaded.
If you move or rename a file, it will still have the same unique URL, so the restructuring of your files using Drive won't affect where they are being used. However, deleting a file will mark the URL as being unused, and the URL will not continue to work.

## User specific root

It's common that you want to be able to have user specific paths so that each user within your system gets it's own directory. This can be done by setting the `https://claims.tiny.cloud/drive/root` custom JWT claim to a path within your tiny drive account. This path will automatically be constructured when the user is accessing drive using a JWT key with that claim. The user only be able to see and manage files within that root.

## Storage

Tiny Drive uses an [Amazon Web Services S3](https://aws.amazon.com/s3/) bucket, the same storage solution used by companies like Netflix, Thomson Reuters, and Zillow. (You can read about Amazon’s comprehensive security approach [here](https://aws.amazon.com/security/).)
You can also configure Tiny Drive to use Google Drive or Dropbox for storage. Read about integrating Google Drive or Dropbox [here].

## Security & performance

We know security is a primary concern when it comes to cloud storage. As your assets are passed back and forth between your TinyMCE editor instance and the S3 bucket, Tiny Drive uses both your API key and a JSON Web Token (JWT) to authenticate each data transaction. Each Drive user will need to create their own JWT.

## JWT

Some cloud services for TinyMCE require you to setup JWT authentication. This allows us to verify that you and your end user are allowed to access a particular feature. JWT is a common authorization solution for web services and is documented in more detail at the https://jwt.io/ website. For more information, see the [JWT authentication]({{site.baseurl}}/tinydrive/jwt-authentication/) section.

