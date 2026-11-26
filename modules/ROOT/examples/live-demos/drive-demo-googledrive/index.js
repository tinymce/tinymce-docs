tinymce.init({
  selector: 'textarea#drive-demo',
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
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  api_key: 'fake-key',
  editimage_cors_hosts: ['picsum.photos'],
  tinydrive_token_provider: (success, failure) => {
    success({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb2huZG9lIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Ks_BdfH4CWilyzLNk8S2gDARFhuxIauLa8PwhdEQhEo' });
  },
  tinydrive_demo_files_url: '{{imagesdir}}/tiny-drive-demo/demo_files.json',
  tinydrive_google_drive_key: 'AIzaSyAsVRuCBc-BLQ1xNKtnLHB3AeoK-xmOrTc',
  tinydrive_google_drive_client_id: '748627179519-p9vv3va1mppc66fikai92b3ru73mpukf.apps.googleusercontent.com'
});
