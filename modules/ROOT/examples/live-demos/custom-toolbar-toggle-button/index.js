tinymce.init({
  selector: 'textarea#custom-toolbar-toggle-button',
  toolbar: 'customStrikethrough customToggleStrikethrough',
  setup: (editor) => {
    editor.ui.registry.addToggleButton('customStrikethrough', {
      text: 'Strikethrough',
      onAction: (api) => {
        editor.execCommand('mceToggleFormat', false, 'strikethrough');
        api.setActive(!api.isActive());
      }
    });

    editor.ui.registry.addToggleButton('customToggleStrikethrough', {
      icon: 'strike-through',
      onAction: (_) => editor.execCommand('mceToggleFormat', false, 'strikethrough'),
      onSetup: (api) => {
        api.setActive(editor.formatter.match('strikethrough'));
        const changed = editor.formatter.formatChanged('strikethrough', (state) => api.setActive(state));
        return () => changed.unbind();
      }
    });
  },
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});