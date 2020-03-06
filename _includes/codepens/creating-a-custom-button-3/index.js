tinymce.init({
  selector: '#creating-a-custom-button-3',
  content_css: '//www.tiny.cloud/css/codepen.min.css',
  height: 300,
  plugins: 'code fullpage',
  toolbar: 'undo redo | strikeout | fullpage code',

  setup: function (editor) {
    editor.addButton('strikeout', {
      icon: 'strikethrough',
      onclick: function () {
        editor.execCommand('mceToggleFormat', false, 'strikethrough');
      },
      onpostrender: function () {
        var btn = this;
        editor.on('init', function () {
          editor.formatter.formatChanged('strikethrough', function (state) {
            btn.active(state);
          });
        });
      }
    });
  }

});