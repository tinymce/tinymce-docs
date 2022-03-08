tinymce.init({
  selector: 'textarea#drive-demo',
  plugins: 'image media link tinydrive code imagetools',
  api_key: 'fake-key',
  height: 600,
  imagetools_cors_hosts: ['picsum.photos'],
  tinydrive_google_drive_key: 'AIzaSyAsVRuCBc-BLQ1xNKtnLHB3AeoK-xmOrTc',
  tinydrive_google_drive_client_id: '748627179519-p9vv3va1mppc66fikai92b3ru73mpukf.apps.googleusercontent.com',
  tinydrive_token_provider: function (success, failure) {
    success({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb2huZG9lIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Ks_BdfH4CWilyzLNk8S2gDARFhuxIauLa8PwhdEQhEo' });
  },
  tinydrive_demo_files_url: '{{baseurl}}/images/tiny-drive-demo/demo_files.json',
  toolbar: 'insertfile image link | code',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});