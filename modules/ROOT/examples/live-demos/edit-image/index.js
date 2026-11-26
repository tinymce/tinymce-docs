tinymce.init({
  selector: 'textarea#edit-image',
  height: 720,
  plugins: [
    'editimage',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'editimage rotateleft rotateright | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'image | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  editimage_cors_hosts: ['tiny.ucarecdn.com'],
  editimage_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions'
});
