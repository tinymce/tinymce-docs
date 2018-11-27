---
layout: default
title: Cloud-based file management
title_nav: Cloud-based file management
description: Tiny Drive - a premium plugin to manage files & images.
keywords: tinydrive .net php relative_urls
---

### Cloud-based File and Image Management for TinyMCE

Tiny Drive is a premium TinyMCE plugin for cloud-based asset management and storage solution. Tiny Drive is a solution for creating rich text by attaching and embedding images, videos, and other files in your document.

Drive presents a cloud-based asset management and storage solution that provides the ease of use of Google Drive without the server requirements of a self-hosted asset manager such as our own MoxieManager.

### Getting Started

#### Creating an Account

If you would like to try out Drive and our Cloud-delivered editor, the first step is to create a free [Tiny account](https://www.tiny.cloud/download/).  When you create an account, you are assigned an API key, which is required for the implementation of Drive.

> The API key is also provisioned with a free 30-day trial of all of our [premium plugins](https://apps.tiny.cloud/product-category/tiny-cloud-extensions/), with no credit card information or commitment required.

#### Configuring the Editor for Drive

Once you have the API key, or if you are a current Cloud user who already has an API key, then you have access to Drive.  In order to get the service up and running, you’ll need to complete a few more steps. See our [documentation]({{site.baseurl}}/plugins/drive) for more information.

> We are launching the service with a complimentary 100MB of storage and up to 1 GB of bandwidth.

### Security & Performance

We know security is a primary concern when it comes to cloud storage.  Drive uses an [Amazon Web Services S3](https://aws.amazon.com/s3/) bucket, the same storage solution used by companies like Netflix, Thomson Reuters, and Zillow.  (You can read about Amazon’s comprehensive security approach [here](https://aws.amazon.com/security/).)

As your assets are passed back and forth between your TinyMCE editor instance and the S3 bucket, Drive uses both your API key and a [JSON Web Token](https://jwt.io/introduction/) (JWT) to authenticate each data transaction.  Each Drive user will need to create their own JWT, and we walk you through the whole process [here]({{site.baseurl}}/configure/jwt-authentication/).

And to make sure your assets are delivered as fast as possible, we utilize the [CloudFront CDN](https://aws.amazon.com/cloudfront/), which is Amazon’s global content delivery network, known for its low latency and high data transfer speeds.

For more information on Drive see our full [documentation]({{site.baseurl}}/plugins/drive/).

We also have a demo for you to explore the Drive capabilities [here]({{site.baseurl}}/demo/drive/).
