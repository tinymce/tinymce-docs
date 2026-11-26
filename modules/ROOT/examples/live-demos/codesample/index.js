tinymce.init({
  selector: 'textarea#codesample',
  height: 760,
  plugins: [
    'codesample',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'codesample | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link table code | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  codesample_languages: [
    { text: 'Node.js', value: 'javascript' },
    { text: 'Python', value: 'python' },
    { text: 'Ruby', value: 'ruby' },
    { text: 'PHP', value: 'php' },
    { text: 'Java', value: 'java' },
    { text: 'C#', value: 'csharp' },
    { text: 'HTML', value: 'markup' }
  ]
});
