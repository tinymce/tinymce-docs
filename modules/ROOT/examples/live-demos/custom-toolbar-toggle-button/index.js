tinymce.init({
  selector: 'textarea#custom-toolbar-toggle-button',
  toolbar: 'customStrikethrough customToggleStrikethrough',
  setup: function (editor) {
    editor.ui.registry.addToggleButton('customStrikethrough', {
      text: 'Strikethrough',
      onAction: function (api) {
        editor.execCommand('mceToggleFormat', false, 'strikethrough');
        api.setActive(!api.isActive());
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
  },
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
});