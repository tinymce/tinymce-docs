---
layout: draft
title: Tiny Drive
description: Tiny Drive. A premium plugin to manage files & images.
keywords: tinydrive .net php relative_urls
---

## File and Image Management Using Tiny Drive

### Cloud-based file and image management for TinyMCE

The “rich” in rich text generally means images, videos, and other files that are attached or embedded in your document. Until now, it has been difficult and time-consuming to wire up file upload and management to TinyMCE.

To solve this issue, we’re excited to announce the release of Tiny Drive, our cloud-based asset management and storage solution..  If you’ve ever marveled at Google Drive and its ease of use, or considered our own MoxieManager for self-hosted asset management but been discouraged by the server requirements, then Drive will be an excellent solution for you.

### Getting started
If you you would like to try out Drive and our Cloud-delivered editor, the first step is to create a free Tiny account.  When you create an account, you are assigned an API key, which is required for the implementation of Drive.  In addition, the API key is also provisioned with a free 30-day trial of all of our premium plugins, with no credit card information or commitment required.

Once you have the API key, or if you are a current Cloud user who already has an API key, then you have access to Drive.  In order to get the service up and running, you’ll just need to complete a few more [easy?] steps, outlined in our documentation (link).

We are launching the service with a complimentary 100MB of storage and up to 1 GB of bandwidth.
Security
We know security is a primary concern when it comes to cloud storage.  Drive uses an Amazon Web Services S3 bucket, the same storage solution used by companies like Netflix, Thomson Reuters, and Zillow.  (You can read about Amazon’s comprehensive security approach here.)

And as your assets are passed back and forth between your TinyMCE editor instance and the S3 bucket, Drive uses both your API key and a JSON Web Token (JWT) to authenticate each data transaction.  Each Drive user will need to create their own JWT, and we walk you through the whole process (link to JWT section of docs).

### What’s next for Drive?
We are working on allowing you the ability to store content in your own corporate S3 bucket. And after that...you tell us! (link to contact form) With what other storage providers should we integrate?  Are you happy with using the Tiny S3 bucket, but want more storage and bandwidth? What other features do you want to see on Drive?

We are always thrilled to hear from our users, so please reach out and let us know what you think will make Drive -- or any of our products -- even better.

In the meantime, you can find us on Twitter (link) and Github (link), and you can sign up for our newsletter below to stay up-to-date on all the latest and greatest with Tiny.

Full documentation on Tiny Drive can be found [here](({{site.baseurl}}/plugins/tinydrive) on the TinyMCE  website.

We also have a demo for you to explore the Tiny Drive capabilities [here]({{site.baseurl}}/demo/tiny-drive/).