tinymce.init({
  selector: 'textarea#drive-pick-example',
  height: 620,
  plugins: [
    'tinydrive',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'custom | insertfile | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link image media | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  tinydrive_token_provider: 'URL_TO_YOUR_TOKEN_PROVIDER',
  setup: (editor) => {
    editor.ui.registry.addButton('custom', {
      text: 'Custom pick',
      onAction: () => {
        editor.plugins.tinydrive.pick({
        }).then((result) => {
          result.files.forEach((file) => {
            const link = editor.dom.createHTML('a', { href: file.url }, editor.dom.encode(file.name));
            editor.insertContent(link);
          });
        });
      }
    });
  }
});
