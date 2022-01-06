{% if productSource == 'cloud' %}
{% assign sourceName = site.cloudname | prepend: "the " %}
{% elsif productSource == 'composer' %}
{% assign sourceName = "the Composer package manager" %}
{% elsif productSource == 'npm' %}
{% assign sourceName = "npm or Yarn" %}
{% elsif productSource == 'bower' %}
{% assign sourceName = "Bower" %}
{% elsif productSource == 'nuget' %}
{% assign sourceName = "Nuget" %}
{% elsif productSource == 'zip' %}
{% assign sourceName = site.productname | append: " .zip package" | prepend: "a " %}
{% endif %}

{% if productSource == 'cloud' %}
{% assign scriptSource = site.cdnurl %}
{% else %}
{% assign scriptSource = "/path/or/uri/to/tinymce.min.js" %}
{% endif %}

{{site.productname}} {{site.productmajorversion}} is a powerful and flexible rich text editor that can be embedded in web applications. This quick start covers how to add a {{site.productname}} editor to a web page using {{sourceName}}.
{% if productSource != 'cloud' %}
## Install TinyMCE using {{sourceName}}
{% endif %}
{% if productSource == 'composer' %}

To add {{site.productname}} to a PHP project using Composer, run the following on a command line:

```sh
composer require tinymce/tinymce
```

The location of the main {{site.productname}} script will be: `vendor/tinymce/tinymce/tinymce.min.js`. Ensure the `tinymce` directory containing the `tinymce.min.js` file is accessible for the target page or application by either:

* Using a webserver route, or
* Copying the `tinymce` directory to a public folder using a build tool.
{% elsif productSource == 'npm' %}

To add {{site.productname}} to a project:

* Using npm, run the following on a command line:

  ```sh
  npm install tinymce@^{{site.productmajorversion}}
  ```

* Using Yarn, run the following on a command line:

  ```sh
  yarn add tinymce@^{{site.productmajorversion}}
  ```

The location of the main {{site.productname}} script will be: `node_modules/tinymce/tinymce.min.js`. Ensure the `tinymce` directory containing the `tinymce.min.js` file is accessible for the target page or application by either:

* Using a webserver route, or
* Copying the `tinymce` directory to a public folder using a build tool such as Gulp or Webpack.
{% elsif productSource == 'bower' %}
To add {{site.productname}} to a Bower project, run the following on a command line:

```sh
bower install tinymce#^{{site.productmajorversion}}
```

The location of the main {{site.productname}} script will be: `bower_components/tinymce/tinymce.min.js`. Ensure the `tinymce` directory containing the `tinymce.min.js` file is accessible for the target page or application by either:

* Using a webserver route, or
* Copying the `tinymce` directory to a public folder using a build tool such as Gulp or Webpack.
{% elsif productSource == 'nuget' %}
To add {{site.productname}} to a .NET project, run the following on a command line:

* Using the NuGet package manager console, run the following:

  ```sh
  Install-Package TinyMCE
  ```

* Using the `dotnet` CLI, run the following:

  ```sh
  dotnet add package TinyMCE
  ```

Ensure the `tinymce` directory containing the `tinymce.min.js` file is accessible for the target page or application by either:

* Using a webserver route, or
* Copying the `tinymce` directory to a public folder using a build tool.
{% elsif productSource == 'zip' %}
To deploy {{site.productname}} from a .zip archive:

{% include integrations/download-tinymce-zip.md %}

1. Unzip the archive into a public folder of your webserver, such as:

    ```sh
    unzip tinymce_latest.zip -d /path/to/webserver/public/
    ```

    The location of the main {{site.productname}} script will be: `/path/to/webserver/public/tinymce/js/tinymce/tinymce.min.js`.

{% endif %}

## Include the TinyMCE script

Include the following line of code in the `<head>` of an HTML page.

```html
<script src="{{scriptSource}}" referrerpolicy="origin"></script>
```

## Initialize TinyMCE as part of a web form

Initialize {{site.productname}} {{site.productmajorversion}} on any element (or elements) on the web page by passing an object containing a `selector` value to `tinymce.init()`. The `selector` value can be any valid [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors).

For example: To replace `<textarea id="mytextarea">` with a {{site.productname}} {{site.productmajorversion}} editor instance, pass the selector `'#mytextarea'` to `tinymce.init()`.

For example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script src="{{scriptSource}}" referrerpolicy="origin"></script>

    <script>
      tinymce.init({
        selector: '#mytextarea'
      });
    </script>

  </head>

  <body>
  <h1>{{site.productname}} Quick Start Guide</h1>
    <form method="post">
      <textarea id="mytextarea">Hello, World!</textarea>
    </form>
  </body>
</html>
```

Adding this content to an HTML file and opening it in a web browser will load a TinyMCE editor, such as:

{% include live-demo.html id="default" %}
{% if productSource == 'cloud' %}
## Add your API key

To remove the notice:

<img alt="warning icon" src="{{ site.baseurl }}/images/icons/warning.svg" style="vertical-align:middle;"/>**This domain is not registered with {{site.cloudname}}. Please see the quick start guide or create an account.**

Replace `no-api-key` in the source script (`<script src=...`) with a {{site.cloudname}} API key, which is created when signing up to the [{{site.cloudname}}]({{site.accountsignup}}/).

Signing up for a {{site.cloudname}} API key will also provide a trial of the [Premium Plugins]({{site.baseurl}}/plugins-ref/premium/).
{% endif %}

## Save the content from the editor

To retrieve content from the editor, either process the content with a form handler or use the [getContent API]({{site.baseurl}}/apis/tinymce/tinymce.editor/#getcontent).

If you use a form handler, once the `<form>` is submitted, {{site.productname}} {{site.productmajorversion}} will `POST` the content in the same way as a normal HTML `<textarea>`, including the HTML elements and inline CSS of the editor content. The host's form handler can process the submitted content in the same way as content from a regular `<textarea>`.

{% include misc/quickstart-next-steps.md %}
