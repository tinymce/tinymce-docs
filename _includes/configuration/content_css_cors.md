## `content_css_cors`
When `content_css_cors` is set to `true`, the editor will add a `crossorigin="anonymous"` attribute to the link tags that the StyleSheetLoader uses when loading the `content_css`. This allows you to host the content_css on a different server than the editor itself.

**Type:** `Boolean`

**Default Value:** `false`

### Example: Using `content_css_cors`

```js
// File: http://domain.mine/mysite/index.html

tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  content_css : 'http://www.somewhere.example/mycontent.css',
  content_css_cors: true
});
```
