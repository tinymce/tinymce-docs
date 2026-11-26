tinymce.init({
  selector: 'textarea#fullpagehtml',
  height: 700,
  plugins: [
    'fullpagehtml',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'fullpagehtml code | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link table | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  fullpagehtml_default_title: 'Elena and Samuel: wedding invitation',
  fullpagehtml_default_encoding: 'UTF-8',
  fullpagehtml_default_body_style: 'font-family: Georgia, serif;'
});
