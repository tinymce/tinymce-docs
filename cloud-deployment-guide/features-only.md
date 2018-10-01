---
layout: default
title: Cloud Deployment of Plugins Only
description_short: Learn how to setup TinyMCE Plugins via our Cloud.
description: TinyMCE Cloud customers, you'll be up and running in less than 5 minutes.
keywords: tinymce cloud script textarea apiKey
---

If you’re already comfortable hosting and maintaining [TinyMCE Community edition](https://www.tinymce.com/download/), or you’re running a web application where you have no control over the TinyMCE instance, you’re still able to load our premium TinyMCE plugins from TinyMCE Cloud. Think of this as a hybrid deployment.

Signing up for a free API key entitles you to the premium [Image Tools]({{  site.baseurl }}/plugins/imagetools/) plugin, with a provided cloud image proxy server already configured. You can purchase our Premium Plugins at any time once your API key is set up.

## Step 1: Embed your custom script tag into your webpage

Within your webpage, after you’ve specified your script tag to load the TinyMCE editor code, you’ll then need to add the following new script:

```js
<script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key"></script>
```

## Step 2: Specify purchased TinyMCE plugins and toolbar buttons

Now you just need to extend your [TinyMCE configuration]({{ site.baseurl }}/configure/) to include any additional plugins (and associated toolbar/menu items) you’ve purchased. You will find enablement guides here:

* [Powerpaste]({{ site.baseurl }}/plugins/powerpaste/)
* [Spell Checker]({{ site.baseurl }}/plugins/tinymcespellchecker/)

> Note: `spellchecker_rpc_url` is **not** required when enabling this plugin via [TinyMCE Cloud]({{ site.baseurl }}/cloud-deployment-guide/)

* [Image Tools (with configured image proxy)]({{ site.baseurl }}/plugins/imagetools/)

> Note: We will configure the `imagetools_cors_hosts` and `imagetools_proxy` properties for you automatically.

* [Accessibility Checker]({{ site.baseurl }}/plugins/a11ychecker/)
* [Advanced Code Editor]({{ site.baseurl }}/plugins/advcode/)
* [Enhanced Media Embed]({{ site.baseurl }}/plugins/mediaembed/)
* [Link Checker]({{ site.baseurl }}/plugins/linkchecker/)

> Note: After purchasing a plugin, it may take up to 30 minutes for the plugin to become available with your editor. You may also need to clear your browser's cache.

Here is a complete example, whereby:

* The account `API key` has the value *TEST_API_KEY*.
* The account has the [Spell Checker]({{ site.baseurl }}/plugins/tinymcespellchecker/) plugin enable.

```js
<html>
   <head>
      <script src="https://your_server/tinymce.min.js"></script>
      <script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key"></script>
   </head>
   <body>
      <textarea><p>test textarea</p></textarea>
      <script>
         tinymce.init({
            selector: 'textarea',
            height: 500,
            plugins: [
               'advlist autolink lists link image charmap print preview hr anchor pagebreak',
               'tinymcespellchecker']
         });
      </script>
   </body>
<html>
```

## Step 3: Forward proxy configuration
If your company network has a forward proxy that controls access to the internet, please ensure that the following URLs are accessible via this proxy.

* All URLs at which the editor is deployed.
* All URLs at which the plugins are deployed.
* https://imageproxy.tinymce.com
* https://hyperlinking.tinymce.com
* https://spelling.tinymce.com

Also, please ensure that the `tiny-api-key` and `tinymce-api-key` headers are retained while requesting the list of URLs above.
