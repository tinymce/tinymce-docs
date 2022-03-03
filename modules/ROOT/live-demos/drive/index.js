tinymce.init({
  selector: 'textarea#drive',
  plugins: 'image media link tinydrive code editimage lists',
  api_key: 'fake-key',
  height: 600,
  editimage_cors_hosts: ['picsum.photos'],
  tinydrive_token_provider: function (success, failure) {
    success({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb2huZG9lIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Ks_BdfH4CWilyzLNk8S2gDARFhuxIauLa8PwhdEQhEo' });
  },
  tinydrive_demo_files_url: '{{ site.baseurl }}/images/tiny-drive-demo/demo_files.json',
  toolbar: 'insertfile image link | code',
  menu: {
    insert: { title: 'Insert', items: 'image link media insertfile' },
  },
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});