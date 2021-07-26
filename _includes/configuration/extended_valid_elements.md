## `extended_valid_elements`

This option is very similar to [`valid_elements`]({{ site.baseurl }}/configure/content-filtering/#valid_elements). The only difference between this option and `valid_elements` is that this one gets added to the existing rule set. This can be very useful if the existing rule set is fine but you want to add some specific elements that also should be valid. The default rule set is controlled by the [`schema`]({{ site.baseurl }}/configure/content-filtering/#schema) option.

When adding a new attribute by specifying an existing element rule (e.g. `img`), the entire rule for that element is over-ridden so be sure to include all valid attributes not just the one you wish to add. See [`valid_elements`]({{ site.baseurl }}/configure/content-filtering/#valid_elements) for default rules.

The below example replaces the current `img` rule (including the global element rules).

**Type:** `String`

### Example: Using `extended_valid_elements`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  extended_valid_elements : 'img[class|src|border=0|alt|title|hspace|vspace|width|height|align|onmouseover|onmouseout|name]'
});
```

Also see [valid_elements]({{ site.baseurl }}/configure/content-filtering/#valid_elements) and [invalid_elements]({{ site.baseurl }}/configure/content-filtering/#invalid_elements) for more configuration options.

### Using extended_valid_elements to allow script elements

> **Warning**: Allowing script elements (`<script>`) in {{site.productname}} exposes users to [cross-site scripting (XSS) attacks](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting).

To allow script elements in the editor, include the following in the {{site.productname}} configuration:

```
extended_valid_elements : 'script[src|async|defer|type|charset]'
```

### Interactive example

This example shows you how to use the [extended_valid_elements]({{ site.baseurl }}/configure/content-filtering/#extended_valid_elements) option. This option is used to add additional valid elements and attributes.

{% include live-demo.html id="valid-elements" %}