tinymce.init({
  selector: 'textarea#drive-upload-example',
  height: 1000,
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
      text: 'Custom upload',
      onAction: () => {
        editor.plugins.tinydrive.upload({
          path: '/hello',
          name: 'hello.txt',
          blob: new Blob(['Hello world!']),
          onprogress: (progress) => {
            console.log('upload progress', progress);
          }
        }).then((result) => {
          const link = editor.dom.createHTML('a', { href: result.file.url }, editor.dom.encode(result.file.name));
          editor.insertContent(link);
        });
      }
    });
  }
});
