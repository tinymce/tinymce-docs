---
layout: default
title: Bootstrap integration
title_nav: Bootstrap
description: How to override the built-in block on `focusin` in Bootstrap dialogs when using TinyMCE.
keywords: integration integrate bootstrap
---

## TinyMCE Bootstrap integration quick start guide

Using {{site.productname}} with bootstrap does not require any special configuration.

The {{site.productname}} jQuery integration can be used with bootstrap. For information on using the jQuery integration, see: [jQuery integration]({{site.baseurl}}/integrations/jquery/)

This procedure creates a basic Bootstrap integration containing a {{site.productname}} editor based on our [Basic example]({{site.baseurl}}/demo/basic-example/).

### Procedure

1. In a HTML file, add a source script for Bootstrap JS.

    If the project loads Bootstrap from https://www.bootstrapcdn.com/, use the script provided by the [Bootstrap CDN](https://www.bootstrapcdn.com/), which includes the `integrity` and `crossorigin` attributes.
2. Source {{site.productname}} from the {{site.cloudname}} or from a self-hosted location.

    * **{{site.cloudname}}**

        To source {{site.productname}} from the {{site.cloudname}}, add the following `script` element to the `<head>` of the document:
        ```html
        <script src="{{site.cdnurl}}" referrerpolicy="origin"></script>
        ```
        Replace `no-api-key` in the source script (`<script src=...`) with a {{site.cloudname}} API key, which is created when signing up to the [{{site.cloudname}}]({{site.accountsignup}}).

        Signing up for a {{site.cloudname}} API key will also provide a trial of the [Premium Plugins]({{site.baseurl}}/plugins/premium/).

    * **{{site.productname}} self-hosted**

        To use an independent deployment of {{site.productname}}, add the following source script to either the `<head>` or the end of the `<body>` of the HTML file, such as:
        ```html
        <script src="/path/to/tinymce.min.js"></script>
        ```

        For information on self-hosting {{site.productname}}, see: [Installing {{ site.productname }}]({{site.baseurl}}/general-configuration-guide/advanced-install/).

3. Add an initialization point for {{site.productname}}, such as:

    ```html
    <div>
      <textarea id="tiny"></textarea>
    </div>
    ```
4. Add the {{site.productname}} init script.

    ```html
    <script>
      tinymce.init({
        selector: 'textarea#tiny'
      });
    </script>
    ```

## Using TinyMCE in a Bootstrap dialog

To render {{site.productname}} instances inside Bootstrap UI dialogs, add the following code:

```js
// Prevent Bootstrap dialog from blocking focusin
$(document).on('focusin', function(e) {
  if ($(e.target).closest(".tox-tinymce, .tox-tinymce-aux, .moxman-window, .tam-assetmanager-root").length) {
    e.stopImmediatePropagation();
  }
});
```

This code is required because Bootstrap blocks all `focusin` calls from elements outside the dialog. For a working example, [try this {{site.productname}} fiddle](http://fiddle.tiny.cloud/gRgaab).

## A note about integrations

{{site.thirdPartyInteg}}
