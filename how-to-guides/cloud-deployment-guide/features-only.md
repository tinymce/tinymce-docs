---
layout: default
title: Cloud deployment of plugins Only
description_short: Learn how to setup TinyMCE Plugins via the Tiny Cloud.
description: Connect to Tiny Cloud within a hybrid deployment.
keywords: tinymce cloud script textarea apiKey hybrid
---

A hybrid deployment of {{site.cloudname}} allows the loading of premium plugins in a self-hosted environment. Download and install the [{{site.productname}} Community edition]({{site.gettiny}}/) to get started.

Sign up for a free API key provides entitlements to premium [Image Tools]({{site.baseurl}}/plugins-ref/opensource/imagetools/) plugin. A {{site.cloudname}} image proxy server must already be configured. Premium plugins can be purchased at any time once the API key has been set up.

## Step 1: Insert the custom script tag into the webpage

Add the following script in the webpage once the script tag to load {{site.productname}} has been specified. Be sure to substitute 'no-api-key' with your api key.

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/plugins.min.js" referrerpolicy="origin"></script>
```

## Step 2: Specify purchased TinyMCE plugins and toolbar buttons

Extend the [{{site.productname}} configuration]({{ site.baseurl }}/how-to-guides/learn-the-basics/basic-setup/) to include any additional purchased plugins and associated toolbar and menu items. Refer to the following enablement guides for more information:

* [Mentions]({{site.baseurl}}/plugins-ref/premium/mentions/)
* [{{site.cloudfilemanager}}]({{ site.baseurl }}/plugins-ref/premium/tinydrive/)
* [Comments]({{site.baseurl}}/plugins-ref/premium/comments/)
* [Page Embed]({{site.baseurl}}/plugins-ref/premium/pageembed/)
* [Permanent Pen]({{site.baseurl}}/plugins-ref/premium/permanentpen/)
* [Format Painter]({{site.baseurl}}/plugins-ref/premium/formatpainter/)
* [PowerPaste]({{site.baseurl}}/plugins-ref/premium/powerpaste/)
* [Spell Checker Pro]({{site.baseurl}}/plugins-ref/premium/tinymcespellchecker/)

> Note: `spellchecker_rpc_url` is **not** required when enabling this plugin via [{{site.cloudname}}]({{ site.baseurl }}/how-to-guides/cloud-deployment-guide/).

* [Image Tools (with configured image proxy)]({{site.baseurl}}/plugins-ref/opensource/imagetools/)

> Note: Configuration of the `imagetools_cors_hosts` and `imagetools_proxy` properties occurrs automatically.

* [Moxie Manager]({{site.baseurl}}/plugins-ref/premium/moxiemanager/)
* [Accessibility Checker]({{site.baseurl}}/plugins-ref/premium/a11ychecker/)
* [Advanced Code Editor]({{site.baseurl}}/plugins-ref/premium/advcode/)
* [Enhanced Media Embed]({{site.baseurl}}/plugins-ref/premium/mediaembed/)
* [Link Checker]({{site.baseurl}}/plugins-ref/premium/linkchecker/)

> Note: It may take up to 30 minutes for the purchased plugin to be available to {{site.productname}}. Clear the browser's cache.

The following is a complete example:

The example below has the following:

* The {{site.cloudname}} `API key` has the value `no-api-key`.
* The {{site.cloudname}} has the [Spell Checker Pro]({{site.baseurl}}/plugins-ref/premium/tinymcespellchecker/) plugin enabled.

```js
<html>
   <head>
      <script src="https://your_server/tinymce.min.js"></script>
      <script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/plugins.min.js" referrerpolicy="origin"></script>
   </head>
   <body>
      <textarea><p>test textarea</p></textarea>
      <script>
         tinymce.init({
            selector: 'textarea',
            height: 500,
            plugins: [
               'advlist autolink lists link image charmap print preview anchor pagebreak',
               'tinymcespellchecker']
         });
      </script>
   </body>
<html>
```

## Step 3: Forward proxy configuration
Ensure that the following URLs are accessible via this proxy if the network has a forward proxy that controls access to the internet.

* All URLs where the editor is deployed.
* All URLs where the plugins are deployed.
* https://imageproxy.tiny.cloud
* https://hyperlinking.tiny.cloud
* https://spelling.tiny.cloud

Ensure the `tiny-api-key` and `tinymce-api-key` headers are retained while requesting the list of above URLs.
