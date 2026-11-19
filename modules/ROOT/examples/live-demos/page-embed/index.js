tinymce.init({
  selector: 'textarea#page-embed',
  height: 680,
  plugins: 'pageembed table lists link advlist autolink image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media help wordcount',
  toolbar: 'pageembed | undo redo | blocks | bold italic | bullist numlist | ' +
    'link table | backcolor | alignleft aligncenter alignright alignjustify | ' +
    'outdent indent | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});
