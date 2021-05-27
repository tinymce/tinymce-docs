## toolbar_sticky_offset

{{site.requires_5_9v}}

The Sticky offset option allow the toolbar to stick at a specific offset from the top or bottom of the view depending on the toolbar mode.
To see it works `toolbar_sticky` must be `true`.

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