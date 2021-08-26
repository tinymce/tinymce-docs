function createSuccessNotification() {
  tinymce.activeEditor.notificationManager.open({
    text: 'This is an success notification.<br/>TinyMCE loaded Successfully!',
    type: 'success'
  });
}

function createInformationNotification() {
  tinymce.activeEditor.notificationManager.open({
    text: 'This is an informational notification.',
    type: 'info'
  });
}

function createWarningNotification() {
  tinymce.activeEditor.notificationManager.open({
    text: 'This is a warning notification.',
    type: 'warning'
  });
}

function createErrorNotification() {
  tinymce.activeEditor.notificationManager.open({
    text: 'This is an error... notification.',
    type: 'error'
  });
}

tinymce.init({
  selector: 'textarea#notification',
  height: 500,
  menubar: false,
  plugins: [
    'lists link image fullscreen table help'
  ],
  toolbar: 'undo redo | formatselect | ' +
  'bold italic backcolor | alignleft aligncenter ' +
  'alignright alignjustify | bullist numlist outdent indent | ' +
  'removeformat | help',
  setup: function(editor) {
    editor.on('skinLoaded', function(e) {
      createSuccessNotification();
      createInformationNotification();
      createWarningNotification();
      createErrorNotification();
    });
  },
  content_style: {{site.liveDemoIframeCSSStyles}}
});
