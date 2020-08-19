tinymce.init({
  selector: 'textarea.urldialog',
  toolbar: 'urldialog',
  height: 300,
  setup: function (editor) {
    editor.ui.registry.addButton('urldialog', {
      icon: 'code-sample',
      onAction: function () {
        editor.windowManager.openUrl({
          title: 'URL Dialog Demo',
          url: '../../demo/url-dialog-demo/external-page.html',
          height: 640,
          width: 640
        });
      }
    })
  }
});
