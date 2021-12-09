### `powerpaste_keep_unsupported_src`

Due to browser limitations, PowerPaste is not able to support all image types supported by Microsoft Word and Microsoft Excel. When `powerpaste_keep_unsupported_src` is set to `true`, PowerPaste will store the original `src` of unsupported images in a `data-image-src` attribute on the pasted image element. This enables developers to add further image support via post-processing.

For example, browsers do not allow PowerPaste to access the file system. If your application has access to the file system, setting `powerpaste_keep_unsupported_src` to `true` may allow you to replace unsupported images during post-processing using the original file paths.

Default Value
: `false`

Possible Values
: `true`, `false`

#### Example: powerpaste_keep_unsupported_src

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'powerpaste',
  powerpaste_keep_unsupported_src: true
});
```
