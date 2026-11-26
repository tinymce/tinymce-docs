tinymce.init({
  selector: 'textarea#drive-demo',
  height: 700,
  plugins: [
    'tinydrive', 'editimage',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'insertfile | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link image media | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  tinydrive_token_provider: 'URL_TO_YOUR_TOKEN_PROVIDER',
  tinydrive_dropbox_app_key: 'YOUR_DROPBOX_APP_KEY'
});
