tinymce.init({
  selector: 'textarea#footnotes',
  height: 680,
  plugins: 'footnotes table lists link advlist autolink image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media help wordcount',
  toolbar: 'footnotes footnotesupdate | undo redo | blocks | bold italic | ' +
    'bullist numlist | table link | backcolor | ' +
    'alignleft aligncenter alignright alignjustify | outdent indent | ' +
    'removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});
