var button = document.querySelector('.tinydrive-standalone-demo-pick');
var input = document.querySelector('.tinydrive-standalone-demo-input');

button.addEventListener('click', function () {
  var controls = tinydrive.pick({
    token_provider: '/your-local/jwt-provider'
  }, function(result) {
    input.value = result[0].url;

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
