---
layout: default
title: Cloud Deployment of Editor & Plugins
description_short: Learn how to setup the TinyMCE editor via our Cloud, or migrate from the SDK.
description: TinyMCE Cloud customers, you'll be up and running in less than 5 minutes.
keywords: tinymce cloud script textarea apiKey
---

TinyMCE Cloud is the easiest way to integrate TinyMCE and upgrade to our premium plugins.

You can start with [TinyMCE CDN](https://www.tinymce.com/download/) completely free of charge.

In order to use our premium plugins, you’ll need to signup for an API key and update the script tag used to load the editor code into your application.

## Integrating TinyMCE for the first time

### Step 1: Embed your custom script tag into your webpage

In order to load TinyMCE for the very first time, you need to embed the TinyMCE editor code into your application. This is done by adding the following script tag into your app, or in the case of a web page the `<head>` of the page:

```js
<script src="http://cloud.tinymce.com/stable/tinymce.min.js?apiKey=your_API_key"></script>
```

### Step 2: Load, customize and interact with TinyMCE

In addition to the advanced content creation solutions available in the Cloud offering, you have access to more than 40 open source plugins to enhance the editing experience. We have provided a range of [simple examples]({{ site.baseurl }}/demo/basic-example/) and we encourage you to review our walkthrough documentation that will help you [get started with TinyMCE]({{ site.baseurl }}/get-started/first-steps/).

### Step 3: Specifying purchased TinyMCE plugins and toolbar/menu items

Lastly, you just need to extend your TinyMCE configuration to include any of the additional, advanced plugins (and associated toolbar/menu items) you’ve purchased. You will find enablement guides here:

* [Powerpaste]({{ site.baseurl }}/plugins/powerpaste/)
* [Spell Checker]({{ site.baseurl }}/plugins/tinymcespellchecker/)
**Note:** `spellchecker_rpc_url` is **not** required when enabling this plugin via [TinyMCE Cloud]({{ site.baseurl }}/get-started-cloud/)
* [Image Tools (with configured image proxy)]({{ site.baseurl }}/plugins/imagetools/)
**Note:** `imagetools_cors_hosts` and `imagetools_proxy` are *not* required to be configured when enabling this plugin via [TinyMCE Cloud]({{ site.baseurl }}/get-started-cloud/)
* [Accessibility Checker]({{ site.baseurl }}/plugins/a11ychecker/)
* [Advanced Code Editor]({{ site.baseurl }}/plugins/advcode/)
* [Enhanced Media Embed]({{ site.baseurl }}/plugins/mediaembed/)
* [Link Checker]({{ site.baseurl }}/plugins/linkchecker/)

## Migrating from TinyMCE SDK to TinyMCE Cloud

### Step 1: Replace existing reference to tinymce.min.js

Migrating from the SDK to the Cloud is a relatively straightforward process. Please remove your existing script tag that loads TinyMCE’s JavaScript (typically a reference to `tinymce.min.js` either hosted in your own application or available via our [CDN](https://www.tinymce.com/download/)) and replace this script tag with the following:

```js
<script src="http://cloud.tinymce.com/stable/tinymce.min.js?apiKey=your_API_key"></script>
```

### Step 2: Update custom plugin paths

If you have any custom created plugins (or if you've modified any of the existing plugins), in order for these plugins to continue operating with your Cloud deployment, you'll need to reference these plugins via [external_plugins]({{ site.baseurl }}/configure/integration-and-setup/#external_plugins) rather than the regular [plugins]({{ site.baseurl }}/get-started/work-with-plugins/) configuration element.

### Step 3: Specify purchased TinyMCE plugins and toolbar buttons

Now you just need to extend your [TinyMCE configuration]({{ site.baseurl }}/configure/) to include any additional plugins (and associated toolbar/menu items) you’ve purchased. You will find enablement guides here:

* [Powerpaste]({{ site.baseurl }}/plugins/powerpaste/)
* [Spell Checker]({{ site.baseurl }}/plugins/tinymcespellchecker/)
**Note:** `spellchecker_rpc_url` is **not** required when enabling this plugin via [TinyMCE Cloud]({{ site.baseurl }}/get-started-cloud/)
* [Image Tools (with configured image proxy)]({{ site.baseurl }}/plugins/imagetools/)
**Note:** `imagetools_cors_hosts` and `imagetools_proxy` are *not* required to be configured when enabling this plugin via [TinyMCE Cloud]({{ site.baseurl }}/get-started-cloud/)
* [Accessibility Checker]({{ site.baseurl }}/plugins/a11ychecker/)
* [Advanced Code Editor]({{ site.baseurl }}/plugins/advcode/)
* [Enhanced Media Embed]({{ site.baseurl }}/plugins/mediaembed/)
* [Link Checker]({{ site.baseurl }}/plugins/linkchecker/)
