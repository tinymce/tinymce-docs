---
layout: default
title: Tiny Drive Pick API
title_nav: The Pick API
description: Using the Tiny Drive Pick API
keywords: tinydrive api pick
---

The `tinydrive.pick` method allows users to pick files from {{site.cloudfilemanager}} and get the metadata of those files returned in a promise. This metadata can be used to insert or retrieve the file or files if needed.

## File Picker Result Format

The `tinydrive.pick` method will return a promise with object that has a `files` property. This `files` property is an array of files with the following properties.

```js
{
  "files": [
    {
      "name": "myphoto.jpg",
      "url": "https://drive.tiny.cloud/1/h0ed4hzbe69rfcrnj0uwvwi73e8y5m70jlolaalzkssog63b/48bda29d-ed1f-488f-adf7-b597dd3a8791",
      "size": 1180390,
      "type": "image",
      "mdate": "2018-06-13T16:49:10Z"
    }
  ]
}
```

name
: The name of the selected file for example: `my.jpg`.

size
: The size in bytes of the selected file.

url
: The URL for the selected file would be in the following format: `https://drive.tiny.cloud/1/<your api key>/<file uuid>`

mdate
: The modification date for the file in ISO 8601 format for example: `2019-02-24T15:00:00Z`

## Basic usage

The following example shows basic usage of the {{site.cloudfilemanager}} Pick API.

```html
<!-- Add the Tiny Drive source script to the page -->
<script src="{{site.tdcdnurl}}" referrerpolicy="origin"></script>
<script>
  // Configure the Tiny Drive Pick API
  function retrieveFromTinyDrive () {
    tinydrive.pick({
      token_provider: '/your-server-endpoint/jwt-provider',
      filetypes: ['image'],
    }).then(function(result) {
      outputImg.src = result.files[0].url;
      console.log("Tiny Drive pick result:\n", result);
    });
  };
  // Add a trigger to initialize the Tiny Drive Pick dialog
  var insertButton = document.querySelector('.drive-standalone-pick');
      insertButton.addEventListener('click', retrieveFromTinyDrive, false);
  var outputImg = document.querySelector('img.drive_output');
</script>
<button class="drive-standalone-pick">Insert image from Tiny Drive</button>
<img class="drive_output" width="200"/>
```

## Interactive example: Using `tinydrive.pick`

{% include live-demo.html id="drive-standalone-pick" type="tinydrive" %}

## Configuration options

{% assign apiname = 'pick' %}

{% include tinydrive/token_provider.md %}

{% include tinydrive/filetypes.md %}

{% include tinydrive/max_image_dimension.md %}

{% include tinydrive/skin.md %}

{% include tinydrive/target.md %}

{% include tinydrive/dropbox_app_key.md %}

{% include tinydrive/google_drive_key.md %}

{% include tinydrive/google_drive_client_id.md %}
