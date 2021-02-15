(function () {
  var button = document.querySelector('.tinydrive-standalone-demo-browse');

  button.addEventListener('click', function () {
    var controls = tinydrive.browse({
      demo_files_url: '{{ site.baseurl }}/demo/tiny-drive-demo/demo_files.json',
      token_provider: function (success) { success({ token: 'fake-token' }); },
    }, function() {
      setTimeout(function() {
        controls.close();
      }, 0)
    }, function(error) {
      console.error(error);
  
      setTimeout(function() {
        controls.close();
      }, 0)
    });
  }, false);
})();
