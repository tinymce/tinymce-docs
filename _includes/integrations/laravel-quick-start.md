{% if productSource == "cloud" %}
  {% assign scriptSource = site.cdnurl %}
  {% assign packageSource = site.cloudname %}
{% elsif productSource == "composer" %}
  {% assign scriptSource = "{{ asset('js/tinymce/tinymce.min.js') }}" %}
  {% assign packageSource = "[TinyMCE Composer package](https://packagist.org/packages/tinymce/tinymce)" %}
{% else %}
  {% assign scriptSource = "{{ asset('js/tinymce/tinymce.min.js') }}" %}
  {% assign packageSource = "TinyMCE .zip package" %}
{% endif %}

This guide assists with adding {{site.productname}} from the {{packageSource}} to pages or views in Laravel. The example Laravel project created in this procedure is based on the Laravel project documented in the Laravel Docs, under [Installation Via Composer](https://laravel.com/docs/8.x/installation#installation-via-composer). The guide will create two blades: one for the JavaScript and another for the editor placeholder, to reflect how {{site.productname}} should be used in production environments.

## Requirements

This procedure assumes the following prerequisites have been installed:

* [PHP](https://www.php.net/)
* [Composer](https://getcomposer.org/){% if productSource != "cloud" %}
* [Node.js](https://nodejs.org/)
{% endif %}

## Procedure

1. On a command line (or command prompt), create a new Laravel project named `my-example-app` by running the following command:

    ```sh
    composer create-project laravel/laravel my-example-app
    ```

1. Change into the root directory of the Laravel application, such as:

    ```sh
    cd my-example-app
    ```

{% if productSource != "cloud" %}
1. Install the required Node.js components, including [Laravel Mix](https://laravel.com/docs/8.x/mix):

    ```sh
    npm install
    ```

{% endif %}
{% if productSource == "composer" %}
1. Add {{site.productname}} to the project using Composer:

    ```sh
    composer require tinymce/tinymce
    ```

1. Add a Laravel Mix task to copy {{site.productname}} to the public files when Mix is run, such as:

    _File:_ `webpack.mix.js`
    ```js
    mix.copyDirectory('vendor/tinymce/tinymce', 'public/js/tinymce');
    ```

{% endif %}
{% if productSource == "zip" %}
1. Download {{site.productname}}.

    * For Self-hosted Enterprise customers, visit [{{site.companyname}} - Self-hosted releases]({{site.download-community}})
    * For the self-hosted {{site.productname}} community edition, visit [{{site.accountpage}} - Downloads]({{site.download-enterprise}})

1. Extract (or unzip) the downloaded {{site.productname}} `.zip` file into the `resources/js/` directory of the Laravel project, such as:

    ```sh
    unzip ../tinymce_latest.zip -d resources/js
    ```

1. Add a Laravel Mix task to copy {{site.productname}} to the public files when Mix is run, such as:

    _File:_ `webpack.mix.js`
    ```js
    mix.copyDirectory('resources/js/tinymce/js/tinymce', 'public/js/tinymce');
    ```

{% endif %}
{% if productSource != "cloud" %}
1. Run Laravel Mix to copy {{site.productname}} to the `public/js/` directory:

    ```sh
    npx mix
    ```

{% endif %}
1. Create a new reusable [component (`blade.php`)](https://laravel.com/docs/8.x/blade#components) for the {{site.productname}} configuration, such as:

    ```sh
    php artisan make:component Head/tinymceConfig
    ```

    This will create the blade `resources/views/components/head/tinymce-config.blade.php`.

1. Open the newly created `.blade.php` file in a text editor and replace the contents with:

    * The {{site.productname}} source script.
    * A {{site.productname}} configuration.

    For example:

    _File:_ `resources/views/components/head/tinymce-config.blade.php`

    ```html
    <script src="{{ scriptSource }}" referrerpolicy="origin"></script>
    <script>
      tinymce.init({
        selector: 'textarea#myeditorinstance', // Replace this CSS selector to match the placeholder element for TinyMCE
        plugins: 'code table lists',
        toolbar: 'undo redo | formatselect| bold italic | alignleft aligncenter alignright | indent outdent | bullist numlist | code | table'
      });
    </script>
    ```

{% if productSource == "cloud" %}
1. Replace `no-api-key` in the {{site.productname}} source script with your {{site.cloudname}} API Key.

    {% include misc/get-an-api-key.md %}
{% endif %}

1. Create a second blade containing a placeholder HTML element for {{site.productname}}, such as:

    ```sh
    php artisan make:component Forms/tinymceEditor
    ```

    This will create the blade `resources/views/components/forms/tinymce-editor.blade.php`.

1. Open the newly created `.blade.php` file in a text editor and replace the contents with a placeholder, matching the CSS selector provided to the `selector` option in the editor configuration.

    For example:

    _File:_ `resources/views/components/forms/tinymce-editor.blade.php`

    ```html
    <form method="post">
      <textarea id="myeditorinstance">Hello, World!</textarea>
    </form>
    ```

1. Add the blade components on the pages or views where {{site.productname}} is needed. The configuration blade (`Head/tinymceConfig` in this example) can be added to the `<head>` or at the end of the `<body>` on the target page or view. The placeholder blade (`Forms/tinymceEditor`) should be added where {{site.productname}} is required on the page.

    For example:

    _File:_ `resources/views/welcome.blade.php`

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
