{% if plugincode == "export" %}
### `export_cors_hosts`
{% else %}
### `imagetools_cors_hosts`
{% endif %}

The {{pluginname}} plugin cannot work with images from another domains due to security measures imposed by browsers on so called cross-origin HTTP requests. To overcome these constraints, Cross-Origin Resource Sharing (CORS) must be explicitly enabled on the specified domain(s) (for more information check [HTTP access control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)).

An array of supported domains for the images (with CORS enabled on them) can be supplied to {{site.productname}} via the `{{plugincode}}_cors_hosts` option.

> **Note**: Each string in the array *must* be in the format of `mydomain.com`. Do not include protocols (`http://, https://`) or any trailing slashes in your domains.

> **Note**: `{{plugincode}}_cors_hosts` is **not** required when enabling this plugin via [{{site.cloudname}}]({{ site.baseurl }}/how-to-guides/cloud-deployment-guide/editor-and-features/).

Type
: `String[]`

Default Value
: `[]`

##### Example: `{{plugincode}}_cors_hosts`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar: '{{plugincode}}',
  plugins: 'image {{plugincode}}',
  {{plugincode}}_cors_hosts: [ 'mydomain.com', 'otherdomain.com' ]
});
```