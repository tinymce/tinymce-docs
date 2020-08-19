tinymce.init({
  tinydrive_demo_files_url: '{{ site.baseurl }}/demo/tiny-drive-demo/demo_files.json',
  tinydrive_token_provider: function (success) { success({ token: 'fake-token' }); },
  selector: 'textarea#drive-upload-example',
  height: 200,
  menubar: false,
  plugins: [
    'tinydrive link image media'
  ],
  toolbar: 'custom | insertfile | link image media',
  setup: function (editor) {
    editor.ui.registry.addButton('custom', {
      text: 'Custom upload',
      onAction: function () {
        editor.plugins.tinydrive.upload({
          path: '/hello',
          name: 'hello.txt',
          blob: new Blob(['Hello world!']),
          onprogress: function (progress) {
            console.log('upload progress', progress);
          }
        }).then(function (result) {
          var link = editor.dom.createHTML('a', { href: result.file.url }, editor.dom.encode(result.file.name));
          editor.insertContent(link);
        });
      }
    });
  },
  content_css: '//www.tiny.cloud/css/codepen.min.css'
});