## `schema`

The `schema` option enables you to switch between the HTML4 and HTML5 schema. This controls the valid elements and attributes that can be placed in the HTML. This value can either be the default `html5`, `html4` or `html5-strict`.

The html5 schema is the full HTML5 specification including the older HTML4 elements for compatibility. The html5-strict will only allow the elements that are in the current HTML5 specification excluding things that where removed. The html4 schema includes the full html4 transitional specification.

Also note that all event attributes are excluded by default since it's a bad practice to use inline script handles like "onclick". You can manually add extra elements and attributes using the [extended_valid_elements](#extended_valid_elements) option.

**Type:** `String`

**Default Value:** `html5`

**Possible Values:** `html5`, `html4`, `html5-strict`

### Example: Using `schema`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  schema: 'html5'
});
```
