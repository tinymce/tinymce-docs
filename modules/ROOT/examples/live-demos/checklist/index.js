tinymce.init({
  selector: 'textarea#checklist',
  height: 680,
  plugins: 'lists checklist advlist autolink link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
  toolbar: 'checklist bullist numlist outdent indent | undo redo | blocks | ' +
    'bold italic | backcolor | ' +
    'alignleft aligncenter alignright alignjustify | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});
