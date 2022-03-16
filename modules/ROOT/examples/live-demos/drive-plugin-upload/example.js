tinymce.init({
  selector: 'textarea#drive-upload-example',
  height: 200,
  menubar: false,
  plugins: 'tinydrive link image media',
  toolbar: 'custom | insertfile | link image media',
  tinydrive_token_provider: 'URL_TO_YOUR_TOKEN_PROVIDER',
  setup: function (editor) {
    editor.ui.registry.addButton('custom', {
      text: 'Custom upload',
      onAction: function () {
        editor.plugins.tinydrive.upload({
          path: '/hello',
          name: 'hello.txt',
          blob: new Blob(['Hello world!']),
          onprogress: function (progress) {
            console.log('upload progess', progress);
          }
        }).then(function (result) {
          var link = editor.dom.createHTML('a', { href: result.file.url }, editor.dom.encode(result.file.name));
          editor.insertContent(link);
        });
      }
    });
  }
});