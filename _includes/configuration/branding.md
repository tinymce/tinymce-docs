## branding

This option allows you to disable the "Powered by Tiny" branding.

> Note: The "**Powered by Tiny**" product [attribution]({{site.baseurl}}/general-configuration-guide/attribution-requirements/) is required for users on the Starter tier. Product attribution is not required for users on the Developer, Pro, or Custom packages.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  branding: false
});
```
