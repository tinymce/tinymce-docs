(function () {
  tinydrive.start({
    google_drive_key: '<your google api key>',
    google_drive_client_id: '<your google drive OAuth client ID>',
    token_provider: '/your-local/jwt-provider',
    target: 'div#drive-standalone-googledrive'
  });
})();