## `inline_boundaries`

The **inline_boundaries** option allows you to disable the inline boundaries. For information on how to change the appearance of the inline boundaries see the [Boilerplate Content CSS page]({{ site.baseurl }}/general-configuration-guide/boilerplate-content-css/).

Type
: `Boolean`

Default Value
: `true`

Possible Values
: `true`, `false`

### Example: Using `inline_boundaries`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  inline_boundaries: false
});
```
