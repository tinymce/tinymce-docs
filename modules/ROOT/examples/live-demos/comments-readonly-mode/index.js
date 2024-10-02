let editor;

tinymce.init({
  selector: "textarea#comment-readonly-ui-mode",
  plugins: [
    "tinycomments", "advlist", "anchor", "autolink", "charmap", "code", "fullscreen",
    "help", "image", "insertdatetime", "link", "lists", "media",
    "preview", "searchreplace", "table", "visualblocks",
  ],
  toolbar: "addcomment showcomments togglereadonly | undo redo | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
  tinycomments_mode: 'embedded',
  readonly: true,
  setup: (editor) => {
    const isReadonlyMode = () => editor.mode.get() === 'readonly';
    editor.ui.registry.addToggleButton('togglereadonly', {
      text: 'Readonly mode',
      context: 'any', // Available from 7.4
      onSetup: (buttonApi) => {
        const activate = (api) =>  () => api.setActive(isReadonlyMode());
        editor.on('SwitchMode', activate(buttonApi));
        return (teardownApi) => editor.off('SwitchMode', activate(teardownApi));
      },
      onAction: (api) => {
        editor.mode.set(isReadonlyMode() ? 'design' : 'readonly');
      }
    });
  }
});