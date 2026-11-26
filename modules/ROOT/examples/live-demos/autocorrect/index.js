tinymce.init({
  selector: 'textarea#autocorrect',
  height: 640,
  plugins: [
    'autocorrect',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  autocorrect_capitalize: true
});
