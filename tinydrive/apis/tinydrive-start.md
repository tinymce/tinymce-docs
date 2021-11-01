---
layout: default
title: Tiny Drive Start API
title_nav: The Start API
description: Using the Tiny Drive Start API
keywords: tinydrive api start
---

The {{site.cloudfilemanager}} Start API is similar to the Pick and Browse APIs, but this API does not provide a close button for the dialog. This can be useful when you want to launch {{site.cloudfilemanager}} from an url where there is no application to insert the files into. This might be useful when you want to launch {{site.cloudfilemanager}} from an url but not part of a bigger application.

## Basic usage

The following example shows basic usage of the {{site.cloudfilemanager}} Start API.

```html
<!-- Add the Tiny Drive source script to the page -->
<script src="{{site.tdcdnurl}}" referrerpolicy="origin"></script>
<script>
  (function () {
    // Configure the Tiny Drive Start API
    tinydrive.start({
      token_provider: '/your-local/jwt-provider',
      target: 'div#drive-standalone-start'
    });
  })();
</script>
<div id="drive-standalone-start" style="height: 500px;">
</div>
```

## Interactive example: Using `tinydrive.start`

{% include live-demo.html id="drive-standalone-start" type="tinydrive" %}

## Configuration options

{% assign apiname = 'start' %}

{% include tinydrive/token_provider.md %}

{% include tinydrive/filetypes.md %}

{% include tinydrive/max_image_dimension.md %}

{% include tinydrive/skin.md %}

{% include tinydrive/target.md %}

{% include tinydrive/dropbox_app_key.md %}

{% include tinydrive/google_drive_key.md %}

{% include tinydrive/google_drive_client_id.md %}
