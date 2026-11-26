tinymce.init({
  selector: 'textarea#font-size',
  height: 820,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'fontsizeinput | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
  font_size_formats: '12px 14px 16px 18px 24px 32px 48px 64px',
  font_size_input_default_unit: 'px',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});
