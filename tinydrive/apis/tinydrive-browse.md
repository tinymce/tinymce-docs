---
layout: default
title: Tiny Drive Browse API
title_nav: The Browse API
description: Using the Tiny Drive Browse API
keywords: tinydrive api browse
---

The `tinydrive.browse` method allows users to browse the files stored in {{site.cloudfilemanager}}. The dialog will allow users to manage the files in the {{site.cloudfilemanager}}, such as adding, moving, previewing, and deleting files. The API returns a promise that will resolve when the {{site.cloudfilemanager}} dialog is closed by using the close button.

## Basic usage

The following example shows basic usage of the {{site.cloudfilemanager}} Browse API.

```html
<!-- Add the Tiny Drive source script to the page -->
<script src="{{site.tdcdnurl}}" referrerpolicy="origin"></script>
<script>
  // Configure the Tiny Drive Browse API
  function browseTinyDrive () {
    tinydrive.browse({
      token_provider: '/your-local/jwt-provider',
    }).then(function () {
      console.log('Dialog closed');
    });
  };
  // Add a trigger to initialize the Tiny Drive Browse dialog
  var browseButton = document.querySelector('.drive-standalone-browse');
      browseButton.addEventListener('click', browseTinyDrive, false);
</script>
<button class="drive-standalone-browse">Browse</button>
```

## Interactive example: Using `tinydrive.browse`

{% include live-demo.html id="drive-standalone-browse" type="tinydrive" %}

## Configuration options

{% assign apiname = 'browse' %}

{% include tinydrive/token_provider.md %}

{% include tinydrive/filetypes.md %}

{% include tinydrive/max_image_dimension.md %}

{% include tinydrive/skin.md %}

{% include tinydrive/target.md %}

{% include tinydrive/dropbox_app_key.md %}

{% include tinydrive/google_drive_key.md %}

{% include tinydrive/google_drive_client_id.md %}
