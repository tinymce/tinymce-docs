tinymce.init({
  selector: 'textarea#advanced-typography',
  height: 680,
  plugins: 'typography lists advlist autolink link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
  toolbar: 'typography | undo redo | blocks | bold italic | bullist numlist | ' +
    'backcolor | alignleft aligncenter alignright alignjustify | ' +
    'outdent indent | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  content_style: 'body > p { font-family: Georgia, "Times New Roman", serif; font-size: 17px; }',
  typography_default_lang: 'en-US',
  typography_langs: [ 'en-US', 'en-GB', 'de', 'es' ],
  typography_ignore: [ 'code' ]
});
