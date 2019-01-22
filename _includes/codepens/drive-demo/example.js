tinymce.init({
  selector: 'textarea#drive-demo',
  plugins: 'image media link tinydrive code imagetools',
  api_key: 'YOUR_API_KEY',
  height: 600,
  tinydrive_token_provider: 'URL_TO_YOUR_TOKEN_PROVIDER',
  toolbar: 'insertfile image link | code'
});