The [Official {{site.productname}} Web Component](https://github.com/tinymce/tinymce-webcomponent) integrates {{site.productname}} into Web Component projects.
This procedure creates an HTML page containing a {{site.productname}} editor.

## Procedure

To add a {{site.productname}} editor to a web page using the {{site.productname}} Web Component:

1. Add the `DOCTYPE` element to the target page, such as:

    ```html
    <!DOCTYPE html>
    ```

    The `DOCTYPE` declaration is required for the editor to function correctly.

2. Add the following `meta` elements to the head of page:

    ```html
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    ```

    The second `meta` element is required for the editor to function correctly on mobile devices. For information on the viewport `meta` element, see: [MDN Web Docs - Using the viewport meta tag to control layout on mobile browsers](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag#Viewport_basics).

{% if productSource == "cloud" %}
3. Add a `script` element sourcing the {{site.productname}} Web Component (`tinymce-webcomponent.js`), such as:

    ```html
    <script src="{{site.webcomponent_url}}"></script>
    ```

    The `tinymce-webcomponent` can also be sourced from [npmjs](https://www.npmjs.com/package/@tinymce/tinymce-webcomponent).
{% elsif productSource == "package-manager" %}
3. Add the `tinymce` and `tinymce-webcomponent` packages, such as:

    ```sh
    npm install tinymce @tinymce/tinymce-webcomponent
    ```

4. Bundle {{site.productname}} with the Web Component application using a module loader (such as Webpack).

{% include integrations/bundling-integration.md package='tinymce-webcomponent' depth='1' %}
3. Add a `script` element sourcing {{site.productname}}, such as:

    ```html
    <script src="/path/to/bundle.js"></script>
    ```

    If a `script` element sourcing {{site.productname}} is not provided, the {{site.productname}} Web Component will load {{site.productname}} from the {{site.cloudname}}.
{% else %}
3. Add a `script` element sourcing the {{site.productname}} Web Component (`tinymce-webcomponent.js`), such as:

    ```html
    <script src="{{site.webcomponent_url}}"></script>
    ```

    The `tinymce-webcomponent` can also be sourced from [npmjs](https://www.npmjs.com/package/@tinymce/tinymce-webcomponent).

3. Add a `script` element sourcing {{site.productname}}, such as:

    ```html
    <script src="/path/to/tinymce.min.js"></script>
    ```

    If a `script` element sourcing {{site.productname}} is not provided, the {{site.productname}} Web Component will load {{site.productname}} from the {{site.cloudname}}. For information on the available options for sourcing {{site.productname}}, see: [Loading {{site.productname}}]({{site.baseurl}}/how-to-guides/environment-setup/webcomponent/webcomponent-ref/#loadingtinymce).
{% endif %}
{% if productSource == "cloud" %}
4. Add a `tinymce-editor` element where the editor should appear and include your {{site.cloudname}} API key from [{{site.accountpage}}]({{site.accountpageurl}}/).

    ```html
    <tinymce-editor
      api-key="your-tiny-cloud-api-key"
      ></tinymce-editor>
    ```
{% else %}
4. Add a `tinymce-editor` element where the editor should appear.

    ```html
    <tinymce-editor></tinymce-editor>
    ```
{% endif %}
    The default {{site.productname}} editor will load at this location if the page is opened in a web browser.

## Example: Adding the TinyMCE Web Component to an HTML page

The following example shows the {{site.productname}} Web Component in an HTML page, with:

- Various {{site.productname}} configuration options set using attributes.
- {{site.productname}} sourced from the {{site.cloudname}}.

{% include live-demo.html id="web-component" tab="html" %}

## Next Steps

- For information on customizing, see:
  - The {{site.productname}} Web Component, see: [The {{site.productname}} Web Component Technical Reference]({{site.baseurl}}/how-to-guides/environment-setup/webcomponent/webcomponent-ref/).
  - [{{site.productname}} basic setup]({{site.baseurl}}/how-to-guides/learn-the-basics/basic-setup/).
