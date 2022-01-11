
| Command                 | Description                                                                                     |
| ----------------------- | ----------------------------------------------------------------------------------------------- |
| mceExportDownload   | Converts the editor content using the specified exporter format and downloads the converted content.   |

> **Note:** There are no settings available when using the 'clientpdf' format.

**Examples**

```js
tinymce.activeEditor.execCommand('mceExportDownload', false, {
  format: 'clientpdf',
  settings: {}
});
```