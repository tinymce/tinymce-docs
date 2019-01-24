---
layout: default
title: Cloud Deployment of Editor & Plugins
description_short: Learn how to set up the TinyMCE editor via the Cloud or migrate from a self-hosted environment.
description: Run Tiny Cloud in less than 5 minutes.
keywords: tinymce cloud script textarea apiKey
---

Tiny Cloud is the easiest way to integrate TinyMCE and upgrade to premium plugins.

Tiny Cloud can be used without an API key. Refer to the [General Configuration]({{site.baseurl}}/general-configuration-guide) guide for more information. Sign up for an API key and update the script tag to use premium plugins or avoid the in-editor developer warning.

All Tiny Cloud accounts include a free, pre-configured cloud image proxy service. This setup uses the [Image Tools]({{  site.baseurl }}/plugins/imagetools/) plugin.

## Integrating TinyMCE for the first time

### Step 1: Insert the Tiny Cloud script tag into the webpage

Insert the TinyMCE editor code into the application to load TinyMCE for the first time. The code inserting is done by adding the following script tag into your app, or in the case of a web page the `<head>` of the page:

The following example adds a script tag into the application that inserts the code. Use the `<head>` of the page on a web page.

```js
<script src="https://cloud.tinymce.com/5-stable/tinymce.min.js?apiKey=your_API_key"></script>
```

### Step 2: Load, customize and interact with TinyMCE

There are more than 40 open source plugins that enhance the editing experience in addition to the advanced content create solutions on Tiny Cloud. A range of [simple examples]({{ site.baseurl }}/demo/basic-example/) are available. Refer to [get started with TinyMCE]({{ site.baseurl }}/quick-start) for additional walkthrough documentation.

### Step 3: Specifying purchased TinyMCE plugins and toolbar/menu items

Extend the [TinyMCE configuration]({{ site.baseurl }}/configure/) to include any additional purchased plugins and associated toolbar and menu items. Refer to the following enablement guides for more information:

* [Powerpaste]({{ site.baseurl }}/plugins/powerpaste/)
* [Spell Checker]({{ site.baseurl }}/plugins/tinymcespellchecker/)

> Note: `spellchecker_rpc_url` is **not** required when enabling this plugin via [Tiny Cloud]({{ site.baseurl }}/cloud-deployment-guide/)

* [Image Tools (with configured image proxy)]({{ site.baseurl }}/plugins/imagetools/)

> Note: Configuration of the `imagetools_cors_hosts` and `imagetools_proxy` properties occurrs automatically.

* [Accessibility Checker]({{ site.baseurl }}/plugins/a11ychecker/)
* [Advanced Code Editor]({{ site.baseurl }}/plugins/advcode/)
* [Enhanced Media Embed]({{ site.baseurl }}/plugins/mediaembed/)
* [Link Checker]({{ site.baseurl }}/plugins/linkchecker/)

> Note: It may take up to 30 minutes for the purchased plugin to be available to TinyMCE. Clear the browser's cache.

### Step 4: Forward proxy configuration
Ensure that the following URLs are accessible via this proxy if the network has a forward proxy that controls access to the internet.

* All URLs where the editor is deployed.
* All URLs where the plugins are deployed.
* https://imageproxy.tinymce.com
* https://hyperlinking.tinymce.com
* https://spelling.tinymce.com

Ensure the `tiny-api-key` and `tinymce-api-key` headers are retained while requesting the list of above URLs.

### Step 5: Specifying a translation
[Download a language pack](https://www.tinymce.com/i18n) to enable a language other than English (US). [Specify its location]({{ site.baseurl }}/configure/localization/#language_url) with the `language_url` configuration option.

## Migrating from a self-hosted environment to Tiny Cloud

### Step 1: Replace existing reference to tinymce.min.js

Migrating from a self-hosted environment to Tiny Cloud is easy. Remove the existing script tag that loads TinyMCE’s JavaScript.

> Note: The script tag typically references `tinymce.min.js` hosted within the application or available at a legacy CDN.

Replace the script tag with the following:

```js
<script src="{{ site.cdnurl }}?apiKey=your_API_key"></script>
```

### Step 2: Update custom plugin paths

Reference [external_plugins]({{ site.baseurl }}/configure/integration-and-setup/#external_plugins) to ensure custom plugins or modified plugins continue to function in the Cloud deployment. 

> Warning! Do not use the regular [plugins]({{ site.baseurl }}/general-configuration-guide/work-with-plugins/) configuration element.

### Step 3: Specify purchased TinyMCE plugins and toolbar buttons

Extend the [TinyMCE configuration]({{ site.baseurl }}/configure/) to include any additional purchased plugins and associated toolbar and menu items. Refer to the following enablement guides for more information:

* [Powerpaste]({{ site.baseurl }}/plugins/powerpaste/)
* [Spell Checker]({{ site.baseurl }}/plugins/tinymcespellchecker/)

> Note: `spellchecker_rpc_url` is **not** required when enabling this plugin via [Tiny Cloud]({{ site.baseurl }}/cloud-deployment-guide/)

* [Image Tools (with configured image proxy)]({{ site.baseurl }}/plugins/imagetools/)

> Note: Configuration of the `imagetools_cors_hosts` and `imagetools_proxy` properties occurrs automatically.

* [Accessibility Checker]({{ site.baseurl }}/plugins/a11ychecker/)
* [Advanced Code Editor]({{ site.baseurl }}/plugins/advcode/)
* [Enhanced Media Embed]({{ site.baseurl }}/plugins/mediaembed/)
* [Link Checker]({{ site.baseurl }}/plugins/linkchecker/)
