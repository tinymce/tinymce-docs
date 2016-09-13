---
layout: default
title: Cloud Get Stared
description_short: Learn how to setup TinyMCE Cloud, or migrate from the SDK.
description: TinyMCE Cloud customers, you'll be up and running in less than 5 minutes.
keywords: tinymce cloud script textarea apiKey
---

In this brief walk-through, we’ll show you how simple it is to setup and deploy TinyMCE via our new Cloud offering. The process is mostly the same as an integration using our SDK, with a few minor changes.

The most important change is that you’ll need an API key to access the pre-configured, managed, server-side services. The key is provided when you subscribe to [TinyMCE Cloud](http://go.tinymce.com/cloud/).

## Integrating TinyMCE for the first time

### Step 1: Embed your custom script tag into your web page

Just as with the SDK, you need to embed TinyMCE in your application. This is done by adding the following script tag into your app, or in the case of a web page the `<head>` of the page:

```html
<script src="http://cloud.tinymce.com/4/tinymce.min.js?apiKey=<your_key>"></script>
```

### Step 2: Load, customize and interact with TinyMCE

In addition to the advanced content creation solutions available in the Cloud offering, you have access to more than 40 open source plugins to enhance your user’s editing experience. We have provided a range of simple examples on [tinymce.com]({{ site.baseurl }}/demo/basic-example/) and we encourage you to review our walkthrough documentation that will help you [get started with TinyMCE]({{ site.baseurl }}/get-started/first-steps/).

### Step 3: Specify your purchased TinyMCE plugins and toolbar/menu Items

Lastly, you just need to extend your TinyMCE configuration to include any of the additional, advanced content services (and associated toolbar/menu items) you’ve purchased. You will find enablement guides here:

* Advanced copy/paste with the PowerPaste plugin
* Spellcheck-as-you-type via Spell Check Pro
* Image Tools (with configured image proxy) **Note: We will configure the `imagetools_cors_hosts` and `imagetools_proxy` properties for you automatically.**
* Accessibility-as-you-type
* Advanced Code View

## Migrating from TinyMCE SDK to TinyMCE Cloud

### Step 1: Replace existing reference to tinymce.min.js

Migrating from the SDK to the Cloud is a relatively straightforward process. Please remove your existing script tag that loads TinyMCE’s JavaScript (typically a reference to `tinymce.min.js`) and replace this script tag with the following:

```html
<script src="http://cloud.tinymce.com/4/tinymce.min.js?apiKey=<your_key>"></script>
```

### Step 2: Specify purchased TinyMCE plugins and toolbar buttons

Now you just need to extend your TinyMCE [configuration]({{ site.baseurl }}/configure/) to include any additional plugins (and associated toolbar/menu items) you’ve purchased. You will find enablement guides here:

* Advanced copy/paste with the PowerPaste plugin
* Spellcheck-as-you-type via Spell Check Pro
* Image Tools (with configured image proxy) *Note: We will configure the `imagetools_cors_hosts` and `imagetools_proxy` properties for you automatically.*
* Accessibility-as-you-type
* Advanced Code View

That’s all there is to it. If you have any questions about [TinyMCE Cloud](http://go.tinymce.com/cloud) please contact our sales team via our [feature comparison and pricing page](https://www.tinymce.com/pricing/). If you’re already a Cloud customer and have any queries, please contact your support representative.
