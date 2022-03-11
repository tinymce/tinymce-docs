tinymce.init({
  tinydrive_demo_files_url: '{{baseimagesurl}}/tiny-drive-demo/demo_files.json',
  tinydrive_token_provider: function (success) { success({ token: 'fake-token' }); },
  selector: 'textarea#drive-pick-example',
  height: 200,
  menubar: false,
  plugins: [
    'tinydrive link image media'
  ],
  toolbar: 'custom | insertfile | link image media',
  setup: function (editor) {
    editor.ui.registry.addButton('custom', {
      text: 'Custom pick',
      onAction: function () {
        editor.plugins.tinydrive.pick({
        }).then(function (result) {
          result.files.forEach(function (file) {
            var link = editor.dom.createHTML('a', { href: file.url }, editor.dom.encode(file.name));
            editor.insertContent(link);
          });
        });
      }
    });
  },
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});