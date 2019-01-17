tinymce.init({
  selector: 'textarea',
  toolbar: 'customStrikethrough customToggleStrikethrough',
  setup: function (editor) {
    editor.ui.registry.addToggleButton('customStrikethrough', {
      text: 'Strikethrough',
      onAction: function (_) {
        editor.execCommand('mceToggleFormat', false, 'strikethrough');
      }
    });

    editor.ui.registry.addToggleButton('customToggleStrikethrough', {
      icon: 'strike-through',
      onAction: function (_) {
        editor.execCommand('mceToggleFormat', false, 'strikethrough');
      },
      onSetup: function (api) {
        editor.formatter.formatChanged('strikethrough', function (state) {
          api.setActive(state);
        });
      }
    });
  }
});