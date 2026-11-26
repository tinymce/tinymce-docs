tinymce.init({
  selector: 'textarea#permanent-pen',
  height: 720,
  plugins: [
    'permanentpen',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'permanentpen | undo redo | blocks | ' +
    'bold italic forecolor backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link table | removeformat | help',
  // The default Format menu, with the Permanent Pen items added at the end.
  menu: {
    format: {
      title: 'Format',
      items: 'bold italic underline strikethrough superscript subscript codeformat | ' +
        'styles blocks fontfamily fontsize align lineheight | forecolor backcolor | ' +
        'language | removeformat | permanentpen configurepermanentpen'
    }
  },
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  permanentpen_properties: {
    fontname: 'georgia,palatino,serif',
    fontsize: '12pt',
    forecolor: '#335dff',
    hilitecolor: '',
    bold: false,
    italic: true,
    underline: false,
    strikethrough: false
  }
});
