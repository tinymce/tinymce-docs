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
        editor.plugins.tinydrive.browse({
        }).then(function () {
          console.log('Tiny Drive dialog closed.');
        });
      }
    });
  }
});