(function () {
  var button = document.querySelector('.tinydrive-standalone-demo-start');

  button.addEventListener('click', function () {
    tinydrive.start({
      demo_files_url: '{{ site.baseurl }}/demo/tiny-drive-demo/demo_files.json',
      token_provider: function (success) { success({ token: 'fake-token' }); },
    });
  }, false);
})();
