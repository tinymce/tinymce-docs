tinymce.init({
  selector: 'textarea#readonly-demo',
  height: 640,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'editpolicy | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  readonly: true,
  setup: (editor) => {
    editor.ui.registry.addToggleButton('editpolicy', {
      text: 'Edit policy',
      context: 'any',
      onAction: (api) => {
        const editing = !api.isActive();
        editor.mode.set(editing ? 'design' : 'readonly');
        api.setActive(editing);
      }
    });
  }
});
