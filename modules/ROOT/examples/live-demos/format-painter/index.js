tinymce.init({
  selector: 'textarea#format-painter',
  height: 620,
  plugins: 'formatpainter lists advlist autolink link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
  toolbar: 'formatpainter | undo redo | blocks | bold italic forecolor backcolor | ' +
    'bullist numlist | alignleft aligncenter alignright alignjustify | ' +
    'outdent indent | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});
