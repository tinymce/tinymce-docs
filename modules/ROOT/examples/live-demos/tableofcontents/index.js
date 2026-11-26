tinymce.init({
  selector: 'textarea#tableofcontents',
  height: 760,
  plugins: [
    'tableofcontents',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'tableofcontents | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link table | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  tableofcontents_header: 'h2',
  tableofcontents_depth: 4,
  tableofcontents_includeheader: true,
  tableofcontents_orderedlist: true,
  tableofcontents_orderedlist_type: '1'
});
