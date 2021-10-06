---
layout: default
title: Using the TinyMCE .zip package with the Laravel framework
title_nav: Using a .zip package
description: Overview of the guide on integrating TinyMCE into the Laravel framework.
keywords: integration integrate laravel php composer
---

[](https://www.tiny.cloud/get-tiny/self-hosted/)

[Laravel - Installation Via Composer](https://laravel.com/docs/8.x/installation#installation-via-composer)

## Requirements

This procedure assumes the following prerequisites have been installed:

* [PHP](https://www.php.net/)
* [Composer](https://getcomposer.org/)

## Procedure

1. On a command line (or command prompt), create a new Lavarel project named `my-example-app` by running the following command:

    ```sh
    composer create-project laravel/laravel my-example-app
    ```

1. Change into the root directory of the Laravel application, such as:

    ```sh
    cd my-example-app
    ```

1. Create a new reusable [component (`blade.php`)](https://laravel.com/docs/8.x/blade#components) for the {{site.productname}} configuration, such as:

    ```sh
    php artisan make:component Head/tinymceConfig
    ```

    This will create the blade `resources/views/components/head/tinymce-config.blade.php`.

1. Open the newly created `.blade.php` file in a text editor and replace the contents with:

    * The {{site.cloudname}} {{site.productname}} source script.
    * A {{site.productname}} configuration.

    For example:

    File: `resources/views/components/head/tinymce-config.blade.php`

    ```html
    <script src="{{ site.cdnurl }}" referrerpolicy="origin"></script>
    <script>
      tinymce.init({
        selector: 'textarea#myeditorinstance', // Replace this CSS selector to match the placeholder element for TinyMCE
        plugins: 'code table lists',
        toolbar: 'undo redo | formatselect| bold italic | alignleft aligncenter alignright | indent outdent | bullist numlist | code | table'
      });
    </script>
    ```

1. Create a second blade containing a placeholder HTML element for {{site.productname}}, such as:

    ```sh
    php artisan make:component Forms/tinymceEditor
    ```

    This will create the blade `resources/views/components/forms/tinymce-editor.blade.php`.

1. Open the newly created `.blade.php` file in a text editor and replace the contents with a placeholder, matching the CSS selector provided to the `selector` option in the editor configuration.

    For example:

    File: `resources/views/components/forms/tinymce-editor.blade.php`

    ```html
    <form method="post">
      <textarea id="myeditorinstance">Hello, World!</textarea>
    </form>
    ```

1. Add the blade components on the pages or views where {{site.productname}} is needed. The configuration blade (`Head/tinymceConfig` in this example) can be added to the `<head>` or at the end of the `<body>` on the target page or view. The placeholder blade (`Forms/tinymceEditor`) should be added where {{site.productname}} is required on the page.

    For example:

    File: `resources/views/welcome.blade.php`

    ```html
    <!DOCTYPE html>
    <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>TinyMCE in Laravel</title>
        <!-- Insert the blade containing the TinyMCE configuration and source script -->
        <x-head.tinymceConfig/>
      </head>
      <body>
        <h1>TinyMCE in Laravel</h1>
        <!-- Insert the blade containing the TinyMCE placeholder HTML element -->
        <x-forms.tinymceEditor/>
      </body>
    </html>
    ```

1. Start the Laravel development server to verify that {{site.productname}} loads on the page or view, such as running the following command and opening the page on the localhost.

    ```sh
    php artisan serve
    ```

{% include misc/quickstart-next-steps.md %}