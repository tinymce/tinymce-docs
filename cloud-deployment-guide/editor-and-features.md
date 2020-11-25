---
layout: default
title: Cloud deployment of editor & plugins
description_short: Learn how to set up the TinyMCE editor via the Cloud or migrate from a self-hosted environment.
description: Learn how to set up the TinyMCE editor via the Cloud or migrate from a self-hosted environment.
keywords: tinymce cloud script textarea apiKey
---

{{site.cloudname}} is the easiest way to integrate {{site.productname}} and upgrade to premium plugins.

{{site.cloudname}} can be used without an API key. Refer to the [Introduction & getting started ]({{site.baseurl}}/general-configuration-guide) guide for more information. Sign up for an API key and update the script tag to use premium plugins or avoid the in-editor developer warning.

All {{site.cloudname}} accounts include a free, pre-configured {{site.cloudname}} image proxy service. This setup uses the [Image tools]({{site.baseurl}}/plugins/opensource/imagetools/) plugin.

## Integrating TinyMCE for the first time

### Step 1: Insert the Tiny Cloud script tag into the webpage

Insert the {{site.productname}} editor code into the application to load {{site.productname}} for the first time. The code inserting is done by adding the following script tag into your app, or in the case of a web page the `<head>` of the page:

The following example adds a script tag into the application that inserts the code. Use the `<head>` of the page on a web page. Be sure to substitute 'no-api-key' with your api key.

```js
<script src="{{ site.cdnurl }}" referrerpolicy="origin"></script>
```

||Value|Description|
|---|---|---|
|1|no-api-key|Replace with your api key|
|2|origin=|A `referrerpolicy` specifies how much of the current page's URL is sent in the `Referer` header when the browser fetches page resources (for example, the {{site.productname}} editor). The use of the `Referer` header ensures API keys are only used on domains registered to their owners. We only care about the domain portion however (similar to the operation of `Origin` header), so for improved performance and privacy always set the `referrerpolicy` to `origin` when requesting {{site.cloudname}} resources.|

![Script Tag Description]({{ site.baseurl }}/images/scripttag.png)

### Step 2: Load, customize and interact with TinyMCE

There are more than 40 open source plugins that enhance the editing experience in addition to the advanced content create solutions on {{site.cloudname}}. A range of [simple examples]({{ site.baseurl }}/demo/basic-example/) are available. Refer to the [Quick start]({{ site.baseurl }}/quick-start) section for more information.

### Step 3: Specifying purchased TinyMCE plugins and toolbar/menu items

Extend the [{{site.productname}} configuration]({{ site.baseurl }}/configure/) to include any additional purchased plugins and associated toolbar and menu items. Refer to the following enablement guides for more information:

* [Mentions]({{site.baseurl}}/plugins/premium/mentions/)
* [{{site.cloudfilemanager}}]({{ site.baseurl }}/plugins/premium/tinydrive/)
* [Comments]({{site.baseurl}}/plugins/premium/comments/)
* [Page Embed]({{site.baseurl}}/plugins/premium/pageembed/)
* [Permanent Pen]({{site.baseurl}}/plugins/premium/permanentpen/)
* [Format Painter]({{site.baseurl}}/plugins/premium/formatpainter/)
* [PowerPaste]({{site.baseurl}}/plugins/premium/powerpaste/)
* [Spell Checker Pro]({{site.baseurl}}/plugins/premium/tinymcespellchecker/)

> **Note**: `spellchecker_rpc_url` is **not** required when enabling this plugin via [{{site.cloudname}}]({{ site.baseurl }}/cloud-deployment-guide/).

* [Image Tools (with configured image proxy)]({{site.baseurl}}/plugins/opensource/imagetools/)

> **Note**: Configuration of the `imagetools_cors_hosts` and `imagetools_proxy` properties occurs automatically.

