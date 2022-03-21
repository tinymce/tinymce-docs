tinymce.init({
  selector: 'textarea#url-dialog',
  toolbar: 'urldialog',
  height: 300,
  setup: (editor) => {
    editor.ui.registry.addButton('urldialog', {
      icon: 'code-sample',
      onAction: () => editor.windowManager.openUrl({
        title: 'URL Dialog Demo',
        url: 'external-page.html',
        height: 640,
        width: 640
      })
    })
  },
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});
