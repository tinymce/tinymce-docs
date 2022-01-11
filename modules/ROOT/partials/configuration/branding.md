## `branding`

Use the `branding` option to disable the "**Powered by Tiny**" link displayed in the status bar for [product attribution]({{site.legalpages}}/attribution-requirements/).

> **Important**: Product attribution is required for free and open source users. For information on {{site.productname}} attribution requirements, see: [Logo & attribution requirements]({{site.legalpages}}/attribution-requirements/).

Type
: `Boolean`

Default Value
: `true`

Possible Values
: `true`, `false`

### Example: Using `branding`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  branding: false
});
```
