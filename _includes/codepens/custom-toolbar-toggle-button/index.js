tinymce.init({
  selector: 'textarea',
  toolbar: 'customStrikethrough customToggleStrikethrough',
  setup: (editor) => {
    editor.ui.registry.addToggleButton('customStrikethrough', {
      text: 'Strikethrough',
      onAction: (_) => editor.execCommand('mceToggleFormat', false, 'strikethrough')
    });

    editor.ui.registry.addToggleButton('customToggleStrikethrough', {
      icon: 'strike-through',
      onAction: (_) => editor.execCommand('mceToggleFormat', false, 'strikethrough'),
      onSetup: (api) => {
        editor.formatter.formatChanged('strikethrough', (state) => {
          api.setActive(state);
        });
      }
    });
  }
});