## toolbar_sticky_offset

This option allows the toolbar to stick or dock at the specified offset from the top or bottom of the [viewport](https://developer.mozilla.org/en-US/docs/Glossary/Viewport) depending on the [toolbar location (`toolbar_location`)]({{site.baseurl}}/configure/editor-appearance/#toolbar_location}}). This can be useful when a site has a sticky header navigation bar, allowing the {{site.productname}} toolbar to "stick" below the site's navigation bar. This option accepts a height in pixels.

Note
: This option requires the [`toolbar_sticky`]({{site.baseurl}}/configure/editor-appearance/#toolbar_sticky}}) option be set to `true` to take effect.

Type
: `Number`

Default Value
: `0`

### Example: toolbar_sticky_offset

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar_sticky: true,
  toolbar_sticky_offset: 100
});
```