* [Moxie Manager]({{site.baseurl}}/plugins/premium/moxiemanager/)
* [Accessibility Checker]({{site.baseurl}}/plugins/premium/a11ychecker/)
* [Advanced Code Editor]({{site.baseurl}}/plugins/premium/advcode/)
* [Enhanced Media Embed]({{site.baseurl}}/plugins/premium/mediaembed/)
* [Link Checker]({{site.baseurl}}/plugins/premium/linkchecker/)

> **Note**: It may take up to 30 minutes for the purchased plugin to be available to {{site.productname}}. Clear the browser's cache.

### Step 4: Forward proxy configuration

Ensure that the following URLs are accessible via this proxy if the network has a forward proxy that controls access to the internet.

* All URLs where the editor is deployed.
* All URLs where the plugins are deployed.
* https://imageproxy.tiny.cloud
* https://hyperlinking.tiny.cloud
* https://spelling.tiny.cloud

Ensure the `tiny-api-key` and `tinymce-api-key` headers are retained while requesting the list of above URLs.

### Step 5: Specifying a translation

To change the user interface language with a language pack, use the [language configuration option]({{ site.baseurl }}/configure/localization/#language).

Alternatively, [download a language pack]({{site.gettiny}}/language-packages/) to enable a language other than English (US). [Specify its location]({{ site.baseurl }}/configure/localization/#language_url) with the `language_url` configuration option.

## Migrating from a self-hosted environment to Tiny Cloud

### Step 1: Replace existing reference to tinymce.min.js

Migrating from a self-hosted environment to {{site.cloudname}} is easy. Remove the existing script tag that loads {{site.productname}}’s JavaScript.

> **Note**: The script tag typically references `tinymce.min.js` hosted within the application or available at a legacy CDN.

Replace the script tag with the following:

```js
<script src="{{ site.cdnurl }}" referrerpolicy="origin"></script>
```

### Step 2: Update custom plugin paths

Reference [external_plugins]({{ site.baseurl }}/configure/integration-and-setup/#external_plugins) to ensure custom plugins or modified plugins continue to function in the {{site.cloudname}} deployment.

> **Warning**: Do not use the regular [plugins]({{ site.baseurl }}/general-configuration-guide/work-with-plugins/) configuration element.

### Step 3: Specify purchased TinyMCE plugins and toolbar buttons

Extend the [{{site.productname}} configuration]({{ site.baseurl }}/configure/) to include any additional purchased plugins and associated toolbar and menu items. Refer to the following enablement guides for more information:

* [Mentions]({{site.baseurl}}/plugins/premium/mentions/)
* [{{site.cloudfilemanager}}]({{ site.baseurl }}/plugins/premium/tinydrive/)
* [Comments]({{site.baseurl}}/plugins/premium/comments/)
* [Page Embed]({{site.baseurl}}/plugins/premium/pageembed/)
* [Permanent Pen]({{site.baseurl}}/plugins/premium/permanentpen/)
* [Format Painter]({{site.baseurl}}/plugins/premium/formatpainter/)
* [Powerpaste]({{site.baseurl}}/plugins/premium/powerpaste/)
* [Spell Checker Pro]({{site.baseurl}}/plugins/premium/tinymcespellchecker/)

> **Note**: `spellchecker_rpc_url` is **not** required when enabling this plugin via [{{site.cloudname}}]({{ site.baseurl }}/cloud-deployment-guide/).

* [Image tools (with configured image proxy)]({{site.baseurl}}/plugins/opensource/imagetools/)

> **Note**: Configuration of the `imagetools_cors_hosts` and `imagetools_proxy` properties occurs automatically.

* [Moxie Manager]({{site.baseurl}}/plugins/premium/moxiemanager/)
* [Accessibility Checker]({{site.baseurl}}/plugins/premium/a11ychecker/)
* [Advanced Code Editor]({{site.baseurl}}/plugins/premium/advcode/)
* [Enhanced Media Embed]({{site.baseurl}}/plugins/premium/mediaembed/)
* [Link Checker]({{site.baseurl}}/plugins/premium/linkchecker/)
