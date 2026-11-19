tinymce.init({
  selector: 'textarea#math_demo',
  height: 640,
  plugins: 'math lists advlist autolink link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
  toolbar: 'math | undo redo | blocks | bold italic | bullist numlist | backcolor | ' +
    'alignleft aligncenter alignright alignjustify | outdent indent | ' +
    'removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});
