---
layout: default
title: Version compatibility reference
description_short: Matrix of compatibility between TinyMCE editor versions and premium plugins.
description: Premium plugins compatibility with TinyMCE editor versions.
keywords: tinymce cloud script textarea apiKey
---

Specific versions of {{site.productname}} are compatible with premium plugins.

Use the following matrix in conjunction with the optional parameters for specifying editor version and [plugin version]({{ site.baseurl }}/how-to-guides/cloud-deployment-guide/editor-plugin-version) to ensure compatibility.

> **Note**: On June 4, 2019 the URL to access tiny.cloud changed from:
>```js
><script src='https://cloud.tinymce.com/5/tinymce.min.js?apiKey=your_API_key'></script>
>```
>to:
>```js
><script
>  src='https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js'
>  referrerpolicy='origin'
>></script>
>```
> Ensure the application uses the latest script tag and substitute 'no-api-key' with your api key.

{% include misc/plugin_support_table.md %}

> **Important**: Ensure the plugins are supported in your editor version when deploying premium plugins only using [{{site.cloudname}}]({{ site.baseurl }}/how-to-guides/cloud-deployment-guide/features-only).
