---
layout: default
title: Using TinyMCE from the Tiny Cloud CDN with the Laravel framework
title_nav: Using Tiny Cloud
description: Overview of the guide on integrating TinyMCE into the Laravel framework.
keywords: integration integrate laravel php composer
---

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
    php artisan make:component Head/TinyMCEconfig
    ```

1. Open the newly created `.blade.php` file in a text editor and replace the contents with:

    * The {{site.cloudname}} {{site.productname}} source script.
    * A {{site.productname}} configuration.

    For example:

    File: `resources/views/components/head/tiny-m-c-econfig.blade.php`
    ```html
    <script src="{{ site.cdnurl }}" referrerpolicy="origin"></script>
    <script>
      tinymce.init({
        selector: 'textarea',
        plugins: 'code table lists',
        toolbar: 'undo redo | formatselect| bold italic | alignleft aligncenter alignright | indent outdent | bullist numlist | code | table'
      });
    </script>
    ```
