---
layout: default
title: Tiny Drive
title_nav: Tiny Drive
description_short: Tiny Drive
description: Tiny Drive. A premium plugin to manage files & images.
keywords: tinydrive .net php relative_urls
---

## Live example

This example shows you how to use Tiny Drive for your file and image management. For more information on the Tiny Drive plugin, see the [docs]({{site.baseurl}}/plugins/drive/).

{% include codepen.html id="drive-demo" %}

### Code:

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'image media link tinydrive code imagetools',
  height: 600,
  tinydrive_token_provider: 'URL_TO_YOUR_TOKEN_PROVIDER',
  toolbar: 'insertfile image link | code'
});
```