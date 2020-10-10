{% if plugincode == "export" %}
{% assign proxy_setting_name = "export_image_proxy" %}
### `export_image_proxy`
{% else %}
{% assign proxy_setting_name = "imagetools_proxy" %}
### `imagetools_proxy`
{% endif %}

This option can be used as a way of getting images across domains using a local server-side proxy. A proxy is basically a script, that will retrieve a remote image and pipe it back to {{site.productname}}, as if it was a local image. An example of such a proxy (written in PHP) can be found below.

[Paid TinyMCE subscriptions]({{site.pricingpage}}) also includes a proxy service written in Java. Check the [Install Server-side Components]({{ site.baseurl }}/enterprise/server/) guide for details.

> Note: `{{proxy_setting_name}}` is **not** required when enabling this plugin via [{{site.cloudname}}]({{ site.baseurl }}/cloud-deployment-guide/editor-and-features/)

**Type:** `String`

##### Example: `{{proxy_setting_name}}`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar: '{{plugincode}}',
  plugins: 'image {{plugincode}}',
  {{proxy_setting_name}}: 'proxy.php'
});
```

**Example of a proxy.php script**

```php
<?php
// We recommend to extend this script with authentication logic
// so it can be used only by an authorized user
$validMimeTypes = array("image/gif", "image/jpeg", "image/png");

if (!isset($_GET["url"]) || !trim($_GET["url"])) {
    header("HTTP/1.0 500 Url parameter missing or empty.");
    return;
}

$scheme = parse_url($_GET["url"], PHP_URL_SCHEME);
if ($scheme === false || in_array($scheme, array("http", "https")) === false) {
    header("HTTP/1.0 500 Invalid protocol.");
    return;
}

$content = file_get_contents($_GET["url"]);
$info = getimagesizefromstring($content);

if ($info === false || in_array($info["mime"], $validMimeTypes) === false) {
    header("HTTP/1.0 500 Url doesn't seem to be a valid image.");
    return;
}

header('Content-Type:' . $info["mime"]);
echo $content;
?>
```