tinymce.init({
  selector: 'textarea#autoresize',
  plugins: [
    'autoresize',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'table | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  min_height: 400,
  max_height: 900,
  autoresize_bottom_margin: 40,
  // Matches the side padding of the shared demo content stylesheet.
  autoresize_overflow_padding: 40
});
