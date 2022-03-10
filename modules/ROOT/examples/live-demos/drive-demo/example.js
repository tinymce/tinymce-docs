tinymce.init({
  selector: 'textarea#drive-demo',
  plugins: 'image media link tinydrive code imagetools',
  height: 600,
  toolbar: 'insertfile image link | code',
  tinydrive_token_provider: 'URL_TO_YOUR_TOKEN_PROVIDER',
  tinydrive_dropbox_app_key: 'YOUR_DROPBOX_APP_KEY',
  tinydrive_google_drive_key: 'YOUR_GOOGLE_DRIVE_KEY',
  tinydrive_google_drive_client_id: 'YOUR_GOOGLE_DRIVE_CLIENT_ID'
});