var button = document.querySelector('.tinydrive-standalone-demo-browse');

button.addEventListener('click', function () {
  var controls = tinydrive.browse({
    token_provider: '/your-local/jwt-provider'
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
