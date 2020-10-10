
| Command                 | Description                                                                                     |
| ----------------------- | ----------------------------------------------------------------------------------------------- |
| mceExportDownload   | Converts the editor content using the specified exporter format and downloads the converted content.   |

> **Note:** Currently there are no settings that can be provided when exporting Client-side PDFs.

**Examples**

```js
tinymce.activeEditor.execCommand('mceExportDownload', false, {
  format: 'clientpdf',
  settings: {}
});
```