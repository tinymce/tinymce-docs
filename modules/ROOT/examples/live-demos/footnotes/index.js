tinymce.init({
  selector: 'textarea#footnotes',
  height: 760,
  plugins: [
    'footnotes',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'footnotes footnotesupdate | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'table | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});
