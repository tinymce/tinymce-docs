---
layout: default
title: jQuery integration
title_nav: jQuery
description: Documentation for the official TinyMCE jQuery integration.
keywords: integration integrate jquery javascript
---

## TinyMCE jQuery integration quick start guide

The [Official {{site.productname}} jQuery component](https://github.com/tinymce/tinymce/blob/master/modules/tinymce/src/core/main/js/JqueryIntegration.js) integrates TinyMCE into jQuery projects.
This procedure creates a basic jQuery integration containing a {{site.productname}} editor based on our [Basic example]({{site.baseurl}}/demo/basic-example/).

### Procedure

1. In a HTML file, add a source script for source jQuery.

    If the project loads jQuery from https://code.jquery.com/, use the script provided by the [jQuery CDN](https://code.jquery.com/), which includes the `integrity` and `crossorigin` attributes.

2. Source {{site.productname}} and the {{site.productname}} jQuery integration from the {{site.cloudname}} or from a self-hosted location.

    * **{{site.cloudname}}**

        To source {{site.productname}} and the {{site.productname}} jQuery integration from the {{site.cloudname}}, add the following `script` elements:

        ```html
<script src="{{site.cdnurl}}" referrerpolicy="origin"></script>
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/jquery.tinymce.min.js" referrerpolicy="origin"></script>
        ```

        Replace `no-api-key` in the source script (`<script src=...`) with a {{site.cloudname}} API key, which is created when signing up to the [{{site.cloudname}}]({{site.accountsignup}}).

        Signing up for a {{site.cloudname}} API key will also provide a trial of the [Premium Plugins]({{site.baseurl}}/enterprise/).

    * **{{site.productname}} self-hosted**

        To use an independent deployment of {{site.productname}}, add source scripts to either the `<head>` or the end of the `<body>` of the HTML file, such as:

        ```html
<script src="/path/to/tinymce.min.js"></script>
<script src="/path/to/jquery.tinymce.min.js"></script>
        ```

        For information on self-hosting {{site.productname}}, see: [Installing {{ site.productname }}]({{site.baseurl}}/general-configuration-guide/advanced-install/).


3. Add an initialization point for {{site.productname}}, such as:

    ```html
    <div>
      <textarea id="tiny"></textarea>
    </div>
    ```

4. Add the {{site.productname}} jQuery init script. The {{site.productname}} selector is defined in the jQuery prefix, and any other settings are defined within the `tinymce` object.

    ```html
    <script>
      $('textarea#tiny').tinymce({    });
    </script>
    ```

### Example jQuery integration

To load a TinyMCE editor similar to the [Basic example]({{site.baseurl}}/demo/basic-example/), add the following code to an empty HTML file.

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="{{site.cdnurl}}" referrerpolicy="origin"></script>
    <script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/jquery.tinymce.min.js" referrerpolicy="origin"></script>
  </head>
  <body>
    <div>
      <textarea id="tiny"></textarea>
    </div>
    <script>
      $('textarea#tiny').tinymce({
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
      });
    </script>
  </body>
</html>
```

## TinyMCE in a jQuery UI Dialog

To render {{site.productname}} instances inside jQuery UI dialogs, add the following code:

```js
// Prevent jQuery UI dialog from blocking focusin
$(document).on('focusin', function(e) {
  if ($(e.target).closest(".tox-tinymce, .tox-tinymce-aux, .moxman-window, .tam-assetmanager-root").length) {
    e.stopImmediatePropagation();
  }
});
```

This code is required because jQuery blocks all `focusin` calls from elements outside the dialog. For a working example, [try this {{site.productname}} fiddle](http://fiddle.tiny.cloud/rsdaab/840).

## A note about integrations

> **Note**: We are pleased to provide integrations/code guidance to help you build great products with {{site.productname}}. If you have queries about this integration, post your question on Stack Overflow using the [`{{site.prodnamecode}}` tag]({{site.communitysupporturl}}).
