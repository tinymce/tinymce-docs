tinymce.init({
  selector: 'textarea#advcode',
  height: 560,
  plugins: 'advcode fullscreen lists link advlist autolink image charmap preview anchor searchreplace visualblocks insertdatetime media table help wordcount',
  toolbar: 'code | undo redo | blocks | bold italic | bullist numlist | link | ' +
    'backcolor | alignleft aligncenter alignright alignjustify | ' +
    'outdent indent | removeformat | help',
  // Open the code editor in the editor area instead of a dialog, which also enables its Fullscreen button.
  advcode_inline: true,
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});

tinymce.init({
  selector: 'textarea#codeplugin',
  height: 560,
  plugins: 'code lists link advlist autolink image charmap preview anchor searchreplace visualblocks fullscreen insertdatetime media table help wordcount',
  toolbar: 'code | undo redo | blocks | bold italic | bullist numlist | link | ' +
    'backcolor | alignleft aligncenter alignright alignjustify | ' +
    'outdent indent | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});
