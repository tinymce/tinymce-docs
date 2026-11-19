tinymce.init({
  selector: 'textarea#drive',
  plugins: 'tinydrive image media link editimage lists advlist autolink charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime table help wordcount',
  height: 680,
  tinydrive_token_provider: 'URL_TO_YOUR_TOKEN_PROVIDER',
  toolbar: 'insertfile | undo redo | blocks | bold italic | bullist numlist | ' +
    'image link media | backcolor | ' +
    'alignleft aligncenter alignright alignjustify | outdent indent | ' +
    'removeformat | help',
  menu: {
    insert: { title: 'Insert', items: 'insertfile image link media' }
  },
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});
