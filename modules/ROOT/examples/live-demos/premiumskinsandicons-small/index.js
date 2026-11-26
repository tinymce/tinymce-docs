tinymce.init({
  selector: 'textarea#premiumskinsandicons-small',
  height: 860,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'undo redo | blocks fontsize | ' +
    'bold italic underline strikethrough forecolor backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link anchor image media table charmap insertdatetime | ' +
    'searchreplace visualblocks code preview fullscreen | removeformat | help',
  toolbar_mode: 'wrap',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  skin: 'small',
  icons: 'small'
});
