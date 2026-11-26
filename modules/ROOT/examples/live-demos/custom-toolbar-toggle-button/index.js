tinymce.init({
  selector: 'textarea#custom-toolbar-toggle-button',
  height: 640,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'customStrikethrough customToggleStrikethrough | undo redo | ' +
    'blocks | bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
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
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});
