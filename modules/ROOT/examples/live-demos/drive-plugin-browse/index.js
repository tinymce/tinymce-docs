tinymce.init({
  tinydrive_demo_files_url: '{{baseimagesurl}}/tiny-drive-demo/demo_files.json',
  tinydrive_token_provider: (success) => {
    success({ token: 'fake-token' });
  },
  selector: 'textarea#drive-browse-example',
  height: 200,
  menubar: false,
  plugins: 'tinydrive link image media',
  toolbar: 'custom | insertfile | link image media',
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
  },
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});
