## toolbar_sticky_offset

{{site.requires_5_9v}}

This option allows the toolbar to stick or dock at the specified offset from the top or bottom of the view depending on the [toolbar mode]({{site.baseurl}}/configure/editor-appearance/#toolbar_mode}}). This can be useful when a site has it's own sticky header navigation bar to ensure the toolbar sticks below.

**Note:** This option requires the [`toolbar_sticky`]({{site.baseurl}}/configure/editor-appearance/#toolbar_sticky}}) option be set to `true` to take effect.

**Type:** `Number`

**Default Value:** `0`

### Example: toolbar_sticky_offset

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar_sticky: true,
  toolbar_sticky_offset: 100
});
```