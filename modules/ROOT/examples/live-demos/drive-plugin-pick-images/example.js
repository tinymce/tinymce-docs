tinymce.init({
  selector: 'textarea#drive-pick-images-example',
  height: 640,
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
      text: 'Custom pick image',
      onAction: () => {
        editor.plugins.tinydrive.pick({
          filetypes: ['image']
        }).then((result) => {
          result.files.forEach((file) => {
            const img = editor.dom.createHTML('img', { src: file.url });
            editor.insertContent(img);
          });
        });
      }
    });
  }
});
