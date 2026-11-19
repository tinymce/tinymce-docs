tinymce.init({
  selector: 'textarea#drive',
  plugins: 'tinydrive image media link editimage lists advlist autolink charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime table help wordcount',
  api_key: 'fake-key',
  height: 680,
  editimage_cors_hosts: ['picsum.photos'],
  tinydrive_token_provider: (success, failure) => {
    success({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb2huZG9lIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Ks_BdfH4CWilyzLNk8S2gDARFhuxIauLa8PwhdEQhEo' });
  },
  tinydrive_demo_files_url: '{{imagesdir}}/tiny-drive-demo/demo_files.json',
  toolbar: 'insertfile | undo redo | blocks | bold italic | bullist numlist | ' +
    'image link media | backcolor | ' +
    'alignleft aligncenter alignright alignjustify | outdent indent | ' +
    'removeformat | help',
  menu: {
    insert: { title: 'Insert', items: 'insertfile image link media' }
  },
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});
