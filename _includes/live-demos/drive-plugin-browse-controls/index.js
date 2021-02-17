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
  onAction: function () {
    var controls = editor.plugins.tinydrive.controls.pick({
    }, function () {
      setTimeout(function () {
        controls.close();
      }, 0);
    }, function (error) {
      console.error(error);

      setTimeout(function () {
        controls.close();
      }, 0);
    });
  },
  content_style: {{site.liveDemoIframeCSSStyles}}
});