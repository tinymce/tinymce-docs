const createSuccessNotification = () => {
  tinymce.activeEditor.notificationManager.open({
    text: 'Draft reply saved at 10:42 AM.',
    type: 'success'
  });
};

const createInformationNotification = () => {
  tinymce.activeEditor.notificationManager.open({
    text: 'Priya Shah is also viewing ticket #40517.',
    type: 'info'
  });
};

const createWarningNotification = () => {
  tinymce.activeEditor.notificationManager.open({
    text: 'The response target for this ticket expires in 25 minutes.',
    type: 'warning'
  });
};

const createErrorNotification = () => {
  tinymce.activeEditor.notificationManager.open({
    text: 'The attachment speed-test.pdf could not be uploaded.',
    type: 'error'
  });
};

tinymce.init({
  selector: 'textarea#notifications',
  height: 680,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link table | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  setup: (editor) => {
    editor.on('SkinLoaded', (e) => {
      createSuccessNotification();
      createInformationNotification();
      createWarningNotification();
      createErrorNotification();
    });
  }
});
