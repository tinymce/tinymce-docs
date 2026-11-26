tinymce.init({
  selector: 'textarea#importword',
  height: 720,
  plugins: [
    'importword',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'importword | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'table image | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  importword_converter_options: {
    formatting: {
      styles: 'inline',
      resets: 'inline',
      defaults: 'none'
    }
  }
});
