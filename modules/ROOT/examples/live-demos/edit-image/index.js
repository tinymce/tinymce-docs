tinymce.init({
  selector: 'textarea#edit-image',
  height: 680,
  plugins: 'image editimage lists link advlist autolink charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
  toolbar: 'editimage rotateleft rotateright | image | undo redo | blocks | ' +
    'bold italic | bullist numlist | link | backcolor | ' +
    'alignleft aligncenter alignright alignjustify | outdent indent | ' +
    'removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  image_caption: true,
  a11y_advanced_options: true,
  editimage_cors_hosts: ['tiny.ucarecdn.com'],
  editimage_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions'
});
