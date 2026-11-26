tinymce.init({
  selector: 'textarea#font-family',
  height: 760,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'fontfamily | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
  font_family_formats: 'Inter=inter, sans-serif; ' +
    'Georgia=georgia, palatino, serif; ' +
    'Palatino=palatino linotype, palatino, book antiqua, serif; ' +
    'Trebuchet MS=trebuchet ms, geneva, sans-serif; ' +
    'Arial=arial, helvetica, sans-serif; ' +
    'Courier New=courier new, courier, monospace',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});
