## `fixed_toolbar_container_target`



Use this option to render the inline toolbar into a fixed-positioned HTML element by passing a `HTMLElement` directly to the option. This option is similar to the [`fixed_toolbar_container` option]({{ site.baseurl }}/configure/editor-appearance/#fixed_toolbar_container), which accepts a CSS selector.


> **Important:** `fixed_toolbar_container` has precedence over `fixed_toolbar_container_target`, so in order for `fixed_toolbar_container_target` to work, do not use the `fixed_toolbar_container` option.

**Type:** `HTMLElement`

### Example: Using `fixed_toolbar_container_target`

```js
var el = document.createElement('div');
document.body.appendChild(el);

tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  inline: true,
  fixed_toolbar_container_target: el
});
```
