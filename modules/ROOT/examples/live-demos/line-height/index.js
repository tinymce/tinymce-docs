tinymce.init({
  selector: 'textarea#line-height',
  height: 680,
  plugins: 'lists table advlist autolink link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media help wordcount',
  toolbar: 'lineheight | undo redo | blocks | bold italic | bullist numlist | ' +
    'table | backcolor | alignleft aligncenter alignright alignjustify | ' +
    'outdent indent | removeformat | help',
  line_height_formats: '1 1.15 1.3 1.5 1.8 2 2.5',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});
