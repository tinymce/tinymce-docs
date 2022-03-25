tinymce.init({
  selector: 'textarea#drive-pick-images-example',
  height: 200,
  menubar: false,
  plugins: 'tinydrive link image media',
  toolbar: 'custom | insertfile | link image media',
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
