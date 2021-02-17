tinymce.init({
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
      }
    });
  }
});