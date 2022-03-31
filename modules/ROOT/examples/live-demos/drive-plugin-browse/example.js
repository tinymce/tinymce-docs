tinymce.init({
  selector: 'textarea#drive-browse-example',
  height: 200,
  menubar: false,
  plugins: 'tinydrive link image media',
  toolbar: 'custom | insertfile | link image media',
  tinydrive_token_provider: 'URL_TO_YOUR_TOKEN_PROVIDER',
  setup: (editor) => {
    editor.ui.registry.addButton('custom', {
      text: 'Custom browse',
      onAction: () => {
        editor.plugins.tinydrive.browse({
        }).then(() => {
          console.log('Tiny Drive dialog closed.');
        });
      }
    });
  }
});
