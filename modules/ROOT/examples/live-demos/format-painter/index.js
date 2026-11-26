tinymce.init({
  selector: 'textarea#format-painter',
  height: 760,
  plugins: [
    'formatpainter',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'formatpainter | undo redo | blocks | ' +
    'bold italic forecolor backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'table | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  formatpainter_ignored_formats: 'link,address,removeformat,formatpainter_removeformat,hilitecolor'
});
