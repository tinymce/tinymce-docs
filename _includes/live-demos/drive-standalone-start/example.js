(function () {
  tinydrive.start({
    target: 'div#drive-standalone-start',
    token_provider: '/your-server-endpoint/jwt-provider'
  });
})();