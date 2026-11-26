tinymce.init({
  selector: 'textarea#drive',
  height: 760,
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
  menu: {
    insert: { title: 'Insert', items: 'insertfile image link media inserttable | charmap hr | anchor | insertdatetime' }
  },
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  tinydrive_token_provider: 'URL_TO_YOUR_TOKEN_PROVIDER',
  tinydrive_upload_path: '/Campaign uploads'
});
