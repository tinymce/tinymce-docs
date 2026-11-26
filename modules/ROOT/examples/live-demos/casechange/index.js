tinymce.init({
  selector: 'textarea#casechange',
  height: 640,
  plugins: [
    'casechange',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'casechange | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  casechange_title_case_minors: [
    'a', 'an', 'the',
    'and', 'but', 'for', 'nor', 'or', 'so', 'yet',
    'as', 'at', 'by', 'in', 'of', 'off', 'on', 'out', 'per', 'to', 'up', 'via'
  ]
});
