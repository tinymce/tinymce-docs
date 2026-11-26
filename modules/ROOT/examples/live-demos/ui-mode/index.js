const settings = {
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
  ui_mode: 'split',
  min_height: 500
};

tinymce.init({
  ...settings,
  selector: 'textarea#iframe',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});

tinymce.init({
  ...settings,
  selector: '.tinymce-heading',
  inline: true,
  toolbar: 'undo redo | bold italic underline'
});

tinymce.init({
  ...settings,
  selector: '.tinymce-body',
  inline: true
});
