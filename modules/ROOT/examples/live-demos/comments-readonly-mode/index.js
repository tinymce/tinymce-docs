tinymce.init({
  selector: 'textarea#comment-readonly-ui-mode',
  height: 700,
  plugins: [
    'tinycomments',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'addcomment showcomments togglereadonly | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  tinycomments_mode: 'embedded',
  sidebar_show: 'showcomments',
  readonly: true,
  user_id: 'benjamin-barnes',
  fetch_users: (userIds) => Promise.all(userIds.map((userId) =>
    fetch(`https://demouserdirectory.tiny.cloud/v1/users/${userId}`)
      .then((response) => response.json())
      .catch(() => ({ id: userId })))),
  setup: (editor) => {
    const isReadonlyMode = () => editor.mode.get() === 'readonly';
    editor.ui.registry.addToggleButton('togglereadonly', {
      text: 'Readonly mode',
      context: 'any', // Available from 7.4
      onSetup: (buttonApi) => {
        const activate = (api) =>  () => api.setActive(isReadonlyMode());
        activate(buttonApi)();
        editor.on('SwitchMode', activate(buttonApi));
        return (teardownApi) => editor.off('SwitchMode', activate(teardownApi));
      },
      onAction: (api) => {
        editor.mode.set(isReadonlyMode() ? 'design' : 'readonly');
      }
    });
  }
});
