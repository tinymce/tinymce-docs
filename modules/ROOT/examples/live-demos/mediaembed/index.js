tinymce.init({
  selector: 'textarea#mediaembed',
  height: 680,
  plugins: 'media mediaembed lists link advlist autolink image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime table help wordcount',
  toolbar: 'media | undo redo | blocks | bold italic | bullist numlist | link | ' +
    'backcolor | alignleft aligncenter alignright alignjustify | ' +
    'outdent indent | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  mediaembed_max_width: 640
});
