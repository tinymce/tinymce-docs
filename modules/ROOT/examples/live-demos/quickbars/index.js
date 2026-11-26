tinymce.init({
  selector: 'textarea#quickbars',
  height: 700,
  plugins: [
    'quickbars',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: false,
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  quickbars_selection_toolbar: 'bold italic underline | quicklink h2 h3 blockquote | bullist numlist',
  quickbars_insert_toolbar: 'quickimage quicktable hr',
  quickbars_image_toolbar: 'alignleft aligncenter alignright | image'
});
