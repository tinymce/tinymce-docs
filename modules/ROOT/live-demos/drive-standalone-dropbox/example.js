(function () {
  // Configure the Tiny Drive Start API
  tinydrive.start({
    token_provider: '/your-local/jwt-provider',
    dropbox_app_key: '<your dropbox app key>',
    target: 'div#drive-standalone-start'
  });
})();
