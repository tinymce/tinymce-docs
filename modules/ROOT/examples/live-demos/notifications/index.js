const createSuccessNotification = () => {
  tinymce.activeEditor.notificationManager.open({
    text: 'This is an success notification.<br/>TinyMCE loaded Successfully!',
    type: 'success'
  });
};

const createInformationNotification = () => {
  tinymce.activeEditor.notificationManager.open({
    text: 'This is an informational notification.',
    type: 'info'
  });
};

const createWarningNotification = () => {
  tinymce.activeEditor.notificationManager.open({
    text: 'This is a warning notification.',
    type: 'warning'
  });
};

const createErrorNotification = () => {
  tinymce.activeEditor.notificationManager.open({
    text: 'This is an error... notification.',
    type: 'error'
  });
};

tinymce.init({
  selector: 'textarea#notifications',
  height: 500,
  menubar: false,
  plugins: 'lists link image fullscreen table help',
  toolbar: 'undo redo | formatselect | ' +
  'bold italic backcolor | alignleft aligncenter ' +
  'alignright alignjustify | bullist numlist outdent indent | ' +
  'removeformat | help',
  setup: (editor) => {
    editor.on('SkinLoaded', (e) => {
      createSuccessNotification();
      createInformationNotification();
      createWarningNotification();
      createErrorNotification();
    });
  },
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});
