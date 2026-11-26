tinymce.init({
  selector: 'textarea#line-height',
  height: 820,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'lineheight | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'table | removeformat | help',
  line_height_formats: '1 1.15 1.3 1.5 1.8 2 2.5 24px',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});
