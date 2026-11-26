tinymce.init({
  selector: 'textarea#url-dialog',
  height: 680,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'urldialog | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'table | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
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
  }
});
