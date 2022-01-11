# Tiny Drive Browse API
:title_nav: The Browse API
:description: Using the Tiny Drive Browse API
:keywords: tinydrive api browse

The `tinydrive.browse` method allows users to browse the files stored in {{site.cloudfilemanager}}. The dialog will allow users to manage the files in the {{site.cloudfilemanager}}, such as adding, moving, previewing, and deleting files. The API returns a promise that will resolve when the {{site.cloudfilemanager}} dialog is closed by using the close button.

### Interactive example: Using `tinydrive.browse`

{% include live-demo.html id="drive-plugin-browse" %}

## Configuration options

{% assign apiname = 'browse' %}

{% include configuration/filetypes.md %}

{% include configuration/max_image_dimension.md %}
