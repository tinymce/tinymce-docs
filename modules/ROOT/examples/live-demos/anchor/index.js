tinymce.init({
  selector: 'textarea#anchor-demo',
  height: 640,
  plugins: 'anchor link lists advlist autolink image charmap preview searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
  toolbar: 'anchor link | undo redo | blocks | bold italic | bullist numlist | ' +
    'backcolor | alignleft aligncenter alignright alignjustify | ' +
    'outdent indent | removeformat | help',
  link_context_toolbar: true,
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});
