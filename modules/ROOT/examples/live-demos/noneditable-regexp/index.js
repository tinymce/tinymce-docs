tinymce.init({
  selector: 'textarea#noneditable-regexp',
  height: 680,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  content_style: '.mceNonEditable { background-color: #f9f9fb; outline: 1px dashed #335dff; border-radius: 4px; }',
  noneditable_regexp: /apikey|\d{3}-\d{3}-\d{3}/g
});
