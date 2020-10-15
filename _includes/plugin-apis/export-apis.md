| Name | Arguments | Description |
|------| ------| ----------- |
| convert | format: string, settings: object | Converts the editor content using the specified exporter format and returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that once resolved will contain the exported content. |
| download | format: string, settings: object | Converts the editor content using the specified exporter format and downloads the converted content. |

> **Note:** There are no settings available when using the 'clientpdf' format.

**Examples**

```js
tinymce.activeEditor.plugins.export.convert('clientpdf', {});
tinymce.activeEditor.plugins.export.download('clientpdf', {});
```