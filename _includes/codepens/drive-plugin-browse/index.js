tinymce.init({
  tinydrive_demo_files_url: '{{ site.baseurl }}/demo/tiny-drive-demo/demo_files.json',
  tinydrive_token_provider: function (success) { success({ token: 'fake-token' }); },
  selector: 'textarea#drive-browse-example',
  height: 200,
  menubar: false,
  plugins: [
    'tinydrive link image media'
  ],
  toolbar: 'custom | insertfile | link image media',
  setup: function (editor) {
    editor.ui.registry.addButton('custom', {
      text: 'Custom browse',
      onAction: function () {
        editor.plugins.tinydrive.browse({
        }).then(function () {
          console.log('Tiny Drive dialog closed.');
        });
      }
    });
  },
  content_css: '//www.tiny.cloud/css/codepen.min.css'
});