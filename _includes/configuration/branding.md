## branding

Use the `branding` option to disable the "**Powered by Tiny**" displayed in the status bar for [product attribution]({{site.baseurl}}/general-configuration-guide/attribution-requirements/).

> Note: The "**Powered by Tiny**" product attribution is required for users on the Tiny Cloud Starter plan. Product attribution is optional for premium users.

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
