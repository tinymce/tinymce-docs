tinymce.init({
  selector: 'textarea#drive-pick-images-example',
  height: 200,
  menubar: false,
  plugins: [
    'tinydrive link image media'
  ],
  toolbar: 'custom | insertfile | link image media',
  setup: function (editor) {
    editor.ui.registry.addButton('custom', {
      text: 'Custom pick image',
      onAction: function () {
        editor.plugins.tinydrive.pick({
          filetypes: ['image']
        }).then(function (result) {
          result.files.forEach(function (file) {
            var img = editor.dom.createHTML('img', { src: file.url });
            editor.insertContent(img);
          });
        });
      }
    });
  }
});