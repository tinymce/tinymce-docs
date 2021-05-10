## `fixed_toolbar_container_target`

{{ site.requires_5_8v }}

Use this option to render the inline toolbar into a fixed positioned HTML element, similarly to [`fixed_toolbar_container`]({{ site.baseurl }}/configure/editor-appearance/#fixed_toolbar_container). The difference between these two options is that `fixed_toolbar_container_target` accepts a `HTMLElement` directly, instead of a CSS selector. These two settings should not be used together, but if they are then the value of `fixed_toolbar_container` will take precedence.

**Type:** `HTMLElement`

### Example: Using `fixed_toolbar_container_target`

```js
var el = document.createElement('div');
document.body.appendChild(el);

// ...

tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  inline: true,
  fixed_toolbar_container_target: el
});
```
