tinymce.init({
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
            editor.insertContent('<a href="' + editor.dom.encode(file.url) + '">' + editor.dom.encode(file.name) + '</a>');
          });
        });
      }
    });
  }
});