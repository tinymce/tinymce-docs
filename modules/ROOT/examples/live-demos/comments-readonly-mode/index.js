tinymce.init({
  selector: "textarea#comment-readonly-ui-mode",
  plugins: [
    "tinycomments", "advlist", "anchor", "autolink", "charmap", "code", "fullscreen",
    "help", "image", "insertdatetime", "link", "lists", "media",
    "preview", "searchreplace", "table", "visualblocks", "quickbars",
  ],
  toolbar: "addcomment showcomments togglereadonly | undo redo | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
  quickbars_selection_toolbar: 'alignleft aligncenter alignright | addcomment showcomments',
  quickbars_image_toolbar: 'alignleft aligncenter alignright | rotateleft rotateright | imageoptions',
  tinycomments_mode: 'embedded',
  sidebar_show: 'showcomments',
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