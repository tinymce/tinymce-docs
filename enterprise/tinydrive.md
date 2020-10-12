---
layout: default
title: Cloud-based file management
title_nav: Cloud-based file management
description: Tiny Drive - a premium plugin to manage files & images.
keywords: tinydrive .net php relative_urls
---

{{site.cloudfilemanager}} is a premium {{site.productname}} plugin for cloud-based asset management and storage solution. {{site.cloudfilemanager}} is a solution for creating rich text by attaching and embedding images, videos, and other files in your document.

{{site.cloudfilemanager}} presents a cloud-based asset management and storage solution that provides the ease of use of Google Drive without the server requirements of a self-hosted asset manager such as our own MoxieManager.

## Configuring the editor for Tiny Drive

Once you have the API key, or if you are a current {{site.cloudname}} user who already has an API key, then you have access to {{site.cloudfilemanager}}. In order to get the service up and running, you’ll need to complete a few more steps. See our [documentation]({{site.baseurl}}/tinydrive/) for more information.

## Security & performance

We know security is a primary concern when it comes to cloud storage.  {{site.cloudfilemanager}} uses an [Amazon Web Services S3](https://aws.amazon.com/s3/) bucket, the same storage solution used by companies like Netflix, Thomson Reuters, and Zillow.  (You can read about Amazon’s comprehensive security approach [here](https://aws.amazon.com/security/).)

As your assets are passed back and forth between your {{site.productname}} editor instance and the S3 bucket, {{site.cloudfilemanager}} uses both your API key and a [JSON Web Token](https://jwt.io/introduction/) (JWT) to authenticate each data transaction.  Each {{site.cloudfilemanager}} user will need to create their own JWT, and we walk you through the whole process [here]({{site.baseurl}}/tinydrive/jwt-authentication/).

And to make sure your assets are delivered as fast as possible, we utilize the [CloudFront CDN](https://aws.amazon.com/cloudfront/), which is Amazon’s global content delivery network, known for its low latency and high data transfer speeds.

## Try our Tiny Drive plugin demo

{% include live-demo.html id="drive-demo" %}

{% assign pluginname = 'Tiny Drive' %}
{% assign pluginminimumplan = 'tierone' %}
{% assign plugindocspage = '../tinydrive' %}
{% include misc/purchase-premium-plugins.md %}
