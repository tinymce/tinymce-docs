tinymce.init({
  selector: 'textarea#drive-pick-example',
  height: 200,
  menubar: false,
  plugins: 'tinydrive link image media',
  toolbar: 'custom | insertfile | link image media',
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
