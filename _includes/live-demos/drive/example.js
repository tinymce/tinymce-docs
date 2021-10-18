tinymce.init({
  selector: 'textarea#drive',
  plugins: 'image media link tinydrive code imagetools lists',
  height: 600,
  tinydrive_token_provider: 'URL_TO_YOUR_TOKEN_PROVIDER',
  toolbar: 'insertfile image link | code',
  menu: {
    insert: { title: 'Insert', items: 'image link media insertfile' },
  }
});