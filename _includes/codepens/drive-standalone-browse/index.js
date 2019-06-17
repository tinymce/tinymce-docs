(function () {
  var button = document.querySelector('.tinydrive-standalone-demo-browse');

  button.addEventListener('click', function () {
    tinydrive.browse({
      demo_files_url: '{{ site.baseurl }}/demo/tiny-drive-demo/demo_files.json',
      token_provider: function (success) { success({ token: 'fake-token' }); },
    }).then(function () {
      console.log('Dialog closed');
    });
  }, false);
})();
