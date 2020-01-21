---
layout: default
title: KnockoutJS integration
title_nav: Knockout
description: A custom binding that applies a TinyMCE Editor to the bound HTML element.
keywords: integration integrate knockout knockoutjs
---

{{site.productname}} can be added to a Knockout project using the third-party TinyMCE Knockout integration.

{{site.thirdPartyInteg}}

Michael Papworth developed the Knockout binding for TinyMCE. For details, see: [the tinymce-knockout-binding project](https://github.com/michaelpapworth/tinymce-knockout-binding).

### Procedure

1. In a HTML file, add source scripts for jQuery and Knockout JS.

    If the project loads jQuery or Knockout from a Content delivery Network (CDN), use the script provided by the CDN, including any attributes, such as `integrity` and `crossorigin`.
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

1. Source `tinymce-knockout-binding` (`wysiwyg.js`) on the page.

    If the project loads tinymce-knockout-binding from a Content Delivery Network (CDN), use the script provided by the CDN, including any attributes, such as `integrity` and `crossorigin`.

3. Add an initialization point for {{site.productname}}, such as:

    ```html
    <div>
      <textarea data-bind="wysiwyg: content, wysiwygConfig: {  }">
      </textarea>
    </div>
    ```
4. Add the {{site.productname}} Knockout init script. The {{site.productname}} settings are defined within the `defaults` object.

    ```html
    <script>
      (function( $, ko ) {

        ko.bindingHandlers['wysiwyg'].defaults = {
        };

        function ViewModel( content ) {
          var self = this;
          self.content = ko.observable( content );
        };

        $( document ).ready( function() {
          ko.applyBindings( new ViewModel( '<p>Hello, World!</p>' ) );
        });

      }( jQuery, ko ));
    </script>
    ```

### Example Knockout integration
To load a TinyMCE editor similar to the [Basic example]({{site.baseurl}}/demo/basic-example/), add the following code to an empty HTML file.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Load jquery -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <!-- Load knockoutjs -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.5.0/knockout-min.js" integrity="sha256-Tjl7WVgF1hgGMgUKZZfzmxOrtoSf8qltZ9wMujjGNQk=" crossorigin="anonymous"></script>
    <!-- Load TinyMCE and the TinyMCE jQuery integration -->
    <script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
    <script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/jquery.tinymce.min.js" referrerpolicy="origin"></script>
    <!-- Load tinymce-knockout-binding (wysiwyg.js) -->
    <script src="https://cdn.jsdelivr.net/npm/tinymce-knockout-binding@1.1.1/src/wysiwyg.js" integrity="sha256-ZG6uOMw+SZjWjCa+SDh1FkcdpVBHjg2elNToi46xLNo=" crossorigin="anonymous"></script>
    <!-- Script to initialize a TinyMCE editor -->
    <script>
      (function( $, ko ) {

        ko.bindingHandlers['wysiwyg'].defaults = {
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo | formatselect | bold italic' +
            'backcolor | alignleft aligncenter alignright ' +
            'alignjustify | bullist numlist outdent indent |' +
            'removeformat | help'
        };

        function ViewModel( content ) {
          var self = this;
          self.content = ko.observable( content );
        };

        $( document ).ready( function() {
          ko.applyBindings( new ViewModel( '<p>Hello, World!</p>' ) );
        });

      }( jQuery, ko ));
    </script>
  </head>
  <body>
    <div>
      <textarea data-bind="wysiwyg: content, wysiwygConfig: {  }"></textarea>
    </div>
  </body>
</html>
```

For information on creating advanced configurations for the third-party TinyMCE Knockout integration, visit the project on GitHub: [tinymce-knockout-binding](https://github.com/michaelpapworth/tinymce-knockout-binding).
